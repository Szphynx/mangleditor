<template>
  <div
    :class="[
      'flow-node',
      { 'flow-node--selected': selected },
      { 'flow-node--compact': def.compact },
      { 'flow-node--bypassed': params._bypass },
      { 'flow-node--collapsed': params._collapsed },
      { 'flow-node--resizable': !params._collapsed && ['preview', 'knob', 'imageInput', 'webcamInput'].includes(nodeType) && params._resizable }
    ]"
    @click="$emit('select')"
    @dblclick.stop="$emit('paramChange', '_collapsed', !params._collapsed)"
  >
    <NodeResizer
      v-if="['preview', 'knob', 'imageInput', 'webcamInput'].includes(nodeType) && params._resizable"
      :min-width="60"
      :min-height="60"
      :max-width="540"
      :max-height="540"
      :keep-aspect-ratio="true"
      :is-visible="selected"
      class="nodrag"
    />
    <!-- Header -->
    <div class="flow-node__header" :title="collapsedTooltip">
      <!-- In Badge -->
      <span v-if="params._collapsed && connectedInputs.length > 0" class="flow-node__collapsed-badge flow-node__collapsed-badge--in">
        [{{ connectedInputs.length }}]
      </span>

      <div
        class="flow-node__category-dot"
        :style="{ background: categoryColor }"
      ></div>
      <div class="flow-node__title">{{ def.label }}</div>
      
      <!-- Out Badge (shows on right side) -->
      <span v-if="params._collapsed && connectedOutputs.length > 0" class="flow-node__collapsed-badge flow-node__collapsed-badge--out">
        [{{ connectedOutputs.length }}]
      </span>
      <!-- Randomize button -->
      <button
        v-if="hasRandomizableParams"
        class="flow-node__bypass-btn"
        style="margin-right: 4px;"
        @click.stop="randomizeParams"
        title="Randomize Parameters"
      >
        🎲
      </button>
      <!-- Collapse toggle -->
      <button
        class="flow-node__bypass-btn"
        :class="{ 'flow-node__bypass-btn--active': params._collapsed }"
        style="margin-right: 4px;"
        @click.stop="$emit('paramChange', '_collapsed', !params._collapsed)"
        :title="params._collapsed ? 'Expand Node' : 'Collapse Node'"
      >
        {{ params._collapsed ? '▼' : '▬' }}
      </button>
      <!-- Resize toggle -->
      <button
        v-if="!params._collapsed && ['preview', 'knob', 'imageInput', 'webcamInput'].includes(nodeType)"
        class="flow-node__bypass-btn"
        :class="{ 'flow-node__bypass-btn--active': params._resizable }"
        style="margin-right: 4px;"
        @click.stop="$emit('paramChange', '_resizable', !params._resizable)"
        :title="params._resizable ? 'Disable Resizing' : 'Enable Resizing'"
      >
        ⤢
      </button>
      <!-- Bypass button -->
      <button
        v-if="def.shaderKey || def.category === 'image' || def.category === 'uv'"
        class="flow-node__bypass-btn"
        :class="{ 'flow-node__bypass-btn--active': params._bypass }"
        @click.stop="$emit('paramChange', '_bypass', !params._bypass)"
        :title="params._bypass ? 'Enable (bypassed)' : 'Bypass'"
      >
        {{ params._bypass ? '⊘' : '⏵' }}
      </button>
      <!-- Perf badge -->
      <span v-if="perfMs !== null" class="flow-node__perf-badge" :title="perfMs + 'ms'">
        {{ perfMs < 1 ? '<1' : perfMs.toFixed(1) }}ms
      </span>
    </div>

    <!-- Input Handles -->
    <div class="flow-node__body">
      <div class="flow-node__handles">
        <div
          v-for="input in def.inputs"
          :key="'in-' + input.id"
          class="flow-node__handle-row flow-node__handle-row--input"
        >
          <Handle
            type="target"
            :id="input.id"
            :position="Position.Left"
            :style="{ background: getTypeColor(input.type) }"
          />
          <span class="flow-node__handle-label">{{ input.label }}</span>
          <span class="flow-node__handle-type">{{ input.type }}</span>
          <!-- Value tooltip on hover for connected data inputs -->
          <span
            v-if="inputValues[input.id] !== undefined"
            class="flow-node__handle-value"
            :title="'Value: ' + inputValues[input.id]"
          >
            {{ formatInlineValue(inputValues[input.id]) }}
          </span>
        </div>

        <!-- Exposed parameter handles (dynamically added) -->
        <div
          v-for="handle in exposedHandles"
          :key="'exp-' + handle.id"
          class="flow-node__handle-row flow-node__handle-row--input flow-node__handle-row--exposed"
        >
          <Handle
            type="target"
            :id="handle.id"
            :position="Position.Left"
            :style="{ background: getTypeColor(handle.type) }"
          />
          <span class="flow-node__handle-label flow-node__handle-label--exposed">⊕ {{ handle.label }}</span>
          <span class="flow-node__handle-type">{{ handle.type }}</span>
        </div>
      </div>

      <!-- Special content per node type -->
      <template v-if="!params._collapsed">
        <!-- Image Input / UI Image Slot -->
      <div v-if="nodeType === 'imageInput' || nodeType === 'uiImageSlot'" class="flow-node__controls" @pointerdown.stop @mousedown.stop>
        <input ref="fileInput" type="file" accept="image/*" class="file-input-hidden" @change="onFileSelect" />
        <div
          v-if="!hasImage"
          class="flow-node__drop-zone"
          @click.stop="openFileDialog"
          @dragover.prevent="isDragging = true"
          @dragleave="isDragging = false"
          @drop.prevent="onDrop"
          :class="{ 'flow-node__drop-zone--active': isDragging }"
        >
          📷 Drop image or click to browse
        </div>
        <div v-else class="flow-node__image-preview-container">
          <button class="flow-node__inline-btn flow-node__inline-btn--sm" @click.stop="openFileDialog" style="margin-bottom: 4px; width: 100%;">
            📷 Replace Image
          </button>
          <img v-if="nodeType === 'imageInput'" :src="imagePreviewUrl" class="flow-node__image-preview" />
          <div v-else class="flow-node__slot-label" style="text-align: center; color: var(--accent-success); padding: 8px 0; font-size: 11px;">
            Image Loaded ✓
          </div>
        </div>
      </div>

      <!-- Webcam Input -->
      <div v-if="nodeType === 'webcamInput'" class="flow-node__controls" @pointerdown.stop @mousedown.stop>
        <button v-if="!isWebcamActive" class="flow-node__inline-btn flow-node__inline-btn--sm" @click.stop="$emit('paramChange', 'enable', true)" style="width: 100%;">
          🎥 Start Webcam
        </button>
        <div v-else class="flow-node__image-preview-container">
          <button class="flow-node__inline-btn flow-node__inline-btn--sm" @click.stop="$emit('paramChange', 'enable', false)" style="margin-bottom: 4px; width: 100%; background: var(--bg-red-dim); border-color: var(--accent-danger);">
            Stop Webcam
          </button>
          <video ref="webcamVideo" class="flow-node__image-preview" autoplay playsinline muted></video>
        </div>
      </div>

      <!-- Image Output -->
      <div v-if="nodeType === 'imageOutput'" class="flow-node__controls" @pointerdown.stop @mousedown.stop>
        <button class="flow-node__inline-btn" @click.stop="$emit('export')">
          ⬇ Export {{ params.format || 'PNG' }}
        </button>
      </div>

      <!-- Button / Bang node -->
      <div v-if="nodeType === 'button' || nodeType === 'bang'" class="flow-node__controls" @pointerdown.stop @mousedown.stop>
        <button class="flow-node__inline-btn" @click.stop="$emit('trigger')">
          {{ params.label || 'Bang!' }}
        </button>
      </div>

      <!-- Slider node -->
      <div v-if="nodeType === 'slider'" class="flow-node__slider-container" @pointerdown.stop @mousedown.stop>
        <input
          type="range"
          class="flow-node__inline-slider"
          :min="params.min ?? 0"
          :max="params.max ?? 1"
          :step="params.step ?? 0.01"
          :value="params.value ?? 0.5"
          @input.stop="$emit('paramChange', 'value', Number($event.target.value))"
          @pointerdown.stop
          @mousedown.stop
        />
        <div class="flow-node__slider-value">
          {{ (params.value ?? 0.5).toFixed(3) }}
        </div>
      </div>

      <!-- Knob node -->
      <div v-if="nodeType === 'knob'" class="flow-node__knob-container" @pointerdown.stop @mousedown.stop>
        <KnobControl
          :modelValue="params.value ?? (def.params.value ? def.params.value.default : 0.5)"
          :min="params.min ?? (def.params.min ? def.params.min.default : 0)"
          :max="params.max ?? (def.params.max ? def.params.max.default : 1)"
          :step="params.step ?? (def.params.step ? def.params.step.default : 0.01)"
          :size="null"
          @update:modelValue="$emit('paramChange', 'value', $event)"
        />
      </div>

      <!-- LFO inline params preview -->
      <div v-if="nodeType === 'lfo'" class="flow-node__inline-params" @pointerdown.stop @mousedown.stop>
        <canvas ref="lfoCanvasRef" class="flow-node__lfo-graph" width="176" height="40"></canvas>
        <div class="flow-node__inline-param-row">
          <span class="flow-node__inline-param-label">wave</span>
          <select
            class="flow-node__inline-select"
            :value="params.waveform ?? 'sine'"
            @change.stop="$emit('paramChange', 'waveform', $event.target.value)"
            @pointerdown.stop @mousedown.stop
          >
            <option v-for="opt in ['sine', 'saw', 'square', 'triangle']" :key="opt" :value="opt">{{ opt }}</option>
          </select>
        </div>
        <div class="flow-node__inline-param-row">
          <span class="flow-node__inline-param-label">freq</span>
          <input
            type="range"
            class="flow-node__inline-slider-sm"
            min="0.01" max="20" step="0.01"
            :value="params.frequency ?? 1"
            @input.stop="$emit('paramChange', 'frequency', Number($event.target.value))"
            @pointerdown.stop @mousedown.stop
          />
          <span class="flow-node__inline-param-val">{{ (params.frequency ?? 1).toFixed(2) }}</span>
        </div>
        <div class="flow-node__inline-param-row">
          <span class="flow-node__inline-param-label">amp</span>
          <input
            type="range"
            class="flow-node__inline-slider-sm"
            min="0" max="10" step="0.01"
            :value="params.amplitude ?? 1"
            @input.stop="$emit('paramChange', 'amplitude', Number($event.target.value))"
            @pointerdown.stop @mousedown.stop
          />
          <span class="flow-node__inline-param-val">{{ (params.amplitude ?? 1).toFixed(2) }}</span>
        </div>
      </div>

      <!-- XY Pad inline controller -->
      <div v-if="nodeType === 'xyPad'" class="flow-node__xypad-wrapper" @pointerdown.stop @mousedown.stop>
        <div
          class="flow-node__xypad"
          ref="xyPadNodeRef"
          @pointerdown="onNodeXYDown"
        >
          <div class="flow-node__xypad-crosshair" :style="nodeXYCrosshairStyle"></div>
        </div>
        <div class="flow-node__xypad-readout">
          <span class="flow-node__inline-param-val">X: {{ (params.x ?? 0.5).toFixed(2) }}</span>
          <span class="flow-node__inline-param-val">Y: {{ (params.y ?? 0.5).toFixed(2) }}</span>
        </div>
      </div>

      <!-- FFT Node visualizer -->
      <div v-if="nodeType === 'fft'" class="flow-node__fft-container" @pointerdown.stop @mousedown.stop>
        <div class="flow-node__fft-bar flow-node__fft-bar--bass" :style="{ height: Math.max(2, (outputValues['bass'] || 0) * 40) + 'px' }"></div>
        <div class="flow-node__fft-bar flow-node__fft-bar--low-mid" :style="{ height: Math.max(2, (outputValues['lowMid'] || 0) * 40) + 'px' }"></div>
        <div class="flow-node__fft-bar flow-node__fft-bar--mid" :style="{ height: Math.max(2, (outputValues['mid'] || 0) * 40) + 'px' }"></div>
        <div class="flow-node__fft-bar flow-node__fft-bar--high" :style="{ height: Math.max(2, (outputValues['high'] || 0) * 40) + 'px' }"></div>
      </div>

      <!-- Number Monitor node -->
      <div v-if="nodeType === 'numberMonitor'" class="flow-node__monitor">
        <div class="flow-node__monitor-value" :title="'Value: ' + (monitorValue ?? 0)">
          {{ monitorValue !== null && monitorValue !== undefined ? monitorValue.toFixed(params.decimals ?? 3) : '—' }}
        </div>
        <canvas
          v-if="params.showGraph !== false"
          ref="monitorCanvas"
          class="flow-node__monitor-graph"
          width="176"
          height="40"
        ></canvas>
      </div>

      <!-- Preview node (inline image preview) -->
      <div v-if="nodeType === 'preview'" class="flow-node__preview-inline">
        <canvas
          ref="previewCanvas"
          class="flow-node__preview-canvas"
          width="176"
          height="100"
        ></canvas>
        <div class="flow-node__preview-label">Preview Node</div>
      </div>
      </template>

      <!-- Output Handles -->
      <div class="flow-node__handles">
        <div
          v-for="output in dynamicOutputs"
          :key="'out-' + output.id"
          class="flow-node__handle-row flow-node__handle-row--output"
        >
          <span class="flow-node__handle-type">{{ output.type }}</span>
          <span class="flow-node__handle-label">{{ output.label }}</span>
          <!-- Value tooltip for outputs too -->
          <span
            v-if="outputValues[output.id] !== undefined"
            class="flow-node__handle-value"
            :title="'Value: ' + outputValues[output.id]"
          >
            {{ formatInlineValue(outputValues[output.id]) }}
          </span>
          <Handle
            type="source"
            :id="output.id"
            :position="Position.Right"
            :style="{ background: getTypeColor(output.type) }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { Handle, Position } from '@vue-flow/core'
import { NodeResizer } from '@vue-flow/node-resizer'
import { getTypeColor } from '../engine/typeSystem.js'
import { NODE_CATEGORIES } from '../engine/nodeRegistry.js'
import { useGraphStore } from '../stores/graphStore.js'
import KnobControl from './KnobControl.vue'

const props = defineProps({
  nodeId: { type: String, required: true },
  nodeType: { type: String, required: true },
  def: { type: Object, required: true },
  params: { type: Object, default: () => ({}) },
  selected: { type: Boolean, default: false },
  inputValues: { type: Object, default: () => ({}) },
  outputValues: { type: Object, default: () => ({}) },
  monitorValue: { type: Number, default: null },
  exposedHandles: { type: Array, default: () => [] },
  perfMs: { type: Number, default: null },
})

const emit = defineEmits(['select', 'imageLoaded', 'export', 'trigger', 'paramChange'])

const store = useGraphStore()

const connectedInputs = computed(() => {
  const edgesToMe = store.edges.filter(e => e.target === props.nodeId)
  return [...new Set(edgesToMe.map(e => e.targetHandle))]
})

const connectedOutputs = computed(() => {
  const edgesFromMe = store.edges.filter(e => e.source === props.nodeId)
  return [...new Set(edgesFromMe.map(e => e.sourceHandle))]
})

const dynamicOutputs = computed(() => {
  return store.getNodeOutputs(props.nodeId)
})

const collapsedTooltip = computed(() => {
  if (!props.params._collapsed) return ''
  let text = 'INPUTS\n'
  if (connectedInputs.value.length === 0) text += '  (none)\n'
  else {
    for (const handleId of connectedInputs.value) {
      const inputDef = props.def.inputs.find(i => i.id === handleId)
      const label = inputDef ? inputDef.label : handleId
      const val = props.inputValues[handleId]
      text += `• ${label}: ${val !== undefined ? formatInlineValue(val) : '—'}\n`
    }
  }
  
  text += '\nOUTPUTS\n'
  if (connectedOutputs.value.length === 0) text += '  (none)\n'
  else {
    for (const outId of connectedOutputs.value) {
      const outDef = props.def.outputs.find(o => o.id === outId)
      const label = outDef ? outDef.label : outId
      const val = props.outputValues[outId]
      text += `• ${label}: ${val !== undefined ? formatInlineValue(val) : '—'}\n`
    }
  }
  return text
})

const categoryColor = computed(() => {
  return NODE_CATEGORIES[props.def.category]?.color || '#888'
})

const hasRandomizableParams = computed(() => {
  if (!props.def.params) return false
  return Object.values(props.def.params).some(p => p.type === 'float' || p.type === 'int')
})

function randomizeParams() {
  if (!props.def.params) return
  for (const [key, paramDef] of Object.entries(props.def.params)) {
    if (paramDef.type === 'float' || paramDef.type === 'int') {
      const defaultMin = key === 'value' && props.params.min !== undefined ? props.params.min : (paramDef.min !== undefined ? paramDef.min : 0)
      const defaultMax = key === 'value' && props.params.max !== undefined ? props.params.max : (paramDef.max !== undefined ? paramDef.max : 1)
      
      const min = props.params[`_randMin_${key}`] ?? defaultMin
      const max = props.params[`_randMax_${key}`] ?? defaultMax
      
      let randomVal = min + Math.random() * (max - min)
      if (paramDef.type === 'int') {
        randomVal = Math.floor(randomVal)
      } else if (paramDef.step) {
         randomVal = Math.round(randomVal / paramDef.step) * paramDef.step
      }
      emit('paramChange', key, randomVal)
    }
  }
}

// Image Input state
const fileInput = ref(null)
const isDragging = ref(false)
const imagePreviewUrl = ref(null)
const hasImage = computed(() => !!imagePreviewUrl.value)

onMounted(() => {
  // Try to load default image if none provided yet
  if ((props.nodeType === 'imageInput' || props.nodeType === 'uiImageSlot') && !imagePreviewUrl.value) {
    const defaultImgPath = '/default_img.jpg'
    imagePreviewUrl.value = defaultImgPath
    
    // We need to trigger the engine to load this texture
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.src = defaultImgPath
    img.onload = () => {
      emit('imageLoaded', { url: defaultImgPath, width: img.naturalWidth, height: img.naturalHeight, img })
    }
  }
})

// Monitor graph state
const monitorCanvas = ref(null)
const graphHistory = ref([])
const MAX_GRAPH_POINTS = 100

// Preview canvas ref and rendering
const previewCanvas = ref(null)

watch(() => store.previewImages[props.nodeId], (imgData) => {
  if (props.nodeType !== 'preview' || !imgData || !previewCanvas.value) return
  
  const canvas = previewCanvas.value
  const ctx = canvas.getContext('2d')
  
  if (canvas.width !== imgData.width || canvas.height !== imgData.height) {
    canvas.width = imgData.width
    canvas.height = imgData.height
  }

  // WebGL pixels are RGBA but flipped vertically. We need to flip them when drawing.
  const tempCanvas = document.createElement('canvas')
  tempCanvas.width = imgData.width
  tempCanvas.height = imgData.height
  const tempCtx = tempCanvas.getContext('2d')

  // Create ImageData
  const imageData = new ImageData(
    new Uint8ClampedArray(imgData.pixels.buffer), 
    imgData.width, 
    imgData.height
  )
  tempCtx.putImageData(imageData, 0, 0)
  
  // Draw to actual canvas flipped
  ctx.save()
  ctx.scale(1, -1)
  ctx.drawImage(tempCanvas, 0, -imgData.height)
  ctx.restore()
})

// Webcam state
const isWebcamActive = ref(false)
const webcamVideo = ref(null)
let webcamStream = null

async function startWebcam() {
  try {
    webcamStream = await navigator.mediaDevices.getUserMedia({ video: { width: 1280, height: 720 }, audio: false })
    isWebcamActive.value = true
    
    // Wait a tick for the video element to mount
    setTimeout(() => {
      if (webcamVideo.value) {
        webcamVideo.value.srcObject = webcamStream
        webcamVideo.value.onloadedmetadata = () => {
          webcamVideo.value.play()
          emit('imageLoaded', { 
            url: 'webcam', 
            width: webcamVideo.value.videoWidth, 
            height: webcamVideo.value.videoHeight, 
            img: webcamVideo.value,
            isVideo: true
          })
        }
      }
    }, 50)
  } catch (err) {
    console.error('Failed to access webcam:', err)
    alert('Could not access webcam. Please check permissions.')
  }
}

function stopWebcam() {
  if (webcamStream) {
    webcamStream.getTracks().forEach(t => t.stop())
    webcamStream = null
  }
  isWebcamActive.value = false
  emit('imageLoaded', { url: 'webcam', width: 1, height: 1, img: null, isVideo: false })
}

// XY Pad inline interaction
const xyPadNodeRef = ref(null)

const nodeXYCrosshairStyle = computed(() => ({
  left: ((props.params.x ?? 0.5) * 100) + '%',
  top: ((1 - (props.params.y ?? 0.5)) * 100) + '%',
}))

let isNodeXYDragging = false

function onNodeXYDown(e) {
  isNodeXYDragging = true
  updateNodeXY(e)
  window.addEventListener('pointermove', onNodeXYMove)
  window.addEventListener('pointerup', onNodeXYUp)
}

function onNodeXYMove(e) {
  if (!isNodeXYDragging) return
  updateNodeXY(e)
}

function onNodeXYUp() {
  isNodeXYDragging = false
  window.removeEventListener('pointermove', onNodeXYMove)
  window.removeEventListener('pointerup', onNodeXYUp)
}

function updateNodeXY(e) {
  const pad = xyPadNodeRef.value
  if (!pad) return
  const rect = pad.getBoundingClientRect()
  const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
  const y = Math.max(0, Math.min(1, 1 - (e.clientY - rect.top) / rect.height))
  emit('paramChange', 'x', x)
  emit('paramChange', 'y', y)
}

// LFO waveform graph
const lfoCanvasRef = ref(null)
const lfoHistory = []
const LFO_MAX_HISTORY = 60
let lfoGraphInterval = null

if (props.nodeType === 'lfo') {
  onMounted(() => {
    lfoGraphInterval = setInterval(() => {
      const val = props.outputValues?.out ?? 0
      lfoHistory.push(val)
      if (lfoHistory.length > LFO_MAX_HISTORY) lfoHistory.shift()
      drawLfoGraph()
    }, 50)
  })
}

function drawLfoGraph() {
  const canvas = lfoCanvasRef.value
  if (!canvas || lfoHistory.length < 2) return
  const ctx = canvas.getContext('2d')
  const w = canvas.width
  const h = canvas.height
  ctx.clearRect(0, 0, w, h)

  let min = Infinity, max = -Infinity
  for (const v of lfoHistory) {
    if (v < min) min = v
    if (v > max) max = v
  }
  if (max === min) { min -= 0.5; max += 0.5 }
  const range = max - min

  ctx.strokeStyle = '#00d4ff'
  ctx.lineWidth = 1.5
  ctx.lineJoin = 'round'
  ctx.beginPath()
  for (let i = 0; i < lfoHistory.length; i++) {
    const x = (i / (LFO_MAX_HISTORY - 1)) * w
    const y = h - ((lfoHistory[i] - min) / range) * h
    if (i === 0) ctx.moveTo(x, y)
    else ctx.lineTo(x, y)
  }
  ctx.stroke()
  ctx.lineTo((lfoHistory.length - 1) / (LFO_MAX_HISTORY - 1) * w, h)
  ctx.lineTo(0, h)
  ctx.closePath()
  ctx.fillStyle = 'rgba(0, 212, 255, 0.08)'
  ctx.fill()
}

onBeforeUnmount(() => {
  stopWebcam()
  clearInterval(lfoGraphInterval)
})

function openFileDialog() {
  fileInput.value?.click()
}

function onFileSelect(e) {
  const file = e.target.files?.[0]
  if (file) loadImageFile(file)
}

function onDrop(e) {
  isDragging.value = false
  const file = e.dataTransfer.files?.[0]
  if (file && file.type.startsWith('image/')) {
    loadImageFile(file)
  }
}

function loadImageFile(file) {
  const url = URL.createObjectURL(file)
  imagePreviewUrl.value = url

  const img = new Image()
  img.onload = () => {
    emit('imageLoaded', { url, width: img.naturalWidth, height: img.naturalHeight, img })
  }
  img.src = url
}

function formatInlineValue(val) {
  if (val === undefined || val === null) return ''
  if (typeof val === 'number') return val.toFixed(2)
  return String(val)
}

// Monitor graph drawing
watch(() => props.monitorValue, (val) => {
  if (val === null || val === undefined) return
  graphHistory.value.push(val)
  if (graphHistory.value.length > MAX_GRAPH_POINTS) {
    graphHistory.value.shift()
  }
  drawGraph()
})

function drawGraph() {
  const canvas = monitorCanvas.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  const w = canvas.width
  const h = canvas.height
  const data = graphHistory.value

  ctx.clearRect(0, 0, w, h)

  if (data.length < 2) return

  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1

  ctx.strokeStyle = '#00d4ff'
  ctx.lineWidth = 1.5
  ctx.beginPath()

  for (let i = 0; i < data.length; i++) {
    const x = (i / (MAX_GRAPH_POINTS - 1)) * w
    const y = h - ((data[i] - min) / range) * (h - 4) - 2
    if (i === 0) ctx.moveTo(x, y)
    else ctx.lineTo(x, y)
  }
  ctx.stroke()

  // Draw zero line if in range
  if (min <= 0 && max >= 0) {
    const zeroY = h - ((0 - min) / range) * (h - 4) - 2
    ctx.strokeStyle = '#ffffff30'
    ctx.lineWidth = 0.5
    ctx.beginPath()
    ctx.moveTo(0, zeroY)
    ctx.lineTo(w, zeroY)
    ctx.stroke()
  }
}

// Ensure the webcam dynamically starts/stops based on param changes or wired triggers
const evaluatedWebcamEnable = computed(() => {
  if (props.nodeType !== 'webcamInput') return false
  const paramEnable = props.params?.enable === true
  const triggerIn = store.dataOutputs[props.nodeId]?.trigger ?? 0
  return paramEnable || triggerIn > 0.5
})

watch(evaluatedWebcamEnable, (enabled) => {
  if (enabled && !isWebcamActive.value) {
    startWebcam()
  } else if (!enabled && isWebcamActive.value) {
    stopWebcam()
  }
}, { immediate: true })
</script>

<style scoped>
.flow-node__fft-container {
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  height: 50px;
  padding: 8px 4px;
  background: var(--bg-tertiary);
  border-radius: var(--border-radius-sm);
  margin-top: 8px;
  gap: 4px;
}

.flow-node__fft-bar {
  width: 20%;
  background: var(--accent-primary);
  border-radius: 2px 2px 0 0;
  min-height: 2px;
  transition: height 0.05s ease-out;
}

.flow-node__fft-bar--bass { background: #ff4757; }
.flow-node__fft-bar--low-mid { background: #ffa502; }
.flow-node__fft-bar--mid { background: #2ed573; }
.flow-node__fft-bar--high { background: #1e90ff; }

/* LFO waveform graph */
.flow-node__lfo-graph {
  width: 100%;
  height: 40px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.3);
  margin-bottom: 4px;
}

/* XY Pad inline */
.flow-node__xypad-wrapper {
  padding: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.flow-node__xypad {
  position: relative;
  width: 160px;
  height: 120px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  border: 1px solid var(--border-color, #2a2a3a);
  cursor: crosshair;
  touch-action: none;
  overflow: hidden;
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 25% 25%;
}

.flow-node__xypad-crosshair {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--accent-primary, #00d4ff);
  transform: translate(-50%, -50%);
  pointer-events: none;
  box-shadow: 0 0 8px rgba(0, 212, 255, 0.6);
}

.flow-node__xypad-readout {
  display: flex;
  gap: 12px;
  justify-content: center;
}
</style>
