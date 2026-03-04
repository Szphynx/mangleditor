<template>
  <div
    class="control-cell"
    :class="{
      'control-cell--edit': editMode,
      'control-cell--unbound': !cell.boundNodeId && !isAnimationType,
      'control-cell--dragging': isDragging,
    }"
    :draggable="editMode"
    @dragstart="onDragStart"
    @dragend="onDragEnd"
    @dragover.prevent
    @drop="onDrop"
  >
    <!-- Delete button (edit mode only) -->
    <button v-if="editMode" class="control-cell__delete" @click.stop="$emit('delete')">✕</button>

    <!-- Unbound state (non-animation only) -->
    <div v-if="!cell.boundNodeId && !isAnimationType" class="control-cell__unbound" @click.stop="$emit('assign')">
      <span class="control-cell__unbound-icon">{{ controlIcon }}</span>
      <span class="control-cell__unbound-label">Tap to assign</span>
    </div>

    <!-- ============ ANIMATION TYPES (LFO, Timer, Damper, FFT) ============ -->

    <!-- LFO Cell: interactive waveform with drag freq/amp -->
    <div v-else-if="cell.controlType === 'lfo'" class="control-cell__widget control-cell__anim-widget">
      <canvas
        ref="graphCanvas"
        class="control-cell__mini-graph control-cell__mini-graph--interactive"
        width="120" height="50"
        @pointerdown="onLfoDragStart"
        @touchstart.prevent="onLfoDragStart"
      ></canvas>
      <div class="control-cell__lfo-readout">
        <span class="control-cell__value mono" @click.stop="openLfoEditPopup('frequency')" title="Tap to edit">{{ lfoFreq.toFixed(2) }} Hz</span>
        <span class="control-cell__value mono" @click.stop="openLfoEditPopup('amplitude')" title="Tap to edit">amp {{ lfoAmp.toFixed(2) }}</span>
      </div>
      <div class="control-cell__lfo-waveforms">
        <button
          v-for="wf in ['sine', 'saw', 'square', 'triangle']"
          :key="wf"
          class="control-cell__wf-btn"
          :class="{ 'control-cell__wf-btn--active': lfoWaveform === wf }"
          @click.stop="setLfoWaveform(wf)"
        >{{ wfIcon(wf) }}</button>
      </div>
      <div class="control-cell__label">{{ displayLabel }}</div>
      <div v-if="targetParamLabel" class="control-cell__target-label">{{ targetParamLabel }}</div>
      <div v-else class="control-cell__node-label">{{ nodeLabel || 'LFO' }}</div>
    </div>

    <!-- Timer Cell -->
    <div v-else-if="cell.controlType === 'timer'" class="control-cell__widget control-cell__anim-widget">
      <canvas ref="graphCanvas" class="control-cell__mini-graph" width="120" height="50"></canvas>
      <div class="control-cell__value mono">{{ liveValue?.toFixed(2) ?? '0.00' }} s</div>
      <div class="control-cell__label">{{ displayLabel }}</div>
      <div v-if="targetParamLabel" class="control-cell__target-label">{{ targetParamLabel }}</div>
      <div v-else class="control-cell__node-label">{{ nodeLabel || 'Timer' }}</div>
    </div>

    <!-- Damper Cell -->
    <div v-else-if="cell.controlType === 'damper'" class="control-cell__widget control-cell__anim-widget">
      <canvas ref="graphCanvas" class="control-cell__mini-graph" width="120" height="50"></canvas>
      <div class="control-cell__value mono">{{ liveValue?.toFixed(3) ?? '0.000' }}</div>
      <div class="control-cell__label">{{ displayLabel }}</div>
      <div v-if="targetParamLabel" class="control-cell__target-label">{{ targetParamLabel }}</div>
      <div v-else class="control-cell__node-label">{{ nodeLabel || 'Damper' }}</div>
    </div>

    <!-- Random Cell: graph + self-trigger/damping controls + pulse -->
    <div
      v-else-if="cell.controlType === 'random'"
      class="control-cell__widget control-cell__anim-widget control-cell__random-widget"
      :class="{ 'control-cell__random-widget--pulsing': randomPulseActive }"
    >
      <canvas ref="graphCanvas" class="control-cell__mini-graph" width="120" height="50"></canvas>
      <div class="control-cell__value mono">{{ liveValue?.toFixed(3) ?? '0.000' }}</div>
      <div class="control-cell__lfo-readout" @pointerdown.stop @mousedown.stop>
        <span class="control-cell__value mono control-cell__value--tappable" @click.stop="openRandomEditPopup('triggerInterval')" title="Tap to edit">⏱ {{ randomInterval.toFixed(2) }}s</span>
        <span class="control-cell__value mono control-cell__value--tappable" @click.stop="openRandomEditPopup('damping')" title="Tap to edit">◈ {{ randomDamping.toFixed(3) }}</span>
      </div>
      <div class="control-cell__label">{{ displayLabel }}</div>
      <div v-if="targetParamLabel" class="control-cell__target-label">{{ targetParamLabel }}</div>
      <div v-else class="control-cell__node-label">{{ nodeLabel || 'Random' }}</div>
      <div class="control-cell__pulse-ring" v-if="randomPulseActive"></div>
    </div>

    <!-- FFT Cell: 4-band bar display -->
    <div v-else-if="cell.controlType === 'fft'" class="control-cell__widget control-cell__anim-widget">
      <div class="control-cell__fft-bars">
        <div class="control-cell__fft-bar" :style="{ height: (fftBands.bass * 100) + '%' }"><span>B</span></div>
        <div class="control-cell__fft-bar" :style="{ height: (fftBands.lowMid * 100) + '%' }"><span>LM</span></div>
        <div class="control-cell__fft-bar" :style="{ height: (fftBands.mid * 100) + '%' }"><span>M</span></div>
        <div class="control-cell__fft-bar" :style="{ height: (fftBands.high * 100) + '%' }"><span>H</span></div>
      </div>
      <div class="control-cell__label">FFT</div>
      <div class="control-cell__node-label">{{ nodeLabel || 'Audio FFT' }}</div>
    </div>

    <!-- ============ CONTROL TYPES ============ -->

    <!-- Bound Knob -->
    <div v-else-if="cell.controlType === 'knob'" class="control-cell__widget" @pointerdown.stop @mousedown.stop>
      <KnobControl
        :modelValue="currentValue"
        :min="paramMin"
        :max="paramMax"
        :step="paramStep"
        :size="null"
        @update:modelValue="onValueChange"
      />
      <div class="control-cell__label">{{ displayLabel }}</div>
      <div class="control-cell__node-label">{{ nodeLabel }}</div>
    </div>

    <!-- Bound Slider -->
    <div v-else-if="cell.controlType === 'slider'" class="control-cell__widget" @pointerdown.stop @mousedown.stop>
      <input
        type="range"
        class="control-cell__slider"
        :min="paramMin"
        :max="paramMax"
        :step="paramStep"
        :value="currentValue"
        @input="onValueChange(Number($event.target.value))"
      />
      <div class="control-cell__value mono">{{ currentValue?.toFixed(2) }}</div>
      <div class="control-cell__label">{{ displayLabel }}</div>
      <div class="control-cell__node-label">{{ nodeLabel }}</div>
    </div>

    <!-- Bound Bang -->
    <div v-else-if="cell.controlType === 'bang'" class="control-cell__widget" @pointerdown.stop @mousedown.stop>
      <button class="control-cell__bang-btn" @click.stop="onBang">
        {{ displayLabel || 'Bang!' }}
      </button>
      <div class="control-cell__node-label">{{ nodeLabel }}</div>
    </div>

    <!-- Bound Toggle -->
    <div v-else-if="cell.controlType === 'toggle'" class="control-cell__widget" @pointerdown.stop @mousedown.stop>
      <button
        class="control-cell__toggle-btn"
        :class="{ 'control-cell__toggle-btn--active': !!currentValue }"
        @click.stop="onValueChange(!currentValue)"
      >
        {{ currentValue ? 'ON' : 'OFF' }}
      </button>
      <div class="control-cell__label">{{ displayLabel }}</div>
      <div class="control-cell__node-label">{{ nodeLabel }}</div>
    </div>

    <!-- XY Pad -->
    <div v-else-if="cell.controlType === 'xypad'" class="control-cell__widget" @pointerdown.stop @mousedown.stop>
      <div
        class="control-cell__xypad"
        ref="xyPadRef"
        @pointerdown="onXYPadDown"
      >
        <div class="control-cell__xypad-crosshair" :style="xyCrosshairStyle"></div>
        <div class="control-cell__xypad-glow" :style="xyGlowStyle"></div>
      </div>
      <div class="control-cell__lfo-readout">
        <span class="control-cell__value mono" @click.stop="openXYEditPopup('x')" title="Tap to edit">X: {{ xyX.toFixed(2) }}</span>
        <span class="control-cell__value mono" @click.stop="openXYEditPopup('y')" title="Tap to edit">Y: {{ xyY.toFixed(2) }}</span>
      </div>
      <div v-if="xyTargetLabelX || xyTargetLabelY" class="control-cell__xy-assignments">
        <div v-if="xyTargetLabelX" class="control-cell__target-label">{{ xyTargetLabelX }}</div>
        <div v-if="xyTargetLabelY" class="control-cell__target-label">{{ xyTargetLabelY }}</div>
      </div>
      <div class="control-cell__label">{{ displayLabel }}</div>
      <div v-if="!xyTargetLabelX && !xyTargetLabelY" class="control-cell__node-label">{{ nodeLabel }}</div>
    </div>

    <!-- Accelerometer readout -->
    <div v-else-if="cell.controlType === 'accelerometer'" class="control-cell__widget">
      <div class="control-cell__accel-readout">
        <div class="control-cell__accel-axis">
          <span class="control-cell__accel-label">X</span>
          <div class="control-cell__accel-bar-track">
            <div class="control-cell__accel-bar" :style="{ width: accelBarWidth('x') + '%', background: '#ff4757' }"></div>
          </div>
        </div>
        <div class="control-cell__accel-axis">
          <span class="control-cell__accel-label">Y</span>
          <div class="control-cell__accel-bar-track">
            <div class="control-cell__accel-bar" :style="{ width: accelBarWidth('y') + '%', background: '#2ed573' }"></div>
          </div>
        </div>
      </div>
      <div class="control-cell__label">Accelerometer</div>
      <div class="control-cell__node-label">{{ nodeLabel }}</div>
    </div>
    <!-- Value edit popup (for LFO tap-to-edit) -->
    <Teleport to="body">
      <div v-if="showValueEdit" class="value-edit-overlay" @click.self="showValueEdit = false">
        <div class="value-edit-popup">
          <div class="value-edit-popup__title">{{ valueEditLabel }}</div>
          <input
            ref="valueEditInput"
            type="number"
            class="value-edit-popup__input"
            :value="valueEditCurrent"
            :step="valueEditStep"
            @keydown.enter="confirmValueEdit(Number($event.target.value))"
          />
          <div class="value-edit-popup__actions">
            <button class="value-edit-popup__btn" @click="showValueEdit = false">Cancel</button>
            <button class="value-edit-popup__btn value-edit-popup__btn--ok" @click="confirmValueEdit(Number($refs.valueEditInput?.value))">OK</button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import { useGraphStore } from '../stores/graphStore.js'
import { getNodeDef } from '../engine/nodeRegistry.js'
import KnobControl from './KnobControl.vue'

const props = defineProps({
  cell: { type: Object, required: true },
  editMode: { type: Boolean, default: false },
  index: { type: Number, default: 0 },
})

const emit = defineEmits(['delete', 'assign', 'reorder'])

const store = useGraphStore()
const isDragging = ref(false)
const graphCanvas = ref(null)
const xyPadRef = ref(null)

// Animation types don't need a boundNodeId  — they have a direct node
const ANIMATION_TYPES = ['lfo', 'timer', 'damper', 'fft', 'random']
const isAnimationType = computed(() => ANIMATION_TYPES.includes(props.cell.controlType))

const controlIcon = computed(() => {
  const icons = {
    knob: '🎛️', slider: '═══', bang: '💥', toggle: '⏻',
    lfo: '〰️', timer: '⏱️', damper: '🫧', fft: '🎵',
    random: '🎲', xypad: '✛', accelerometer: '📱',
  }
  return icons[props.cell.controlType] || '?'
})

const nodeLabel = computed(() => {
  if (!props.cell.boundNodeId) return ''
  const node = store.nodes.find(n => n.id === props.cell.boundNodeId)
  if (!node) return ''
  const def = getNodeDef(node.type)
  return def?.label || node.type
})

/** Display label: nickname → param name → controlType */
const displayLabel = computed(() => {
  if (props.cell.nickname) return props.cell.nickname
  // For standard controls, show param name
  if (props.cell.boundParamKey && !props.cell.boundTargetNodeId) {
    return props.cell.boundParamKey.toUpperCase()
  }
  // For animation nodes with a target, show the type
  return props.cell.controlType.toUpperCase()
})

/** What target parameter is this animation node assigned to? */
const targetParamLabel = computed(() => {
  if (!props.cell.boundTargetNodeId || !props.cell.boundParamKey) return ''
  const node = store.nodes.find(n => n.id === props.cell.boundTargetNodeId)
  if (!node) return ''
  const def = getNodeDef(node.type)
  const paramDef = def?.params?.[props.cell.boundParamKey]
  const paramName = paramDef?.label || props.cell.boundParamKey
  const nodeName = def?.label || node.type
  return `→ ${nodeName}.${paramName}`
})

/** XY Pad specific: X-axis target label */
const xyTargetLabelX = computed(() => {
  if (!props.cell.boundTargetNodeId || !props.cell.boundParamKey) return ''
  const node = store.nodes.find(n => n.id === props.cell.boundTargetNodeId)
  if (!node) return ''
  const def = getNodeDef(node.type)
  const paramDef = def?.params?.[props.cell.boundParamKey]
  return `X → ${paramDef?.label || props.cell.boundParamKey}`
})

/** XY Pad specific: Y-axis target label */
const xyTargetLabelY = computed(() => {
  if (!props.cell.boundTargetNodeIdY || !props.cell.boundParamKeyY) return ''
  const node = store.nodes.find(n => n.id === props.cell.boundTargetNodeIdY)
  if (!node) return ''
  const def = getNodeDef(node.type)
  const paramDef = def?.params?.[props.cell.boundParamKeyY]
  return `Y → ${paramDef?.label || props.cell.boundParamKeyY}`
})

const paramDef = computed(() => {
  if (!props.cell.boundNodeId || !props.cell.boundParamKey) return null
  const node = store.nodes.find(n => n.id === props.cell.boundNodeId)
  if (!node) return null
  const def = getNodeDef(node.type)
  return def?.params?.[props.cell.boundParamKey] || null
})

const currentValue = computed(() => {
  if (!props.cell.boundNodeId || !props.cell.boundParamKey) return 0
  return store.nodeParams[props.cell.boundNodeId]?.[props.cell.boundParamKey] ?? paramDef.value?.default ?? 0
})

const paramMin = computed(() => paramDef.value?.min ?? 0)
const paramMax = computed(() => paramDef.value?.max ?? 1)
const paramStep = computed(() => paramDef.value?.step ?? 0.01)

// ---- Animation live value (read from dataOutputs) ----
const liveValue = computed(() => {
  if (!props.cell.boundNodeId) return 0
  const out = store.dataOutputs[props.cell.boundNodeId]
  return out?.out ?? 0
})

// FFT bands
const fftBands = computed(() => {
  if (!props.cell.boundNodeId) return { bass: 0, lowMid: 0, mid: 0, high: 0 }
  const out = store.dataOutputs[props.cell.boundNodeId]
  return {
    bass: out?.bass ?? 0,
    lowMid: out?.lowMid ?? 0,
    mid: out?.mid ?? 0,
    high: out?.high ?? 0,
  }
})

// ---- Mini Graph for animation types ----
const graphHistory = ref([])
const MAX_HISTORY = 60

let graphInterval = null

onMounted(() => {
  if (isAnimationType.value && props.cell.controlType !== 'fft') {
    graphInterval = setInterval(updateGraph, 50)
  }
})

onBeforeUnmount(() => {
  clearInterval(graphInterval)
})

function updateGraph() {
  if (!props.cell.boundNodeId) return
  const val = liveValue.value
  const hist = graphHistory.value
  hist.push(val)
  if (hist.length > MAX_HISTORY) hist.shift()
  graphHistory.value = hist
  drawGraph()
}

function drawGraph() {
  const canvas = graphCanvas.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  const w = canvas.width
  const h = canvas.height
  const hist = graphHistory.value

  ctx.clearRect(0, 0, w, h)

  if (hist.length < 2) return

  // Auto-range
  let min = Infinity, max = -Infinity
  for (const v of hist) {
    if (v < min) min = v
    if (v > max) max = v
  }
  if (max === min) { min -= 0.5; max += 0.5 }
  const range = max - min

  // Draw line
  ctx.strokeStyle = '#00d4ff'
  ctx.lineWidth = 1.5
  ctx.lineJoin = 'round'
  ctx.beginPath()
  for (let i = 0; i < hist.length; i++) {
    const x = (i / (MAX_HISTORY - 1)) * w
    const y = h - ((hist[i] - min) / range) * h
    if (i === 0) ctx.moveTo(x, y)
    else ctx.lineTo(x, y)
  }
  ctx.stroke()

  // Fill underneath
  ctx.lineTo((hist.length - 1) / (MAX_HISTORY - 1) * w, h)
  ctx.lineTo(0, h)
  ctx.closePath()
  ctx.fillStyle = 'rgba(0, 212, 255, 0.1)'
  ctx.fill()
}

// ---- LFO interactive controls ----
const lfoFreq = computed(() => {
  if (!props.cell.boundNodeId) return 1
  return store.nodeParams[props.cell.boundNodeId]?.frequency ?? 1
})
const lfoAmp = computed(() => {
  if (!props.cell.boundNodeId) return 1
  return store.nodeParams[props.cell.boundNodeId]?.amplitude ?? 1
})
const lfoWaveform = computed(() => {
  if (!props.cell.boundNodeId) return 'sine'
  return store.nodeParams[props.cell.boundNodeId]?.waveform ?? 'sine'
})

function wfIcon(wf) {
  const icons = { sine: '∿', saw: '⩘', square: '⊓', triangle: '△' }
  return icons[wf] || wf
}

function setLfoWaveform(wf) {
  if (props.cell.boundNodeId) {
    store.setParam(props.cell.boundNodeId, 'waveform', wf)
  }
}

let lfoDragStartX = 0
let lfoDragStartY = 0
let lfoDragStartFreq = 0
let lfoDragStartAmp = 0
let isLfoDragging = false

function onLfoDragStart(e) {
  if (props.editMode) return // Don't interfere with drag-reorder
  isLfoDragging = true
  const touch = e.touches ? e.touches[0] : e
  lfoDragStartX = touch.clientX
  lfoDragStartY = touch.clientY
  lfoDragStartFreq = lfoFreq.value
  lfoDragStartAmp = lfoAmp.value
  window.addEventListener('pointermove', onLfoDragMove)
  window.addEventListener('pointerup', onLfoDragEnd)
  window.addEventListener('touchmove', onLfoDragMoveTouch, { passive: false })
  window.addEventListener('touchend', onLfoDragEnd)
}

function onLfoDragMove(e) {
  if (!isLfoDragging || !props.cell.boundNodeId) return
  const dx = e.clientX - lfoDragStartX
  const dy = -(e.clientY - lfoDragStartY)
  // X = frequency: scale 0.01 to 5 by default (capped), step ~0.1 per pixel
  const newFreq = Math.max(0.01, Math.min(5, lfoDragStartFreq + dx * 0.05))
  // Y = amplitude: scale 0 to 5 by default, step ~0.02 per pixel
  const newAmp = Math.max(0, Math.min(5, lfoDragStartAmp + dy * 0.02))
  store.setParam(props.cell.boundNodeId, 'frequency', newFreq)
  store.setParam(props.cell.boundNodeId, 'amplitude', newAmp)
}

function onLfoDragMoveTouch(e) {
  e.preventDefault()
  const t = e.touches[0]
  onLfoDragMove({ clientX: t.clientX, clientY: t.clientY })
}

function onLfoDragEnd() {
  isLfoDragging = false
  window.removeEventListener('pointermove', onLfoDragMove)
  window.removeEventListener('pointerup', onLfoDragEnd)
  window.removeEventListener('touchmove', onLfoDragMoveTouch)
  window.removeEventListener('touchend', onLfoDragEnd)
}

// ---- Random Cell ----
const randomInterval = computed(() => {
  if (!props.cell.boundNodeId) return 0.5
  return store.nodeParams[props.cell.boundNodeId]?.triggerInterval ?? 0.5
})
const randomDamping = computed(() => {
  if (!props.cell.boundNodeId) return 0
  return store.nodeParams[props.cell.boundNodeId]?.damping ?? 0
})

const randomPulseActive = ref(false)
let lastRandomValue = null

function openRandomEditPopup(paramKey) {
  if (!props.cell.boundNodeId) return
  randomPulseActive.value = false // clear any active pulse so it doesn't overlap input
  valueEditParam.value = paramKey
  valueEditLabel.value = paramKey === 'triggerInterval' ? 'Self-Trigger Interval (s)' : 'Damping'
  valueEditCurrent.value = store.nodeParams[props.cell.boundNodeId]?.[paramKey] ?? (paramKey === 'triggerInterval' ? 0.5 : 0)
  valueEditStep.value = paramKey === 'triggerInterval' ? 0.01 : 0.001
  showValueEdit.value = true
  nextTick(() => valueEditInput.value?.focus?.())
}


// ---- Tap-to-edit value popup ----
const showValueEdit = ref(false)
const valueEditParam = ref('')
const valueEditLabel = ref('')
const valueEditCurrent = ref(0)
const valueEditStep = ref(0.01)
const valueEditInput = ref(null)

// Pulse detection: watch liveValue — pause while popup is open to prevent disrupting user input
if (props.cell.controlType === 'random') {
  watch(liveValue, (newVal) => {
    if (!showValueEdit.value && lastRandomValue !== null && Math.abs(newVal - lastRandomValue) > 0.005) {
      randomPulseActive.value = true
      setTimeout(() => { randomPulseActive.value = false }, 300)
    }
    lastRandomValue = newVal
  })
}

function openLfoEditPopup(paramKey) {
  if (!props.cell.boundNodeId) return
  valueEditParam.value = paramKey
  valueEditLabel.value = paramKey === 'frequency' ? 'Frequency (Hz)' : 'Amplitude'
  valueEditCurrent.value = store.nodeParams[props.cell.boundNodeId]?.[paramKey] ?? 1
  valueEditStep.value = paramKey === 'frequency' ? 0.01 : 0.01
  showValueEdit.value = true
  nextTick(() => valueEditInput.value?.focus?.())
}

function confirmValueEdit(val) {
  if (props.cell.boundNodeId && valueEditParam.value && !isNaN(val)) {
    store.setParam(props.cell.boundNodeId, valueEditParam.value, val)
  }
  showValueEdit.value = false
}

function openXYEditPopup(axis) {
  if (!props.cell.boundNodeId) return
  valueEditParam.value = axis
  valueEditLabel.value = axis === 'x' ? 'X Value' : 'Y Value'
  valueEditCurrent.value = store.nodeParams[props.cell.boundNodeId]?.[axis] ?? 0.5
  valueEditStep.value = 0.001
  showValueEdit.value = true
  nextTick(() => valueEditInput.value?.focus?.())
}

// ---- XY Pad ----
const xyX = computed(() => {
  if (!props.cell.boundNodeId) return 0.5
  return store.nodeParams[props.cell.boundNodeId]?.x ?? 0.5
})
const xyY = computed(() => {
  if (!props.cell.boundNodeId) return 0.5
  return store.nodeParams[props.cell.boundNodeId]?.y ?? 0.5
})

const xyCrosshairStyle = computed(() => ({
  left: (xyX.value * 100) + '%',
  top: ((1 - xyY.value) * 100) + '%',
}))

const xyGlowStyle = computed(() => ({
  left: (xyX.value * 100) + '%',
  top: ((1 - xyY.value) * 100) + '%',
}))

const xyDisplay = computed(() => `${xyX.value.toFixed(2)}, ${xyY.value.toFixed(2)}`)

let isXYDragging = false

function onXYPadDown(e) {
  isXYDragging = true
  updateXYFromEvent(e)
  window.addEventListener('pointermove', onXYPadMove)
  window.addEventListener('pointerup', onXYPadUp)
}

function onXYPadMove(e) {
  if (!isXYDragging) return
  updateXYFromEvent(e)
}

function onXYPadUp() {
  isXYDragging = false
  window.removeEventListener('pointermove', onXYPadMove)
  window.removeEventListener('pointerup', onXYPadUp)
}

function updateXYFromEvent(e) {
  const pad = xyPadRef.value
  if (!pad || !props.cell.boundNodeId) return
  const rect = pad.getBoundingClientRect()
  const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
  const y = Math.max(0, Math.min(1, 1 - (e.clientY - rect.top) / rect.height))
  store.setParam(props.cell.boundNodeId, 'x', x)
  store.setParam(props.cell.boundNodeId, 'y', y)
}

// ---- Accelerometer bars ----
function accelBarWidth(axis) {
  if (!props.cell.boundNodeId) return 50
  const out = store.dataOutputs[props.cell.boundNodeId]
  const val = out?.[axis] ?? 0
  return Math.max(0, Math.min(100, (val + 1) * 50)) // map [-1,1] -> [0,100]
}

// ---- Standard control actions ----
function onValueChange(val) {
  if (props.cell.boundNodeId && props.cell.boundParamKey) {
    store.setParam(props.cell.boundNodeId, props.cell.boundParamKey, val)
  }
}

function onBang() {
  if (props.cell.boundNodeId) {
    store.triggerButton(props.cell.boundNodeId)
  }
}

function onDragStart(e) {
  isDragging.value = true
  e.dataTransfer.setData('text/plain', String(props.index))
  e.dataTransfer.effectAllowed = 'move'
}

function onDragEnd() {
  isDragging.value = false
}

function onDrop(e) {
  const fromIdx = parseInt(e.dataTransfer.getData('text/plain'), 10)
  if (!isNaN(fromIdx) && fromIdx !== props.index) {
    emit('reorder', fromIdx, props.index)
  }
}
</script>

<style scoped>
.control-cell {
  position: relative;
  background: var(--bg-secondary, #1a1a2e);
  border: 1px solid var(--border-color, #2a2a3a);
  border-radius: 12px;
  padding: 12px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 120px;
  transition: all 0.2s ease;
  user-select: none;
}

.control-cell--edit {
  border-style: dashed;
  cursor: grab;
}
.control-cell--edit:active { cursor: grabbing; }

.control-cell--dragging {
  opacity: 0.4;
  transform: scale(0.95);
}

.control-cell--unbound {
  border-style: dashed;
  border-color: var(--text-muted, #555);
}

.control-cell__delete {
  position: absolute;
  top: 4px;
  right: 4px;
  background: rgba(255, 50, 50, 0.2);
  border: 1px solid rgba(255, 50, 50, 0.4);
  color: #ff4757;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.control-cell__unbound {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  opacity: 0.6;
}

.control-cell__unbound-icon { font-size: 24px; }
.control-cell__unbound-label { font-size: 10px; color: var(--text-muted, #888); }

.control-cell__widget {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
}

.control-cell__anim-widget {
  gap: 2px;
}

.control-cell__label {
  font-size: 10px;
  color: var(--text-secondary, #aaa);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.control-cell__node-label {
  font-size: 9px;
  color: var(--text-muted, #666);
}

.control-cell__target-label {
  font-size: 9px;
  color: var(--accent-primary, #00d4ff);
  opacity: 0.7;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.control-cell__value {
  font-size: 11px;
  color: var(--accent-primary, #00d4ff);
}

/* Mini graph for animation nodes */
.control-cell__mini-graph {
  width: 100%;
  height: 50px;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.3);
}

/* FFT bars */
.control-cell__fft-bars {
  display: flex;
  gap: 3px;
  align-items: flex-end;
  justify-content: center;
  height: 60px;
  width: 100%;
  padding: 4px 8px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 6px;
}

.control-cell__fft-bar {
  flex: 1;
  min-height: 3px;
  max-height: 100%;
  border-radius: 2px 2px 0 0;
  background: var(--accent-primary, #00d4ff);
  transition: height 0.1s ease;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.control-cell__fft-bar span {
  font-size: 7px;
  color: rgba(255, 255, 255, 0.6);
  padding-bottom: 2px;
}

.control-cell__fft-bar:nth-child(1) { background: #ff4757; }
.control-cell__fft-bar:nth-child(2) { background: #ffa502; }
.control-cell__fft-bar:nth-child(3) { background: #2ed573; }
.control-cell__fft-bar:nth-child(4) { background: #1e90ff; }

/* Slider */
.control-cell__slider {
  width: 100%;
  accent-color: var(--accent-primary, #00d4ff);
}

/* Bang */
.control-cell__bang-btn {
  padding: 10px 20px;
  border-radius: 8px;
  border: 2px solid var(--accent-primary, #00d4ff);
  background: transparent;
  color: var(--accent-primary, #00d4ff);
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.1s;
  text-transform: uppercase;
}
.control-cell__bang-btn:active {
  background: var(--accent-primary, #00d4ff);
  color: #0a0a1a;
  transform: scale(0.95);
}

/* Toggle */
.control-cell__toggle-btn {
  padding: 10px 20px;
  border-radius: 8px;
  border: 2px solid var(--border-color, #2a2a3a);
  background: var(--bg-tertiary, #12121e);
  color: var(--text-muted, #888);
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s;
  text-transform: uppercase;
  min-width: 70px;
}
.control-cell__toggle-btn--active {
  background: var(--accent-primary, #00d4ff);
  border-color: var(--accent-primary, #00d4ff);
  color: #0a0a1a;
}

/* XY Pad */
.control-cell__xypad {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  max-height: 100px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  border: 1px solid var(--border-color, #2a2a3a);
  cursor: crosshair;
  touch-action: none;
  overflow: hidden;
  /* Grid lines */
  background-image:
    linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px);
  background-size: 50% 50%, 50% 50%, 50% 50%, 50% 50%;
  background-position: center;
}

.control-cell__xypad-crosshair {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--accent-primary, #00d4ff);
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 2;
  box-shadow: 0 0 6px rgba(0, 212, 255, 0.8);
}

.control-cell__xypad-glow {
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 1;
}

/* Accelerometer */
.control-cell__accel-readout {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  padding: 4px 0;
}

.control-cell__accel-axis {
  display: flex;
  align-items: center;
  gap: 6px;
}

.control-cell__accel-label {
  font-size: 10px;
  font-weight: 700;
  color: var(--text-secondary, #aaa);
  min-width: 12px;
}

.control-cell__accel-bar-track {
  flex: 1;
  height: 8px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  overflow: hidden;
}

.control-cell__accel-bar {
  height: 100%;
  border-radius: 4px;
  transition: width 0.1s ease;
}

/* LFO readout row */
.control-cell__lfo-readout {
  display: flex;
  gap: 8px;
  justify-content: center;
  width: 100%;
}
.control-cell__lfo-readout .control-cell__value {
  cursor: pointer;
  border-bottom: 1px dashed rgba(0, 212, 255, 0.4);
  padding-bottom: 1px;
}
.control-cell__lfo-readout .control-cell__value:hover {
  border-bottom-color: var(--accent-primary, #00d4ff);
}

/* Waveform selector buttons */
.control-cell__lfo-waveforms {
  display: flex;
  gap: 2px;
  justify-content: center;
}
.control-cell__wf-btn {
  background: var(--bg-tertiary, #12121e);
  border: 1px solid var(--border-color, #2a2a3a);
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 13px;
  color: var(--text-muted, #888);
  cursor: pointer;
  transition: all 0.12s;
  min-width: 24px;
  text-align: center;
}
.control-cell__wf-btn--active {
  background: var(--accent-primary, #00d4ff);
  border-color: var(--accent-primary, #00d4ff);
  color: #0a0a1a;
}
.control-cell__wf-btn:hover:not(.control-cell__wf-btn--active) {
  border-color: var(--text-muted, #888);
}

.control-cell__mini-graph--interactive {
  cursor: ew-resize;
  touch-action: none;
}

/* Value edit popup */
.value-edit-overlay {
  position: fixed;
  inset: 0;
  z-index: 10001;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}
.value-edit-popup {
  background: var(--bg-secondary, #1a1a2e);
  border: 1px solid var(--border-color, #2a2a3a);
  border-radius: 12px;
  padding: 16px;
  min-width: 200px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
}
.value-edit-popup__title {
  font-size: 12px;
  font-weight: 700;
  color: var(--text-primary, #e0e0e0);
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.value-edit-popup__input {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid var(--border-color, #2a2a3a);
  border-radius: 6px;
  background: var(--bg-tertiary, #12121e);
  color: var(--accent-primary, #00d4ff);
  font-size: 16px;
  font-family: 'JetBrains Mono', monospace;
  text-align: center;
  outline: none;
}
.value-edit-popup__input:focus {
  border-color: var(--accent-primary, #00d4ff);
}
.value-edit-popup__actions {
  display: flex;
  gap: 8px;
  margin-top: 10px;
  justify-content: flex-end;
}
.value-edit-popup__btn {
  background: transparent;
  border: 1px solid var(--border-color, #2a2a3a);
  border-radius: 6px;
  padding: 5px 14px;
  font-size: 11px;
  color: var(--text-muted, #888);
  cursor: pointer;
  transition: all 0.15s;
}
.value-edit-popup__btn--ok {
  background: var(--accent-primary, #00d4ff);
  border-color: var(--accent-primary, #00d4ff);
  color: #0a0a1a;
  font-weight: 700;
}
.value-edit-popup__btn:hover {
  border-color: var(--text-secondary, #aaa);
}

/* Random pulse animation — scoped to widget, not root (avoids affecting delete button) */
.control-cell__random-widget {
  position: relative;
  overflow: visible; /* allow glow to bleed outside rounded bounds */
  border-radius: 12px;
}

.control-cell__random-widget--pulsing {
  animation: random-pulse 0.3s ease-out;
}

@keyframes random-pulse {
  0%   { box-shadow: 0 0 0 0 rgba(0, 212, 255, 0.55); }
  40%  { box-shadow: 0 0 14px 4px rgba(0, 212, 255, 0.3); }
  100% { box-shadow: 0 0 0 0 rgba(0, 212, 255, 0); }
}

.control-cell__pulse-ring {
  position: absolute;
  inset: -2px;
  border-radius: 12px; /* match the widget border-radius explicitly */
  border: 2px solid var(--accent-primary, #00d4ff);
  opacity: 0;
  pointer-events: none;
  animation: pulse-ring 0.32s ease-out forwards;
}

@keyframes pulse-ring {
  0%   { opacity: 0.65; transform: scale(1); }
  100% { opacity: 0;    transform: scale(1.06); }
}

/* Tappable values — dashed underline hint */
.control-cell__value--tappable {
  border-bottom: 1px dashed rgba(0, 212, 255, 0.4);
  cursor: pointer;
}
</style>
