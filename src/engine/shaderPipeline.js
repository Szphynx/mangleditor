/**
 * Shader Pipeline — Three.js FBO chain renderer.
 * Executes image processing nodes via GPU shaders.
 */

import * as THREE from 'three'
import { getNodeDef } from './nodeRegistry.js'

// Vertex shader shared by all passes — fullscreen quad
const VERTEX_SHADER = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`

// Fragment shaders loaded as strings
import passthroughFrag from '../shaders/passthrough.frag?raw'
import reededGlassFrag from '../shaders/reededGlass.frag?raw'
import chromaticAberrationFrag from '../shaders/chromaticAberration.frag?raw'
import displacementFrag from '../shaders/displacement.frag?raw'
import levelsFrag from '../shaders/levels.frag?raw'
import surfaceBlurFrag from '../shaders/surfaceBlur.frag?raw'
import blendFrag from '../shaders/blend.frag?raw'
import feedbackFrag from '../shaders/feedback.frag?raw'
import uvGeneratorFrag from '../shaders/uvGenerator.frag?raw'
import uvTransformFrag from '../shaders/uvTransform.frag?raw'
import uvRepeatFrag from '../shaders/uvRepeat.frag?raw'
import uvGlitchFrag from '../shaders/uvGlitch.frag?raw'
import uvPolarFrag from '../shaders/uvPolar.frag?raw'
import diffusionFrag from '../shaders/diffusion.frag?raw'
import xeroxFrag from '../shaders/xerox.frag?raw'
import crtFrag from '../shaders/crt.frag?raw'
import motionBlurFrag from '../shaders/motion_blur.frag?raw'
import ditheringFrag from '../shaders/dithering.frag?raw'

const SHADER_MAP = {
    passthrough: passthroughFrag,
    reededGlass: reededGlassFrag,
    chromaticAberration: chromaticAberrationFrag,
    displacement: displacementFrag,
    levels: levelsFrag,
    surfaceBlur: surfaceBlurFrag,
    blend: blendFrag,
    feedback: feedbackFrag,
    uvGenerator: uvGeneratorFrag,
    uvTransform: uvTransformFrag,
    uvRepeat: uvRepeatFrag,
    uvGlitch: uvGlitchFrag,
    uvPolar: uvPolarFrag,
    diffusion: diffusionFrag,
    xerox: xeroxFrag,
    crt: crtFrag,
    motionBlur: motionBlurFrag,
    dithering: ditheringFrag,
}

const MAX_FBOS = 20

export class ShaderPipeline {
    constructor() {
        this.renderer = null
        this.scene = null
        this.camera = null
        this.quad = null
        this.fbos = {}         // { nodeId: WebGLRenderTarget }
        this.materials = {}    // { nodeId: ShaderMaterial }
        this.textures = {}     // { nodeId: Texture } for image inputs
        this.feedbackFBOs = {} // { nodeId: { current, previous } }
        this.width = 512
        this.height = 512
        this.isInitialized = false
    }

    init(canvas, width, height) {
        this.width = width || 512
        this.height = height || 512

        this.renderer = new THREE.WebGLRenderer({
            canvas,
            alpha: true,
            preserveDrawingBuffer: true,
            antialias: false,
        })
        this.renderer.setSize(this.width, this.height)
        this.renderer.autoClear = false

        // Orthographic camera for fullscreen quad
        this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

        // Fullscreen quad geometry
        const geometry = new THREE.PlaneGeometry(2, 2)

        this.scene = new THREE.Scene()
        this.quad = new THREE.Mesh(geometry, null)
        this.scene.add(this.quad)

        this.isInitialized = true
    }

    /**
     * Resize all FBOs and the renderer.
     */
    resize(width, height) {
        this.width = width
        this.height = height
        if (this.renderer) {
            this.renderer.setSize(width, height)
        }
        // Resize existing FBOs
        for (const [id, fbo] of Object.entries(this.fbos)) {
            fbo.setSize(width, height)
        }
        for (const [id, pair] of Object.entries(this.feedbackFBOs)) {
            pair.current.setSize(width, height)
            pair.previous.setSize(width, height)
        }
    }

    /**
     * Set the source texture for an image input node.
     */
    setInputTexture(nodeId, texture) {
        texture.colorSpace = THREE.LinearSRGBColorSpace
        texture.minFilter = THREE.LinearFilter
        texture.magFilter = THREE.LinearFilter
        this.textures[nodeId] = texture
    }

    /**
     * Create or get an FBO for a node.
     */
    getOrCreateFBO(nodeId) {
        if (this.fbos[nodeId]) return this.fbos[nodeId]

        if (Object.keys(this.fbos).length >= MAX_FBOS) {
            console.warn(`Max FBO count (${MAX_FBOS}) reached. Cannot create FBO for node ${nodeId}`)
            return null
        }

        const fbo = new THREE.WebGLRenderTarget(this.width, this.height, {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            format: THREE.RGBAFormat,
            type: THREE.UnsignedByteType,
            colorSpace: THREE.LinearSRGBColorSpace,
        })
        this.fbos[nodeId] = fbo
        return fbo
    }

    /**
     * Get feedback FBO pair (ping-pong).
     */
    getOrCreateFeedbackFBOs(nodeId) {
        if (this.feedbackFBOs[nodeId]) return this.feedbackFBOs[nodeId]

        const opts = {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            format: THREE.RGBAFormat,
            type: THREE.UnsignedByteType,
        }
        this.feedbackFBOs[nodeId] = {
            current: new THREE.WebGLRenderTarget(this.width, this.height, opts),
            previous: new THREE.WebGLRenderTarget(this.width, this.height, opts),
        }
        return this.feedbackFBOs[nodeId]
    }

    /**
     * Create or update a ShaderMaterial for a node.
     * Dynamically adds new uniforms when connections change.
     */
    getOrCreateMaterial(nodeId, shaderKey, uniforms) {
        const fragSource = SHADER_MAP[shaderKey]
        if (!fragSource) {
            // Fallback to passthrough
            return this.getOrCreateMaterial(nodeId, 'passthrough', uniforms)
        }

        if (this.materials[nodeId] && this.materials[nodeId]._shaderKey === shaderKey) {
            // Update existing material uniforms — add new ones dynamically
            const mat = this.materials[nodeId]
            let needsRecompile = false
            for (const [key, val] of Object.entries(uniforms)) {
                if (mat.uniforms[key]) {
                    mat.uniforms[key].value = val
                } else {
                    // Dynamically add new uniform (e.g. second texture connected)
                    mat.uniforms[key] = { value: val }
                    needsRecompile = true
                }
            }
            if (needsRecompile) {
                mat.needsUpdate = true
            }
            return mat
        }

        // Dispose old material if shader key changed
        if (this.materials[nodeId]) {
            this.materials[nodeId].dispose()
        }

        // Build uniform definitions with defaults
        const uniformDefs = {}
        for (const [key, val] of Object.entries(uniforms)) {
            uniformDefs[key] = { value: val }
        }

        const material = new THREE.ShaderMaterial({
            vertexShader: VERTEX_SHADER,
            fragmentShader: fragSource,
            uniforms: uniformDefs,
            depthTest: false,
            depthWrite: false,
        })

        material._shaderKey = shaderKey
        this.materials[nodeId] = material
        return material
    }

    /**
     * Render a single node pass.
     */
    renderNode(nodeId, material, targetFBO) {
        this.quad.material = material
        if (targetFBO) {
            this.renderer.setRenderTarget(targetFBO)
        } else {
            this.renderer.setRenderTarget(null)
        }
        this.renderer.clear()
        this.renderer.render(this.scene, this.camera)
    }

    /**
     * Remove all GPU resources for a node — prevents memory leaks.
     */
    removeNodeResources(nodeId) {
        // Dispose FBO
        if (this.fbos[nodeId]) {
            this.fbos[nodeId].dispose()
            delete this.fbos[nodeId]
        }

        // Dispose material
        if (this.materials[nodeId]) {
            this.materials[nodeId].dispose()
            delete this.materials[nodeId]
        }

        // Dispose texture (imageInput nodes)
        if (this.textures[nodeId]) {
            this.textures[nodeId].dispose()
            delete this.textures[nodeId]
        }

        // Dispose feedback FBOs
        if (this.feedbackFBOs[nodeId]) {
            this.feedbackFBOs[nodeId].current.dispose()
            this.feedbackFBOs[nodeId].previous.dispose()
            delete this.feedbackFBOs[nodeId]
        }
    }

    /**
     * Execute the shader pipeline for all image nodes in order.
     * @param {string[]} shaderOrder - Node IDs in execution order
     * @param {Object[]} nodes - All flow nodes
     * @param {Object[]} edges - All flow edges
     * @param {Object} nodeParams - { nodeId: { paramKey: value } }
     * @param {Object} dataOutputs - { nodeId: { handleId: value } } from data nodes
     * @param {string|null} previewNodeId - Which node to render to screen (or last)
     * @param {number} time - Current time in seconds
     */
    execute(shaderOrder, nodes, edges, nodeParams, dataOutputs, previewNodeId, time) {
        if (!this.isInitialized || !this.renderer) return

        const nodesMap = {}
        for (const n of nodes) nodesMap[n.id] = n

        // Build edge lookup: { targetNodeId: [{ sourceNodeId, sourceHandle, targetHandle }] }
        const inputEdges = {}
        for (const e of edges) {
            if (!inputEdges[e.target]) inputEdges[e.target] = []
            inputEdges[e.target].push({
                sourceNodeId: e.source,
                sourceHandle: e.sourceHandle,
                targetHandle: e.targetHandle,
            })
        }

        let lastFBO = null

        // Per-node timing for resource monitor
        const perfTimings = {}

        for (const nodeId of shaderOrder) {
            const node = nodesMap[nodeId]
            if (!node) continue
            const def = getNodeDef(node.type)
            if (!def) continue
            const params = nodeParams[nodeId] || {}

            // Image Input — no shader, just set texture
            if (node.type === 'imageInput') {
                // Texture is already stored via setInputTexture
                continue
            }

            // Image Output — no shader needed in GPU pipeline
            if (node.type === 'imageOutput') {
                continue
            }

            // Pixel Sort — CPU-based, handled outside shader pipeline
            if (node.type === 'pixelSort') {
                continue
            }

            // ---- BYPASS: pass-through the first image input unchanged ----
            if (params._bypass) {
                const nodeInputEdges = inputEdges[nodeId] || []
                for (const ie of nodeInputEdges) {
                    const sourceNode = nodesMap[ie.sourceNodeId]
                    if (!sourceNode) continue
                    let tex = null
                    if (sourceNode.type === 'imageInput') {
                        tex = this.textures[ie.sourceNodeId] || null
                    } else if (this.fbos[ie.sourceNodeId]) {
                        tex = this.fbos[ie.sourceNodeId].texture
                    }
                    if (tex) {
                        // Create a passthrough FBO so downstream nodes can reference it
                        const fbo = this.getOrCreateFBO(nodeId)
                        if (fbo) {
                            const passMat = this.getOrCreateMaterial(nodeId, 'passthrough', { uTexture: tex })
                            this.renderNode(nodeId, passMat, fbo)
                            lastFBO = fbo
                        }
                        break
                    }
                }
                perfTimings[nodeId] = 0
                continue
            }

            // Get input textures from connected nodes
            const nodeInputEdges = inputEdges[nodeId] || []
            const uniforms = { uTime: time, uResolution: new THREE.Vector2(this.width, this.height) }

            let hasImageInput = false // Track whether this node has connected image inputs

            for (const ie of nodeInputEdges) {
                const sourceNode = nodesMap[ie.sourceNodeId]
                if (!sourceNode) continue
                const sourceDef = getNodeDef(sourceNode.type)
                if (!sourceDef) continue

                // Get the texture from this source
                let tex = null
                if (sourceNode.type === 'imageInput') {
                    tex = this.textures[ie.sourceNodeId] || null
                } else if (this.fbos[ie.sourceNodeId]) {
                    tex = this.fbos[ie.sourceNodeId].texture
                }

                if (tex) {
                    hasImageInput = true
                    // Map targetHandle to uniform name
                    const handleDef = def.inputs.find(h => h.id === ie.targetHandle)
                    if (handleDef) {
                        // Use naming convention: u + HandleId (camelCase)
                        const uName = 'u' + ie.targetHandle.charAt(0).toUpperCase() + ie.targetHandle.slice(1)
                        uniforms[uName] = tex
                        uniforms[uName + 'Connected'] = true
                    }
                }

                // Also check for data (float/int) inputs from data nodes
                if (dataOutputs[ie.sourceNodeId]) {
                    const val = dataOutputs[ie.sourceNodeId][ie.sourceHandle]
                    if (val !== undefined) {
                        // Check standard inputs OR exposed params (param keys)
                        const handleDef = def.inputs.find(h => h.id === ie.targetHandle)
                        const isExposedParam = !handleDef && def.params[ie.targetHandle]
                        if (handleDef || isExposedParam) {
                            // Override the param with the connected data value
                            params[ie.targetHandle] = val
                        }
                    }
                }
            }

            // Skip rendering if this node has no image inputs connected
            // (it would render black and corrupt the preview)
            if (!hasImageInput && def.inputs.some(inp => inp.type === 'image')) {
                continue
            }

            // Add node-specific params as uniforms
            for (const [key, val] of Object.entries(params)) {
                const paramDef = def.params[key]
                if (!paramDef) continue
                const uName = 'u' + key.charAt(0).toUpperCase() + key.slice(1)
                if (paramDef.type === 'float' || paramDef.type === 'int') {
                    uniforms[uName] = Number(val)
                } else if (paramDef.type === 'bool') {
                    uniforms[uName] = val ? 1.0 : 0.0
                } else if (paramDef.type === 'select') {
                    // Pass as int index
                    const options = paramDef.options || []
                    uniforms[uName] = options.indexOf(val)
                }
            }

            // Handle feedback loop specially
            if (node.type === 'feedbackLoop') {
                const fbPair = this.getOrCreateFeedbackFBOs(nodeId)
                uniforms.uPreviousFrame = fbPair.previous.texture
                uniforms.uDecay = params.decay ?? 0.9
                uniforms.uBlendMode = ['normal', 'add', 'multiply'].indexOf(params.blendMode ?? 'normal')

                const material = this.getOrCreateMaterial(nodeId, 'feedback', uniforms)
                const iterations = Math.min(params.iterations ?? 1, 100)

                for (let i = 0; i < iterations; i++) {
                    this.renderNode(nodeId, material, fbPair.current)
                    // Swap buffers
                    const tmp = fbPair.previous
                    fbPair.previous = fbPair.current
                    fbPair.current = tmp
                    // Update uniform for next iteration
                    material.uniforms.uPreviousFrame.value = fbPair.previous.texture
                }

                // Also store in main FBO map for downstream nodes
                this.fbos[nodeId] = fbPair.previous
                lastFBO = fbPair.previous
                continue
            }

            // Regular shader node
            const shaderKey = def.shaderKey
            if (!shaderKey) continue

            const fbo = this.getOrCreateFBO(nodeId)
            if (!fbo) continue

            const t0 = performance.now()
            const material = this.getOrCreateMaterial(nodeId, shaderKey, uniforms)
            this.renderNode(nodeId, material, fbo)
            perfTimings[nodeId] = performance.now() - t0
            lastFBO = fbo
        }

        // Render the preview: either the selected node or the last node that actually rendered
        const previewFBO = previewNodeId && this.fbos[previewNodeId]
            ? this.fbos[previewNodeId]
            : lastFBO

        if (previewFBO) {
            // Always rebuild the preview passthrough material to update the texture
            if (this.materials['__preview__']) {
                this.materials['__preview__'].uniforms.uTexture.value = previewFBO.texture
            }
            const passMat = this.getOrCreateMaterial('__preview__', 'passthrough', {
                uTexture: previewFBO.texture,
            })
            this.renderNode('__preview__', passMat, null) // render to screen
        }

        // Store perf timings on the pipeline for external access
        this.perfTimings = perfTimings
        return perfTimings
    }

    /**
     * Read pixels from a node's FBO for lossless export.
     * Returns Uint8Array of RGBA pixels.
     */
    readPixels(nodeId) {
        const fbo = this.fbos[nodeId]
        if (!fbo || !this.renderer) return null

        const pixels = new Uint8Array(this.width * this.height * 4)
        this.renderer.readRenderTargetPixels(fbo, 0, 0, this.width, this.height, pixels)
        return { pixels, width: this.width, height: this.height }
    }

    /**
     * Get the output texture of a node (for export or preview).
     */
    getNodeTexture(nodeId) {
        if (this.textures[nodeId]) return this.textures[nodeId]
        if (this.fbos[nodeId]) return this.fbos[nodeId].texture
        return null
    }

    /**
     * Clean up a node's resources when removed.
     */
    removeNode(nodeId) {
        if (this.fbos[nodeId]) {
            this.fbos[nodeId].dispose()
            delete this.fbos[nodeId]
        }
        if (this.materials[nodeId]) {
            this.materials[nodeId].dispose()
            delete this.materials[nodeId]
        }
        if (this.textures[nodeId]) {
            this.textures[nodeId].dispose()
            delete this.textures[nodeId]
        }
        if (this.feedbackFBOs[nodeId]) {
            this.feedbackFBOs[nodeId].current.dispose()
            this.feedbackFBOs[nodeId].previous.dispose()
            delete this.feedbackFBOs[nodeId]
        }
    }

    /**
     * Dispose all resources.
     */
    dispose() {
        for (const fbo of Object.values(this.fbos)) fbo.dispose()
        for (const mat of Object.values(this.materials)) mat.dispose()
        for (const tex of Object.values(this.textures)) tex.dispose()
        for (const pair of Object.values(this.feedbackFBOs)) {
            pair.current.dispose()
            pair.previous.dispose()
        }
        this.fbos = {}
        this.materials = {}
        this.textures = {}
        this.feedbackFBOs = {}
        if (this.renderer) {
            this.renderer.dispose()
        }
    }
}
