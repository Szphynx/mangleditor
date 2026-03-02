// Surface Blur — edge-preserving bilateral filter approximation
precision highp float;
varying vec2 vUv;
uniform sampler2D uIn;
uniform float uRadius;     // 1-20 as int but sent as float
uniform float uThreshold;  // color difference tolerance 0-1
uniform vec2 uResolution;

void main() {
  vec2 texel = 1.0 / uResolution;
  vec4 center = texture2D(uIn, vUv);
  int rad = int(uRadius);

  vec4 sum = vec4(0.0);
  float totalWeight = 0.0;

  for (int y = -20; y <= 20; y++) {
    for (int x = -20; x <= 20; x++) {
      if (x < -rad || x > rad || y < -rad || y > rad) continue;

      vec2 offset = vec2(float(x), float(y)) * texel;
      vec4 sample_color = texture2D(uIn, vUv + offset);

      // Color difference (edge-preserving)
      float diff = length(sample_color.rgb - center.rgb);

      // Bilateral weight: spatial * range
      float spatialWeight = exp(-float(x * x + y * y) / (2.0 * uRadius * uRadius));
      float rangeWeight = diff < uThreshold ? 1.0 : exp(-(diff - uThreshold) * 10.0);
      float weight = spatialWeight * rangeWeight;

      sum += sample_color * weight;
      totalWeight += weight;
    }
  }

  gl_FragColor = totalWeight > 0.0 ? sum / totalWeight : center;
}
