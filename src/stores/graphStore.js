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
    const previewMode = ref('anchored')    // Preview Mode (anchored, floating, background)
    const previewNodeId = ref(null)     // which node to preview (null = last output)
    const projectTitle = ref('Untitled Project')
    const bgOpacity = ref(0.0)          // Opacity of the background preview
    const showShadows = ref(true)       // Toggle for flow-node and edge dropshadows

    // ---- Performance Mode State ----
    const isPerformanceMode = ref(false)
    const isPerfEditMode = ref(false)    // Lock/Unlock within performance mode
    // perfGridCells: [{ id, controlType, boundNodeId, boundParamKey, gridOrder }]
    const perfGridCells = ref([])
    let perfCellIdCounter = 0

    // Data outputs from evaluator — set by App.vue each frame
    const dataOutputs = ref({})

    // Per-node execution timing (ms) — set by App.vue each frame
    const perfTimings = ref({})

    // Preview images map -> nodeId: ImageData
    const previewImages = ref({})

    // Callback for GPU cleanup when nodes are removed
    let onNodeRemovedCallback = null

    // Exposed parameters: { nodeId: { paramKey: true } }
    const exposedParams = reactive({})

    // ---- Undo / Redo Stack ----
    const MAX_HISTORY = 50
    const undoStack = ref([])  // Array of snapshot objects
    const redoStack = ref([])  // Array of snapshot objects

    // ---- Clipboard ----
    const clipboard = ref(null)  // { type, params, exposedParams } of copied node(s)

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

    const canUndo = computed(() => undoStack.value.length > 0)
    const canRedo = computed(() => redoStack.value.length > 0)

    // ---- Actions ----

    /**
     * Register a callback for GPU resource cleanup on node removal.
     * Called by App.vue with pipeline.removeNode.
     */
    function onNodeRemoved(callback) {
        onNodeRemovedCallback = callback
    }

    /**
     * Take a snapshot of the current graph state and push it onto the undo stack.
     * Called before every destructive operation (addNode, removeNode, addEdge, removeEdge).
     */
    function recordSnapshot() {
        const snapshot = {
            nodes: JSON.parse(JSON.stringify(nodes.value)),
            edges: JSON.parse(JSON.stringify(edges.value)),
            nodeParams: JSON.parse(JSON.stringify(nodeParams)),
            exposedParams: JSON.parse(JSON.stringify(exposedParams)),
        }
        undoStack.value = [...undoStack.value.slice(-MAX_HISTORY + 1), snapshot]
        redoStack.value = []  // Any new action clears the redo stack
    }

    /**
     * Apply a snapshot — restores nodes, edges, params, and exposedParams.
     */
    function applySnapshot(snapshot) {
        nodes.value = snapshot.nodes
        edges.value = snapshot.edges
        // Reset nodeParams reactive map
        Object.keys(nodeParams).forEach(k => delete nodeParams[k])
        Object.assign(nodeParams, snapshot.nodeParams)
        // Reset exposedParams
        Object.keys(exposedParams).forEach(k => delete exposedParams[k])
        Object.assign(exposedParams, snapshot.exposedParams)
    }

    function undo() {
        if (undoStack.value.length === 0) return
        // Push current state to redo stack
        const current = {
            nodes: JSON.parse(JSON.stringify(nodes.value)),
            edges: JSON.parse(JSON.stringify(edges.value)),
            nodeParams: JSON.parse(JSON.stringify(nodeParams)),
            exposedParams: JSON.parse(JSON.stringify(exposedParams)),
        }
        redoStack.value = [...redoStack.value, current]
        // Pop last snapshot and apply it
        const prev = undoStack.value[undoStack.value.length - 1]
        undoStack.value = undoStack.value.slice(0, -1)
        applySnapshot(prev)
        selectedNodeId.value = null
    }

    function redo() {
        if (redoStack.value.length === 0) return
        // Push current state to undo stack
        const current = {
            nodes: JSON.parse(JSON.stringify(nodes.value)),
            edges: JSON.parse(JSON.stringify(edges.value)),
            nodeParams: JSON.parse(JSON.stringify(nodeParams)),
            exposedParams: JSON.parse(JSON.stringify(exposedParams)),
        }
        undoStack.value = [...undoStack.value, current]
        // Pop top redo snapshot and apply it
        const next = redoStack.value[redoStack.value.length - 1]
        redoStack.value = redoStack.value.slice(0, -1)
        applySnapshot(next)
        selectedNodeId.value = null
    }

    /**
     * Copy the selected node to the clipboard.
     */
    function copySelected() {
        if (!selectedNodeId.value) return
        const node = nodes.value.find(n => n.id === selectedNodeId.value)
        if (!node) return
        clipboard.value = {
            type: node.type,
            position: { ...node.position },
            params: JSON.parse(JSON.stringify(nodeParams[node.id] || {})),
            exposedParams: JSON.parse(JSON.stringify(exposedParams[node.id] || {})),
        }
    }

    /**
     * Paste the clipboard node with a slight position offset.
     */
    function pasteClipboard() {
        if (!clipboard.value) return
        const { type, position, params: copiedParams, exposedParams: copiedExposed } = clipboard.value
        // Offset so the pasted node doesn't sit exactly on top of the original
        const newPos = { x: position.x + 40, y: position.y + 40 }
        recordSnapshot()
        const newId = addNode(type, newPos, true)  // skipSnapshot — we already recorded above
        if (!newId) return
        // Override params with the copied values
        Object.assign(nodeParams[newId], copiedParams)
        // Restore exposed params
        if (Object.keys(copiedExposed).length) {
            exposedParams[newId] = { ...copiedExposed }
        }
        // Update clipboard position so repeated paste shifts further
        clipboard.value = { ...clipboard.value, position: newPos }
        selectNode(newId)
    }

    /**
     * Add a node to the graph.
     * @param {boolean} [skipSnapshot] - Internal flag to skip snapshot (used by pasteClipboard)
     */
    function addNode(type, position = { x: 200, y: 200 }, skipSnapshot = false) {
        const def = getNodeDef(type)
        if (!def) {
            console.warn(`Unknown node type: ${type}`)
            return null
        }

        if (!skipSnapshot) recordSnapshot()

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
        recordSnapshot()
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

        let sourceHandle = sourceDef.outputs.find(h => h.id === connection.sourceHandle)

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

        // Get dynamic source handle type (for Sliders whose outputType can change)
        if (sourceDef && sourceHandle) {
            const dynamicOutputs = getNodeOutputs(connection.source)
            const dynamicHandle = dynamicOutputs.find(o => o.id === connection.sourceHandle)
            if (dynamicHandle) {
                sourceHandle = dynamicHandle
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

        const isModulation = sourceHandle.type !== HandleTypes.IMAGE && sourceHandle.type !== HandleTypes.UV_MAP

        const edge = {
            id: `e_${connection.source}_${connection.sourceHandle}-${connection.target}_${connection.targetHandle}`,
            source: connection.source,
            sourceHandle: connection.sourceHandle,
            target: connection.target,
            targetHandle: connection.targetHandle,
            animated: isModulation, // Native dash flow
        }

        edges.value = [...edges.value, edge]
        // Record snapshot AFTER the edge is successfully added
        recordSnapshot()
        return true
    }

    /**
     * Remove an edge.
     */
    function removeEdge(edgeId) {
        recordSnapshot()
        edges.value = edges.value.filter(e => e.id !== edgeId)
    }

    /**
     * Update a node parameter.
     */
    function setParam(nodeId, key, value) {
        if (!nodeParams[nodeId]) nodeParams[nodeId] = {}
        const prevValue = nodeParams[nodeId][key]
        nodeParams[nodeId][key] = value

        // If a Slider changes outputType, validate existing outgoing cables
        if (key === 'outputType') {
            const node = nodes.value.find(n => n.id === nodeId)
            if (node && node.type === 'slider' && prevValue !== value) {
                const dynamicOutputs = getNodeOutputs(nodeId)
                const newOutType = dynamicOutputs.find(o => o.id === 'out')?.type

                let edgesRemoved = false
                edges.value = edges.value.filter(e => {
                    if (e.source !== nodeId) return true // Keep other edges

                    const targetNode = nodes.value.find(n => n.id === e.target)
                    const targetDef = targetNode ? getNodeDef(targetNode.type) : null
                    let targetType = targetDef?.inputs?.find(i => i.id === e.targetHandle)?.type

                    if (!targetType && exposedParams[e.target]?.[e.targetHandle]) {
                        const pDef = targetDef?.params?.[e.targetHandle]
                        targetType = pDef?.type === 'int' ? HandleTypes.INT : HandleTypes.FLOAT
                    }

                    if (targetType && !isConnectionValid(newOutType, targetType)) {
                        console.warn(`Disconnecting edge from ${nodeId} to ${e.target} due to type mismatch.`)
                        edgesRemoved = true
                        return false // Drop edge
                    }
                    return true
                })

                if (edgesRemoved) {
                    window.alert("One or more cables were disconnected because the data type changed and they are no longer compatible.")
                }
            }
        }
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
     * Get dynamically typed outputs for a given node
     */
    function getNodeOutputs(nodeId) {
        const node = nodes.value.find(n => n.id === nodeId)
        if (!node) return []
        const def = getNodeDef(node.type)
        if (!def || !def.outputs) return []

        // Create a shallow copy of outputs so we can modify handle types safely
        const dynamicOutputs = def.outputs.map(o => ({ ...o }))

        if (node.type === 'slider') {
            const outType = nodeParams[nodeId]?.outputType || 'float'
            const outHandle = dynamicOutputs.find(o => o.id === 'out')
            if (outHandle) {
                outHandle.type = outType === 'int' ? HandleTypes.INT : HandleTypes.FLOAT
            }
        }
        return dynamicOutputs
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
        if (previewMode.value === 'anchored') {
            previewMode.value = 'floating'
        } else if (previewMode.value === 'floating') {
            previewMode.value = 'background'
        } else {
            previewMode.value = 'anchored'
        }
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
            perfGridCells: perfGridCells.value.map(c => ({ ...c })),
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
                // Retroactively add styling if missing from older saves
                if (!e.style || !e.animated) {
                    const sourceNode = nodes.value.find(n => n.id === e.source)
                    if (sourceNode) {
                        const sourceDef = getNodeDef(sourceNode.type)
                        let sourceHandle = sourceDef?.outputs?.find(h => h.id === e.sourceHandle)
                        // handle dynamic outputs (like slider)
                        if (!sourceHandle && sourceDef) {
                            const dynamicOutputs = getNodeOutputs(e.source)
                            sourceHandle = dynamicOutputs.find(o => o.id === e.sourceHandle)
                        }
                        if (sourceHandle) {
                            const isModulation = sourceHandle.type !== HandleTypes.IMAGE && sourceHandle.type !== HandleTypes.UV_MAP
                            if (isModulation) {
                                // Let animated handle the CSS natively
                                e.animated = true
                            }
                        }
                    }
                }
                edges.value.push(e)
            }

            // Restore perfGridCells
            if (data.perfGridCells) {
                perfGridCells.value = data.perfGridCells.map(c => ({ ...c }))
                // Update counter
                const maxPerfId = data.perfGridCells.reduce((max, c) => {
                    const match = c.id.match(/perf_(\d+)_/)
                    return match ? Math.max(max, parseInt(match[1])) : max
                }, 0)
                perfCellIdCounter = maxPerfId
            } else {
                perfGridCells.value = []
                perfCellIdCounter = 0
            }

            // Restore settings
            if (data.settings) {
                // Ignore saved view modes; force anchored view internally
                previewMode.value = 'anchored'
            }

            // Update nodeIdCounter
            const maxId = data.nodes.reduce((max, n) => {
                const match = n.id.match(/node_(\d+)_/)
                return match ? Math.max(max, parseInt(match[1])) : max
            }, 0)
            nodeIdCounter = maxId
            if (nodes.length > 0) {
                // Ensure nodes are fully loaded
                selectedNodeId.value = null
            }

            // Signal to mobile ControlDrawer to re-evaluate autoPopulate
            window.dispatchEvent(new Event('graph-loaded'))

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
        if (node && (node.type === 'button' || node.type === 'bang')) {
            node._triggered = true
        }
    }

    // ---- Performance Mode Actions ----
    function togglePerformanceMode() {
        isPerformanceMode.value = !isPerformanceMode.value
        if (!isPerformanceMode.value) isPerfEditMode.value = false
    }

    function togglePerfEditMode() {
        isPerfEditMode.value = !isPerfEditMode.value
    }

    function addPerfCell(controlType) {
        const id = `perf_${++perfCellIdCounter}_${Date.now().toString(36)}`
        perfGridCells.value = [...perfGridCells.value, {
            id,
            controlType,
            boundNodeId: null,       // The source node (e.g., LFO node, or knob node)
            boundParamKey: null,     // For controls: param on boundNodeId. For anim: target param key.
            boundTargetNodeId: null, // For anim cells: target node to write output to
            // XY Pad dual-axis:
            boundParamKeyY: null,
            boundTargetNodeIdY: null,
            nickname: '',            // User-assigned nickname
            gridOrder: perfGridCells.value.length,
        }]
        return id
    }

    function removePerfCell(cellId) {
        const cell = perfGridCells.value.find(c => c.id === cellId)
        if (cell) {
            // Cascade delete: if this is an animation/device node spawned from perf mode, also remove from graph
            const ANIM_TYPES = ['lfo', 'timer', 'damper', 'fft', 'accelerometer', 'xypad']
            if (ANIM_TYPES.includes(cell.controlType) && cell.boundNodeId) {
                removeNode(cell.boundNodeId)
            }
        }
        perfGridCells.value = perfGridCells.value.filter(c => c.id !== cellId)
    }

    /**
     * Check if a specific parameter on a node already has an incoming connection (edge)
     */
    function isParamConnected(nodeId, paramKey) {
        return edges.value.some(e => e.target === nodeId && e.targetHandle === paramKey)
    }

    function bindPerfCell(cellId, nodeId, paramKey) {
        if (isParamConnected(nodeId, paramKey)) {
            console.warn(`Cannot bind perf cell to ${nodeId}.${paramKey} because it is already modulated by a node connection.`)
            return
        }
        const cell = perfGridCells.value.find(c => c.id === cellId)
        if (cell) {
            cell.boundNodeId = nodeId
            cell.boundParamKey = paramKey
        }
    }

    /** Bind an animation cell's output to a target param */
    function bindPerfCellTarget(cellId, targetNodeId, targetParamKey) {
        const cell = perfGridCells.value.find(c => c.id === cellId)
        if (cell) {
            cell.boundTargetNodeId = targetNodeId
            cell.boundParamKey = targetParamKey
        }
    }

    /** Bind XY Pad Y axis to a target param */
    function bindPerfCellTargetY(cellId, targetNodeId, targetParamKey) {
        const cell = perfGridCells.value.find(c => c.id === cellId)
        if (cell) {
            cell.boundTargetNodeIdY = targetNodeId
            cell.boundParamKeyY = targetParamKey
        }
    }

    /** Set nickname for a perf cell */
    function setPerfCellNickname(cellId, nickname) {
        const cell = perfGridCells.value.find(c => c.id === cellId)
        if (cell) cell.nickname = nickname
    }

    function reorderPerfCells(fromIdx, toIdx) {
        const cells = [...perfGridCells.value]
        const [moved] = cells.splice(fromIdx, 1)
        cells.splice(toIdx, 0, moved)
        perfGridCells.value = cells
    }

    /**
     * Get all exposed params that are NOT already bound to a perf cell.
     */
    function getUnboundExposedParams() {
        // Collect ALL bound param keys — from standard controls AND animation targets
        const bound = new Set()
        for (const c of perfGridCells.value) {
            // Standard controls
            if (c.boundNodeId && c.boundParamKey && !c.boundTargetNodeId) {
                bound.add(`${c.boundNodeId}::${c.boundParamKey}`)
            }
            // Animation/device targets
            if (c.boundTargetNodeId && c.boundParamKey) {
                bound.add(`${c.boundTargetNodeId}::${c.boundParamKey}`)
            }
            // XY Pad Y-axis target
            if (c.boundTargetNodeIdY && c.boundParamKeyY) {
                bound.add(`${c.boundTargetNodeIdY}::${c.boundParamKeyY}`)
            }
        }
        const result = []
        for (const [nodeId, params] of Object.entries(exposedParams)) {
            for (const [paramKey, isExposed] of Object.entries(params)) {
                if (isExposed && !bound.has(`${nodeId}::${paramKey}`) && !isParamConnected(nodeId, paramKey)) {
                    const node = nodes.value.find(n => n.id === nodeId)
                    const def = node ? getNodeDef(node.type) : null

                    // Exclude passthrough nodes like NumberMonitor from becoming perf controls
                    if (def?.isPassthrough) continue

                    const paramDef = def?.params?.[paramKey]
                    result.push({
                        nodeId,
                        paramKey,
                        nodeLabel: def?.label || node?.type || nodeId,
                        paramLabel: paramDef?.label || paramKey,
                    })
                }
            }
        }
        return result
    }

    /**
     * Get control-type nodes (knob, slider, bang, toggle, button) for performance grid.
     */
    function getControlNodes() {
        const controlTypes = ['knob', 'slider', 'bang', 'button', 'toggle']
        return nodes.value.filter(n => controlTypes.includes(n.type))
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
        previewImages,
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
        getNodeOutputs,

        // Undo / Redo / Clipboard
        undo,
        redo,
        canUndo,
        canRedo,
        copySelected,
        pasteClipboard,
        clipboard,

        // Performance Mode
        isPerformanceMode,
        isPerfEditMode,
        perfGridCells,
        togglePerformanceMode,
        togglePerfEditMode,
        addPerfCell,
        removePerfCell,
        bindPerfCell,
        bindPerfCellTarget,
        bindPerfCellTargetY,
        setPerfCellNickname,
        reorderPerfCells,
        getUnboundExposedParams,
        getControlNodes,

        // Utility
        bgOpacity,
        showShadows,
    }
})
