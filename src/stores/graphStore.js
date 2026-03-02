/**
 * Graph Store — Pinia store for the node graph state.
 * Handles nodes, edges, params, save/load, and render control.
 */

import { defineStore } from 'pinia'
import { ref, reactive, computed } from 'vue'
import { getNodeDef, getAllNodeDefs, NODE_CATEGORIES } from '../engine/nodeRegistry.js'
import { isConnectionValid, HandleTypes } from '../engine/typeSystem.js'

let nodeIdCounter = 0

function generateNodeId() {
    return `node_${++nodeIdCounter}_${Date.now().toString(36)}`
}

export const useGraphStore = defineStore('graph', () => {
    // ---- State ----
    const nodes = ref([])
    const edges = ref([])
    const nodeParams = reactive({})     // { nodeId: { paramKey: value } }
    const selectedNodeId = ref(null)
    const isRendering = ref(true)
    const previewMode = ref('panel')    // 'panel' or 'background'
    const previewNodeId = ref(null)     // which node to preview (null = last output)
    const projectTitle = ref('Untitled Project')

    // Data outputs from evaluator — set by App.vue each frame
    const dataOutputs = ref({})

    // Per-node execution timing (ms) — set by App.vue each frame
    const perfTimings = ref({})

    // Callback for GPU cleanup when nodes are removed
    let onNodeRemovedCallback = null

    // Exposed parameters: { nodeId: { paramKey: true } }
    const exposedParams = reactive({})

    // ---- Computed ----
    const selectedNode = computed(() => {
        if (!selectedNodeId.value) return null
        return nodes.value.find(n => n.id === selectedNodeId.value) || null
    })

    const selectedNodeDef = computed(() => {
        if (!selectedNode.value) return null
        return getNodeDef(selectedNode.value.type)
    })

    const selectedNodeParams = computed(() => {
        if (!selectedNodeId.value) return {}
        return nodeParams[selectedNodeId.value] || {}
    })

    // ---- Actions ----

    /**
     * Register a callback for GPU resource cleanup on node removal.
     * Called by App.vue with pipeline.removeNode.
     */
    function onNodeRemoved(callback) {
        onNodeRemovedCallback = callback
    }

    /**
     * Add a node to the graph.
     */
    function addNode(type, position = { x: 200, y: 200 }) {
        const def = getNodeDef(type)
        if (!def) {
            console.warn(`Unknown node type: ${type}`)
            return null
        }

        const id = generateNodeId()

        // Initialize params with defaults
        const params = {}
        for (const [key, paramDef] of Object.entries(def.params)) {
            params[key] = paramDef.default
        }
        nodeParams[id] = params

        const node = {
            id,
            type,
            position,
            data: {
                label: def.label,
                category: def.category,
                def,
            },
        }

        nodes.value = [...nodes.value, node]
        return id
    }

    /**
     * Remove a node and its connections. Calls GPU cleanup.
     */
    function removeNode(nodeId) {
        // Call GPU cleanup BEFORE removing from state
        if (onNodeRemovedCallback) {
            onNodeRemovedCallback(nodeId)
        }

        nodes.value = nodes.value.filter(n => n.id !== nodeId)
        edges.value = edges.value.filter(e => e.source !== nodeId && e.target !== nodeId)
        delete nodeParams[nodeId]
        delete exposedParams[nodeId]
        if (selectedNodeId.value === nodeId) {
            selectedNodeId.value = null
        }
        if (previewNodeId.value === nodeId) {
            previewNodeId.value = null
        }
    }

    /**
     * Add an edge with type validation.
     */
    function addEdge(connection) {
        // Find source and target handle types
        const sourceNode = nodes.value.find(n => n.id === connection.source)
        const targetNode = nodes.value.find(n => n.id === connection.target)
        if (!sourceNode || !targetNode) return false

        const sourceDef = getNodeDef(sourceNode.type)
        const targetDef = getNodeDef(targetNode.type)
        if (!sourceDef || !targetDef) return false

        const sourceHandle = sourceDef.outputs.find(h => h.id === connection.sourceHandle)

        // Check if this target handle is a dynamically exposed param
        let targetHandle = targetDef.inputs.find(h => h.id === connection.targetHandle)
        if (!targetHandle) {
            // Check exposed params
            const exposed = exposedParams[targetNode.id]
            if (exposed && exposed[connection.targetHandle]) {
                const paramDef = targetDef.params[connection.targetHandle]
                if (paramDef) {
                    const htype = paramDef.type === 'int' ? HandleTypes.INT
                        : paramDef.type === 'float' ? HandleTypes.FLOAT
                            : HandleTypes.FLOAT
                    targetHandle = { id: connection.targetHandle, type: htype }
                }
            }
        }

        if (!sourceHandle || !targetHandle) return false

        // Type check
        if (!isConnectionValid(sourceHandle.type, targetHandle.type)) {
            console.warn(`Type mismatch: ${sourceHandle.type} → ${targetHandle.type}`)
            return false
        }

        // Remove existing connection to this target handle (only one input per handle)
        edges.value = edges.value.filter(
            e => !(e.target === connection.target && e.targetHandle === connection.targetHandle)
        )

        const edge = {
            id: `e_${connection.source}_${connection.sourceHandle}-${connection.target}_${connection.targetHandle}`,
            source: connection.source,
            sourceHandle: connection.sourceHandle,
            target: connection.target,
            targetHandle: connection.targetHandle,
        }

        edges.value = [...edges.value, edge]
        return true
    }

    /**
     * Remove an edge.
     */
    function removeEdge(edgeId) {
        edges.value = edges.value.filter(e => e.id !== edgeId)
    }

    /**
     * Update a node parameter.
     */
    function setParam(nodeId, key, value) {
        if (!nodeParams[nodeId]) nodeParams[nodeId] = {}
        nodeParams[nodeId][key] = value
    }

    /**
     * Toggle a parameter to be "exposed" as an input handle on the node.
     */
    function toggleExposeParam(nodeId, paramKey) {
        if (!exposedParams[nodeId]) exposedParams[nodeId] = {}
        exposedParams[nodeId][paramKey] = !exposedParams[nodeId][paramKey]

        // If un-exposing, remove any edges connected to this param handle
        if (!exposedParams[nodeId][paramKey]) {
            edges.value = edges.value.filter(
                e => !(e.target === nodeId && e.targetHandle === paramKey)
            )
        }
    }

    /**
     * Check if a parameter is exposed as input.
     */
    function isParamExposed(nodeId, paramKey) {
        return !!exposedParams[nodeId]?.[paramKey]
    }

    /**
     * Get the exposed param handles for a node (for rendering extra handles).
     */
    function getExposedHandles(nodeId) {
        const node = nodes.value.find(n => n.id === nodeId)
        if (!node) return []
        const def = getNodeDef(node.type)
        if (!def) return []

        const exposed = exposedParams[nodeId] || {}
        return Object.entries(exposed)
            .filter(([key, val]) => val)
            .map(([key]) => {
                const paramDef = def.params[key]
                if (!paramDef) return null
                const htype = paramDef.type === 'int' ? HandleTypes.INT
                    : paramDef.type === 'float' ? HandleTypes.FLOAT
                        : HandleTypes.FLOAT
                return { id: key, label: paramDef.label, type: htype }
            })
            .filter(Boolean)
    }

    /**
     * Select a node.
     */
    function selectNode(nodeId) {
        selectedNodeId.value = nodeId
    }

    /**
     * Toggle rendering on/off.
     */
    function toggleRendering() {
        isRendering.value = !isRendering.value
    }

    function stopRendering() {
        isRendering.value = false
    }

    function startRendering() {
        isRendering.value = true
    }

    /**
     * Toggle preview mode (panel vs background).
     */
    function togglePreviewMode() {
        previewMode.value = previewMode.value === 'panel' ? 'background' : 'panel'
    }

    /**
     * Reset graph — clear everything.
     */
    function resetGraph() {
        // Clean up GPU resources for all nodes
        for (const node of nodes.value) {
            if (onNodeRemovedCallback) {
                onNodeRemovedCallback(node.id)
            }
        }
        nodes.value = []
        edges.value = []
        Object.keys(nodeParams).forEach(k => delete nodeParams[k])
        Object.keys(exposedParams).forEach(k => delete exposedParams[k])
        selectedNodeId.value = null
        previewNodeId.value = null
        nodeIdCounter = 0
    }

    /**
     * Save graph to JSON.
     */
    function saveGraph() {
        const data = {
            version: 1,
            title: projectTitle.value,
            timestamp: Date.now(),
            nodes: nodes.value.map(n => ({
                id: n.id,
                type: n.type,
                position: n.position,
            })),
            edges: edges.value.map(e => ({
                id: e.id,
                source: e.source,
                sourceHandle: e.sourceHandle,
                target: e.target,
                targetHandle: e.targetHandle,
            })),
            params: { ...nodeParams },
            exposedParams: { ...exposedParams },
            settings: {
                previewMode: previewMode.value,
            },
        }
        return JSON.stringify(data, null, 2)
    }

    /**
     * Save to localStorage.
     */
    function saveToLocalStorage() {
        const json = saveGraph()
        const key = `image-mangler-graph-${projectTitle.value || 'default'}`
        localStorage.setItem(key, json)
        return true
    }

    /**
     * Load graph from JSON string.
     */
    function loadGraph(jsonStr) {
        try {
            const data = JSON.parse(jsonStr)
            if (data.version !== 1) {
                console.warn('Unknown graph version:', data.version)
            }

            resetGraph()

            // Restore title
            projectTitle.value = data.title || 'Untitled Project'

            // Restore nodes
            for (const n of data.nodes) {
                const def = getNodeDef(n.type)
                if (!def) {
                    console.warn(`Skipping unknown node type: ${n.type}`)
                    continue
                }
                const node = {
                    id: n.id,
                    type: n.type,
                    position: n.position,
                    data: {
                        label: def.label,
                        category: def.category,
                        def,
                    },
                }
                nodes.value.push(node)

                // Restore params (merge with defaults)
                const params = {}
                for (const [key, paramDef] of Object.entries(def.params)) {
                    params[key] = data.params?.[n.id]?.[key] ?? paramDef.default
                }
                nodeParams[n.id] = params
            }

            // Restore exposed params
            if (data.exposedParams) {
                for (const [nodeId, params] of Object.entries(data.exposedParams)) {
                    exposedParams[nodeId] = { ...params }
                }
            }

            // Restore edges
            for (const e of data.edges) {
                edges.value.push(e)
            }

            // Restore settings
            if (data.settings) {
                previewMode.value = data.settings.previewMode || 'panel'
            }

            // Update nodeIdCounter
            const maxId = data.nodes.reduce((max, n) => {
                const match = n.id.match(/node_(\d+)_/)
                return match ? Math.max(max, parseInt(match[1])) : max
            }, 0)
            nodeIdCounter = maxId

            return true
        } catch (err) {
            console.error('Failed to load graph:', err)
            return false
        }
    }

    /**
     * Save to localStorage.
     */
    function saveToLocalStorage() {
        const json = saveGraph()
        const key = `mangleditor-graph-${projectTitle.value || 'default'}`
        localStorage.setItem(key, json)
        return true
    }

    /**
     * Load from localStorage. If no save exists, load the Starter Template.
     */
    async function loadFromLocalStorage(title = null) {
        try {
            const key = title ? `mangleditor-graph-${title}` : `mangleditor-graph-${projectTitle.value || 'default'}`
            const json = localStorage.getItem(key)
            if (json) {
                return loadGraph(json)
            }

            // Fallback: If we're looking for the default and it's not found, load the StarterTemplate.json
            if (!title) {
                console.log('No local save found. Loading StarterTemplate by default...')
                try {
                    const response = await fetch(`${import.meta.env.BASE_URL}StarterTemplate.json`)
                    if (response.ok) {
                        const templateJson = await response.text()
                        return loadGraph(templateJson)
                    }
                } catch (err) {
                    console.error('Failed to auto-load StarterTemplate:', err)
                }
            }
            return false
        } catch (e) {
            console.error('Failed to load from localStorage:', e)
            return false
        }
    }

    /**
     * Export graph as downloadable JSON file.
     */
    function downloadGraph() {
        const json = saveGraph()
        const blob = new Blob([json], { type: 'application/json' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        const safeName = (projectTitle.value || 'mangleditor').replace(/[^a-zA-Z0-9_-]/g, '_')
        a.download = `${safeName}.json`
        a.click()
        URL.revokeObjectURL(url)
    }

    /**
     * Trigger button node.
     */
    function triggerButton(nodeId) {
        const node = nodes.value.find(n => n.id === nodeId)
        if (node && node.type === 'button') {
            node._triggered = true
        }
    }

    return {
        // State
        nodes,
        edges,
        nodeParams,
        selectedNodeId,
        isRendering,
        previewMode,
        previewNodeId,
        projectTitle,
        exposedParams,

        // Computed
        selectedNode,
        selectedNodeDef,
        selectedNodeParams,

        // Data outputs (set by App.vue each frame)
        dataOutputs,
        perfTimings,
        getDataOutput(nodeId, handleId) {
            return dataOutputs.value[nodeId]?.[handleId]
        },

        // Actions
        addNode,
        removeNode,
        addEdge,
        removeEdge,
        setParam,
        selectNode,
        toggleRendering,
        stopRendering,
        startRendering,
        togglePreviewMode,
        resetGraph,
        saveGraph,
        saveToLocalStorage,
        loadGraph,
        loadFromLocalStorage,
        downloadGraph,
        triggerButton,
        onNodeRemoved,
        toggleExposeParam,
        isParamExposed,
        getExposedHandles,
    }
})
