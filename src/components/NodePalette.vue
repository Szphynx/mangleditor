<template>
  <div class="node-palette">
    <div class="node-palette__header">Node Library</div>

    <div
      v-for="(catDef, catKey) in categories"
      :key="catKey"
      class="node-palette__category"
    >
      <div
        class="node-palette__category-header"
        @click="toggleCategory(catKey)"
      >
        <span class="node-palette__category-icon">{{ catDef.icon }}</span>
        <span class="node-palette__category-label">{{ catDef.label }}</span>
        <span style="font-size: 10px; color: var(--text-muted);">
          {{ expanded[catKey] ? '▾' : '▸' }}
        </span>
      </div>

      <template v-if="expanded[catKey]">
        <div
          v-for="nodeDef in getNodesForCategory(catKey)"
          :key="nodeDef.type"
          class="node-palette__item"
          draggable="true"
          @dragstart="onDragStart($event, nodeDef.type)"
          @click="$emit('addNode', nodeDef.type)"
        >
          <div
            class="node-palette__item-dot"
            :style="{ background: catDef.color }"
          ></div>
          {{ nodeDef.label }}
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { NODE_CATEGORIES, getNodesByCategory } from '../engine/nodeRegistry.js'

const emit = defineEmits(['addNode'])

const categories = NODE_CATEGORIES

const expanded = reactive(
  Object.fromEntries(Object.keys(NODE_CATEGORIES).map(k => [k, true]))
)

function toggleCategory(key) {
  expanded[key] = !expanded[key]
}

function getNodesForCategory(category) {
  return getNodesByCategory(category)
}

function onDragStart(event, nodeType) {
  event.dataTransfer.setData('application/node-type', nodeType)
  event.dataTransfer.effectAllowed = 'move'
}
</script>
