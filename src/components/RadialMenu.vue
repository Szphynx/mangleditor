<template>
  <Teleport to="body">
    <div
      v-if="visible"
      class="radial-overlay"
      @pointerup="onRelease"
      @pointermove="onMove"
      @touchmove.prevent
    >
      <div class="radial-menu" :style="{ left: posX + 'px', top: posY + 'px' }">
        <!-- Center label -->
        <div class="radial-menu__center">
          {{ activeCategory ? activeCategory : (hoveredSegment || '⊕') }}
        </div>

        <!-- Level 1: Categories (when no category selected) -->
        <template v-if="!activeCategory">
          <div
            v-for="(cat, i) in categories"
            :key="cat.id"
            class="radial-menu__segment"
            :class="{ 'radial-menu__segment--active': hoveredSegment === cat.id }"
            :style="segmentStyle(i, categories.length)"
          >
            <span class="radial-menu__segment-icon">{{ cat.icon }}</span>
            <span class="radial-menu__segment-label">{{ cat.label }}</span>
          </div>
        </template>

        <!-- Level 2: Items within the selected category -->
        <template v-else>
          <div
            v-for="(item, i) in activeCategoryItems"
            :key="item.id"
            class="radial-menu__segment"
            :class="{ 'radial-menu__segment--active': hoveredSegment === item.id }"
            :style="segmentStyle(i, activeCategoryItems.length)"
          >
            <span class="radial-menu__segment-icon">{{ item.icon }}</span>
            <span class="radial-menu__segment-label">{{ item.label }}</span>
          </div>
        </template>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  categories: {
    type: Array,
    default: () => []
    // Each: { id, label, icon, items: [{ id, label, icon }] }
  },
})

const emit = defineEmits(['select', 'cancel'])

const visible = ref(false)
const posX = ref(0)
const posY = ref(0)
const hoveredSegment = ref(null)
const activeCategory = ref(null)

const RADIUS = 100
const SEGMENT_SIZE = 64

const activeCategoryItems = computed(() => {
  if (!activeCategory.value) return []
  const cat = props.categories.find(c => c.id === activeCategory.value)
  return cat?.items || []
})

function show(x, y) {
  posX.value = x
  posY.value = y
  hoveredSegment.value = null
  activeCategory.value = null
  visible.value = true
}

function hide() {
  visible.value = false
  hoveredSegment.value = null
  activeCategory.value = null
}

function segmentStyle(index, count) {
  const angle = (index / count) * 2 * Math.PI - Math.PI / 2
  const x = Math.cos(angle) * RADIUS
  const y = Math.sin(angle) * RADIUS
  return {
    transform: `translate(${x - SEGMENT_SIZE / 2}px, ${y - SEGMENT_SIZE / 2}px)`,
    width: SEGMENT_SIZE + 'px',
    height: SEGMENT_SIZE + 'px',
  }
}

function onMove(e) {
  const cx = e.clientX - posX.value
  const cy = e.clientY - posY.value
  const dist = Math.sqrt(cx * cx + cy * cy)

  if (dist < 30) {
    hoveredSegment.value = null
    return
  }

  const angle = Math.atan2(cy, cx)
  const items = activeCategory.value ? activeCategoryItems.value : props.categories
  const count = items.length
  if (count === 0) return

  const normalized = ((angle + Math.PI / 2) + 2 * Math.PI) % (2 * Math.PI)
  const segIndex = Math.floor(normalized / (2 * Math.PI / count)) % count
  hoveredSegment.value = items[segIndex]?.id || null
}

function onRelease() {
  if (!hoveredSegment.value) {
    // No selection
    if (activeCategory.value) {
      // Go back to categories
      activeCategory.value = null
      hoveredSegment.value = null
      return
    }
    emit('cancel')
    hide()
    return
  }

  if (!activeCategory.value) {
    // Selected a category — drill into it
    activeCategory.value = hoveredSegment.value
    hoveredSegment.value = null
    // Don't close, wait for second selection
    return
  }

  // Selected an item within a category
  emit('select', hoveredSegment.value)
  hide()
}

defineExpose({ show, hide, visible })
</script>

<style scoped>
.radial-overlay {
  position: fixed;
  inset: 0;
  z-index: 10000;
  touch-action: none;
  cursor: default;
}

.radial-menu {
  position: absolute;
  width: 0;
  height: 0;
}

.radial-menu__center {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--bg-secondary, #1a1a2e);
  border: 2px solid var(--accent-primary, #00d4ff);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-25px, -25px);
  font-size: 12px;
  color: var(--text-primary, #e0e0e0);
  z-index: 2;
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
  text-align: center;
  line-height: 1.1;
  padding: 4px;
}

.radial-menu__segment {
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 12px;
  background: var(--bg-secondary, #1a1a2e);
  border: 1px solid var(--border-color, #2a2a3a);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  transition: all 0.15s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.radial-menu__segment--active {
  background: var(--accent-primary, #00d4ff);
  border-color: var(--accent-primary, #00d4ff);
  transform: translate(-32px, -32px) scale(1.15) !important;
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
}

.radial-menu__segment--active .radial-menu__segment-label {
  color: #0a0a1a;
  font-weight: 700;
}

.radial-menu__segment--active .radial-menu__segment-icon {
  filter: brightness(0.3);
}

.radial-menu__segment-icon {
  font-size: 18px;
}

.radial-menu__segment-label {
  font-size: 8px;
  color: var(--text-muted, #888);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  max-width: 58px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
