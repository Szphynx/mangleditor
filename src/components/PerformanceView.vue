<template>
  <div class="perf-view">
    <!-- Renderer area with pan/zoom -->
    <div
      class="perf-view__renderer"
      ref="viewportRef"
      @wheel.prevent="onWheel"
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @pointerup="onPointerUp"
    >
      <div
        class="perf-view__canvas-wrap"
        :style="{
          transform: `translate(${panX}px, ${panY}px) scale(${zoom})`,
          transformOrigin: '0 0',
        }"
      >
        <canvas ref="perfCanvasRef" class="perf-view__canvas"></canvas>
      </div>
    </div>

    <!-- Stats / toolbar bar -->
    <div class="perf-view__toolbar">
      <span class="perf-view__badge mono">{{ resolution }}</span>
      <span class="perf-view__badge perf-view__fps mono" :class="{ 'perf-view__fps--ok': fps >= 50 }">{{ fps }} FPS</span>

      <div style="flex: 1;"></div>

      <span class="perf-view__zoom-level mono">{{ Math.round(zoom * 100) }}%</span>
      <button class="perf-view__tool-btn" @click="fitView" title="Fit to viewport">⊡</button>
      <button class="perf-view__tool-btn" @click="resetZoom" title="1:1 pixel zoom">1:1</button>
      <button class="perf-view__tool-btn" :class="{ active: showHistogram }" @click="showHistogram = !showHistogram" title="Toggle Histogram">📊</button>
      <div class="perf-view__divider"></div>
      <button class="perf-view__exit-btn" @click="store.togglePerformanceMode()" title="Exit Performance Mode">
        ✕ Editor
      </button>
    </div>

    <!-- Histogram -->
    <div v-if="showHistogram" class="perf-view__histogram">
      <canvas ref="histCanvas" class="perf-view__hist-canvas" width="256" height="60"></canvas>
    </div>

    <!-- Control Drawer -->
    <ControlDrawer />
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue'
import { useGraphStore } from '../stores/graphStore.js'
import ControlDrawer from './ControlDrawer.vue'

const props = defineProps({
  fps: { type: Number, default: 0 },
})

const store = useGraphStore()
const perfCanvasRef = ref(null)
const viewportRef = ref(null)
const histCanvas = ref(null)
const showHistogram = ref(false)

// Pan/Zoom state
const zoom = ref(1)
const panX = ref(0)
const panY = ref(0)
let isPanning = false
let panStartX = 0
let panStartY = 0
let panStartPanX = 0
let panStartPanY = 0

const resolution = computed(() => {
  const canvas = perfCanvasRef.value
  if (!canvas) return '—'
  return `${canvas.width}×${canvas.height}`
})

function onWheel(e) {
  const delta = e.deltaY > 0 ? 0.9 : 1.1
  const newZoom = Math.max(0.1, Math.min(10, zoom.value * delta))
  
  // Zoom toward cursor
  const rect = viewportRef.value?.getBoundingClientRect()
  if (rect) {
    const mx = e.clientX - rect.left
    const my = e.clientY - rect.top
    panX.value = mx - (mx - panX.value) * (newZoom / zoom.value)
    panY.value = my - (my - panY.value) * (newZoom / zoom.value)
  }
  zoom.value = newZoom
}

function onPointerDown(e) {
  if (e.button === 1 || e.button === 0) {
    isPanning = true
    panStartX = e.clientX
    panStartY = e.clientY
    panStartPanX = panX.value
    panStartPanY = panY.value
    e.currentTarget?.setPointerCapture?.(e.pointerId)
  }
}

function onPointerMove(e) {
  if (!isPanning) return
  panX.value = panStartPanX + (e.clientX - panStartX)
  panY.value = panStartPanY + (e.clientY - panStartY)
}

function onPointerUp() {
  isPanning = false
}

function fitView() {
  const vp = viewportRef.value
  const canvas = perfCanvasRef.value
  if (!vp || !canvas || !canvas.width || !canvas.height) return

  const vpW = vp.clientWidth
  const vpH = vp.clientHeight
  const scale = Math.min(vpW / canvas.width, vpH / canvas.height)
  zoom.value = scale
  panX.value = (vpW - canvas.width * scale) / 2
  panY.value = (vpH - canvas.height * scale) / 2
}

function resetZoom() {
  zoom.value = 1
  const vp = viewportRef.value
  const canvas = perfCanvasRef.value
  if (vp && canvas) {
    panX.value = (vp.clientWidth - canvas.width) / 2
    panY.value = (vp.clientHeight - canvas.height) / 2
  }
}

// Histogram drawing
watch(showHistogram, async (show) => {
  if (!show) return
  await nextTick()
  drawHistogram()
})

function drawHistogram() {
  const canvas = perfCanvasRef.value
  const hc = histCanvas.value
  if (!canvas || !hc || !canvas.width) return

  const tmpCanvas = document.createElement('canvas')
  tmpCanvas.width = canvas.width
  tmpCanvas.height = canvas.height
  const tmpCtx = tmpCanvas.getContext('2d')
  tmpCtx.drawImage(canvas, 0, 0)

  const imageData = tmpCtx.getImageData(0, 0, tmpCanvas.width, tmpCanvas.height)
  const data = imageData.data
  const rH = new Array(256).fill(0)
  const gH = new Array(256).fill(0)
  const bH = new Array(256).fill(0)

  for (let i = 0; i < data.length; i += 4) {
    rH[data[i]]++
    gH[data[i + 1]]++
    bH[data[i + 2]]++
  }

  const maxVal = Math.max(...rH, ...gH, ...bH, 1)
  const ctx = hc.getContext('2d')
  const w = hc.width
  const h = hc.height
  ctx.clearRect(0, 0, w, h)

  function drawChannel(hist, color) {
    ctx.strokeStyle = color
    ctx.lineWidth = 1
    ctx.globalAlpha = 0.6
    ctx.beginPath()
    for (let i = 0; i < 256; i++) {
      const x = (i / 255) * w
      const y = h - (hist[i] / maxVal) * h
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.stroke()
  }

  drawChannel(rH, '#ff4757')
  drawChannel(gH, '#2ed573')
  drawChannel(bH, '#1e90ff')
  ctx.globalAlpha = 1
}

// Periodically update histogram
let histInterval = null
watch(showHistogram, (show) => {
  if (show) {
    histInterval = setInterval(drawHistogram, 500)
  } else {
    clearInterval(histInterval)
  }
}, { immediate: true })

defineExpose({ perfCanvasRef })
</script>

<style scoped>
.perf-view {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  background: #000;
}

.perf-view__renderer {
  flex: 1;
  position: relative;
  overflow: hidden;
  background: #000;
  cursor: grab;
  touch-action: none;
}
.perf-view__renderer:active { cursor: grabbing; }

.perf-view__canvas-wrap {
  position: absolute;
  top: 0;
  left: 0;
}

.perf-view__canvas {
  display: block;
  image-rendering: pixelated;
}

.perf-view__toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px;
  background: var(--bg-secondary, #1a1a2e);
  border-top: 1px solid var(--border-color, #2a2a3a);
  flex-shrink: 0;
}

.perf-view__badge {
  font-size: 11px;
  color: var(--text-muted, #888);
}

.perf-view__fps { color: var(--accent-danger, #ff4757); }
.perf-view__fps--ok { color: var(--accent-success, #2ed573); }

.perf-view__zoom-level {
  font-size: 11px;
  color: var(--text-secondary, #aaa);
  min-width: 36px;
  text-align: right;
}

.perf-view__tool-btn {
  background: transparent;
  border: 1px solid var(--border-color, #2a2a3a);
  border-radius: 4px;
  padding: 2px 8px;
  font-size: 11px;
  color: var(--text-primary, #e0e0e0);
  cursor: pointer;
  transition: all 0.15s;
}
.perf-view__tool-btn:hover, .perf-view__tool-btn.active {
  border-color: var(--accent-primary, #00d4ff);
  color: var(--accent-primary, #00d4ff);
}

.perf-view__divider {
  width: 1px;
  height: 16px;
  background: var(--border-color, #2a2a3a);
}

.perf-view__exit-btn {
  background: transparent;
  border: 1px solid var(--border-color, #2a2a3a);
  border-radius: 6px;
  padding: 2px 10px;
  font-size: 11px;
  color: var(--text-primary, #e0e0e0);
  cursor: pointer;
  transition: all 0.15s;
}
.perf-view__exit-btn:hover {
  border-color: var(--accent-primary, #00d4ff);
  color: var(--accent-primary, #00d4ff);
}

.perf-view__histogram {
  padding: 4px 12px 2px;
  background: var(--bg-secondary, #1a1a2e);
  border-top: 1px solid var(--border-color, #2a2a3a);
}

.perf-view__hist-canvas {
  width: 100%;
  height: 60px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.3);
}
</style>
