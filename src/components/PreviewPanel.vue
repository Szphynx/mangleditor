<template>
  <div 
    :class="['preview-panel', `preview-panel--${previewMode}`, { hidden: hidden }]"
    :style="previewMode === 'floating' 
      ? { top: `${posY}px`, left: `${posX}px` } 
      : previewMode === 'anchored' 
        ? { height: `${anchoredHeight}px` } 
        : {}"
  >
    <!-- Resize handle for anchored mode (top edge) -->
    <div 
      v-if="previewMode === 'anchored'" 
      class="preview-panel__resize-handle"
      @pointerdown="onResizePointerDown"
    ></div>

    <!-- Draggable Header -->
    <div 
      v-if="previewMode === 'floating'"
      class="preview-panel__header"
      @pointerdown="onHeaderPointerDown"
    >
      <span class="preview-panel__header-title">Live Preview</span>
    </div>

    <!-- Preview toolbar -->
    <div class="preview-panel__toolbar">
      <span class="preview-panel__badge">{{ width }}×{{ height }}</span>
      <span v-if="fps && isRendering" class="preview-panel__badge" style="color: var(--accent-primary);">{{ fps }} FPS</span>
      <span v-if="!isRendering" class="preview-panel__badge" style="color: var(--accent-danger);">STOPPED</span>
      
      <div style="flex: 1"></div>

      <span class="preview-panel__zoom-level">{{ Math.round(zoom * 100) }}%</span>
      <button class="preview-panel__tool-btn" @click="fitView" title="Fit">⊡</button>
      <button class="preview-panel__tool-btn" @click="resetZoom" title="Reset Zoom">1:1</button>
      <button class="preview-panel__tool-btn" @click="showHistogram = !showHistogram" :class="{ active: showHistogram }" title="Toggle Histogram">📊</button>
    </div>

    <!-- Canvas container with pan/zoom -->
    <div
      class="preview-panel__viewport"
      ref="viewportRef"
      @wheel.prevent="onWheel"
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @pointerup="onPointerUp"
    >
      <div
        class="preview-panel__canvas-wrap"
        :style="{
          transform: `translate(${panX}px, ${panY}px) scale(${zoom})`,
          transformOrigin: '0 0',
        }"
      >
        <canvas ref="canvasRef" class="preview-panel__canvas"></canvas>
      </div>
      <!-- Removed absolute overlay, moved to toolbar -->
    </div>

    <!-- Histogram panel -->
    <div v-if="showHistogram" class="preview-panel__histogram">
      <canvas ref="histCanvas" class="preview-panel__hist-canvas" width="256" height="80"></canvas>
      <div class="preview-panel__info-row">
        <span>Resolution: {{ width }}×{{ height }}</span>
        <span v-if="fps">{{ fps }} FPS</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'

const props = defineProps({
  hidden: { type: Boolean, default: false },
  isRendering: { type: Boolean, default: true },
  pipeline: { type: Object, default: null },
  fps: { type: Number, default: 0 },
  previewMode: { type: String, default: 'anchored' },
})

// Floating window position state
const posX = ref(400) // Default starting layout position
const posY = ref(40)
const isDraggingWindow = ref(false)
const dragOffset = ref({ x: 0, y: 0 })

function onHeaderPointerDown(e) {
  if (e.button !== 0) return // Only left click
  isDraggingWindow.value = true
  dragOffset.value = {
    x: e.clientX - posX.value,
    y: e.clientY - posY.value
  }
  
  // Attach window level listeners so we can drag outside the header
  window.addEventListener('pointermove', onWindowPointerMove)
  window.addEventListener('pointerup', onWindowPointerUp)
}

function onWindowPointerMove(e) {
  if (!isDraggingWindow.value) return
  posX.value = e.clientX - dragOffset.value.x
  posY.value = e.clientY - dragOffset.value.y
}

function onWindowPointerUp() {
  isDraggingWindow.value = false
  window.removeEventListener('pointermove', onWindowPointerMove)
  window.removeEventListener('pointerup', onWindowPointerUp)
}

// Anchored window resize state
const anchoredHeight = ref(300)
const isResizingAnchored = ref(false)

function onResizePointerDown(e) {
  if (e.button !== 0) return
  isResizingAnchored.value = true
  const startY = e.clientY
  const startHeight = anchoredHeight.value

  function onPointerMove(eMove) {
    if (!isResizingAnchored.value) return
    const dy = startY - eMove.clientY
    // dy is positive when dragging UP, which means we want to increase the height
    anchoredHeight.value = Math.max(100, Math.min(window.innerHeight * 0.8, startHeight + dy))
  }

  function onPointerUp() {
    isResizingAnchored.value = false
    window.removeEventListener('pointermove', onPointerMove)
    window.removeEventListener('pointerup', onPointerUp)
  }

  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', onPointerUp)
}

const canvasRef = ref(null)
const histCanvas = ref(null)
const viewportRef = ref(null)
const width = ref(512)
const height = ref(512)
const zoom = ref(1)
const panX = ref(0)
const panY = ref(0)
const isPanning = ref(false)
const lastPointer = ref({ x: 0, y: 0 })
const showHistogram = ref(false)

let histInterval = null

// Expose both the ref AND a direct getter for the DOM element
function getCanvas() {
  return canvasRef.value
}
defineExpose({ canvasRef, width, height, getCanvas })

watch(showHistogram, (val) => {
  if (val) {
    updateHistogram()
    histInterval = setInterval(updateHistogram, 500)
  } else {
    if (histInterval) clearInterval(histInterval)
    histInterval = null
  }
})

onBeforeUnmount(() => {
  if (histInterval) clearInterval(histInterval)
})

function zoomIn() { zoom.value = Math.min(zoom.value * 1.25, 10) }
function zoomOut() { zoom.value = Math.max(zoom.value / 1.25, 0.1) }
function resetZoom() { zoom.value = 1; panX.value = 0; panY.value = 0 }

function fitView() {
  if (!viewportRef.value) return
  const vw = viewportRef.value.clientWidth
  const vh = viewportRef.value.clientHeight
  const scaleX = vw / width.value
  const scaleY = vh / height.value
  zoom.value = Math.min(scaleX, scaleY, 1) * 0.95
  panX.value = (vw - width.value * zoom.value) / 2
  panY.value = (vh - height.value * zoom.value) / 2
}

function onWheel(e) {
  const factor = e.deltaY > 0 ? 0.9 : 1.1
  const newZoom = Math.max(0.1, Math.min(10, zoom.value * factor))

  // Zoom toward cursor
  const rect = viewportRef.value.getBoundingClientRect()
  const mx = e.clientX - rect.left
  const my = e.clientY - rect.top

  panX.value = mx - (mx - panX.value) * (newZoom / zoom.value)
  panY.value = my - (my - panY.value) * (newZoom / zoom.value)
  zoom.value = newZoom
}

function onPointerDown(e) {
  if (e.button === 0 || e.button === 1) {
    isPanning.value = true
    lastPointer.value = { x: e.clientX, y: e.clientY }
    viewportRef.value?.setPointerCapture(e.pointerId)
  }
}

function onPointerMove(e) {
  if (!isPanning.value) return
  const dx = e.clientX - lastPointer.value.x
  const dy = e.clientY - lastPointer.value.y
  panX.value += dx
  panY.value += dy
  lastPointer.value = { x: e.clientX, y: e.clientY }
}

function onPointerUp(e) {
  isPanning.value = false
  viewportRef.value?.releasePointerCapture(e.pointerId)
}

function updateHistogram() {
  if (!showHistogram.value || !histCanvas.value) return

  const canvas = canvasRef.value
  if (!canvas) return

  // Use the existing WebGL context from Three.js — do NOT create a new one
  const gl = canvas.getContext('webgl2', { preserveDrawingBuffer: true })
    || canvas.getContext('webgl', { preserveDrawingBuffer: true })
  if (!gl) return

  const w = canvas.width
  const h = canvas.height
  if (w === 0 || h === 0) return

  const pixels = new Uint8Array(w * h * 4)
  gl.readPixels(0, 0, w, h, gl.RGBA, gl.UNSIGNED_BYTE, pixels)

  // Build histogram buckets
  const rBuckets = new Uint32Array(256)
  const gBuckets = new Uint32Array(256)
  const bBuckets = new Uint32Array(256)

  for (let i = 0; i < pixels.length; i += 4) {
    rBuckets[pixels[i]]++
    gBuckets[pixels[i + 1]]++
    bBuckets[pixels[i + 2]]++
  }

  // Draw histogram
  const hCtx = histCanvas.value.getContext('2d')
  const hw = 256
  const hh = 80

  hCtx.clearRect(0, 0, hw, hh)

  const maxVal = Math.max(
    ...rBuckets.slice(1, 255),
    ...gBuckets.slice(1, 255),
    ...bBuckets.slice(1, 255),
    1
  )

  // Draw channels
  drawChannel(hCtx, rBuckets, maxVal, hw, hh, 'rgba(255,80,80,0.5)')
  drawChannel(hCtx, gBuckets, maxVal, hw, hh, 'rgba(80,255,80,0.5)')
  drawChannel(hCtx, bBuckets, maxVal, hw, hh, 'rgba(80,80,255,0.5)')
}

function drawChannel(ctx, buckets, maxVal, w, h, color) {
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(0, h)
  for (let i = 0; i < 256; i++) {
    const barH = (buckets[i] / maxVal) * (h - 2)
    ctx.lineTo(i, h - barH)
  }
  ctx.lineTo(255, h)
  ctx.closePath()
  ctx.fill()
}
</script>
