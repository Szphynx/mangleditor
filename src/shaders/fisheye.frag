// Fisheye / Antifisheye — barrel and pincushion lens distortion
// Inspired by stackoverflow.com/questions/6030814 (iq-style port)
precision highp float;

varying vec2 vUv;

uniform sampler2D uIn;
uniform vec2 uResolution;
uniform float uTime;

uniform float uPower;       // Distortion amount: >0 = fisheye, <0 = antifisheye, 0 = passthrough
uniform float uCenterX;     // Lens center X offset (default 0.5)
uniform float uCenterY;     // Lens center Y offset (default 0.5)
uniform float uZoom;        // Post-distortion zoom (default 1.0)

void main() {
  float prop = uResolution.x / uResolution.y;

  // Normalize with aspect cheat (assume square, correct for prop later)
  vec2 p = vUv;
  p.x *= uResolution.x / uResolution.x; // identity — kept for clarity
  p = vec2(p.x, p.y / prop);

  vec2 m = vec2(clamp(uCenterX, 0.1, 0.9),
                clamp(uCenterY, 0.1, 0.9) / prop);

  vec2 d = p - m;
  float r = sqrt(dot(d, d));

  float power = uPower;

  float bind;
  if (power > 0.0) {
    bind = sqrt(dot(m, m));
  } else {
    if (prop < 1.0) bind = m.x;
    else bind = m.y;
  }

  vec2 uv;
  if (power > 0.001) {
    // Fisheye (barrel distortion)
    uv = m + normalize(d) * tan(r * power) * bind / tan(bind * power);
  } else if (power < -0.001) {
    // Antifisheye (pincushion distortion)
    uv = m + normalize(d) * atan(r * -power * 10.0) * bind / atan(-power * bind * 10.0);
  } else {
    // Passthrough
    uv = p;
  }

  // Apply zoom around center
  uv = m + (uv - m) / max(uZoom, 0.01);

  // Reconstruct proper UV: undo aspect cheat, re-apply for sampling
  vec2 sampleUV = vec2(uv.x, -uv.y * prop);

  // Clamp to prevent edge bleed
  sampleUV = clamp(sampleUV, 0.0, 1.0);

  vec3 col = texture2D(uIn, sampleUV).rgb;

  gl_FragColor = vec4(col, 1.0);
}
