// ASCII Art v2 — bitmap glyphs with palette color matching
precision highp float;
varying vec2 vUv;
uniform sampler2D uIn;
uniform sampler2D uTexture;
uniform bool uTextureConnected;
uniform vec2 uResolution;
uniform float uTime;

uniform float uCellSize;        // Grid resolution, e.g. 8.0–32.0
uniform float uBrightness;      // Luminance shift, -0.5 to 0.5
uniform float uColorMode;       // 0 = palette fg/bg, 1 = original color, 2 = flat fg/bg
uniform vec3 uFgColor;          // Flat foreground (used when uColorMode == 2.0)
uniform vec3 uBgColor;          // Background color (all modes)
uniform float uExtendedPalette; // 0 = 10 chars, 1 = 18 chars (denser set)
uniform float uIntensity;       // Blend ASCII vs original

// ── 5×5 Bitmap glyph renderer ───────────────────────────────────────────────
float renderChar(float n, vec2 p) {
  p = floor(p * vec2(4.0, -4.0) + 2.5);
  if (clamp(p.x, 0.0, 4.0) == p.x && clamp(p.y, 0.0, 4.0) == p.y) {
    float bit = p.x + 5.0 * p.y;
    float shifted = floor(n / pow(2.0, bit));
    if (mod(shifted, 2.0) >= 1.0) return 1.0;
  }
  return 0.0;
}

// ── Char palette selection ───────────────────────────────────────────────────
// Basic 10:  ' ' . : - = + * # % @
// Extended 18 adds rounder, denser mid-range glyphs
float selectChar(float luma, float extended) {
  if (extended < 0.5) {
    // Basic 10-level set
    if (luma < 0.05) return 0.0;
    if (luma < 0.15) return 4096.0;        // '.'
    if (luma < 0.25) return 65600.0;       // ':'
    if (luma < 0.35) return 1182764.0;     // '-'
    if (luma < 0.45) return 1193046.0;     // '='
    if (luma < 0.55) return 332772.0;      // '+'
    if (luma < 0.65) return 332772.0;      // '*'
    if (luma < 0.75) return 11512810.0;    // '#'
    if (luma < 0.88) return 23385164.0;    // '%'
    return 13199452.0;                     // '@'
  } else {
    // Extended 18-level set — denser mid-range from ShaderToy palette
    if (luma < 0.03) return 0.0;           // ' '
    if (luma < 0.09) return 4096.0;        // '.'
    if (luma < 0.15) return 2184.0;        // '\''
    if (luma < 0.21) return 65600.0;       // ':'
    if (luma < 0.27) return 1182764.0;     // '-'
    if (luma < 0.33) return 4329476.0;     // '~'
    if (luma < 0.39) return 332772.0;      // '+'
    if (luma < 0.45) return 1193046.0;     // '='
    if (luma < 0.51) return 9082912.0;     // 'o'
    if (luma < 0.57) return 15255086.0;    // 'c'  (round, mid-dense)
    if (luma < 0.63) return 11512810.0;    // 'x'
    if (luma < 0.69) return 23385164.0;    // 'X'
    if (luma < 0.75) return 15252014.0;    // '8'
    if (luma < 0.80) return 11512810.0;    // '#'
    if (luma < 0.85) return 23385164.0;    // '%'
    if (luma < 0.90) return 13199452.0;    // '@'
    if (luma < 0.95) return 15252014.0;    // '$'
    return 33080895.0;                     // '█' (full block)
  }
}

// ── 16-color CGA palette ─────────────────────────────────────────────────────
vec3 cgaColor(int i) {
  if (i == 0)  return vec3(0.0,   0.0,   0.0);
  if (i == 1)  return vec3(0.667, 0.0,   0.0);
  if (i == 2)  return vec3(0.0,   0.667, 0.0);
  if (i == 3)  return vec3(0.667, 0.333, 0.0);
  if (i == 4)  return vec3(0.0,   0.0,   0.667);
  if (i == 5)  return vec3(0.667, 0.0,   0.667);
  if (i == 6)  return vec3(0.0,   0.667, 0.667);
  if (i == 7)  return vec3(0.667, 0.667, 0.667);
  if (i == 8)  return vec3(0.333, 0.333, 0.333);
  if (i == 9)  return vec3(1.0,   0.333, 0.333);
  if (i == 10) return vec3(0.333, 1.0,   0.333);
  if (i == 11) return vec3(1.0,   1.0,   0.333);
  if (i == 12) return vec3(0.333, 0.333, 1.0);
  if (i == 13) return vec3(1.0,   0.333, 1.0);
  if (i == 14) return vec3(0.333, 1.0,   1.0);
  return vec3(1.0, 1.0, 1.0);
}

int nearestCGA(vec3 color) {
  float best = 9999.0;
  int idx = 0;
  for (int i = 0; i < 16; i++) {
    float d = distance(color, cgaColor(i));
    if (d < best) { best = d; idx = i; }
  }
  return idx;
}

// Find the second-nearest CGA color (used as background)
int secondCGA(vec3 color, int foreIdx) {
  float best = 9999.0;
  int idx = 0;
  vec3 fg = cgaColor(foreIdx);
  for (int i = 0; i < 16; i++) {
    if (i == foreIdx) continue;
    // Bias toward colors that are darker than fg (more readable bg)
    float d = distance(color, cgaColor(i)) + max(0.0, distance(cgaColor(i), vec3(0.0)) - distance(fg, vec3(0.0))) * 0.5;
    if (d < best) { best = d; idx = i; }
  }
  return idx;
}

// ── Main ─────────────────────────────────────────────────────────────────────
void main() {
  vec2 fragCoord = vUv * uResolution;
  float cell = max(uCellSize, 2.0);

  vec2 cellOriginUV = floor(fragCoord / cell) * cell / uResolution;
  vec4 srcColor = vec4(0.0);

  // 2×2 average sample per cell
  for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 2; j++) {
      float dx = 0.25 + float(j) * 0.5;
      float dy = 0.25 + float(i) * 0.5;
      vec2 sampleUV = cellOriginUV + (vec2(dx, dy) * cell) / uResolution;
      srcColor += texture2D(uIn, clamp(sampleUV, 0.0, 1.0));
    }
  }
  srcColor /= 4.0;

  if (uTextureConnected) {
    srcColor = mix(srcColor, texture2D(uTexture, cellOriginUV), 0.5);
  }

  float luma = clamp(dot(srcColor.rgb, vec3(0.299, 0.587, 0.114)) + uBrightness, 0.0, 1.0);

  float charBits = selectChar(luma, uExtendedPalette);
  vec2 subCell = mod(fragCoord / cell, 1.0) * 2.0 - 1.0;
  float glyph = renderChar(charBits, subCell);

  // ── Colorize ──────────────────────────────────────────────────────────────
  vec3 asciiColor;
  if (uColorMode < 0.5) {
    // Palette mode: snap fg and bg to nearest CGA colors
    int fg = nearestCGA(srcColor.rgb);
    int bg = secondCGA(srcColor.rgb, fg);
    asciiColor = mix(cgaColor(fg), cgaColor(bg), glyph);
  } else if (uColorMode < 1.5) {
    // Original color mode: source color on dark background
    asciiColor = mix(uBgColor, srcColor.rgb, glyph);
  } else {
    // Flat mode: uniform fg color, definable bg
    asciiColor = mix(uBgColor, uFgColor * luma, glyph);
  }

  gl_FragColor = vec4(mix(srcColor.rgb, asciiColor, uIntensity), srcColor.a);
}
