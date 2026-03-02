// UV Transform — scale, rotate, translate UVs
precision highp float;
varying vec2 vUv;
uniform sampler2D uIn;
uniform float uScaleX;
uniform float uScaleY;
uniform float uRotation;    // degrees
uniform float uTranslateX;
uniform float uTranslateY;

void main() {
  vec2 uv = vUv;

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

  gl_FragColor = texture2D(uIn, uv);
}
