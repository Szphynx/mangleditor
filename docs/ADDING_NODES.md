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

## 2. Register the Shader in the Pipeline
Open `src/engine/shaderPipeline.js`:
1. **Import** the shader at the top of the file: 
   `import myNewShaderFrag from '../shaders/myNewShader.frag?raw'`
2. **Add** it to `SHADER_MAP` near line 40:
   ```javascript
   const SHADER_MAP = {
       // ... existing nodes ...
       myNewShader: myNewShaderFrag
   }
   ```

## 3. Expose the Node in the UI Registry
Open `src/engine/nodeRegistry.js`:
Locate the `NODE_DEFS` object around line 150. Add your new node block inside it under the correct category (e.g., `category: 'image'`), taking care to place it neatly between existing keys (for instance, after `crt:`).
```javascript
export const NODE_DEFS = {
    // ... other nodes ...
    myNewShader: {
        type: 'myNewShader',
        label: 'My Cool Shader',
        category: 'image', // Must match one of the NODE_CATEGORIES keys
        inputs: [
            { id: 'in', label: 'Image', type: HandleTypes.IMAGE },
            // Add secondary image inputs if necessary
        ],
        outputs: [
            { id: 'out', label: 'Image', type: HandleTypes.IMAGE }
        ],
        params: {
            parameterName: { type: 'float', default: 12.0, min: 4.0, max: 48.0, step: 1.0, label: 'Param Label' },
            overlayColor: { type: 'color', default: '#ff0000', label: 'Hex UI Color Picker' },
            enableMode: { type: 'bool', default: false, label: 'Enable Mode' },
        },
        shaderKey: 'myNewShader', // Crux: This matches the SHADER_MAP key
    },
}
```

## 4. Run the Dev Server
The `NodePalette.vue` will automatically pick up the new node from `NODE_DEFS` on hot-reload. The `shaderPipeline.js` will automatically loop over your `params` object and inject them into the shader via the `u` prefix naming convention!
