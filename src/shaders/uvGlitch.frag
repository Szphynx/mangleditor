// UV Glitch — random block displacement of UV coordinates
precision highp float;
varying vec2 vUv;
uniform sampler2D uIn;
uniform float uBlockSize;
uniform float uIntensity;
uniform float uSeed;
uniform int uDirection; // 0=horizontal, 1=vertical, 2=both

// Simple hash function
float hash(vec2 p) {
  return fract(sin(dot(p + uSeed, vec2(127.1, 311.7))) * 43758.5453);
}

void main() {
  vec2 uv = vUv;
  float bs = max(uBlockSize, 1.0) / 256.0; // normalize block size

  // Get block coordinate
  vec2 block = floor(uv / bs);
  float h = hash(block);

  // Apply displacement based on direction
  if (h > 1.0 - uIntensity) {
    float offset = (hash(block + 0.5) - 0.5) * uIntensity * 0.5;

    if (uDirection == 0) {
      uv.x += offset;
    } else if (uDirection == 1) {
      uv.y += offset;
    } else {
      uv.x += offset;
      uv.y += (hash(block + 1.0) - 0.5) * uIntensity * 0.5;
    }
  }

  uv = fract(uv);
  gl_FragColor = texture2D(uIn, uv);
}
