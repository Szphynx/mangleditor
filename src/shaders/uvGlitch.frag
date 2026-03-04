// UV Glitch — random block displacement of UV coordinates. Outputs a UV map (RG channels).
// Reads an upstream UV map (uUvIn) or falls back to screen UVs.
precision highp float;
varying vec2 vUv;
uniform sampler2D uUvIn;
uniform float uBlockSize;
uniform float uIntensity;
uniform float uSeed;
uniform int uDirection; // 0=horizontal, 1=vertical, 2=both
uniform int uHasUvIn;   // 1 if UV map is connected, 0 = use screen UV

float hash(vec2 p) {
  return fract(sin(dot(p + uSeed, vec2(127.1, 311.7))) * 43758.5453);
}

void main() {
  vec2 uv = uHasUvIn == 1 ? texture2D(uUvIn, vUv).rg : vUv;
  float bs = max(uBlockSize, 1.0) / 256.0;

  vec2 block = floor(uv / bs);
  float h = hash(block);

  if (h > 1.0 - uIntensity) {
    float offset = (hash(block + 0.5) - 0.5) * uIntensity * 0.5;
    if (uDirection == 0) {
      uv.x += offset;
    } else if (uDirection == 1) {
      uv.y += offset;
    } else {
      uv.x += offset;
      uv.y += (hash(block + 1.0) - 0.5) * uIntensity * 0.5;
    }
  }

  uv = fract(uv);
  // Output UV map as RG
  gl_FragColor = vec4(uv.x, uv.y, 0.0, 1.0);
}
