<template>
  <div class="knob-control" @mousedown.stop.prevent="onMouseDown" @touchstart.stop.prevent="onTouchStart" @dblclick.stop="reset" :style="{ width: size ? size + 'px' : '100%', height: size ? size + 'px' : '100%' }">
    <svg width="100%" height="100%" viewBox="0 0 100 100">
      <!-- Background track -->
      <path
        class="knob-track"
        d="M 21.716 78.284 A 40 40 0 1 1 78.284 78.284"
        fill="none"
        stroke="rgba(255, 255, 255, 0.1)"
        stroke-width="12"
        stroke-linecap="round"
      />
      <!-- Active arc (from start angle to current angle) -->
      <path
        v-if="currentAngle > startAngle"
        class="knob-arc"
        :d="arcPath"
        fill="none"
        stroke="var(--accent-primary, #00d4ff)"
        stroke-width="12"
        stroke-linecap="round"
      />
      <!-- Knob indicator circle -->
      <circle cx="50" cy="50" r="26" fill="var(--bg-light, #333)" stroke="var(--border-color, #444)" stroke-width="2" />
      <line
        :x1="50" :y1="50"
        :x2="indicatorX" :y2="indicatorY"
        stroke="var(--text-color, #fff)" stroke-width="4" stroke-linecap="round"
      />
    </svg>
    <div v-if="showValue" class="knob-value">{{ displayValue }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: { type: Number, default: 0 },
  min: { type: Number, default: 0 },
  max: { type: Number, default: 1 },
  step: { type: Number, default: 0.01 },
  size: { type: Number, default: 60 },
  showValue: { type: Boolean, default: true }
})

const emit = defineEmits(['update:modelValue'])

const angleRange = 270 // From -135 to +135 degrees
const startAngle = -135

// Safely normalize value between 0 and 1
const normalizedValue = computed(() => {
  const mmin = props.min !== undefined ? props.min : 0
  const mmax = props.max !== undefined ? props.max : 1
  if (mmin === mmax) return 0
  return Math.max(0, Math.min(1, (props.modelValue - mmin) / (mmax - mmin)))
})

const currentAngle = computed(() => {
  return startAngle + (normalizedValue.value * angleRange)
})

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  }
}

const arcPath = computed(() => {
  const start = polarToCartesian(50, 50, 40, startAngle)
  const end = polarToCartesian(50, 50, 40, currentAngle.value)
  const largeArcFlag = currentAngle.value - startAngle <= 180 ? "0" : "1"
  return [
    "M", start.x, start.y,
    "A", 40, 40, 0, largeArcFlag, 1, end.x, end.y
  ].join(" ")
})

const indicatorX = computed(() => polarToCartesian(50, 50, 24, currentAngle.value).x)
const indicatorY = computed(() => polarToCartesian(50, 50, 24, currentAngle.value).y)

let startY = 0
let startVal = 0

// --- Shared drag logic ---
function applyDrag(clientY, shiftKey) {
  const dy = startY - clientY
  const mmin = props.min !== undefined ? props.min : 0
  const mmax = props.max !== undefined ? props.max : 1
  const range = (mmax - mmin) || 1

  // Base sensitivity: 150 pixels of dragging covers the entire range
  let sensitivity = range / 150

  // Shift key for fine control (desktop only)
  if (shiftKey) {
    sensitivity *= 0.1
  }

  let newVal = startVal + (dy * sensitivity)
  newVal = Math.max(mmin, Math.min(mmax, newVal))

  if (props.step) {
    newVal = Math.round(newVal / props.step) * props.step
  }

  // Format to avoid floating point imprecision
  const decimals = props.step.toString().split('.')[1]?.length || 0
  newVal = Number(newVal.toFixed(decimals))

  emit('update:modelValue', newVal)
}

// --- Mouse events (desktop) ---
function onMouseDown(e) {
  startY = e.clientY
  startVal = props.modelValue
  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseup', onMouseUp)
}

function onMouseMove(e) {
  applyDrag(e.clientY, e.shiftKey)
}

function onMouseUp() {
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseup', onMouseUp)
}

// --- Touch events (mobile) ---
function onTouchStart(e) {
  const t = e.touches[0]
  startY = t.clientY
  startVal = props.modelValue
  document.addEventListener('touchmove', onTouchMove, { passive: false })
  document.addEventListener('touchend', onTouchEnd)
  document.addEventListener('touchcancel', onTouchEnd)
}

function onTouchMove(e) {
  e.preventDefault() // prevent scroll while dragging knob
  const t = e.touches[0]
  applyDrag(t.clientY, false)
}

function onTouchEnd() {
  document.removeEventListener('touchmove', onTouchMove)
  document.removeEventListener('touchend', onTouchEnd)
  document.removeEventListener('touchcancel', onTouchEnd)
}

function reset() {
  const mmin = props.min !== undefined ? props.min : 0
  const mmax = props.max !== undefined ? props.max : 1
  const mid = (mmax + mmin) / 2
  emit('update:modelValue', mid)
}

const displayValue = computed(() => {
  return Number(props.modelValue).toFixed(Math.min(3, props.step.toString().split('.')[1]?.length || 3))
})
</script>

<style scoped>
.knob-control {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: ns-resize;
  border-radius: 4px;
  touch-action: none; /* prevent browser scroll/zoom while interacting */
}
.knob-control:hover svg circle {
  fill: var(--bg-hover, #444);
}
.knob-value {
  font-family: monospace;
  font-size: 11px;
  color: var(--text-off);
  margin-top: 4px;
  user-select: text;
}
</style>
