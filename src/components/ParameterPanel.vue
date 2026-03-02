<template>
  <div class="param-panel">
    <template v-if="store.selectedNode">
      <div class="param-panel__header">
        <div
          class="flow-node__category-dot"
          :style="{ background: categoryColor }"
        ></div>
        <span class="param-panel__title">{{ def.label }}</span>
        <span class="param-panel__type">{{ def.type }}</span>
      </div>

      <div v-if="Object.keys(def.params).length > 0" class="param-panel__section">
        <div class="param-panel__section-title">Parameters</div>

        <div
          v-for="(paramDef, key) in def.params"
          :key="key"
          class="param-field"
        >
          <div class="param-field__header">
            <label class="param-field__label">{{ paramDef.label }}</label>

            <!-- Expose as input toggle (only for float/int params) -->
            <button
              v-if="paramDef.type === 'float' || paramDef.type === 'int'"
              class="param-field__expose-btn"
              :class="{ 'param-field__expose-btn--active': store.isParamExposed(store.selectedNodeId, key) }"
              @click="store.toggleExposeParam(store.selectedNodeId, key)"
              :title="store.isParamExposed(store.selectedNodeId, key) ? 'Unexpose input' : 'Expose as input handle'"
            >
              {{ store.isParamExposed(store.selectedNodeId, key) ? '🔗' : '⊕' }}
            </button>
          </div>

          <!-- Float / Int slider -->
          <template v-if="paramDef.type === 'float' || paramDef.type === 'int'">
            <input
              type="range"
              class="param-field__input"
              :min="paramDef.min"
              :max="paramDef.max"
              :step="paramDef.step"
              :value="params[key] ?? paramDef.default"
              @input="onParamChange(key, paramDef.type === 'int' ? parseInt($event.target.value) : parseFloat($event.target.value))"
            />
            <div class="param-field__range-info">
              <span>{{ paramDef.min }}</span>
              <input
                type="number"
                class="param-field__number-input mono"
                :step="paramDef.step"
                :value="formatValue(params[key] ?? paramDef.default, paramDef.type)"
                @change="onParamChange(key, paramDef.type === 'int' ? parseInt($event.target.value) : parseFloat($event.target.value))"
              />
              <span>{{ paramDef.max }}</span>
            </div>
          </template>

          <!-- Select dropdown -->
          <template v-else-if="paramDef.type === 'select'">
            <select
              class="param-field__input"
              :value="params[key] ?? paramDef.default"
              @change="onParamChange(key, $event.target.value)"
            >
              <option v-for="opt in paramDef.options" :key="opt" :value="opt">
                {{ opt }}
              </option>
            </select>
          </template>

          <!-- Boolean checkbox -->
          <template v-else-if="paramDef.type === 'bool'">
            <label class="param-field__checkbox">
              <input
                type="checkbox"
                :checked="params[key] ?? paramDef.default"
                @change="onParamChange(key, $event.target.checked)"
              />
              <span>{{ paramDef.label }}</span>
            </label>
          </template>

          <!-- String input -->
          <template v-else-if="paramDef.type === 'string'">
            <input
              type="text"
              class="param-field__input"
              :value="params[key] ?? paramDef.default"
              @input="onParamChange(key, $event.target.value)"
            />
          </template>
        </div>
      </div>

      <!-- Node Info -->
      <div class="param-panel__section">
        <div class="param-panel__section-title">Info</div>
        <div class="param-field">
          <span class="param-field__label">ID</span>
          <span class="mono" style="font-size: 10px; color: var(--text-muted);">{{ store.selectedNodeId }}</span>
        </div>
        <div class="param-field">
          <span class="param-field__label">Category</span>
          <span style="font-size: 11px;">{{ def.category }}</span>
        </div>
        <div class="param-field">
          <span class="param-field__label">Inputs</span>
          <span style="font-size: 11px;">{{ def.inputs.length }}</span>
        </div>
        <div class="param-field">
          <span class="param-field__label">Outputs</span>
          <span style="font-size: 11px;">{{ def.outputs.length }}</span>
        </div>
      </div>
    </template>

    <div v-else class="param-panel__empty">
      Select a node to edit its parameters
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useGraphStore } from '../stores/graphStore.js'
import { NODE_CATEGORIES } from '../engine/nodeRegistry.js'

const store = useGraphStore()

const def = computed(() => store.selectedNodeDef || { label: '', type: '', params: {}, inputs: [], outputs: [], category: '' })
const params = computed(() => store.selectedNodeParams)
const categoryColor = computed(() => NODE_CATEGORIES[def.value.category]?.color || '#888')

function onParamChange(key, value) {
  if (store.selectedNodeId) {
    store.setParam(store.selectedNodeId, key, value)
  }
}

function formatValue(val, type) {
  if (type === 'int') return Math.round(val).toString()
  if (typeof val === 'number') return val.toFixed(3)
  return String(val)
}
</script>
