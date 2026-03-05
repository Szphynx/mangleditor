<template>
  <div class="editor-canvas" @drop.prevent="onDrop" @dragover.prevent>
    <VueFlow
      :nodes="store.nodes"
      :edges="store.edges"
      :default-viewport="{ zoom: 1, x: 0, y: 0 }"
      :min-zoom="0.2"
      :max-zoom="3"
      fit-view-on-init
      @nodes-change="onNodesChange"
      @edges-change="onEdgesChange"
      @connect="onConnect"
      @node-click="onNodeClick"
      @pane-click="onPaneClick"
      @edge-click="onEdgeClick"
    >
      <template #node-imageInput="nodeProps">
        <FlowNode
          :node-id="nodeProps.id"
          :node-type="nodeProps.type"
          :def="nodeProps.data.def"
          :params="store.nodeParams[nodeProps.id] || {}"
          :selected="store.selectedNodeId === nodeProps.id"
          @select="store.selectNode(nodeProps.id)"
          @image-loaded="(data) => $emit('imageLoaded', nodeProps.id, data)"
        />
      </template>

      <template #node-uiImageSlot="nodeProps">
        <FlowNode
          :node-id="nodeProps.id"
          :node-type="nodeProps.type"
          :def="nodeProps.data.def"
          :params="store.nodeParams[nodeProps.id] || {}"
          :selected="store.selectedNodeId === nodeProps.id"
          @select="store.selectNode(nodeProps.id)"
          @image-loaded="(data) => $emit('imageLoaded', nodeProps.id, data)"
        />
      </template>

      <template #node-webcamInput="nodeProps">
        <FlowNode
          :node-id="nodeProps.id"
          :node-type="nodeProps.type"
          :def="nodeProps.data.def"
          :params="store.nodeParams[nodeProps.id] || {}"
          :selected="store.selectedNodeId === nodeProps.id"
          @select="store.selectNode(nodeProps.id)"
          @image-loaded="(data) => $emit('imageLoaded', nodeProps.id, data)"
          @param-change="(key, val) => store.setParam(nodeProps.id, key, val)"
        />
      </template>

      <template #node-imageOutput="nodeProps">
        <FlowNode
          :node-type="nodeProps.type"
          :def="nodeProps.data.def"
          :params="store.nodeParams[nodeProps.id] || {}"
          :selected="store.selectedNodeId === nodeProps.id"
          @select="store.selectNode(nodeProps.id)"
          @export="$emit('exportImage', nodeProps.id)"
        />
      </template>

      <template #node-button="nodeProps">
        <FlowNode
          :node-type="nodeProps.type"
          :def="nodeProps.data.def"
          :params="store.nodeParams[nodeProps.id] || {}"
          :selected="store.selectedNodeId === nodeProps.id"
          @select="store.selectNode(nodeProps.id)"
          @trigger="store.triggerButton(nodeProps.id)"
        />
      </template>

      <template #node-bang="nodeProps">
        <FlowNode
          :node-id="nodeProps.id"
          :node-type="nodeProps.type"
          :def="nodeProps.data.def"
          :params="store.nodeParams[nodeProps.id] || {}"
          :selected="store.selectedNodeId === nodeProps.id"
          @select="store.selectNode(nodeProps.id)"
          @trigger="store.triggerButton(nodeProps.id)"
          @param-change="(key, val) => store.setParam(nodeProps.id, key, val)"
        />
      </template>

      <template #node-slider="nodeProps">
        <FlowNode
          :node-id="nodeProps.id"
          :node-type="nodeProps.type"
          :def="nodeProps.data.def"
          :params="store.nodeParams[nodeProps.id] || {}"
          :selected="store.selectedNodeId === nodeProps.id"
          @select="store.selectNode(nodeProps.id)"
          @param-change="(key, val) => store.setParam(nodeProps.id, key, val)"
        />
      </template>

      <!-- Default template for all other node types -->
      <template
        v-for="nodeType in otherNodeTypes"
        :key="nodeType"
        #[`node-${nodeType}`]="nodeProps"
      >
        <FlowNode
          :node-id="nodeProps.id"
          :node-type="nodeProps.type"
          :def="nodeProps.data.def"
          :params="store.nodeParams[nodeProps.id] || {}"
          :selected="store.selectedNodeId === nodeProps.id"
          :exposed-handles="store.getExposedHandles(nodeProps.id)"
          :output-values="store.dataOutputs[nodeProps.id] || {}"
          :monitor-value="nodeProps.type === 'numberMonitor' ? store.getDataOutput(nodeProps.id, 'out') : null"
          :perf-ms="store.perfTimings[nodeProps.id] ?? null"
          @select="store.selectNode(nodeProps.id)"
          @param-change="(key, val) => store.setParam(nodeProps.id, key, val)"
        />
      </template>

      <div class="editor-controls">
        <button @click="zoomIn({ duration: 300 })" title="Zoom In (+)">+</button>
        <button @click="zoomOut({ duration: 300 })" title="Zoom Out (-)">−</button>
        <button @click="zoomTo100" title="Zoom to 100% (1:1)">1:1</button>
        <button @click="fitAll" title="Fit View to All">[ ]</button>
      </div>

      <MiniMap pannable zoomable position="bottom-right" />
    </VueFlow>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { useVueFlow, VueFlow } from '@vue-flow/core'
import { MiniMap } from '@vue-flow/minimap'
import '@vue-flow/minimap/dist/style.css'
import FlowNode from './FlowNode.vue'
import { useGraphStore } from '../stores/graphStore.js'
import { getAllNodeDefs } from '../engine/nodeRegistry.js'

const store = useGraphStore()
const emit = defineEmits(['imageLoaded', 'exportImage'])

const { viewport, dimensions, project, zoomIn, zoomOut, setViewport, fitView } = useVueFlow()

function zoomTo100() {
  const { x, y } = viewport.value
  setViewport({ x, y, zoom: 1 }, { duration: 600 })
}

function fitAll() {
  fitView({ padding: 0.1, duration: 600 })
}

function handleKeyDown(e) {
  // Ignore if typing in an input field
  if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return

  const ctrl = e.ctrlKey || e.metaKey  // Support Mac Cmd key too

  // Undo (Ctrl+Z)
  if (ctrl && (e.key === 'z' || e.key === 'Z') && !e.shiftKey) {
    e.preventDefault()
    store.undo()
    return
  }
  // Redo (Ctrl+Y or Ctrl+Shift+Z)
  if (ctrl && (e.key === 'y' || e.key === 'Y' || ((e.key === 'z' || e.key === 'Z') && e.shiftKey))) {
    e.preventDefault()
    store.redo()
    return
  }
  // Copy (Ctrl+C)
  if (ctrl && (e.key === 'c' || e.key === 'C')) {
    e.preventDefault()
    store.copySelected()
    return
  }
  // Paste (Ctrl+V)
  if (ctrl && (e.key === 'v' || e.key === 'V')) {
    e.preventDefault()
    store.pasteClipboard()
    return
  }

  // Fit to selection or all (F key)
  if (e.key === 'f' || e.key === 'F') {
    if (store.selectedNodeId) {
      fitView({ nodes: [store.selectedNodeId], padding: 0.2, duration: 600 })
    } else {
      fitView({ padding: 0.1, duration: 600 })
    }
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})

function addNodeAtCenter(type) {
  const { x, y, zoom } = viewport.value
  const { width, height } = dimensions.value
  
  // Default to 400x400 if dimensions are 0 (e.g. before mount)
  const w = width || 800
  const h = height || 600
  
  const graphX = (w / 2 - x) / zoom
  const graphY = (h / 2 - y) / zoom
  
  store.addNode(type, { 
    x: graphX + (Math.random() - 0.5) * 60, 
    y: graphY + (Math.random() - 0.5) * 60 
  })
}

defineExpose({ addNodeAtCenter })

// List of all node types that don't have special templates
const specialTypes = ['imageInput', 'uiImageSlot', 'webcamInput', 'imageOutput', 'button', 'slider']
const otherNodeTypes = computed(() => {
  return Object.keys(getAllNodeDefs()).filter(t => !specialTypes.includes(t))
})

function onNodesChange(changes) {
  for (const change of changes) {
    if (change.type === 'position' && change.position) {
      const node = store.nodes.find(n => n.id === change.id)
      if (node) {
        node.position = change.position
      }
    } else if (change.type === 'remove') {
      store.removeNode(change.id)
    }
  }
}

function onEdgesChange(changes) {
  for (const change of changes) {
    if (change.type === 'remove') {
      store.removeEdge(change.id)
    }
  }
}

function onConnect(connection) {
  store.addEdge(connection)
}

function onNodeClick({ node }) {
  store.selectNode(node.id)
}

function onPaneClick() {
  store.selectNode(null)
}

function onEdgeClick({ edge }) {
  // Select the edge (optional: could show edge info)
}

function onDrop(event) {
  const nodeType = event.dataTransfer.getData('application/node-type')
  if (!nodeType) return

  // Get the drop position relative to the canvas
  const bounds = event.currentTarget.getBoundingClientRect()
  const { x, y, zoom } = viewport.value
  const projectedX = (event.clientX - bounds.left - x) / zoom
  const projectedY = (event.clientY - bounds.top - y) / zoom

    store.addNode(nodeType, { x: projectedX, y: projectedY })
}
</script>

<style scoped>
.editor-canvas {
  width: 100%;
  height: 100%;
  position: relative;
}
.editor-controls {
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  padding: 5px;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
}
.editor-controls button {
  width: 32px;
  height: 32px;
  background: var(--bg-panel);
  border: 1px solid var(--border-color);
  color: var(--text-color);
  cursor: pointer;
  border-radius: 4px;
  font-weight: bold;
  font-family: inherit;
  transition: background 0.2s, border-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.editor-controls button:hover {
  background: var(--border-color);
}
</style>
