<template>
  <div id="app">
    <TopBar
      :is-rendering="store.isRendering"
      :preview-mode="store.previewMode"
      :project-title="store.projectTitle"
      :show-grid="store.showGrid"
      :show-shadows="store.showShadows"
      @save="onSave"
      @load="onLoad"
      @download="store.downloadGraph()"
      @import="onImport"
      @reset="onReset"
      @toggle-render="store.toggleRendering()"
      @toggle-preview="store.togglePreviewMode()"
      @toggle-grid="store.showGrid = !store.showGrid"
      @toggle-shadows="store.showShadows = !store.showShadows"
      @update-title="(val) => store.projectTitle = val"
      @update-bg-opacity="(val) => store.bgOpacity = val"
    />

    <div class="main-layout">
      <NodePalette @add-node="onAddNode" />

      <div :class="['editor-area', { 'editor-area--bg-mode': store.previewMode === 'background' }]">
        <!-- Background preview: shows the rendered output behind the editor -->
        <div v-show="store.previewMode === 'background'" class="preview-background">
          <canvas ref="bgCanvasRef"></canvas>
          <div class="preview-background__overlay" :style="{ opacity: store.bgOpacity }"></div>
        </div>

        <EditorCanvas
          ref="editorRef"
          :class="{ 'editor-canvas--no-shadows': !store.showShadows }"
          @image-loaded="onImageLoaded"
          @export-image="onExportImage"
        />

        <PreviewPanel
          v-show="store.previewMode === 'anchored' || store.previewMode === 'floating'"
          ref="previewRef"
          :is-rendering="store.isRendering"
          :fps="fps"
          :preview-mode="store.previewMode"
        />
      </div>

      <ParameterPanel />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import * as THREE from 'three'
import TopBar from './components/TopBar.vue'
import NodePalette from './components/NodePalette.vue'
import EditorCanvas from './components/EditorCanvas.vue'
import PreviewPanel from './components/PreviewPanel.vue'
import ParameterPanel from './components/ParameterPanel.vue'
import { useGraphStore } from './stores/graphStore.js'
import { ShaderPipeline } from './engine/shaderPipeline.js'
import { AnimationLoop } from './engine/animationLoop.js'
import { topologicalSort, evaluateDataNodes, getShaderExecutionOrder, initAudio } from './engine/evaluator.js'

const store = useGraphStore()
const editorRef = ref(null)
const previewRef = ref(null)
const bgCanvasRef = ref(null)

// Initialize audio on first user interact to bypass autoplay
function handleFirstInteract() {
  initAudio()
  window.removeEventListener('click', handleFirstInteract)
  window.removeEventListener('keydown', handleFirstInteract)
}

// Single pipeline — always renders to the panel canvas
let pipeline = null
let animLoop = null
let unsubAnimLoop = null

// FPS counter
const fps = ref(0)
let fpsFrameCount = 0
let fpsLastTime = 0

// Cached image elements for texture reload
const imageCache = {}

// Background 2D context for copying the rendered frame
let bgCtx = null

onMounted(async () => {
  await nextTick()

  // Attach interaction listeners for audio context init
  window.addEventListener('click', handleFirstInteract)
  window.addEventListener('keydown', handleFirstInteract)

  // Always initialize pipeline with the panel canvas
  const panelCanvas = previewRef.value?.getCanvas?.()
  if (panelCanvas) {
    pipeline = new ShaderPipeline()
    pipeline.init(panelCanvas, 512, 512)
  }

  // Setup background canvas 2D context for copying
  if (bgCanvasRef.value) {
    bgCtx = bgCanvasRef.value.getContext('2d')
  }

  // Register GPU cleanup callback
  store.onNodeRemoved((nodeId) => {
    if (pipeline) {
      pipeline.removeNodeResources(nodeId)
    }
    delete imageCache[nodeId]
  })

  // Initialize FPS counter
  fpsLastTime = performance.now()

  // Start animation loop
  animLoop = new AnimationLoop()
  unsubAnimLoop = animLoop.onFrame((time, dt) => {
    if (!store.isRendering) return

    // FPS calculation
    fpsFrameCount++
    const now = performance.now()
    if (now - fpsLastTime >= 500) {
      fps.value = Math.round((fpsFrameCount / (now - fpsLastTime)) * 1000)
      fpsFrameCount = 0
      fpsLastTime = now
    }

    runPipeline(time, dt)
  })
  animLoop.start()

  // Try to auto-load from localStorage
  await store.loadFromLocalStorage()
})

onBeforeUnmount(() => {
  if (unsubAnimLoop) unsubAnimLoop()
  if (animLoop) animLoop.stop()
  if (pipeline) pipeline.dispose()
})

let frameCount = 0

function runPipeline(time, dt) {
  if (!pipeline?.isInitialized) return

  const nodes = store.nodes
  const edges = store.edges
  const params = store.nodeParams

  if (nodes.length === 0) {
    if (bgCtx && bgCanvasRef.value) {
      bgCtx.clearRect(0, 0, bgCanvasRef.value.width, bgCanvasRef.value.height)
    }
    return
  }

  // 1. Topological sort
  const sortedIds = topologicalSort(nodes, edges)

  // 2. Evaluate data nodes (math, animation, trigger)
  const dataOutputs = evaluateDataNodes(sortedIds, nodes, edges, params, time, dt)

  // 3. Store data outputs in store for UI access (number monitor, value tooltips)
  store.dataOutputs = dataOutputs

  // 4. Get shader execution order
  const shaderOrder = getShaderExecutionOrder(sortedIds, nodes)

  // 5. Execute shader pipeline
  const perfTimings = pipeline.execute(shaderOrder, nodes, edges, params, dataOutputs, store.previewNodeId, time)

  // 6. Store perf timings for resource monitor in UI
  store.perfTimings = perfTimings || {}

  // 7. Copy to background canvas if in background mode
  if (store.previewMode === 'background' && bgCtx && bgCanvasRef.value) {
    const panelCanvas = previewRef.value?.getCanvas?.()
    if (panelCanvas && panelCanvas.width > 0 && panelCanvas.height > 0) {
      bgCanvasRef.value.width = panelCanvas.width
      bgCanvasRef.value.height = panelCanvas.height
      bgCtx.drawImage(panelCanvas, 0, 0)
    }
  }

  // 8. Extract pixels for inline preview nodes (throttled to ~15fps to save CPU)
  if (frameCount % 4 === 0) {
    const previewNodes = nodes.filter(n => n.type === 'preview')
    for (const pNode of previewNodes) {
      const edge = edges.find(e => e.target === pNode.id && e.targetHandle === 'in')
      if (edge) {
        // Fetch a scaled down version of the source FBO for the UI
        const sourceData = pipeline.getScaledPixels(edge.source, 176, 100)
        if (sourceData) {
          store.previewImages[pNode.id] = sourceData
        }
      }
    }
  }
  frameCount++
}

function onAddNode(type) {
  if (editorRef.value && editorRef.value.addNodeAtCenter) {
    editorRef.value.addNodeAtCenter(type)
  } else {
    const x = 300 + Math.random() * 200
    const y = 200 + Math.random() * 200
    store.addNode(type, { x, y })
  }
}

function onImageLoaded(nodeId, data) {
  if (!pipeline) return

  // Cache for reload
  imageCache[nodeId] = data

  // Create Three.js texture from the image or video
  let tex;
  if (data.isVideo) {
    tex = new THREE.VideoTexture(data.img)
    tex.minFilter = THREE.LinearFilter
    tex.magFilter = THREE.LinearFilter
    tex.format = THREE.RGBAFormat
  } else {
    tex = new THREE.Texture(data.img)
    tex.needsUpdate = true
  }
  pipeline.setInputTexture(nodeId, tex)

  // Invalidate downstream FBOs to force re-evaluation of shaders with the new texture
  invalidateDownstreamFBOs(nodeId)

  // Resize pipeline to image dimensions
  pipeline.resize(data.width, data.height)

  // Update preview panel dimensions
  if (previewRef.value) {
    previewRef.value.width = data.width
    previewRef.value.height = data.height
  }
}

/**
 * Walk the edge graph starting from `sourceNodeId` and remove cached
 * FBO outputs from all downstream nodes. This forces the pipeline to
 * re-execute those nodes on the next frame.
 */
function invalidateDownstreamFBOs(sourceNodeId) {
  if (!pipeline) return
  const visited = new Set()
  const queue = [sourceNodeId]
  while (queue.length) {
    const current = queue.shift()
    if (visited.has(current)) continue
    visited.add(current)
    for (const edge of store.edges) {
      if (edge.source === current && !visited.has(edge.target)) {
        if (pipeline.fbos[edge.target]) {
          pipeline.fbos[edge.target].dispose()
          delete pipeline.fbos[edge.target]
        }
        if (pipeline.materials[edge.target]) {
          pipeline.materials[edge.target].dispose()
          delete pipeline.materials[edge.target]
        }
        queue.push(edge.target)
      }
    }
  }
}

function onExportImage(nodeId) {
  if (!pipeline) return

  const allEdges = store.edges.filter(e => e.target === nodeId)
  let sourceNodeId = null
  for (const e of allEdges) {
    if (e.targetHandle === 'in') {
      sourceNodeId = e.source
      break
    }
  }

  if (!sourceNodeId) {
    alert('No image connected to output node')
    return
  }

  const result = pipeline.readPixels(sourceNodeId)
  if (!result) {
    alert('Could not read pixels — make sure an image is connected and the pipeline has run')
    return
  }

  const { pixels, width, height } = result
  const params = store.nodeParams[nodeId] || {}
  const filename = params.filename || store.projectTitle || 'output'

  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  const imageData = ctx.createImageData(width, height)

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const srcIdx = ((height - 1 - y) * width + x) * 4
      const dstIdx = (y * width + x) * 4
      imageData.data[dstIdx] = pixels[srcIdx]
      imageData.data[dstIdx + 1] = pixels[srcIdx + 1]
      imageData.data[dstIdx + 2] = pixels[srcIdx + 2]
      imageData.data[dstIdx + 3] = pixels[srcIdx + 3]
    }
  }
  ctx.putImageData(imageData, 0, 0)

  const safeName = (filename).replace(/[^a-zA-Z0-9_-]/g, '_')
  canvas.toBlob((blob) => {
    if (!blob) return
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${safeName}.png`
    a.click()
    URL.revokeObjectURL(url)
  }, 'image/png')
}

function onSave() {
  store.saveToLocalStorage()
}

async function onLoad() {
  const success = await store.loadFromLocalStorage()
  if (!success) {
    alert('No saved graph found')
  }
}

function onImport(jsonStr) {
  const success = store.loadGraph(jsonStr)
  if (!success) {
    alert('Failed to import graph — invalid JSON')
  }
}

function onReset() {
  if (confirm('Clear entire graph? This cannot be undone.')) {
    store.resetGraph()
    Object.keys(imageCache).forEach(k => delete imageCache[k])
  }
}
</script>
