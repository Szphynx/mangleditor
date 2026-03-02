// Heightmap Displacement — displace pixels using a heightmap image
precision highp float;
varying vec2 vUv;
uniform sampler2D uIn;
uniform sampler2D uHeightmap;
uniform float uStrength;
uniform int uChannel; // 0=luminance, 1=r, 2=g, 3=b
uniform vec2 uResolution;

float getHeight(vec4 c) {
  if (uChannel == 1) return c.r;
  if (uChannel == 2) return c.g;
  if (uChannel == 3) return c.b;
  // luminance
  return dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));
}

void main() {
  vec4 hSample = texture2D(uHeightmap, vUv);
  float h = getHeight(hSample);

  // Compute gradient for displacement direction
  vec2 texel = 1.0 / uResolution;
  float hL = getHeight(texture2D(uHeightmap, vUv - vec2(texel.x, 0.0)));
  float hR = getHeight(texture2D(uHeightmap, vUv + vec2(texel.x, 0.0)));
  float hU = getHeight(texture2D(uHeightmap, vUv + vec2(0.0, texel.y)));
  float hD = getHeight(texture2D(uHeightmap, vUv - vec2(0.0, texel.y)));

  vec2 gradient = vec2(hR - hL, hU - hD);
  vec2 displaced = vUv + gradient * uStrength;
  displaced = clamp(displaced, 0.0, 1.0);

  gl_FragColor = texture2D(uIn, displaced);
}
