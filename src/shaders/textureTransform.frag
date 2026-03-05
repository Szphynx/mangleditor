// Texture Transform Combo — generates/reads UVs, scales/rotates/translates, and samples an image.
// Inputs: uIn (image - optional), uUvIn (UV map from a UV chain - optional)
// Wrap modes: 0=clamp, 1=repeat, 2=mirror
precision highp float;
varying vec2 vUv;
uniform sampler2D uIn;
uniform sampler2D uUvIn;

// Input Connection Flags
uniform bool uInConnected;
uniform bool uUvInConnected;

uniform float uScaleX;
uniform float uScaleY;
uniform float uRotation;
uniform float uTranslateX;
uniform float uTranslateY;
uniform int uWrapMode;

vec2 applyWrap(vec2 uv) {
  if (uWrapMode == 1) {
    return fract(uv);
  } else if (uWrapMode == 2) {
    vec2 t = fract(uv * 0.5) * 2.0;
    return vec2(
      t.x > 1.0 ? 2.0 - t.x : t.x,
      t.y > 1.0 ? 2.0 - t.y : t.y
    );
  }
  // clamp (default)
  return clamp(uv, 0.0, 1.0);
}

void main() {
  // 1. Get base UVs (from screen, or upstream UV map if connected)
  vec2 uv = uUvInConnected ? texture2D(uUvIn, vUv).rg : vUv;

  // 2. Apply Transform Math
  // Translate
  uv -= vec2(uTranslateX, uTranslateY);

  // Scale (Origin based)
  uv -= 0.5;
  uv /= vec2(max(uScaleX, 0.001), max(uScaleY, 0.001));

  // Rotate (Origin based)
  float angle = radians(-uRotation);
  float s = sin(angle);
  float c = cos(angle);
  uv = mat2(c, -s, s, c) * uv;
  uv += 0.5;

  // 3. Output logic
  if (uInConnected) {
    // If an Image is connected, sample the image and output pixels
    uv = applyWrap(uv);
    gl_FragColor = texture2D(uIn, uv);
  } else {
    // If NO image is connected, output the transformed UV map as raw RG data
    gl_FragColor = vec4(uv.x, uv.y, 0.0, 1.0);
  }
}
