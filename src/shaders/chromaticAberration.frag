// Chromatic Aberration — RGB channel offset
precision highp float;
varying vec2 vUv;
uniform sampler2D uIn;
uniform float uIntensity;
uniform int uDirection; // 0=radial, 1=horizontal, 2=vertical
uniform float uCenterX;
uniform float uCenterY;
uniform vec2 uResolution;

void main() {
  vec2 center = vec2(uCenterX, uCenterY);
  vec2 toCenter = vUv - center;
  float dist = length(toCenter);
  vec2 dir;

  float pixelSize = uIntensity / max(uResolution.x, uResolution.y);

  if (uDirection == 0) {
    // Radial
    dir = normalize(toCenter + 0.0001) * dist * pixelSize;
  } else if (uDirection == 1) {
    // Horizontal
    dir = vec2(pixelSize, 0.0);
  } else {
    // Vertical
    dir = vec2(0.0, pixelSize);
  }

  float r = texture2D(uIn, vUv + dir).r;
  float g = texture2D(uIn, vUv).g;
  float b = texture2D(uIn, vUv - dir).b;
  float a = texture2D(uIn, vUv).a;

  gl_FragColor = vec4(r, g, b, a);
}
