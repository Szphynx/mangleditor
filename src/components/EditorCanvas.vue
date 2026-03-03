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

      <template #node-slider="nodeProps">
        <FlowNode
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
          :monitor-value="nodeProps.type === 'numberMonitor' ? store.getDataOutput(nodeProps.id, 'out') : null"
          :perf-ms="store.perfTimings[nodeProps.id] ?? null"
          @select="store.selectNode(nodeProps.id)"
          @param-change="(key, val) => store.setParam(nodeProps.id, key, val)"
        />
      </template>

      <Background :variant="BackgroundVariant.Dots" :gap="16" :size="2" pattern-color="#333" />
      <Controls position="top-right" />
      <MiniMap pannable zoomable position="bottom-right" />
    </VueFlow>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useVueFlow, VueFlow } from '@vue-flow/core'
import { Background, BackgroundVariant } from '@vue-flow/background'
import { Controls } from '@vue-flow/controls'
import { MiniMap } from '@vue-flow/minimap'
import '@vue-flow/controls/dist/style.css'
import '@vue-flow/minimap/dist/style.css'
import FlowNode from './FlowNode.vue'
import { useGraphStore } from '../stores/graphStore.js'
import { getAllNodeDefs } from '../engine/nodeRegistry.js'

const store = useGraphStore()
const emit = defineEmits(['imageLoaded', 'exportImage'])

const { viewport, dimensions, project } = useVueFlow()

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
