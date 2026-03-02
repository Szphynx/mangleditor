// Reeded Glass — ribbed/fluted glass refraction
precision highp float;
varying vec2 vUv;
uniform sampler2D uIn;
uniform sampler2D uTexture;
uniform bool uTextureConnected;
uniform float uScale;
uniform float uIntensity;
uniform float uAngle;
uniform float uBlur;
uniform vec2 uResolution;
uniform float uTime;

void main() {
  float angleRad = uAngle * 3.14159265 / 180.0;
  vec2 dir = vec2(cos(angleRad), sin(angleRad));
  vec2 perpDir = vec2(-dir.y, dir.x);

  // Project UV onto the rib direction
  float projected = dot(vUv * uResolution / max(uResolution.x, uResolution.y), perpDir);
  float ribPattern;

  if (uTextureConnected) {
    // Use external texture for refraction pattern
    vec2 texUV = vec2(fract(projected * uScale / 10.0), 0.5);
    ribPattern = texture2D(uTexture, texUV).r * 2.0 - 1.0;
  } else {
    // Procedural ribs — sinusoidal
    ribPattern = sin(projected * uScale);
  }

  // Displacement
  vec2 offset = perpDir * ribPattern * uIntensity;

  // Multi-sample blur along rib direction
  vec4 color = vec4(0.0);
  float blurSamples = max(1.0, uBlur * 4.0);
  float totalWeight = 0.0;

  for (float i = -8.0; i <= 8.0; i += 1.0) {
    if (abs(i) > blurSamples * 0.5) continue;
    float weight = exp(-0.5 * (i * i) / max(blurSamples * 0.25, 0.1));
    vec2 sampleUV = vUv + offset + dir * i * uBlur * 0.002;
    sampleUV = clamp(sampleUV, 0.0, 1.0);
    color += texture2D(uIn, sampleUV) * weight;
    totalWeight += weight;
  }

  gl_FragColor = color / totalWeight;
}
