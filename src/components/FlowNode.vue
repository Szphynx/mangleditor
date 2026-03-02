<template>
  <div
    :class="[
      'flow-node',
      { 'flow-node--selected': selected },
      { 'flow-node--compact': def.compact },
      { 'flow-node--bypassed': params._bypass },
    ]"
    @click="$emit('select')"
  >
    <!-- Header -->
    <div class="flow-node__header">
      <div
        class="flow-node__category-dot"
        :style="{ background: categoryColor }"
      ></div>
      <div class="flow-node__title">{{ def.label }}</div>
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

      <!-- Image Input -->
      <div v-if="nodeType === 'imageInput'" class="flow-node__controls" @pointerdown.stop @mousedown.stop>
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
          <img :src="imagePreviewUrl" class="flow-node__image-preview" />
        </div>
      </div>

      <!-- Image Output -->
      <div v-if="nodeType === 'imageOutput'" class="flow-node__controls" @pointerdown.stop @mousedown.stop>
        <button class="flow-node__inline-btn" @click.stop="$emit('export')">
          ⬇ Export {{ params.format || 'PNG' }}
        </button>
      </div>

      <!-- Button node -->
      <div v-if="nodeType === 'button'" class="flow-node__controls" @pointerdown.stop @mousedown.stop>
        <button class="flow-node__inline-btn" @click.stop="$emit('trigger')">
          {{ params.label || 'Press' }}
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

      <!-- LFO inline params preview -->
      <div v-if="nodeType === 'lfo'" class="flow-node__inline-params" @pointerdown.stop @mousedown.stop>
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

      <!-- Output Handles -->
      <div class="flow-node__handles">
        <div
          v-for="output in def.outputs"
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
import { getTypeColor } from '../engine/typeSystem.js'
import { NODE_CATEGORIES } from '../engine/nodeRegistry.js'

const props = defineProps({
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

const categoryColor = computed(() => {
  return NODE_CATEGORIES[props.def.category]?.color || '#888'
})

// Image Input state
const fileInput = ref(null)
const isDragging = ref(false)
const imagePreviewUrl = ref(null)
const hasImage = computed(() => !!imagePreviewUrl.value)

onMounted(() => {
  // Try to load default image if none provided yet
  if (props.nodeType === 'imageInput' && !imagePreviewUrl.value) {
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

// Preview canvas ref
const previewCanvas = ref(null)

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
</style>
