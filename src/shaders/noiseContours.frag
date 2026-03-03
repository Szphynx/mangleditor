// Smooth Noise Contours — antialiased simplex noise contour lines
// Original by Shane / ShaderToy, adapted for Image Mangler
precision highp float;

varying vec2 vUv;

uniform sampler2D uIn;
uniform sampler2D uTexture;
uniform bool uTextureConnected;
uniform vec2 uResolution;
uniform float uTime;

uniform float uSpeed;         // Animation speed (default 1.0)
uniform float uScale;         // Noise scale (default 1.0)
uniform float uPalNum;        // Contour band count (default 9.0, range 2–20)
uniform float uEdgeStrength;  // Dark edge sharpness (default 5.0)
uniform float uHighlight;     // Rim highlight intensity (default 10.0)
uniform float uHueShift;      // Global hue rotation (default -0.25)
uniform float uHueRadius;     // Hue shift by position radius (default 0.4)
uniform float uImageBlend;    // 0 = pure noise color, 1 = image-colored contours
uniform float uTaper;         // Oval taper falloff strength (default 1.0)

// ── Smooth fract / floor (Ollj's formula, via Shane) ────────────────────────
float sFract(float x, float sm) {
  vec2 u = vec2(x, fwidth(x) * sm);
  u.x = fract(u.x);
  u += (1.0 - 2.0 * u) * step(u.y, u.x);
  return clamp(1.0 - u.x / u.y, 0.0, 1.0);
}

float sFloor(float x) { return x - sFract(x, 1.0); }

// ── Hue rotation ─────────────────────────────────────────────────────────────
vec3 rotHue(vec3 p, float a) {
  vec2 cs = sin(vec2(1.570796, 0.0) + a);
  mat3 hr = mat3(0.299,  0.587,  0.114,  0.299,  0.587,  0.114,  0.299,  0.587,  0.114) +
            mat3(0.701, -0.587, -0.114, -0.299,  0.413, -0.114, -0.300, -0.588,  0.886) * cs.x +
            mat3(0.168,  0.330, -0.497, -0.328,  0.035,  0.292,  1.250, -1.050, -0.203) * cs.y;
  return clamp(p * hr, 0.0, 1.0);
}

// ── Hash ─────────────────────────────────────────────────────────────────────
vec3 hash33(vec3 p) {
  float n = sin(dot(p, vec3(7.0, 157.0, 113.0)));
  return fract(vec3(2097152.0, 262144.0, 32768.0) * n) * 2.0 - 1.0;
}

// ── Simplex-style tetrahedral noise ──────────────────────────────────────────
float tetraNoise(in vec3 p) {
  vec3 i = floor(p + dot(p, vec3(1.0 / 3.0)));
  p -= i - dot(i, vec3(1.0 / 6.0));
  vec3 i1 = step(p.yzx, p);
  vec3 i2 = max(i1, 1.0 - i1.zxy);
  i1 = min(i1, 1.0 - i1.zxy);
  vec3 p1 = p - i1 + 1.0 / 6.0;
  vec3 p2 = p - i2 + 1.0 / 3.0;
  vec3 p3 = p - 0.5;
  vec4 v = max(0.5 - vec4(dot(p, p), dot(p1, p1), dot(p2, p2), dot(p3, p3)), 0.0);
  vec4 d = vec4(dot(p, hash33(i)), dot(p1, hash33(i + i1)),
                dot(p2, hash33(i + i2)), dot(p3, hash33(i + 1.0)));
  return clamp(dot(d, v * v * v * 8.0) * 1.732 + 0.5, 0.0, 1.0);
}

// ── Contour function — returns vec2(palettized, raw) ─────────────────────────
// Packing ns (raw noise) into .y avoids a mutable global (WebGL1 unsafe)
vec2 func(vec2 p) {
  float n = tetraNoise(vec3(p.x * 4.0 * uScale, p.y * 4.0 * uScale, 0.0)
                       - vec3(0.0, 0.25, 0.5) * uTime * uSpeed);

  float taper = 0.1 + dot(p, p * vec2(0.35, 1.0)) * uTaper;
  n = max(n - taper, 0.0) / max(1.0 - taper, 0.0001);

  float raw = n;

  float palNum = max(uPalNum, 2.0);
  float palettized = n * 0.25 + clamp(sFloor(n * (palNum - 0.001)) / (palNum - 1.0), 0.0, 1.0) * 0.75;

  return vec2(palettized, raw);
}

void main() {
  // WebGL 1 requires enabling OES_standard_derivatives extension to use fwidth()
  // Since we use fwidth in sFract, we could run into issues if the browser/device doesn't support it 
  // It's usually supported though.
  
  vec2 u = (vUv - 0.5) * vec2(uResolution.x / uResolution.y, 1.0);

  vec2 fv   = func(u);
  float f   = fv.x;
  float ssd = fv.y;

  // Edge sampling
  vec2 e = vec2(1.5 / uResolution.y, 0.0);
  float fxl = func(u + e.xy).x;
  float fxr = func(u - e.xy).x;
  float fyt = func(u + e.yx).x;
  float fyb = func(u - e.yx).x;

  // Base noise color
  vec3 noiseCol = pow(
    min(vec3(1.5, 1.0, 1.0) * (f * 0.7 + ssd * 0.35), 1.0),
    vec3(1.0, 2.0, 10.0) * 2.0
  ) + 0.01;
  noiseCol = rotHue(noiseCol, uHueShift + uHueRadius * length(u));

  // Sample image input color (mapped to same centered UV space)
  vec2 imgUV = vUv;
  if (uTextureConnected) {
    imgUV = mix(imgUV, texture2D(uTexture, vUv).rg, 0.5);
  }
  vec3 imgCol = texture2D(uIn, imgUV).rgb;

  // Blend noise color with image color using contour bands as mask
  vec3 col = mix(noiseCol, imgCol * (f * 0.7 + ssd * 0.35 + 0.01), uImageBlend);

  // Dark edges
  col *= max(1.0 - (abs(fxl - fxr) + abs(fyt - fyb)) * uEdgeStrength, 0.0);

  // Highlights — resample at wider spread
  float fxlH = func(u + e.xy * 1.5).x;
  float fytH = func(u + e.yx * 1.5).x;
  col += vec3(0.5, 0.7, 1.0) * (max(f - fytH, 0.0) + max(f - fxlH, 0.0)) * ssd * uHighlight;

  // Gamma correction
  gl_FragColor = vec4(sqrt(clamp(col, 0.0, 1.0)), 1.0);
}
