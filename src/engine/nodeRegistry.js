/**
 * Node Registry — Definitions for all node types.
 * Each definition specifies inputs, outputs, params, and category.
 */

import { HandleTypes } from './typeSystem.js'

const NODE_DEFS = {
    // ======================== IMAGE NODES ========================
    imageInput: {
        type: 'imageInput',
        label: 'Image Input',
        category: 'image',
        inputs: [],
        outputs: [
            { id: 'out', label: 'Image', type: HandleTypes.IMAGE }
        ],
        params: {},
        shaderKey: null, // special: loads texture directly
    },

    uiImageSlot: {
        type: 'uiImageSlot',
        label: 'UI Image Slot',
        category: 'image',
        inputs: [],
        outputs: [
            { id: 'out', label: 'Image', type: HandleTypes.IMAGE }
        ],
        params: {},
        shaderKey: null, // special: loads texture directly, identical to imageInput but no inline preview
    },

    webcamInput: {
        type: 'webcamInput',
        label: 'Webcam',
        category: 'image',
        inputs: [
            { id: 'trigger', label: 'Enable/Trigger', type: HandleTypes.FLOAT, optional: true }
        ],
        outputs: [
            { id: 'out', label: 'Image', type: HandleTypes.IMAGE }
        ],
        params: {
            enable: { type: 'bool', ui: 'button', default: false, label: 'Enable Webcam' }
        },
        shaderKey: null, // special: loads HTMLVideoElement texture directly
    },

    imageOutput: {
        type: 'imageOutput',
        label: 'Image Output',
        category: 'image',
        inputs: [
            { id: 'in', label: 'Image', type: HandleTypes.IMAGE }
        ],
        outputs: [],
        params: {
            format: { type: 'select', default: 'png', options: ['png', 'tiff', 'bmp'], label: 'Format' },
            filename: { type: 'string', default: 'output', label: 'Filename' },
        },
        shaderKey: null, // special: readback + export
    },

    pixelSort: {
        type: 'pixelSort',
        label: 'Pixel Sort',
        category: 'image',
        inputs: [
            { id: 'in', label: 'Image', type: HandleTypes.IMAGE }
        ],
        outputs: [
            { id: 'out', label: 'Image', type: HandleTypes.IMAGE }
        ],
        params: {
            direction: { type: 'select', default: 'horizontal', options: ['horizontal', 'vertical'], label: 'Direction' },
            sortBy: { type: 'select', default: 'brightness', options: ['brightness', 'hue', 'saturation'], label: 'Sort By' },
            threshold: { type: 'float', default: 0.5, min: 0, max: 1, step: 0.01, label: 'Threshold' },
            upperThreshold: { type: 'float', default: 0.8, min: 0, max: 1, step: 0.01, label: 'Upper Threshold' },
            reverse: { type: 'bool', default: false, label: 'Reverse' },
            blendAmount: { type: 'float', default: 1.0, min: 0, max: 1, step: 0.01, label: 'Mix / Blend' },
        },
        shaderKey: 'pixelSort', // CPU-based, uses canvas
    },

    reededGlass: {
        type: 'reededGlass',
        label: 'Reeded Glass',
        category: 'image',
        inputs: [
            { id: 'in', label: 'Image', type: HandleTypes.IMAGE },
            { id: 'texture', label: 'Texture', type: HandleTypes.IMAGE, optional: true },
        ],
        outputs: [
            { id: 'out', label: 'Image', type: HandleTypes.IMAGE }
        ],
        params: {
            scale: { type: 'float', default: 20.0, min: 1, max: 200, step: 0.5, label: 'Scale' },
            intensity: { type: 'float', default: 0.05, min: 0, max: 0.5, step: 0.001, label: 'Intensity' },
            angle: { type: 'float', default: 0, min: 0, max: 360, step: 1, label: 'Angle' },
            blur: { type: 'float', default: 0.5, min: 0, max: 5, step: 0.1, label: 'Blur' },
            blendAmount: { type: 'float', default: 1.0, min: 0, max: 1, step: 0.01, label: 'Mix / Blend' },
        },
        shaderKey: 'reededGlass',
    },

    chromaticAberration: {
        type: 'chromaticAberration',
        label: 'Chromatic Aberration',
        category: 'image',
        inputs: [
            { id: 'in', label: 'Image', type: HandleTypes.IMAGE }
        ],
        outputs: [
            { id: 'out', label: 'Image', type: HandleTypes.IMAGE }
        ],
        params: {
            intensity: { type: 'float', default: 5.0, min: 0, max: 50, step: 0.5, label: 'Intensity' },
            direction: { type: 'select', default: 'radial', options: ['radial', 'horizontal', 'vertical'], label: 'Direction' },
            centerX: { type: 'float', default: 0.5, min: 0, max: 1, step: 0.01, label: 'Center X' },
            centerY: { type: 'float', default: 0.5, min: 0, max: 1, step: 0.01, label: 'Center Y' },
            blendAmount: { type: 'float', default: 1.0, min: 0, max: 1, step: 0.01, label: 'Mix / Blend' },
        },
        shaderKey: 'chromaticAberration',
    },

    displacement: {
        type: 'displacement',
        label: 'Heightmap Displacement',
        category: 'image',
        inputs: [
            { id: 'in', label: 'Image', type: HandleTypes.IMAGE },
            { id: 'heightmap', label: 'Heightmap', type: HandleTypes.IMAGE },
        ],
        outputs: [
            { id: 'out', label: 'Image', type: HandleTypes.IMAGE }
        ],
        params: {
            strength: { type: 'float', default: 0.05, min: 0, max: 0.5, step: 0.001, label: 'Strength' },
            channel: { type: 'select', default: 'luminance', options: ['luminance', 'r', 'g', 'b'], label: 'Channel' },
            blendAmount: { type: 'float', default: 1.0, min: 0, max: 1, step: 0.01, label: 'Mix / Blend' },
        },
        shaderKey: 'displacement',
    },

    levels: {
        type: 'levels',
        label: 'Levels',
        category: 'image',
        inputs: [
            { id: 'in', label: 'Image', type: HandleTypes.IMAGE },
            { id: 'inputBlack', label: 'In Black', type: HandleTypes.INT, optional: true },
            { id: 'inputWhite', label: 'In White', type: HandleTypes.INT, optional: true },
            { id: 'gamma', label: 'Gamma', type: HandleTypes.FLOAT, optional: true },
        ],
        outputs: [
            { id: 'out', label: 'Image', type: HandleTypes.IMAGE }
        ],
        params: {
            inputBlack: { type: 'int', default: 0, min: 0, max: 255, step: 1, label: 'Input Black' },
            inputWhite: { type: 'int', default: 255, min: 0, max: 255, step: 1, label: 'Input White' },
            gamma: { type: 'float', default: 1.0, min: 0.1, max: 10, step: 0.01, label: 'Gamma' },
            outputBlack: { type: 'int', default: 0, min: 0, max: 255, step: 1, label: 'Output Black' },
            outputWhite: { type: 'int', default: 255, min: 0, max: 255, step: 1, label: 'Output White' },
            channel: { type: 'select', default: 'master', options: ['master', 'r', 'g', 'b'], label: 'Channel' },
            blendAmount: { type: 'float', default: 1.0, min: 0, max: 1, step: 0.01, label: 'Mix / Blend' },
        },
        shaderKey: 'levels',
    },

    surfaceBlur: {
        type: 'surfaceBlur',
        label: 'Surface Blur',
        category: 'image',
        inputs: [
            { id: 'in', label: 'Image', type: HandleTypes.IMAGE }
        ],
        outputs: [
            { id: 'out', label: 'Image', type: HandleTypes.IMAGE }
        ],
        params: {
            radius: { type: 'int', default: 5, min: 1, max: 20, step: 1, label: 'Radius' },
            threshold: { type: 'float', default: 0.1, min: 0, max: 1, step: 0.01, label: 'Threshold' },
            blendAmount: { type: 'float', default: 1.0, min: 0, max: 1, step: 0.01, label: 'Mix / Blend' },
        },
        shaderKey: 'surfaceBlur',
    },

    feedbackLoop: {
        type: 'feedbackLoop',
        label: 'Feedback Loop',
        category: 'image',
        inputs: [
            { id: 'in', label: 'Image', type: HandleTypes.IMAGE }
        ],
        outputs: [
            { id: 'out', label: 'Image', type: HandleTypes.IMAGE }
        ],
        params: {
            decay: { type: 'float', default: 0.9, min: 0, max: 1, step: 0.01, label: 'Decay' },
            iterations: { type: 'int', default: 1, min: 1, max: 100, step: 1, label: 'Iterations' },
            blendMode: { type: 'select', default: 'normal', options: ['normal', 'add', 'multiply'], label: 'Blend Mode' },
        },
        shaderKey: 'feedback',
    },

    blend: {
        type: 'blend',
        label: 'Blend',
        category: 'image',
        inputs: [
            { id: 'base', label: 'Base', type: HandleTypes.IMAGE },
            { id: 'overlay', label: 'Overlay', type: HandleTypes.IMAGE },
        ],
        outputs: [
            { id: 'out', label: 'Image', type: HandleTypes.IMAGE }
        ],
        params: {
            mode: { type: 'select', default: 'normal', options: ['normal', 'multiply', 'screen', 'overlay', 'softLight', 'hardLight', 'difference', 'exclusion', 'add', 'subtract'], label: 'Mode' },
            opacity: { type: 'float', default: 1.0, min: 0, max: 1, step: 0.01, label: 'Opacity' },
        },
        shaderKey: 'blend',
    },

    diffusion: {
        type: 'diffusion',
        label: 'Diffusion Reaction',
        category: 'image',
        inputs: [
            { id: 'in', label: 'Init State', type: HandleTypes.IMAGE }
        ],
        outputs: [
            { id: 'out', label: 'Image', type: HandleTypes.IMAGE }
        ],
        params: {
            dA: { type: 'float', default: 1.0, min: 0, max: 2.0, step: 0.01, label: 'Diff A' },
            dB: { type: 'float', default: 0.5, min: 0, max: 2.0, step: 0.01, label: 'Diff B' },
            feed: { type: 'float', default: 0.055, min: 0.0, max: 0.1, step: 0.001, label: 'Feed Rate' },
            kill: { type: 'float', default: 0.062, min: 0.0, max: 0.1, step: 0.001, label: 'Kill Rate' },
            dt: { type: 'float', default: 1.0, min: 0, max: 2.0, step: 0.01, label: 'Delta Time' },
        },
        shaderKey: 'diffusion',
    },

    xerox: {
        type: 'xerox',
        label: 'Xerox Photocopy',
        category: 'image',
        inputs: [
            { id: 'in', label: 'Image', type: HandleTypes.IMAGE }
        ],
        outputs: [
            { id: 'out', label: 'Image', type: HandleTypes.IMAGE }
        ],
        params: {
            threshold: { type: 'float', default: 0.5, min: 0, max: 1, step: 0.01, label: 'Threshold' },
            noiseAmount: { type: 'float', default: 0.1, min: 0, max: 1, step: 0.01, label: 'Noise' },
            contrast: { type: 'float', default: 2.0, min: 0, max: 5, step: 0.1, label: 'Contrast' },
            blendAmount: { type: 'float', default: 1.0, min: 0, max: 1, step: 0.01, label: 'Mix / Blend' },
        },
        shaderKey: 'xerox',
    },

    liquidDeform: {
        type: 'liquidDeform',
        label: 'Liquid Deform',
        category: 'uv', // Moved to UV to make sure it groups better
        inputs: [
            { id: 'in', label: 'Image', type: HandleTypes.IMAGE }
        ],
        outputs: [
            { id: 'out', label: 'Image', type: HandleTypes.IMAGE }
        ],
        params: {
            scale: { type: 'float', default: 1.0, min: 0.1, max: 10.0, step: 0.01, label: 'Zoom/Scale' },
            intensity: { type: 'float', default: 1.0, min: 0.0, max: 5.0, step: 0.01, label: 'Swirl Int.' },
            speed: { type: 'float', default: 1.0, min: 0.0, max: 5.0, step: 0.01, label: 'Swirl Spd' },
            samples: { type: 'float', default: 20.0, min: 1.0, max: 20.0, step: 1.0, label: 'Samples' },
            gammaLift: { type: 'float', default: 1.0, min: 0.1, max: 5.0, step: 0.01, label: 'GammaLift' },
            blendAmount: { type: 'float', default: 1.0, min: 0, max: 1, step: 0.01, label: 'Mix/Blend' },
        },
        shaderKey: 'liquidDeform',
    },

    noiseContours: {
        type: 'noiseContours',
        label: 'Noise Contours',
        category: 'image',
        inputs: [
            { id: 'in', label: 'Image', type: HandleTypes.IMAGE },
            { id: 'texture', label: 'Overlay Tex', type: HandleTypes.IMAGE, optional: true },
        ],
        outputs: [
            { id: 'out', label: 'Image', type: HandleTypes.IMAGE }
        ],
        params: {
            speed: { type: 'float', default: 1.0, min: 0.0, max: 5.0, step: 0.01, label: 'Speed' },
            scale: { type: 'float', default: 1.0, min: 0.1, max: 4.0, step: 0.01, label: 'Scale' },
            palNum: { type: 'float', default: 9.0, min: 2.0, max: 20.0, step: 1.0, label: 'Contour Bands' },
            edgeStrength: { type: 'float', default: 5.0, min: 0.0, max: 20.0, step: 0.1, label: 'Edge Strength' },
            highlight: { type: 'float', default: 10.0, min: 0.0, max: 30.0, step: 0.1, label: 'Highlight' },
            hueShift: { type: 'float', default: -0.25, min: -3.14, max: 3.14, step: 0.01, label: 'Hue Shift' },
            hueRadius: { type: 'float', default: 0.4, min: 0.0, max: 2.0, step: 0.01, label: 'Hue Radius' },
            imageBlend: { type: 'float', default: 0.0, min: 0.0, max: 1.0, step: 0.01, label: 'Image Color' },
            taper: { type: 'float', default: 1.0, min: 0.0, max: 3.0, step: 0.01, label: 'Taper' },
            blendAmount: { type: 'float', default: 1.0, min: 0.0, max: 1.0, step: 0.01, label: 'Blend' },
        },
        shaderKey: 'noiseContours',
    },

    fisheye: {
        type: 'fisheye',
        label: 'Fisheye',
        category: 'image',
        inputs: [
            { id: 'in', label: 'Image', type: HandleTypes.IMAGE },
        ],
        outputs: [
            { id: 'out', label: 'Image', type: HandleTypes.IMAGE }
        ],
        params: {
            power: { type: 'float', default: 1.0, min: -3.0, max: 3.0, step: 0.01, label: 'Power' },
            centerX: { type: 'float', default: 0.5, min: 0.1, max: 0.9, step: 0.01, label: 'Center X' },
            centerY: { type: 'float', default: 0.5, min: 0.1, max: 0.9, step: 0.01, label: 'Center Y' },
            zoom: { type: 'float', default: 1.0, min: 0.1, max: 4.0, step: 0.01, label: 'Zoom' },
            blendAmount: { type: 'float', default: 1.0, min: 0.0, max: 1.0, step: 0.01, label: 'Blend' },
        },
        shaderKey: 'fisheye',
    },

    crt: {
        type: 'crt',
        label: 'CRT Display',
        category: 'image',
        inputs: [
            { id: 'in', label: 'Image', type: HandleTypes.IMAGE }
        ],
        outputs: [
            { id: 'out', label: 'Image', type: HandleTypes.IMAGE }
        ],
        params: {
            curvature: { type: 'float', default: 0.5, min: 0, max: 1, step: 0.01, label: 'Curvature' },
            scanLines: { type: 'float', default: 0.5, min: 0, max: 1, step: 0.01, label: 'Scanlines' },
            rgbShift: { type: 'float', default: 0.2, min: 0, max: 1, step: 0.01, label: 'RGB Shift' },
            brightness: { type: 'float', default: 1.2, min: 0, max: 3, step: 0.1, label: 'Brightness' },
            blendAmount: { type: 'float', default: 1.0, min: 0, max: 1, step: 0.01, label: 'Mix / Blend' },
        },
        shaderKey: 'crt',
    },

    ascii: {
        type: 'ascii',
        label: 'ASCII Art',
        category: 'image',
        inputs: [
            { id: 'in', label: 'Image', type: HandleTypes.IMAGE },
            { id: 'texture', label: 'Overlay Tex', type: HandleTypes.IMAGE, optional: true }
        ],
        outputs: [
            { id: 'out', label: 'Image', type: HandleTypes.IMAGE }
        ],
        params: {
            cellSize: { type: 'float', default: 12.0, min: 4.0, max: 48.0, step: 1.0, label: 'Cell Size' },
            brightness: { type: 'float', default: 0.0, min: -1.0, max: 1.0, step: 0.01, label: 'Threshold Shift' },
            colorMode: { type: 'float', default: 0.0, min: 0.0, max: 1.0, step: 1.0, label: 'Color Mode (Orig/Flat)' },
            fgColor: { type: 'color', default: '#00ff66', label: 'FG Color' },
            bgColor: { type: 'color', default: '#000000', label: 'BG Color' },
            intensity: { type: 'float', default: 1.0, min: 0.0, max: 1.0, step: 0.01, label: 'Effect Mix' },
            blendAmount: { type: 'float', default: 1.0, min: 0, max: 1, step: 0.01, label: 'Mix / Blend' },
        },
        shaderKey: 'ascii',
    },

    asciiV2: {
        type: 'asciiV2',
        label: 'ASCII v2',
        category: 'image',
        inputs: [
            { id: 'in', label: 'Image', type: HandleTypes.IMAGE },
            { id: 'texture', label: 'Overlay Tex', type: HandleTypes.IMAGE, optional: true },
        ],
        outputs: [
            { id: 'out', label: 'Image', type: HandleTypes.IMAGE }
        ],
        params: {
            cellSize: { type: 'float', default: 12.0, min: 4.0, max: 64.0, step: 1.0, label: 'Cell Size' },
            brightness: { type: 'float', default: 0.0, min: -0.5, max: 0.5, step: 0.01, label: 'Brightness' },
            colorMode: { type: 'select', default: 'Palette', options: ['Palette', 'Original', 'Flat'], label: 'Color Mode' },
            fgColor: { type: 'color', default: '#00ff66', label: 'FG Color' },
            bgColor: { type: 'color', default: '#000000', label: 'BG Color' },
            extendedPalette: { type: 'bool', default: false, label: 'Extended Chars' },
            intensity: { type: 'float', default: 1.0, min: 0.0, max: 1.0, step: 0.01, label: 'Intensity' },
            blendAmount: { type: 'float', default: 1.0, min: 0.0, max: 1.0, step: 0.01, label: 'Blend' },
        },
        shaderKey: 'asciiV2',
    },

    motionBlur: {
        type: 'motionBlur',
        label: 'Motion Blur',
        category: 'image',
        inputs: [
            { id: 'in', label: 'Image', type: HandleTypes.IMAGE }
        ],
        outputs: [
            { id: 'out', label: 'Image', type: HandleTypes.IMAGE }
        ],
        params: {
            angle: { type: 'float', default: 0, min: 0, max: 3.1415, step: 0.01, label: 'Angle (rad)' },
            strength: { type: 'float', default: 5.0, min: 0, max: 50, step: 0.1, label: 'Strength' },
            samples: { type: 'int', default: 15, min: 1, max: 50, step: 1, label: 'Samples' },
            blendAmount: { type: 'float', default: 1.0, min: 0, max: 1, step: 0.01, label: 'Mix / Blend' },
        },
        shaderKey: 'motionBlur',
    },

    dithering: {
        type: 'dithering',
        label: 'Dithering (4x4)',
        category: 'image',
        inputs: [
            { id: 'in', label: 'Image', type: HandleTypes.IMAGE }
        ],
        outputs: [
            { id: 'out', label: 'Image', type: HandleTypes.IMAGE }
        ],
        params: {
            colors: { type: 'float', default: 2.0, min: 1.0, max: 32.0, step: 1.0, label: 'Colors' },
            spread: { type: 'float', default: 0.5, min: 0, max: 2.0, step: 0.01, label: 'Spread' },
            blendAmount: { type: 'float', default: 1.0, min: 0, max: 1, step: 0.01, label: 'Mix / Blend' },
        },
        shaderKey: 'dithering',
    },

    // ======================== ANIMATION NODES ========================
    lfo: {
        type: 'lfo',
        label: 'LFO',
        category: 'animation',
        compact: true,
        inlineParams: ['waveform', 'frequency', 'amplitude'],
        inputs: [],
        outputs: [
            { id: 'out', label: 'Value', type: HandleTypes.FLOAT }
        ],
        params: {
            waveform: { type: 'select', default: 'sine', options: ['sine', 'saw', 'square', 'triangle'], label: 'Waveform' },
            frequency: { type: 'float', default: 1.0, min: 0.01, max: 60, step: 0.01, label: 'Frequency (Hz)' },
            amplitude: { type: 'float', default: 1.0, min: 0, max: 100, step: 0.01, label: 'Amplitude' },
            offset: { type: 'float', default: 0.0, min: -100, max: 100, step: 0.01, label: 'Offset' },
            phase: { type: 'float', default: 0.0, min: 0, max: 360, step: 1, label: 'Phase (°)' },
        },
        shaderKey: null, // JS-computed
        isAnimated: true,
    },

    timer: {
        type: 'timer',
        label: 'Timer',
        category: 'animation',
        inputs: [
            { id: 'reset', label: 'Reset', type: HandleTypes.TRIGGER, optional: true }
        ],
        outputs: [
            { id: 'out', label: 'Time', type: HandleTypes.FLOAT }
        ],
        params: {
            speed: { type: 'float', default: 1.0, min: 0.01, max: 10, step: 0.01, label: 'Speed' },
            loop: { type: 'bool', default: false, label: 'Loop' },
            loopDuration: { type: 'float', default: 5.0, min: 0.1, max: 300, step: 0.1, label: 'Loop Duration (s)' },
        },
        shaderKey: null,
        isAnimated: true,
    },

    random: {
        type: 'random',
        label: 'Random',
        category: 'animation',
        inputs: [
            { id: 'trigger', label: 'Trigger', type: HandleTypes.TRIGGER, optional: true }
        ],
        outputs: [
            { id: 'out', label: 'Value', type: HandleTypes.FLOAT }
        ],
        params: {
            min: { type: 'float', default: 0, min: -1000, max: 1000, step: 0.01, label: 'Min' },
            max: { type: 'float', default: 1, min: -1000, max: 1000, step: 0.01, label: 'Max' },
            triggerInterval: { type: 'float', default: 0.5, min: 0.01, max: 30, step: 0.01, label: 'Self-Trigger (s)' },
            damping: { type: 'float', default: 0, min: 0, max: 0.999, step: 0.001, label: 'Damping' },
            seed: { type: 'int', default: 42, min: 0, max: 99999, step: 1, label: 'Seed' },
        },
        shaderKey: null,
        isAnimated: true,
    },

    damper: {
        type: 'damper',
        label: 'Damper',
        category: 'animation',
        inputs: [
            { id: 'target', label: 'Target', type: HandleTypes.FLOAT }
        ],
        outputs: [
            { id: 'out', label: 'Value', type: HandleTypes.FLOAT }
        ],
        params: {
            smoothing: { type: 'float', default: 0.9, min: 0, max: 0.999, step: 0.001, label: 'Smoothing' },
        },
        shaderKey: null,
        isAnimated: true,
    },

    fft: {
        type: 'fft',
        label: 'Audio FFT',
        category: 'animation',
        compact: true,
        inputs: [],
        outputs: [
            { id: 'bass', label: 'Bass', type: HandleTypes.FLOAT },
            { id: 'lowMid', label: 'Low Mid', type: HandleTypes.FLOAT },
            { id: 'mid', label: 'Mid', type: HandleTypes.FLOAT },
            { id: 'high', label: 'High', type: HandleTypes.FLOAT },
        ],
        params: {
            smoothing: { type: 'float', default: 0.8, min: 0, max: 0.99, step: 0.01, label: 'Smoothing' },
            gain: { type: 'float', default: 1.0, min: 0, max: 10, step: 0.1, label: 'Gain' },
        },
        shaderKey: null,
        isAnimated: true,
    },

    // ======================== TRIGGER / CONTROL NODES ========================
    button: {
        type: 'button',
        label: 'Button',
        category: 'trigger',
        inputs: [],
        outputs: [
            { id: 'out', label: 'Trigger', type: HandleTypes.TRIGGER }
        ],
        params: {
            label: { type: 'string', default: 'Press', label: 'Label' },
        },
        shaderKey: null,
    },

    slider: {
        type: 'slider',
        label: 'Slider',
        category: 'trigger',
        inputs: [],
        outputs: [
            { id: 'out', label: 'Value', type: HandleTypes.FLOAT }
        ],
        params: {
            value: { type: 'float', default: 0.5, min: 0, max: 1, step: 0.01, label: 'Value' },
            min: { type: 'float', default: 0, min: -10000, max: 10000, step: 0.01, label: 'Min' },
            max: { type: 'float', default: 1, min: -10000, max: 10000, step: 0.01, label: 'Max' },
            step: { type: 'float', default: 0.01, min: 0.001, max: 100, step: 0.001, label: 'Step' },
            outputType: { type: 'select', default: 'float', options: ['float', 'int'], label: 'Output Type' },
        },
        shaderKey: null,
    },

    knob: {
        type: 'knob',
        label: 'Knob',
        category: 'trigger',
        compact: true,
        inputs: [],
        outputs: [
            { id: 'out', label: 'Value', type: HandleTypes.FLOAT }
        ],
        params: {
            value: { type: 'float', default: 0.5, min: 0, max: 1, step: 0.01, label: 'Value' },
            min: { type: 'float', default: 0, min: -10000, max: 10000, step: 0.01, label: 'Min' },
            max: { type: 'float', default: 1, min: -10000, max: 10000, step: 0.01, label: 'Max' },
            step: { type: 'float', default: 0.01, min: 0.001, max: 100, step: 0.001, label: 'Step' },
        },
        shaderKey: null,
    },

    onStart: {
        type: 'onStart',
        label: 'On Start (Init)',
        category: 'logic',
        inputs: [],
        outputs: [
            { id: 'out', label: 'Trigger', type: HandleTypes.FLOAT }
        ],
        params: {},
    },

    bang: {
        type: 'bang',
        label: 'Bang',
        category: 'trigger',
        compact: true,
        inputs: [],
        outputs: [
            { id: 'out', label: 'Trigger', type: HandleTypes.FLOAT }
        ],
        params: {
            label: { type: 'string', default: 'Bang!', label: 'Label' },
        },
        shaderKey: null,
    },

    toggle: {
        type: 'toggle',
        label: 'Toggle (Bool)',
        category: 'trigger',
        compact: true,
        inputs: [],
        outputs: [
            { id: 'out', label: 'State', type: HandleTypes.BOOL }
        ],
        params: {
            state: { type: 'bool', default: false, label: 'State' },
        },
        shaderKey: null,
    },

    edgeTrigger: {
        type: 'edgeTrigger',
        label: 'Edge -> Bang',
        category: 'trigger',
        compact: true,
        inputs: [
            { id: 'in', label: 'Bool', type: HandleTypes.BOOL }
        ],
        outputs: [
            { id: 'out', label: 'Trigger', type: HandleTypes.TRIGGER }
        ],
        params: {
            mode: { type: 'select', default: 'rising', options: ['rising', 'falling', 'both'], label: 'Edge' }
        },
        shaderKey: null,
    },

    changeTrigger: {
        type: 'changeTrigger',
        label: 'Change -> Bang',
        category: 'trigger',
        compact: true,
        inputs: [
            { id: 'in', label: 'Value', type: HandleTypes.FLOAT }
        ],
        outputs: [
            { id: 'out', label: 'Trigger', type: HandleTypes.TRIGGER }
        ],
        params: {
            threshold: { type: 'float', default: 0.1, min: 0.001, max: 100, step: 0.001, label: 'Threshold' }
        },
        shaderKey: null,
    },

    // ======================== LOGIC / COMPARE NODES ========================
    compare: {
        type: 'compare',
        label: 'Compare',
        category: 'math',
        inputs: [
            { id: 'a', label: 'A', type: HandleTypes.FLOAT },
            { id: 'b', label: 'B', type: HandleTypes.FLOAT },
        ],
        outputs: [
            { id: 'out', label: 'Bool', type: HandleTypes.BOOL }
        ],
        params: {
            op: { type: 'select', default: '>', options: ['>', '<', '>=', '<=', '==', '!='], label: 'Operator' },
        },
        shaderKey: null,
    },

    valueCondition: {
        type: 'valueCondition',
        label: 'If / Else',
        category: 'math',
        inputs: [
            { id: 'cond', label: 'Condition', type: HandleTypes.BOOL },
            { id: 'trueVal', label: 'True', type: HandleTypes.FLOAT, optional: true },
            { id: 'falseVal', label: 'False', type: HandleTypes.FLOAT, optional: true },
        ],
        outputs: [
            { id: 'out', label: 'Result', type: HandleTypes.FLOAT }
        ],
        params: {
            defaultTrue: { type: 'float', default: 1, min: -1000, max: 1000, step: 0.01, label: 'Def True' },
            defaultFalse: { type: 'float', default: 0, min: -1000, max: 1000, step: 0.01, label: 'Def False' },
        },
        shaderKey: null,
    },

    // ======================== MATH NODES ========================
    mathAdd: {
        type: 'mathAdd',
        label: 'Add',
        category: 'math',
        inputs: [
            { id: 'a', label: 'A', type: HandleTypes.FLOAT },
            { id: 'b', label: 'B', type: HandleTypes.FLOAT },
        ],
        outputs: [
            { id: 'out', label: 'Result', type: HandleTypes.FLOAT }
        ],
        params: {},
        shaderKey: null,
    },

    mathMultiply: {
        type: 'mathMultiply',
        label: 'Multiply',
        category: 'math',
        inputs: [
            { id: 'a', label: 'A', type: HandleTypes.FLOAT },
            { id: 'b', label: 'B', type: HandleTypes.FLOAT },
        ],
        outputs: [
            { id: 'out', label: 'Result', type: HandleTypes.FLOAT }
        ],
        params: {},
        shaderKey: null,
    },

    mathDivide: {
        type: 'mathDivide',
        label: 'Divide',
        category: 'math',
        inputs: [
            { id: 'a', label: 'A', type: HandleTypes.FLOAT },
            { id: 'b', label: 'B', type: HandleTypes.FLOAT },
        ],
        outputs: [
            { id: 'out', label: 'Result', type: HandleTypes.FLOAT }
        ],
        params: {},
        shaderKey: null,
    },

    mathSqrt: {
        type: 'mathSqrt',
        label: 'Sqrt',
        category: 'math',
        inputs: [
            { id: 'a', label: 'Value', type: HandleTypes.FLOAT },
        ],
        outputs: [
            { id: 'out', label: 'Result', type: HandleTypes.FLOAT }
        ],
        params: {},
        shaderKey: null,
    },

    mathMap: {
        type: 'mathMap',
        label: 'Map',
        category: 'math',
        inputs: [
            { id: 'value', label: 'Value', type: HandleTypes.FLOAT },
        ],
        outputs: [
            { id: 'out', label: 'Result', type: HandleTypes.FLOAT }
        ],
        params: {
            inMin: { type: 'float', default: 0, min: -10000, max: 10000, step: 0.01, label: 'In Min' },
            inMax: { type: 'float', default: 1, min: -10000, max: 10000, step: 0.01, label: 'In Max' },
            outMin: { type: 'float', default: 0, min: -10000, max: 10000, step: 0.01, label: 'Out Min' },
            outMax: { type: 'float', default: 1, min: -10000, max: 10000, step: 0.01, label: 'Out Max' },
        },
        shaderKey: null,
    },

    mathClamp: {
        type: 'mathClamp',
        label: 'Clamp',
        category: 'math',
        inputs: [
            { id: 'value', label: 'Value', type: HandleTypes.FLOAT },
        ],
        outputs: [
            { id: 'out', label: 'Result', type: HandleTypes.FLOAT }
        ],
        params: {
            min: { type: 'float', default: 0, min: -10000, max: 10000, step: 0.01, label: 'Min' },
            max: { type: 'float', default: 1, min: -10000, max: 10000, step: 0.01, label: 'Max' },
        },
        shaderKey: null,
    },

    mathWrap: {
        type: 'mathWrap',
        label: 'Wrap',
        category: 'math',
        inputs: [
            { id: 'value', label: 'Value', type: HandleTypes.FLOAT },
        ],
        outputs: [
            { id: 'out', label: 'Result', type: HandleTypes.FLOAT }
        ],
        params: {
            min: { type: 'float', default: 0, min: -10000, max: 10000, step: 0.01, label: 'Min' },
            max: { type: 'float', default: 1, min: -10000, max: 10000, step: 0.01, label: 'Max' },
        },
        shaderKey: null,
    },

    // ======================== TYPE CONVERSION ========================
    floatToInt: {
        type: 'floatToInt',
        label: 'Float → Int',
        category: 'math',
        compact: true,
        inputs: [
            { id: 'in', label: 'Float', type: HandleTypes.FLOAT },
        ],
        outputs: [
            { id: 'out', label: 'Int', type: HandleTypes.INT }
        ],
        params: {
            mode: { type: 'select', default: 'round', options: ['round', 'floor', 'ceil', 'truncate'], label: 'Mode' },
            clampMin: { type: 'int', default: -2147483648, min: -2147483648, max: 2147483647, step: 1, label: 'Clamp Min' },
            clampMax: { type: 'int', default: 2147483647, min: -2147483648, max: 2147483647, step: 1, label: 'Clamp Max' },
        },
        shaderKey: null,
    },

    intToFloat: {
        type: 'intToFloat',
        label: 'Int → Float',
        category: 'math',
        inputs: [
            { id: 'in', label: 'Int', type: HandleTypes.INT },
        ],
        outputs: [
            { id: 'out', label: 'Float', type: HandleTypes.FLOAT }
        ],
        params: {},
        shaderKey: null,
    },

    // ======================== UV NODES ========================
    uvGenerator: {
        type: 'uvGenerator',
        label: 'UV Generator',
        category: 'uv',
        inputs: [],
        outputs: [
            { id: 'out', label: 'UV Map', type: HandleTypes.UV_MAP }
        ],
        params: {},
        shaderKey: 'uvGenerator',
        isUvNode: true,
    },

    uvTransform: {
        type: 'uvTransform',
        label: 'UV Transform',
        category: 'uv',
        inputs: [
            { id: 'uvIn', label: 'UV Map', type: HandleTypes.UV_MAP, optional: true },
            { id: 'in', label: 'Image (Legacy)', type: HandleTypes.IMAGE, optional: true },
        ],
        outputs: [
            { id: 'out', label: 'UV Map', type: HandleTypes.UV_MAP }
        ],
        params: {
            scaleX: { type: 'float', default: 1, min: 0.01, max: 10, step: 0.01, label: 'Scale X' },
            scaleY: { type: 'float', default: 1, min: 0.01, max: 10, step: 0.01, label: 'Scale Y' },
            rotation: { type: 'float', default: 0, min: 0, max: 360, step: 1, label: 'Rotation (°)' },
            translateX: { type: 'float', default: 0, min: -2, max: 2, step: 0.01, label: 'Translate X' },
            translateY: { type: 'float', default: 0, min: -2, max: 2, step: 0.01, label: 'Translate Y' },
        },
        shaderKey: 'uvTransform',
        isUvNode: true,
    },

    uvRepeat: {
        type: 'uvRepeat',
        label: 'UV Repeat',
        category: 'uv',
        inputs: [
            { id: 'uvIn', label: 'UV Map', type: HandleTypes.UV_MAP, optional: true },
            { id: 'in', label: 'Image (Legacy)', type: HandleTypes.IMAGE, optional: true },
        ],
        outputs: [
            { id: 'out', label: 'UV Map', type: HandleTypes.UV_MAP }
        ],
        params: {
            repeatX: { type: 'float', default: 2, min: 0.1, max: 50, step: 0.1, label: 'Repeat X' },
            repeatY: { type: 'float', default: 2, min: 0.1, max: 50, step: 0.1, label: 'Repeat Y' },
            mirror: { type: 'bool', default: false, label: 'Mirror' },
            offsetX: { type: 'float', default: 0, min: 0, max: 1, step: 0.01, label: 'Offset X' },
            offsetY: { type: 'float', default: 0, min: 0, max: 1, step: 0.01, label: 'Offset Y' },
        },
        shaderKey: 'uvRepeat',
        isUvNode: true,
    },

    uvGlitch: {
        type: 'uvGlitch',
        label: 'UV Glitch',
        category: 'uv',
        inputs: [
            { id: 'uvIn', label: 'UV Map', type: HandleTypes.UV_MAP, optional: true },
            { id: 'in', label: 'Image (Legacy)', type: HandleTypes.IMAGE, optional: true },
        ],
        outputs: [
            { id: 'out', label: 'UV Map', type: HandleTypes.UV_MAP }
        ],
        params: {
            blockSize: { type: 'int', default: 8, min: 1, max: 128, step: 1, label: 'Block Size' },
            intensity: { type: 'float', default: 0.1, min: 0, max: 1, step: 0.01, label: 'Intensity' },
            seed: { type: 'float', default: 0, min: 0, max: 1000, step: 0.1, label: 'Seed' },
            direction: { type: 'select', default: 'horizontal', options: ['horizontal', 'vertical', 'both'], label: 'Direction' },
        },
        shaderKey: 'uvGlitch',
        isUvNode: true,
    },

    uvPolar: {
        type: 'uvPolar',
        label: 'UV Polar',
        category: 'uv',
        inputs: [
            { id: 'uvIn', label: 'UV Map', type: HandleTypes.UV_MAP, optional: true },
            { id: 'in', label: 'Image (Legacy)', type: HandleTypes.IMAGE, optional: true },
        ],
        outputs: [
            { id: 'out', label: 'UV Map', type: HandleTypes.UV_MAP }
        ],
        params: {
            mode: { type: 'select', default: 'toPolar', options: ['toPolar', 'fromPolar'], label: 'Mode' },
            centerX: { type: 'float', default: 0.5, min: 0, max: 1, step: 0.01, label: 'Center X' },
            centerY: { type: 'float', default: 0.5, min: 0, max: 1, step: 0.01, label: 'Center Y' },
        },
        shaderKey: 'uvPolar',
        isUvNode: true,
    },

    // Texture Sampler — takes an Image + UV Map and emits a warped Image
    textureSampler: {
        type: 'textureSampler',
        label: 'Texture Sampler',
        category: 'uv',
        inputs: [
            { id: 'in', label: 'Image', type: HandleTypes.IMAGE },
            { id: 'uvIn', label: 'UV Map', type: HandleTypes.UV_MAP },
        ],
        outputs: [
            { id: 'out', label: 'Image', type: HandleTypes.IMAGE }
        ],
        params: {
            wrapMode: { type: 'select', default: 'clamp', options: ['clamp', 'repeat', 'mirror'], label: 'Wrap Mode' },
        },
        shaderKey: 'textureSampler',
    },

    // ======================== UTILITY / VISUALIZATION NODES ========================
    numberMonitor: {
        type: 'numberMonitor',
        label: 'Number Monitor',
        category: 'utility',
        inputs: [
            { id: 'in', label: 'Value', type: HandleTypes.FLOAT },
        ],
        outputs: [
            { id: 'out', label: 'Value', type: HandleTypes.FLOAT }
        ],
        params: {
            decimals: { type: 'int', default: 3, min: 0, max: 10, step: 1, label: 'Decimals' },
            showGraph: { type: 'bool', default: true, label: 'Show Graph' },
        },
        shaderKey: null,
        isPassthrough: true, // passes value through
    },

    preview: {
        type: 'preview',
        label: 'Preview',
        category: 'utility',
        inputs: [
            { id: 'in', label: 'Image', type: HandleTypes.IMAGE },
        ],
        outputs: [
            { id: 'out', label: 'Image', type: HandleTypes.IMAGE }
        ],
        params: {},
        shaderKey: 'passthrough', // Uses passthrough shader to copy image
        isPassthrough: true,
    },

    // ======================== DEVICE INPUT NODES ========================
    accelerometer: {
        type: 'accelerometer',
        label: 'Accelerometer',
        category: 'trigger',
        compact: true,
        inputs: [],
        outputs: [
            { id: 'x', label: 'X', type: HandleTypes.FLOAT },
            { id: 'y', label: 'Y', type: HandleTypes.FLOAT },
            { id: 'z', label: 'Z', type: HandleTypes.FLOAT },
        ],
        params: {
            sensitivity: { type: 'float', default: 1.0, min: 0.01, max: 10, step: 0.01, label: 'Sensitivity' },
            smoothing: { type: 'float', default: 0.5, min: 0, max: 0.99, step: 0.01, label: 'Smoothing' },
        },
        shaderKey: null,
        isAnimated: true,
    },

    xyPad: {
        type: 'xyPad',
        label: 'XY Pad',
        category: 'trigger',
        inputs: [],
        outputs: [
            { id: 'x', label: 'X', type: HandleTypes.FLOAT },
            { id: 'y', label: 'Y', type: HandleTypes.FLOAT },
        ],
        params: {
            x: { type: 'float', default: 0.5, min: 0, max: 1, step: 0.001, label: 'X' },
            y: { type: 'float', default: 0.5, min: 0, max: 1, step: 0.001, label: 'Y' },
            minX: { type: 'float', default: 0, min: -1000, max: 1000, step: 0.01, label: 'Min X' },
            maxX: { type: 'float', default: 1, min: -1000, max: 1000, step: 0.01, label: 'Max X' },
            minY: { type: 'float', default: 0, min: -1000, max: 1000, step: 0.01, label: 'Min Y' },
            maxY: { type: 'float', default: 1, min: -1000, max: 1000, step: 0.01, label: 'Max Y' },
        },
        shaderKey: null,
    },
}

// ======================== CATEGORIES ========================
export const NODE_CATEGORIES = {
    image: { label: 'Image', icon: '🖼️', color: '#00d4ff' },
    animation: { label: 'Animation', icon: '⏱️', color: '#9b59b6' },
    trigger: { label: 'Controls', icon: '🎛️', color: '#2ecc71' },
    logic: { label: 'Logic', icon: '🧠', color: '#f39c12' },
    math: { label: 'Math', icon: '🔢', color: '#ff9a2e' },
    uv: { label: 'UV / Texture', icon: '🌀', color: '#ff6eb4' },
    utility: { label: 'Utility', icon: '🔍', color: '#a0a0b0' },
}

/**
 * Get a node definition by type.
 */
export function getNodeDef(type) {
    return NODE_DEFS[type] || null
}

/**
 * Get all node definitions.
 */
export function getAllNodeDefs() {
    return { ...NODE_DEFS }
}

/**
 * Get node definitions filtered by category.
 */
export function getNodesByCategory(category) {
    return Object.values(NODE_DEFS).filter(n => n.category === category)
}

export default NODE_DEFS
