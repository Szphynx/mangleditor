# Writing Compatible Shaders for Image Mangler

This guide outlines how to write GLSL fragment shaders that perfectly plug-and-play with the Image Mangler pipeline, automatically mapping UI parameters to shader uniforms without writing manual JavaScript plumbing.

## 1. The Core Architecture

The Image Mangler engine uses a dynamic ShaderMaterial generator (`shaderPipeline.js`). 
It handles a few things **automatically for you**:

- Vertex Shaders (Provides standard full-screen quad).
- Resolution and Time uniforms.
- **Auto-blending**: The engine automatically injects blending code to merge your effect with the original image based on a `blendAmount` UI parameter.

## 2. Standard Boilerplate

Every new shader in `src/shaders/` should begin with this boilerplate:

```glsl
precision highp float;

// Provided by default vertex shader
varying vec2 vUv;

// Standard Engine Uniforms (Always Available)
uniform sampler2D uIn;        // The primary incoming image/node connection
uniform vec2 uResolution;     // Canvas width and height
uniform float uTime;          // Seconds since engine start
```

## 3. UI to Shader Variables: The "u" Prefix Rule

The most powerful feature of the engine is auto-uniform mapping. When you define `params` for your node in `nodeRegistry.js`, the engine converts the UI parameter key into a GLSL uniform by capitalizing the first letter and prepending a `u`.

**Example `nodeRegistry.js`:**
```javascript
params: {
    noiseStrength: { type: 'float', default: 0.5 },
    enableGlitch: { type: 'bool', default: false },
    themeColor: { type: 'color', default: '#ff0000' }
}
```

**Corresponding Shader Declarations:**
```glsl
uniform float uNoiseStrength;
uniform float uEnableGlitch; // Bools arrive as 0.0 or 1.0 floats!
uniform vec3 uThemeColor;    // Hex colors arrive as RGB float vectors
```

### Supported Data Types
- `float` -> `uniform float`
- `int` -> `uniform float` (For WebGL 1 compatibility, ints are passed as floats)
- `bool` -> `uniform float` (`0.0` or `1.0`)
- `color` -> `uniform vec3` (Converted from `#RRGGBB` hex)
- `select` -> `uniform float` (Passed as the integer index of the chosen option)

## 4. Multiple Image Inputs

If you want your shader to take a second image (like a mask or overlay texture), define an input handle named `texture`. 
The engine will then supply two special uniforms:

```glsl
uniform sampler2D uTexture;
uniform bool uTextureConnected; 
```
*Note: Always use `if (uTextureConnected)` before applying the secondary texture to prevent the shader compiling black when a user hasn't plugged a cable in yet.*

## 5. The "No-Blend" Rule

**Do not write a manual mix function for opacity in your shader.**

The Image Mangler pipeline parses your GLSL and forcibly injects:
```glsl
uniform float uBlendAmount;
// ...
gl_FragColor = mix(originalColor, effectColor, uBlendAmount);
```
Just construct your `vec3` or `vec4` effect as if it's 100% opaque, write it to `gl_FragColor`, and add `blendAmount` to your UI parameters in `nodeRegistry.js`. The engine does the rest.

## 6. Strict WebGL 1.0 Compliance constraints

Because the app is built on a broader WebGL 1 fallback context, standard GLSL ES 1.0 rules apply:
1. **No Integer Modulo**: You cannot use `int a % int b`. Always use `mod(float a, float b)`.
2. **Loops Must Have Constant Maximums**: `for (int i=0; i < uSamples; i++)` is illegal. It must be `for (int i=0; i < 20; i++) { if (float(i) >= uSamples) break; }`.
3. **Strict Typography**: You cannot math an `int` with a `float` or divide by `2` (use `2.0`). Always cast ints logic to floats (`float(i)`).
