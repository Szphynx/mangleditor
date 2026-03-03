/**
 * Graph Evaluator — Topological sort + value propagation.
 * Handles DAG traversal for both shader (image) and data (float/int) nodes.
 */

import { getNodeDef } from './nodeRegistry.js'
import { HandleTypes, castValue } from './typeSystem.js'

// ---- Audio / FFT State ----
let audioCtx = null
let analyser = null
let dataArray = null
let audioReady = false

export function initAudio() {
    if (audioCtx) return
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext
        audioCtx = new AudioContext()
        analyser = audioCtx.createAnalyser()
        analyser.fftSize = 512
        analyser.smoothingTimeConstant = 0.8
        dataArray = new Uint8Array(analyser.frequencyBinCount)

        navigator.mediaDevices.getUserMedia({ audio: true, video: false })
            .then(stream => {
                const source = audioCtx.createMediaStreamSource(stream)
                source.connect(analyser)
                audioReady = true
            })
            .catch(err => console.warn('Audio FFT access denied or error:', err))
    } catch (e) {
        console.warn('Audio context not supported', e)
    }
}

/**
 * Topological sort using Kahn's algorithm.
 * Returns ordered array of node IDs, or null if cycle detected.
 */
export function topologicalSort(nodes, edges) {
    const inDegree = {}
    const adjacency = {}

    // Initialize
    for (const node of nodes) {
        inDegree[node.id] = 0
        adjacency[node.id] = []
    }

    // Build adjacency + in-degree from edges
    for (const edge of edges) {
        if (adjacency[edge.source]) {
            adjacency[edge.source].push(edge.target)
            inDegree[edge.target] = (inDegree[edge.target] || 0) + 1
        }
    }

    // Collect nodes with zero in-degree
    const queue = []
    for (const node of nodes) {
        if (inDegree[node.id] === 0) {
            queue.push(node.id)
        }
    }

    const sorted = []
    while (queue.length > 0) {
        const current = queue.shift()
        sorted.push(current)

        for (const neighbor of (adjacency[current] || [])) {
            inDegree[neighbor]--
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor)
            }
        }
    }

    // Cycle detection
    if (sorted.length !== nodes.length) {
        console.warn('Cycle detected in graph — some nodes skipped')
        // Return what we can, skip cycled nodes
        return sorted
    }

    return sorted
}

/**
 * Build an input map for a given node.
 * Returns { handleId: { sourceNodeId, sourceHandleId, value } }
 */
export function getNodeInputs(nodeId, edges, nodeOutputs) {
    const inputs = {}
    for (const edge of edges) {
        if (edge.target === nodeId) {
            const sourceOut = nodeOutputs[edge.source]
            if (sourceOut) {
                inputs[edge.targetHandle] = {
                    sourceNodeId: edge.source,
                    sourceHandleId: edge.sourceHandle,
                    value: sourceOut[edge.sourceHandle],
                }
            }
        }
    }
    return inputs
}

/**
 * Evaluate all non-shader (data) nodes: math, animation, trigger, conversion.
 * Returns a map of { nodeId: { handleId: value } }
 */
export function evaluateDataNodes(sortedIds, nodes, edges, nodeParams, time, deltaTime) {
    const nodesMap = {}
    for (const n of nodes) nodesMap[n.id] = n

    const outputs = {} // { nodeId: { handleId: value } }

    for (const nodeId of sortedIds) {
        const node = nodesMap[nodeId]
        if (!node) continue

        const def = getNodeDef(node.type)
        if (!def) continue

        // Skip image/shader nodes — they're handled by the shader pipeline
        // But keep utility nodes (preview/webcamInput) for data/trigger evaluation
        if ((def.category === 'image' || def.category === 'uv') && node.type !== 'preview' && node.type !== 'webcamInput') continue

        const params = nodeParams[nodeId] || {}
        const inputs = getNodeInputs(nodeId, edges, outputs)
        const result = {}

        switch (node.type) {
            // ---- Animation ----
            case 'lfo': {
                const freq = params.frequency ?? 1
                const amp = params.amplitude ?? 1
                const offset = params.offset ?? 0
                const phase = (params.phase ?? 0) * Math.PI / 180
                const t = time * freq * Math.PI * 2 + phase
                const wf = params.waveform ?? 'sine'
                let v = 0
                if (wf === 'sine') v = Math.sin(t)
                else if (wf === 'saw') v = 2 * ((t / (Math.PI * 2)) % 1) - 1
                else if (wf === 'square') v = Math.sin(t) >= 0 ? 1 : -1
                else if (wf === 'triangle') v = 2 * Math.abs(2 * ((t / (Math.PI * 2)) % 1) - 1) - 1
                result.out = v * amp + offset
                break
            }

            case 'timer': {
                const speed = params.speed ?? 1
                const loop = params.loop ?? false
                const dur = params.loopDuration ?? 5
                let t = time * speed
                if (loop && dur > 0) t = t % dur
                result.out = t
                break
            }

            case 'random': {
                const min = params.min ?? 0
                const max = params.max ?? 1
                const seed = params.seed ?? 42
                // Seeded pseudo-random using sin
                const s = Math.sin(seed + time * 100) * 43758.5453
                const r = s - Math.floor(s)
                result.out = min + r * (max - min)
                break
            }

            case 'damper': {
                const target = inputs.target?.value ?? 0
                const smoothing = params.smoothing ?? 0.9
                // Store current value in node state
                const prev = node._damperValue ?? target
                const v = prev + (target - prev) * (1 - smoothing)
                node._damperValue = v
                result.out = v
                break
            }

            case 'fft': {
                if (!audioReady) {
                    initAudio()
                }
                const smoothing = params.smoothing ?? 0.8
                const gain = params.gain ?? 1.0

                if (audioReady && analyser && dataArray) {
                    analyser.smoothingTimeConstant = smoothing
                    analyser.getByteFrequencyData(dataArray)

                    // Simple 4-band split (256 bins total)
                    let bass = 0, lowMid = 0, mid = 0, high = 0
                    for (let i = 0; i < 256; i++) {
                        const val = dataArray[i] / 255.0
                        if (i <= 10) bass += val
                        else if (i <= 50) lowMid += val
                        else if (i <= 120) mid += val
                        else high += val
                    }

                    result.bass = Math.min((bass / 11) * gain, 1.0)
                    result.lowMid = Math.min((lowMid / 40) * gain, 1.0)
                    result.mid = Math.min((mid / 70) * gain, 1.0)
                    result.high = Math.min((high / 135) * gain, 1.0)
                } else {
                    result.bass = 0
                    result.lowMid = 0
                    result.mid = 0
                    result.high = 0
                }
                break
            }

            // ---- Trigger / Control / Logic ----
            case 'button':
            case 'bang': {
                result.out = node._triggered ? 1 : 0
                node._triggered = false
                break
            }

            case 'onStart': {
                if (!node._hasTriggered) {
                    node._hasTriggered = true
                    result.out = 1
                } else {
                    result.out = 0
                }
                break
            }

            case 'toggle': {
                const triggerIn = inputs.trigger?.value ?? 0
                const prevTrigger = node._prevTriggerVal ?? 0

                // On rising edge of trigger input, flip state
                if (triggerIn >= 0.5 && prevTrigger < 0.5) {
                    params.state = !params.state
                }
                node._prevTriggerVal = triggerIn

                result.out = params.state ? 1 : 0
                break
            }

            case 'edgeTrigger': {
                const inVal = inputs.in?.value ?? false
                const prevVal = node._prevEdgeVal ?? false
                const mode = params.mode ?? 'rising'

                let triggered = false
                if (mode === 'rising' && !prevVal && inVal) triggered = true
                if (mode === 'falling' && prevVal && !inVal) triggered = true
                if (mode === 'both' && prevVal !== inVal) triggered = true

                result.out = triggered ? 1 : 0
                node._prevEdgeVal = inVal
                break
            }

            case 'webcamInput': {
                result.trigger = inputs.trigger?.value ?? 0
                break
            }

            case 'changeTrigger': {
                const inVal = inputs.in?.value ?? 0
                const threshold = params.threshold ?? 0.1

                if (node._lastTriggerVal === undefined) {
                    node._lastTriggerVal = inVal
                }

                const prevVal = node._lastTriggerVal
                let triggered = false

                // If the accumulated change since the last trigger exceeds the threshold
                if (Math.abs(inVal - prevVal) >= threshold) {
                    triggered = true
                    node._lastTriggerVal = inVal
                }

                result.out = triggered ? 1 : 0
                break
            }

            case 'slider':
            case 'knob': {
                const val = params.value ?? 0.5
                const outType = params.outputType ?? 'float'
                result.out = outType === 'int' ? Math.round(val) : val
                break
            }

            case 'compare': {
                const a = inputs.a?.value ?? 0
                const b = inputs.b?.value ?? 0
                const op = params.op ?? '>'
                let res = false
                switch (op) {
                    case '>': res = a > b; break
                    case '<': res = a < b; break
                    case '>=': res = a >= b; break
                    case '<=': res = a <= b; break
                    case '==': res = a === b; break
                    case '!=': res = a !== b; break
                }
                result.out = res
                break
            }

            case 'valueCondition': {
                const cond = inputs.cond?.value ?? false
                const trueVal = inputs.trueVal?.value ?? (params.defaultTrue ?? 1)
                const falseVal = inputs.falseVal?.value ?? (params.defaultFalse ?? 0)
                result.out = cond ? trueVal : falseVal
                break
            }

            // ---- Math ----
            case 'mathAdd': {
                const a = inputs.a?.value ?? 0
                const b = inputs.b?.value ?? 0
                result.out = a + b
                break
            }

            case 'mathMultiply': {
                const a = inputs.a?.value ?? 0
                const b = inputs.b?.value ?? 1
                result.out = a * b
                break
            }

            case 'mathDivide': {
                const a = inputs.a?.value ?? 0
                const b = inputs.b?.value ?? 1
                result.out = b !== 0 ? a / b : 0
                break
            }

            case 'mathSqrt': {
                const a = inputs.a?.value ?? 0
                result.out = Math.sqrt(Math.abs(a))
                break
            }

            case 'mathMap': {
                const v = inputs.value?.value ?? 0
                const inMin = params.inMin ?? 0
                const inMax = params.inMax ?? 1
                const outMin = params.outMin ?? 0
                const outMax = params.outMax ?? 1
                const t = inMax !== inMin ? (v - inMin) / (inMax - inMin) : 0
                result.out = outMin + t * (outMax - outMin)
                break
            }

            case 'mathClamp': {
                const v = inputs.value?.value ?? 0
                const mn = params.min ?? 0
                const mx = params.max ?? 1
                result.out = Math.min(Math.max(v, mn), mx)
                break
            }

            case 'mathWrap': {
                const v = inputs.value?.value ?? 0
                const mn = params.min ?? 0
                const mx = params.max ?? 1
                const range = mx - mn
                if (range <= 0) { result.out = mn; break }
                result.out = mn + ((v - mn) % range + range) % range
                break
            }

            // ---- Type Conversion ----
            case 'floatToInt': {
                const v = inputs.in?.value ?? 0
                const mode = params.mode ?? 'round'
                let out
                if (mode === 'floor') out = Math.floor(v)
                else if (mode === 'ceil') out = Math.ceil(v)
                else if (mode === 'truncate') out = Math.trunc(v)
                else out = Math.round(v)
                // Apply clamp if specified
                const cMin = params.clampMin ?? -2147483648
                const cMax = params.clampMax ?? 2147483647
                result.out = Math.min(Math.max(out, cMin), cMax)
                break
            }

            case 'intToFloat': {
                result.out = Number(inputs.in?.value ?? 0)
                break
            }

            // ---- Utility ----
            case 'numberMonitor': {
                // Passthrough — input becomes output
                result.out = inputs.in?.value ?? 0
                break
            }

            default:
                break
        }

        outputs[nodeId] = result
    }

    return outputs
}

/**
 * Determine the execution order for shader (image) nodes only.
 * Returns an array of node IDs in execution order.
 */
export function getShaderExecutionOrder(sortedIds, nodes) {
    const nodesMap = {}
    for (const n of nodes) nodesMap[n.id] = n

    return sortedIds.filter(id => {
        const node = nodesMap[id]
        if (!node) return false
        const def = getNodeDef(node.type)
        if (!def) return false
        return def.category === 'image' || def.category === 'uv'
    })
}
