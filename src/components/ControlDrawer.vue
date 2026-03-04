<template>
  <div class="control-drawer" :class="{ 'control-drawer--collapsed': collapsed }">
    <!-- Collapse handle -->
    <div class="control-drawer__handle" @click="collapsed = !collapsed">
      <span class="control-drawer__handle-arrow">{{ collapsed ? '▲' : '▼' }}</span>
      <span class="control-drawer__handle-title">Controls</span>
      <div class="control-drawer__handle-actions">
        <button
          class="control-drawer__lock-btn"
          :class="{ 'control-drawer__lock-btn--unlocked': store.isPerfEditMode }"
          @click.stop="store.togglePerfEditMode()"
          :title="store.isPerfEditMode ? 'Lock Controls' : 'Unlock to Edit'"
        >
          {{ store.isPerfEditMode ? '🔓' : '🔒' }}
        </button>
      </div>
    </div>

    <!-- Grid area -->
    <div v-show="!collapsed" class="control-drawer__grid">
      <ControlCell
        v-for="(cell, idx) in store.perfGridCells"
        :key="cell.id"
        :cell="cell"
        :edit-mode="store.isPerfEditMode"
        :index="idx"
        @delete="store.removePerfCell(cell.id)"
        @assign="openAssignPopup(cell.id)"
        @reorder="onReorder"
      />

      <!-- Add button (edit mode only) -->
      <div
        v-if="store.isPerfEditMode"
        class="control-drawer__add-cell"
        @pointerdown="onAddPointerDown"
        @pointerup="onAddPointerUp"
        @pointerleave="onAddPointerUp"
        @touchstart.prevent="onAddPointerDown"
        @click="onAddClick"
      >
        <span class="control-drawer__add-icon">➕</span>
        <span class="control-drawer__add-label">Hold for menu<br/>Tap to quick-add</span>
      </div>
    </div>

    <!-- Two-Level Radial Menu -->
    <RadialMenu
      ref="radialMenuRef"
      :categories="menuCategories"
      @select="onRadialSelect"
      @cancel="() => {}"
    />

    <!-- Assign popup -->
    <Teleport to="body">
      <div v-if="showAssignPopup" class="assign-overlay" @click.self="showAssignPopup = false">
        <div class="assign-popup">
          <div class="assign-popup__header">{{ assignPopupTitle }}</div>
          <div v-if="unboundParams.length === 0" class="assign-popup__empty">
            No unbound exposed parameters available.
            <br /><br />
            <span style="font-size: 11px; opacity: 0.7;">
              Expose parameters in Editor Mode first (🔗 icon in the inspector).
            </span>
            <br /><br />
            <button v-if="assignIsAnimNode" class="assign-popup__skip-btn" @click="showAssignPopup = false">Skip — use standalone</button>
          </div>
          <div
            v-for="param in unboundParams"
            :key="`${param.nodeId}::${param.paramKey}`"
            class="assign-popup__item"
            @click="assignParam(param)"
          >
            <span class="assign-popup__item-node">{{ param.nodeLabel }}</span>
            <span class="assign-popup__item-sep">→</span>
            <span class="assign-popup__item-param">{{ param.paramLabel }}</span>
          </div>
          <div v-if="assignIsAnimNode && unboundParams.length > 0" class="assign-popup__skip-row">
            <button class="assign-popup__skip-btn" @click="showAssignPopup = false">Skip — use standalone</button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useGraphStore } from '../stores/graphStore.js'
import { getNodeDef } from '../engine/nodeRegistry.js'
import ControlCell from './ControlCell.vue'
import RadialMenu from './RadialMenu.vue'

const store = useGraphStore()
const collapsed = ref(false)
const radialMenuRef = ref(null)
const showAssignPopup = ref(false)
const assigningCellId = ref(null)
const assignIsAnimNode = ref(false)
const assigningXYStep = ref(null)
const assignPopupTitleOverride = ref(null)
let longPressTimer = null
let longPressTriggered = false

// Two-level category menu
const menuCategories = [
  {
    id: 'controls',
    label: 'Controls',
    icon: '🎛️',
    items: [
      { id: 'knob', label: 'Knob', icon: '🎛️' },
      { id: 'slider', label: 'Slider', icon: '═══' },
      { id: 'bang', label: 'Bang', icon: '💥' },
      { id: 'toggle', label: 'Toggle', icon: '⏻' },
      { id: 'xypad', label: 'XY Pad', icon: '✛' },
    ],
  },
  {
    id: 'animation',
    label: 'Animation',
    icon: '🌊',
    items: [
      { id: 'lfo', label: 'LFO', icon: '〜️' },
      { id: 'timer', label: 'Timer', icon: '⏱️' },
      { id: 'damper', label: 'Damper', icon: '🫧' },
      { id: 'fft', label: 'FFT', icon: '🎵' },
    ],
  },
]

const unboundParams = computed(() => store.getUnboundExposedParams())
const assignPopupTitle = computed(() =>
  assignPopupTitleOverride.value || (assignIsAnimNode.value ? 'Route Output To…' : 'Assign Parameter')
)

// Auto-populate: on mount or when entering perf mode, add existing control nodes
watch(() => store.isPerformanceMode, (on) => {
  if (on) autoPopulate()
}, { immediate: true })

function autoPopulate() {
  const controlNodes = store.getControlNodes()
  const existingNodeIds = new Set(store.perfGridCells.map(c => c.boundNodeId).filter(Boolean))

  for (const node of controlNodes) {
    if (existingNodeIds.has(node.id)) continue // already in grid
    
    // Map node type to control type
    const typeMap = { knob: 'knob', slider: 'slider', bang: 'bang', button: 'toggle', toggle: 'toggle' }
    const controlType = typeMap[node.type]
    if (!controlType) continue

    // Create a cell pre-bound to this node's main output param
    const cellId = store.addPerfCell(controlType)
    
    // Find the primary param to bind
    const def = node.data?.def
    if (def?.params) {
      const primaryParam = Object.keys(def.params)[0] // e.g. 'value' for knob/slider, 'state' for toggle
      if (primaryParam) {
        store.bindPerfCell(cellId, node.id, primaryParam)
      }
    }
  }
}

function onAddPointerDown(e) {
  longPressTriggered = false
  const touch = e.touches ? e.touches[0] : e
  const x = touch.clientX
  const y = touch.clientY
  longPressTimer = setTimeout(() => {
    longPressTriggered = true
    radialMenuRef.value?.show(x, y)
  }, 400)
}

function onAddPointerUp() {
  clearTimeout(longPressTimer)
}

function onAddClick() {
  if (longPressTriggered) return // was a long press, don't also quick-add
  // Quick-add: directly add a knob (most common)
  const cellId = store.addPerfCell('knob')
  assigningCellId.value = cellId
  showAssignPopup.value = true
}

function onRadialSelect(controlType) {
  // Animation & device types: create a graph node and auto-bind
  const controlTypeToNodeType = {
    lfo: 'lfo', timer: 'timer', damper: 'damper', fft: 'fft',
    random: 'random',
    accelerometer: 'accelerometer', xypad: 'xyPad',
  }

  if (controlTypeToNodeType[controlType]) {
    // Create the node in the graph
    const nodeType = controlTypeToNodeType[controlType]
    const nodeId = store.addNode(nodeType, { x: 100 + Math.random() * 200, y: 100 + Math.random() * 200 })
    if (nodeId) {
      const cellId = store.addPerfCell(controlType)
      store.bindPerfCell(cellId, nodeId, null) // bind to node, no specific param yet

      // If accelerometer, hook up device motion
      if (controlType === 'accelerometer') {
        hookAccelerometer(nodeId)
      }

      // Open assign popup so user can route the output to an exposed param
      assigningCellId.value = cellId
      assignIsAnimNode.value = true
      showAssignPopup.value = true
    }
    return
  }

  // Standard control type: add cell and open assign popup
  const cellId = store.addPerfCell(controlType)
  assigningCellId.value = cellId
  assignIsAnimNode.value = false
  showAssignPopup.value = true
}

function openAssignPopup(cellId) {
  assigningCellId.value = cellId
  showAssignPopup.value = true
}

/** Auto-read target param min/max and set XY Pad range */
function autoSetXYRange(xyNodeId, targetNodeId, targetParamKey, axis) {
  const targetNode = store.nodes.find(n => n.id === targetNodeId)
  if (!targetNode) return
  const def = getNodeDef(targetNode.type)
  const paramDef = def?.params?.[targetParamKey]
  if (!paramDef) return
  const pMin = paramDef.min ?? 0
  const pMax = paramDef.max ?? 1
  if (axis === 'X') {
    store.setParam(xyNodeId, 'minX', pMin)
    store.setParam(xyNodeId, 'maxX', pMax)
  } else {
    store.setParam(xyNodeId, 'minY', pMin)
    store.setParam(xyNodeId, 'maxY', pMax)
  }
}

function assignParam(param) {
  if (!assigningCellId.value) return
  const cell = store.perfGridCells.find(c => c.id === assigningCellId.value)
  if (!cell) { showAssignPopup.value = false; return }

  if (assignIsAnimNode.value) {
    // Animation/device cell: route its output to this target param
    if (cell.controlType === 'xypad' && !assigningXYStep.value) {
      // XY Pad step 1: assign X axis
      store.bindPerfCellTarget(cell.id, param.nodeId, param.paramKey)
      // Auto-set X range from target param
      autoSetXYRange(cell.boundNodeId, param.nodeId, param.paramKey, 'X')
      // Wire edge: xyPad.x → target.paramKey
      store.addEdge({
        source: cell.boundNodeId, sourceHandle: 'x',
        target: param.nodeId, targetHandle: param.paramKey,
      })
      assigningXYStep.value = 'y'
      assignPopupTitleOverride.value = 'Assign Y Axis To…'
      return
    } else if (cell.controlType === 'xypad' && assigningXYStep.value === 'y') {
      // XY Pad step 2: assign Y axis
      store.bindPerfCellTargetY(cell.id, param.nodeId, param.paramKey)
      // Auto-set Y range from target param
      autoSetXYRange(cell.boundNodeId, param.nodeId, param.paramKey, 'Y')
      // Wire edge: xyPad.y → target.paramKey
      store.addEdge({
        source: cell.boundNodeId, sourceHandle: 'y',
        target: param.nodeId, targetHandle: param.paramKey,
      })
      assigningXYStep.value = null
      assignPopupTitleOverride.value = null
    } else {
      // LFO, Timer, Damper, FFT, Accelerometer: single-axis
      store.bindPerfCellTarget(cell.id, param.nodeId, param.paramKey)
      // Wire edge: source.out → target.paramKey
      const srcHandle = cell.controlType === 'fft' ? 'bass' : (cell.controlType === 'accelerometer' ? 'x' : 'out')
      store.addEdge({
        source: cell.boundNodeId, sourceHandle: srcHandle,
        target: param.nodeId, targetHandle: param.paramKey,
      })
    }
  } else {
    // Standard control: bind to this param
    store.bindPerfCell(cell.id, param.nodeId, param.paramKey)
  }

  showAssignPopup.value = false
  assigningCellId.value = null
  assigningXYStep.value = null
  assignPopupTitleOverride.value = null
}

function onReorder(fromIdx, toIdx) {
  store.reorderPerfCells(fromIdx, toIdx)
}

// Accelerometer hookup
function hookAccelerometer(nodeId) {
  if (typeof DeviceMotionEvent !== 'undefined') {
    // iOS 13+ requires permission
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
      DeviceMotionEvent.requestPermission().then(res => {
        if (res === 'granted') startAccel(nodeId)
      }).catch(console.warn)
    } else {
      startAccel(nodeId)
    }
  }
}

function startAccel(nodeId) {
  window.addEventListener('devicemotion', (e) => {
    const node = store.nodes.find(n => n.id === nodeId)
    if (!node) return
    const a = e.accelerationIncludingGravity
    if (a) {
      node._accelX = (a.x ?? 0) / 9.81
      node._accelY = (a.y ?? 0) / 9.81
      node._accelZ = (a.z ?? 0) / 9.81
    }
  })
}
</script>

<style scoped>
.control-drawer {
  background: var(--bg-primary, #0f0f1a);
  border-top: 1px solid var(--border-color, #2a2a3a);
  display: flex;
  flex-direction: column;
  max-height: 50vh;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.control-drawer--collapsed {
  max-height: 36px;
}

.control-drawer__handle {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  cursor: pointer;
  user-select: none;
  border-bottom: 1px solid var(--border-color, #2a2a3a);
  flex-shrink: 0;
}

.control-drawer__handle-arrow {
  font-size: 10px;
  color: var(--text-muted, #888);
}

.control-drawer__handle-title {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-primary, #e0e0e0);
  text-transform: uppercase;
  letter-spacing: 1px;
  flex: 1;
}

.control-drawer__handle-actions {
  display: flex;
  gap: 4px;
}

.control-drawer__lock-btn {
  background: none;
  border: 1px solid var(--border-color, #2a2a3a);
  border-radius: 6px;
  padding: 2px 8px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.15s;
}

.control-drawer__lock-btn--unlocked {
  border-color: var(--accent-primary, #00d4ff);
  box-shadow: 0 0 8px rgba(0, 212, 255, 0.3);
}

.control-drawer__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 8px;
  padding: 12px;
  overflow-y: auto;
  flex: 1;
}

.control-drawer__add-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-height: 120px;
  border: 2px dashed var(--text-muted, #555);
  border-radius: 12px;
  cursor: pointer;
  opacity: 0.6;
  transition: all 0.2s;
  user-select: none;
  touch-action: none;
}

.control-drawer__add-cell:hover {
  opacity: 1;
  border-color: var(--accent-primary, #00d4ff);
}

.control-drawer__add-icon { font-size: 20px; }
.control-drawer__add-label { font-size: 9px; color: var(--text-muted, #888); text-transform: uppercase; text-align: center; line-height: 1.4; }

/* Assign Popup */
.assign-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.assign-popup {
  background: var(--bg-secondary, #1a1a2e);
  border: 1px solid var(--border-color, #2a2a3a);
  border-radius: 12px;
  padding: 16px;
  max-width: 320px;
  width: 90%;
  max-height: 60vh;
  overflow-y: auto;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
}

.assign-popup__header {
  font-size: 14px;
  font-weight: 700;
  color: var(--text-primary, #e0e0e0);
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.assign-popup__empty {
  color: var(--text-muted, #888);
  font-size: 12px;
  text-align: center;
  padding: 16px 0;
}

.assign-popup__item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s;
  border: 1px solid transparent;
}

.assign-popup__item:hover {
  background: var(--bg-tertiary, #12121e);
  border-color: var(--accent-primary, #00d4ff);
}

.assign-popup__item-node {
  font-size: 12px;
  font-weight: 600;
  color: var(--accent-primary, #00d4ff);
}

.assign-popup__item-sep {
  color: var(--text-muted, #555);
  font-size: 10px;
}

.assign-popup__item-param {
  font-size: 12px;
  color: var(--text-primary, #e0e0e0);
}

.assign-popup__skip-row {
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid var(--border-color, #2a2a3a);
  text-align: center;
}

.assign-popup__skip-btn {
  background: transparent;
  border: 1px solid var(--border-color, #2a2a3a);
  border-radius: 6px;
  padding: 6px 14px;
  font-size: 11px;
  color: var(--text-muted, #888);
  cursor: pointer;
  transition: all 0.15s;
}

.assign-popup__skip-btn:hover {
  border-color: var(--text-secondary, #aaa);
  color: var(--text-primary, #e0e0e0);
}
</style>
