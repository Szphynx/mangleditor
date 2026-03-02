// Levels — shadows/midtones/highlights per-channel adjustment
precision highp float;
varying vec2 vUv;
uniform sampler2D uIn;
uniform float uInputBlack;   // 0-255 range
uniform float uInputWhite;   // 0-255 range
uniform float uGamma;
uniform float uOutputBlack;  // 0-255 range
uniform float uOutputWhite;  // 0-255 range
uniform int uChannel;        // 0=master, 1=r, 2=g, 3=b

vec3 applyLevels(vec3 color) {
  float inBlack = uInputBlack / 255.0;
  float inWhite = uInputWhite / 255.0;
  float outBlack = uOutputBlack / 255.0;
  float outWhite = uOutputWhite / 255.0;
  float invGamma = 1.0 / max(uGamma, 0.01);

  // Normalize to input range
  vec3 c = clamp((color - inBlack) / max(inWhite - inBlack, 0.001), 0.0, 1.0);

  // Apply gamma
  c = pow(c, vec3(invGamma));

  // Map to output range
  c = outBlack + c * (outWhite - outBlack);

  return clamp(c, 0.0, 1.0);
}

void main() {
  vec4 color = texture2D(uIn, vUv);

  if (uChannel == 0) {
    // Master — apply to all channels
    color.rgb = applyLevels(color.rgb);
  } else if (uChannel == 1) {
    color.r = applyLevels(vec3(color.r)).r;
  } else if (uChannel == 2) {
    color.g = applyLevels(vec3(color.g)).r;
  } else if (uChannel == 3) {
    color.b = applyLevels(vec3(color.b)).r;
  }

  gl_FragColor = color;
}
