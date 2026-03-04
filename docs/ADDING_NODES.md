# How to Add a New Shader Node to Image Mangler

To add a new shader node successfully without errors or silent failures, follow these precise steps. 

## 1. Create the GLSL File
Add your new shader code into the `src/shaders/` folder (e.g., `myNewShader.frag`).
**Crucial Rules for Editor Shaders:**
1. The primary texture input *must* be named `uniform sampler2D uIn;`
2. All parameters exposed to the UI *must* use WebGL1 floats (or explicit int casts) and be prefixed with `u` (e.g., if the UI knob is `cellSize`, the shader uniform must be `uniform float uCellSize;`).
3. For WebGL 1.0 support, you must use standard float constants in loops (e.g., `for (int i=0; i<10; i++)`).
4. Avoid using Javascript reserved keywords directly.
5. If you want a secondary image overlay, use `uniform sampler2D uTexture;` and `uniform bool uTextureConnected;` to gracefully handle cases where the secondary input is empty.

### UV Node Shaders (special case)
UV nodes output a **UV map** (coordinate data stored in RG channels) instead of pixel colors. Rules:
- Do NOT sample `uIn` — output `vec4(uv.x, uv.y, 0.0, 1.0)` instead.
- Read an upstream UV map via `uniform sampler2D uUvIn;` and `uniform int uHasUvIn;`.
- Fall back to `vUv` when `uHasUvIn == 0` (no upstream UV connected).
- Mark the node in the registry with `isUvNode: true` (skips the image-input guard in the pipeline).

## 2. Register the Shader in the Pipeline
Open `src/engine/shaderPipeline.js`:
1. **Import** the shader at the top of the file: 
   `import myNewShaderFrag from '../shaders/myNewShader.frag?raw'`
2. **Add** it to `SHADER_MAP`:
   ```javascript
   const SHADER_MAP = {
       // ... existing nodes ...
       myNewShader: myNewShaderFrag
   }
   ```
3. **If it's a UV node**, add its key to `NO_BLEND_KEYS` so the auto-blend injector is skipped:
   ```javascript
   const NO_BLEND_KEYS = new Set(['passthrough', 'feedback', 'uvTransform', ... 'myNewUvShader'])
   ```

## 3. Expose the Node in the UI Registry
Open `src/engine/nodeRegistry.js`.

### Standard Image Node
```javascript
myNewShader: {
    type: 'myNewShader',
    label: 'My Cool Shader',
    category: 'image',
    inputs: [
        { id: 'in', label: 'Image', type: HandleTypes.IMAGE },
    ],
    outputs: [
        { id: 'out', label: 'Image', type: HandleTypes.IMAGE }
    ],
    params: {
        parameterName: { type: 'float', default: 12.0, min: 4.0, max: 48.0, step: 1.0, label: 'Param Label' },
        overlayColor: { type: 'color', default: '#ff0000', label: 'Hex UI Color Picker' },
        enableMode: { type: 'bool', default: false, label: 'Enable Mode' },
    },
    shaderKey: 'myNewShader',
},
```

### UV Map Node
UV nodes produce coordinate maps (lime-green cables). Use `HandleTypes.UV_MAP` and set `isUvNode: true`.
```javascript
myUvEffect: {
    type: 'myUvEffect',
    label: 'My UV Effect',
    category: 'uv',
    inputs: [
        { id: 'uvIn', label: 'UV Map', type: HandleTypes.UV_MAP, optional: true },
    ],
    outputs: [
        { id: 'out', label: 'UV Map', type: HandleTypes.UV_MAP }
    ],
    params: {
        strength: { type: 'float', default: 1.0, min: 0, max: 2, step: 0.01, label: 'Strength' },
    },
    shaderKey: 'myUvEffect',
    isUvNode: true,  // Tells the pipeline to skip the image-input guard
},
```

## 4. Handle Types Reference

| Type | Constant | Cable Color | Compatible With |
|---|---|---|---|
| Image | `HandleTypes.IMAGE` | Cyan `#00d4ff` | Image only |
| Float | `HandleTypes.FLOAT` | Orange `#ff9a2e` | Float, (Int→Float cast) |
| Int | `HandleTypes.INT` | Yellow `#ffe14d` | Int, Float |
| UV Map | `HandleTypes.UV_MAP` | Lime `#7fff6e` | UV Map, Image (Sampler input) |
| Trigger | `HandleTypes.TRIGGER` | White `#ffffff` | Trigger only |
| Vec2 | `HandleTypes.VEC2` | Pink `#ff6eb4` | Vec2 only |

## 5. UV Chain Workflow

UV nodes chain together coordinate math before the image is ever touched:

```
[UV Generator] → [UV Transform] → [UV Polar] → [Texture Sampler] ← [Image Input]
                                                       ↓
                                                  Warped Image
```

The **Texture Sampler** node is the final step: it reads a UV map and samples an image using those coordinates, outputting the warped image.

## 6. Run the Dev Server
The `NodePalette.vue` automatically picks up new nodes from `NODE_DEFS` on hot-reload. The `shaderPipeline.js` automatically loops over your `params` object and injects them into the shader via the `u` prefix naming convention.
