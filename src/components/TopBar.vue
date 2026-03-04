<template>
  <div class="top-bar">
    <div class="top-bar__logo-container">
      <img src="/mangleditor-icon.png" class="top-bar__logo-icon" alt="mangleditor" />
      <span class="top-bar__logo-text">mangleditor</span>
      <span class="top-bar__coded-by">coded with love and haste</span>
    </div>

    <!-- Editable project title -->
    <input
      class="top-bar__title-input"
      type="text"
      :value="projectTitle"
      @input="$emit('updateTitle', $event.target.value)"
      @blur="$emit('updateTitle', $event.target.value)"
      placeholder="Untitled Project"
      title="Project title — used for save/export filenames"
    />

    <div class="top-bar__divider"></div>

    <button class="top-bar__btn" @click="$emit('save')" title="Save to browser">
      💾 Save
    </button>
    <button class="top-bar__btn" @click="$emit('load')" title="Load from browser">
      📂 Load
    </button>
    <button class="top-bar__btn" @click="$emit('download')" title="Download graph as JSON">
      ⬇ Download
    </button>
    <button class="top-bar__btn" @click="openImport" title="Import graph JSON">
      ⬆ Import
    </button>
    <input
      ref="importInput"
      type="file"
      accept=".json"
      class="file-input-hidden"
      @change="onImport"
    />

    <div class="top-bar__divider"></div>

    <button class="top-bar__btn top-bar__btn--danger" @click="$emit('reset')" title="Clear all nodes">
      🗑 Reset
    </button>

    <div class="top-bar__divider"></div>

    <button
      :class="['top-bar__btn', isRendering ? 'top-bar__btn--running' : 'top-bar__btn--stop']"
      @click="$emit('toggleRender')"
      :title="isRendering ? 'Stop rendering' : 'Resume rendering'"
    >
      {{ isRendering ? '⏸ Stop' : '▶ Resume' }}
    </button>

    <button class="top-bar__btn" @click="$emit('togglePreview')" title="Toggle preview mode">
      {{ previewMode === 'anchored' ? '🖥 Anchored' : previewMode === 'floating' ? '🪟 Floating' : '🌌 Background' }}
    </button>
    <button class="top-bar__btn" @click="$emit('openPopup')" title="Open renderer in a separate pop-up window">
      ↗ Popout
    </button>
    <button
      :class="['top-bar__btn', { 'top-bar__btn--active': isPerformanceMode }]"
      @click="$emit('togglePerformance')"
      title="Toggle Performance Mode (P)"
    >
      ⚡ Performance
    </button>

    <div class="top-bar__divider"></div>

    <button 
      :class="['top-bar__btn', { 'top-bar__btn--active': showShadows }]"
      @click="$emit('toggleShadows')" 
      title="Toggle CSS drop shadows on nodes and cables"
    >
      ☁ Shadows
    </button>

    <div v-if="previewMode === 'background'" class="top-bar__slider-group" title="Workspace Darkness">
      <span class="top-bar__slider-label">Dim</span>
      <input 
        type="range" 
        min="0" max="1" step="0.05" 
        class="top-bar__range"
        :value="bgOpacity" 
        @input="$emit('updateBgOpacity', parseFloat($event.target.value))" 
      />
    </div>

    <!-- Status -->
    <div class="top-bar__status">
      <div :class="['top-bar__status-dot', { 'top-bar__status-dot--stopped': !isRendering }]"></div>
      <span>{{ isRendering ? 'RENDERING' : 'STOPPED' }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  isRendering: { type: Boolean, default: true },
  previewMode: { type: String, default: 'panel' },
  projectTitle: { type: String, default: 'Untitled Project' },
  bgOpacity: { type: Number, default: 0.4 },
  showShadows: { type: Boolean, default: true },
  isPerformanceMode: { type: Boolean, default: false },
})

const emit = defineEmits([
  'save', 'load', 'download', 'import', 'reset', 
  'toggleRender', 'togglePreview', 'updateTitle', 
  'updateBgOpacity', 'toggleShadows',
  'openPopup', 'togglePerformance'
])

const importInput = ref(null)

function openImport() {
  importInput.value?.click()
}

function onImport(e) {
  const file = e.target.files?.[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = () => {
    emit('import', reader.result)
  }
  reader.readAsText(file)
  // Reset so same file can be imported again
  e.target.value = ''
}
</script>

<style scoped>
.top-bar__slider-group {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--bg-panel);
  padding: 0 8px;
  height: 28px;
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--border-subtle);
  margin-left: 4px;
}
.top-bar__slider-label {
  font-size: 11px;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}
.top-bar__range {
  width: 60px;
  cursor: pointer;
  accent-color: var(--accent-primary);
}
</style>
