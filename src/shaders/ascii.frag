// ASCII Art — bitmap glyph post-processing effect
precision highp float;
varying vec2 vUv;
uniform sampler2D uIn;
uniform sampler2D uTexture;
uniform bool uTextureConnected;
uniform vec2 uResolution;
uniform float uTime;

// --- ASCII Controls ---
// Cell size in pixels (resolution of the ASCII grid)
uniform float uCellSize;       // e.g. 8.0 – 32.0
// Brightness threshold shift: negative = more chars, positive = fewer
uniform float uBrightness;     // e.g. -0.3 to 0.3
// Color mode: 0 = original color tinted, 1 = single fg/bg color
uniform float uColorMode;
// Foreground color (used when uColorMode == 1.0)
uniform vec3 uFgColor;         // e.g. vec3(0.0, 1.0, 0.4) — green terminal
// Background color
uniform vec3 uBgColor;         // e.g. vec3(0.0)
// Intensity of the ASCII effect vs original (0 = passthrough, 1 = full ASCII)
uniform float uIntensity;

// ─── 5×5 Bitmap Character Renderer ─────────────────────────────────────────

float renderChar(float n, vec2 p) {
  p = floor(p * vec2(4.0, -4.0) + 2.5);
  if (clamp(p.x, 0.0, 4.0) == p.x && clamp(p.y, 0.0, 4.0) == p.y) {
    float bit = p.x + 5.0 * p.y;
    float shifted = floor(n / pow(2.0, bit));
    if (mod(shifted, 2.0) >= 1.0) return 1.0;
  }
  return 0.0;
}

void main() {
  vec2 fragCoord = vUv * uResolution;
  float cell = max(uCellSize, 2.0);

  vec2 cellOriginUV = floor(fragCoord / cell) * cell / uResolution;
  vec4 srcColor = vec4(0.0);

  // 2×2 average sample
  for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 2; j++) {
      float dx = 0.25 + float(j) * 0.5;
      float dy = 0.25 + float(i) * 0.5;
      vec2 sampleUV = cellOriginUV + (vec2(dx, dy) * cell) / uResolution;
      sampleUV = clamp(sampleUV, 0.0, 1.0);
      srcColor += texture2D(uIn, sampleUV);
    }
  }
  srcColor /= 4.0;

  if (uTextureConnected) {
    vec4 texSample = texture2D(uTexture, cellOriginUV);
    srcColor = mix(srcColor, texSample, 0.5);
  }

  float luma = dot(srcColor.rgb, vec3(0.299, 0.587, 0.114));
  luma = clamp(luma + uBrightness, 0.0, 1.0);

  // Using floats for bitmasks to avoid WebGL1 int precision issues
  float charBits = 0.0;
  if (luma > 0.11) charBits = 4096.0;      // '.'
  if (luma > 0.22) charBits = 65600.0;     // ':'
  if (luma > 0.33) charBits = 332772.0;    // '*'
  if (luma > 0.44) charBits = 15255086.0;  // 'o'
  if (luma > 0.55) charBits = 23385164.0;  // '&'
  if (luma > 0.66) charBits = 15252014.0;  // '8'
  if (luma > 0.77) charBits = 13199452.0;  // '@'
  if (luma > 0.88) charBits = 11512810.0;  // '#'

  vec2 subCell = mod(fragCoord / cell, 1.0) * 2.0 - 1.0;
  float glyph = renderChar(charBits, subCell);

  vec3 asciiColor;
  if (uColorMode < 0.5) {
    asciiColor = mix(uBgColor, srcColor.rgb, glyph);
  } else {
    asciiColor = mix(uBgColor, uFgColor * luma, glyph);
  }

  vec3 finalColor = mix(srcColor.rgb, asciiColor, uIntensity);
  gl_FragColor = vec4(finalColor, srcColor.a);
}
