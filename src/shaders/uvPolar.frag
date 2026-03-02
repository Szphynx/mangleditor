// UV Polar — cartesian to polar and polar to cartesian conversion
precision highp float;
varying vec2 vUv;
uniform sampler2D uIn;
uniform int uMode;       // 0=toPolar, 1=fromPolar
uniform float uCenterX;
uniform float uCenterY;

#define PI 3.14159265359
#define TAU 6.28318530718

void main() {
  vec2 center = vec2(uCenterX, uCenterY);
  vec2 uv;

  if (uMode == 0) {
    // Cartesian to Polar
    vec2 delta = vUv - center;
    float radius = length(delta) * 2.0;
    float angle = atan(delta.y, delta.x);
    uv = vec2(angle / TAU + 0.5, radius);
  } else {
    // Polar to Cartesian
    float angle = (vUv.x - 0.5) * TAU;
    float radius = vUv.y * 0.5;
    uv = center + vec2(cos(angle), sin(angle)) * radius;
  }

  uv = clamp(uv, 0.0, 1.0);
  gl_FragColor = texture2D(uIn, uv);
}
