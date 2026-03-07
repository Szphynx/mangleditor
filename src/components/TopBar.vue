<template>
  <div class="top-bar">
    <div class="top-bar__logo-container">
      <img :src="`${baseUrl}mangleditor-icon.png`" class="top-bar__logo-icon" alt="mangleditor" />
      <span class="top-bar__logo-text">mangleditor <span class="top-bar__version">v{{ pkg.version }}</span></span>
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

    <!-- File Dropdown -->
    <div class="top-bar__dropdown-wrapper">
      <button class="top-bar__btn" @click="toggleMenu">
        File ▾
      </button>
      <div v-if="showFileMenu" class="top-bar__dropdown-menu">
        <button class="top-bar__dropdown-item" @click="$emit('save')">💾 Save</button>
        <button class="top-bar__dropdown-item" @click="$emit('load')">📂 Load</button>
        <button class="top-bar__dropdown-item" @click="openImport()">⬆ Import</button>
        <button class="top-bar__dropdown-item" @click="$emit('download')">⬇ Download</button>
        <div class="top-bar__dropdown-divider"></div>
        <div class="top-bar__dropdown-header">Examples</div>
        <button class="top-bar__dropdown-item" @click="loadExample(baseUrl + 'templates/UV_Combo_Demo.json')">🌌 UV Combo Demo</button>
      </div>
    </div>
    
    <input
      ref="importInput"
      type="file"
      accept=".json"
      class="file-input-hidden"
      @change="onImport"
    />

    <div class="top-bar__divider"></div>

    <!-- Always visible: critical controls -->
    <button class="top-bar__btn top-bar__btn--danger" @click="$emit('reset')" title="Clear all nodes">
      🗑 <span class="top-bar__btn-label">Reset</span>
    </button>

    <div class="top-bar__divider"></div>

    <button
      :class="['top-bar__btn', isRendering ? 'top-bar__btn--running' : 'top-bar__btn--stop']"
      @click="$emit('toggleRender')"
      :title="isRendering ? 'Stop rendering' : 'Resume rendering'"
    >
      {{ isRendering ? '⏸' : '▶' }} <span class="top-bar__btn-label">{{ isRendering ? 'Stop' : 'Resume' }}</span>
    </button>

    <button class="top-bar__btn top-bar__mobile-hide" @click="$emit('togglePreview')" title="Toggle preview mode">
      {{ previewMode === 'anchored' ? '🖥 Anchored' : previewMode === 'floating' ? '🪟 Floating' : '🌌 Background' }}
    </button>
    <button class="top-bar__btn top-bar__mobile-hide" @click="$emit('openPopup')" title="Open renderer in a separate pop-up window">
      ↗ Popout
    </button>
    <button
      :class="['top-bar__btn', { 'top-bar__btn--active': isPerformanceMode }]"
      @click="$emit('togglePerformance')"
      title="Toggle Performance Mode (P)"
    >
      ⚡ <span class="top-bar__btn-label">Perf</span>
    </button>

    <div class="top-bar__divider top-bar__mobile-hide"></div>

    <button 
      :class="['top-bar__btn top-bar__mobile-hide', { 'top-bar__btn--active': showShadows }]"
      @click="$emit('toggleShadows')" 
      title="Toggle CSS drop shadows on nodes and cables"
    >
      ☁ Shadows
    </button>

    <div v-if="previewMode === 'background'" class="top-bar__slider-group top-bar__mobile-hide" title="Workspace Darkness">
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
import { ref, onMounted, onUnmounted } from 'vue'
import pkg from '../../package.json'

const baseUrl = import.meta.env.BASE_URL

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
  showFileMenu.value = false
}

const showFileMenu = ref(false)

function toggleMenu(e) {
  showFileMenu.value = !showFileMenu.value
  e.stopPropagation()
}

function closeMenu() {
  showFileMenu.value = false
}

async function loadExample(path) {
  try {
    const res = await fetch(path)
    if (!res.ok) throw new Error("Could not load")
    const jsonStr = await res.text()
    emit('import', jsonStr)
  } catch (err) {
    alert("Failed to load example patch.")
  }
}

onMounted(() => {
  window.addEventListener('click', closeMenu)
})
onUnmounted(() => {
  window.removeEventListener('click', closeMenu)
})
</script>

<style scoped>
.top-bar__dropdown-wrapper {
  position: relative;
}
.top-bar__dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  border-radius: var(--border-radius-sm);
  padding: 4px;
  display: flex;
  flex-direction: column;
  min-width: 150px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.5);
  z-index: 1000;
  margin-top: 4px;
}
.top-bar__dropdown-item {
  background: transparent;
  color: var(--text-primary);
  border: none;
  font-size: 11px;
  padding: 6px 12px;
  text-align: left;
  cursor: pointer;
  border-radius: 4px;
}
.top-bar__dropdown-item:hover {
  background: var(--bg-tertiary);
}
.top-bar__dropdown-divider {
  height: 1px;
  background: var(--border-subtle);
  margin: 4px;
}
.top-bar__dropdown-header {
  font-size: 10px;
  color: var(--text-muted);
  text-transform: uppercase;
  padding: 4px 12px;
  pointer-events: none;
}
.top-bar__version {
  font-size: 10px;
  color: var(--text-muted);
  background: var(--bg-tertiary);
  padding: 1px 4px;
  border-radius: 4px;
  margin-left: 6px;
  vertical-align: middle;
}

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

@media (max-width: 768px) {
  .top-bar__mobile-hide {
    display: none !important;
  }
  .top-bar__btn-label {
    display: none;
  }
  .top-bar__logo-text {
    display: none;
  }
  .top-bar__title-input {
    width: 90px;
    font-size: 11px;
  }
}
</style>
