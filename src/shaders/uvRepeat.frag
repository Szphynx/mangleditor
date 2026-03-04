// UV Repeat — tile + mirror UV coordinates. Outputs a UV map (RG channels).
// Reads an upstream UV map (uUvIn) or falls back to screen UVs.
precision highp float;
varying vec2 vUv;
uniform sampler2D uUvIn;
uniform float uRepeatX;
uniform float uRepeatY;
uniform float uMirror;
uniform float uOffsetX;
uniform float uOffsetY;
uniform int uHasUvIn;   // 1 if UV map is connected, 0 = use screen UV

void main() {
  vec2 base = uHasUvIn == 1 ? texture2D(uUvIn, vUv).rg : vUv;
  vec2 uv = base * vec2(uRepeatX, uRepeatY) + vec2(uOffsetX, uOffsetY);

  if (uMirror > 0.5) {
    vec2 cell = floor(uv);
    uv = fract(uv);
    if (mod(cell.x, 2.0) >= 1.0) uv.x = 1.0 - uv.x;
    if (mod(cell.y, 2.0) >= 1.0) uv.y = 1.0 - uv.y;
  } else {
    uv = fract(uv);
  }

  // Output UV map as RG
  gl_FragColor = vec4(uv.x, uv.y, 0.0, 1.0);
}
