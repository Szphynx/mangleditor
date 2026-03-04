// UV Polar — cartesian ↔ polar coordinate conversion on a UV map.
// Outputs a new UV map (RG channels).
precision highp float;
varying vec2 vUv;
uniform sampler2D uUvIn;
uniform int uMode;       // 0=toPolar, 1=fromPolar
uniform float uCenterX;
uniform float uCenterY;
uniform int uHasUvIn;   // 1 if UV map is connected, 0 = use screen UV

#define PI 3.14159265359
#define TAU 6.28318530718

void main() {
  // Read base UV: from upstream UV map or screen coordinates
  vec2 base = uHasUvIn == 1 ? texture2D(uUvIn, vUv).rg : vUv;
  vec2 center = vec2(uCenterX, uCenterY);
  vec2 uv;

  if (uMode == 0) {
    // Cartesian to Polar
    vec2 delta = base - center;
    float radius = length(delta) * 2.0;
    float angle = atan(delta.y, delta.x);
    uv = vec2(angle / TAU + 0.5, radius);
  } else {
    // Polar to Cartesian
    float angle = (base.x - 0.5) * TAU;
    float radius = base.y * 0.5;
    uv = center + vec2(cos(angle), sin(angle)) * radius;
  }

  // Output new UV map as RG
  gl_FragColor = vec4(uv.x, uv.y, 0.0, 1.0);
}
