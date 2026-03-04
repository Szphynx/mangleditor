// UV Transform — warps an incoming UV map with scale, rotate, translate.
// Reads UV coordinates from uUvIn (or vUv if not connected) and outputs a new UV map.
precision highp float;
varying vec2 vUv;
uniform sampler2D uUvIn;
uniform float uScaleX;
uniform float uScaleY;
uniform float uRotation;    // degrees
uniform float uTranslateX;
uniform float uTranslateY;
uniform int uHasUvIn;       // 1 if a UV map is connected, 0 = use screen UV

void main() {
  // Read base UV: from upstream UV map or screen coordinates
  vec2 uv = uHasUvIn == 1 ? texture2D(uUvIn, vUv).rg : vUv;

  // Translate
  uv -= vec2(uTranslateX, uTranslateY);

  // Center for rotation/scale
  uv -= 0.5;

  // Scale
  uv /= vec2(max(uScaleX, 0.001), max(uScaleY, 0.001));

  // Rotate
  float rad = uRotation * 3.14159265 / 180.0;
  float c = cos(rad);
  float s = sin(rad);
  uv = mat2(c, -s, s, c) * uv;

  // Uncenter
  uv += 0.5;

  // Output new UV map as RG
  gl_FragColor = vec4(uv.x, uv.y, 0.0, 1.0);
}
