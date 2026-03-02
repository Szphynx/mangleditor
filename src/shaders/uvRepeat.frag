// UV Repeat — tile image with mirror/offset options
precision highp float;
varying vec2 vUv;
uniform sampler2D uIn;
uniform float uRepeatX;
uniform float uRepeatY;
uniform float uMirror;
uniform float uOffsetX;
uniform float uOffsetY;

void main() {
  vec2 uv = vUv * vec2(uRepeatX, uRepeatY) + vec2(uOffsetX, uOffsetY);

  if (uMirror > 0.5) {
    // Mirror repeat
    vec2 cell = floor(uv);
    uv = fract(uv);
    // Mirror on odd cells
    if (mod(cell.x, 2.0) >= 1.0) uv.x = 1.0 - uv.x;
    if (mod(cell.y, 2.0) >= 1.0) uv.y = 1.0 - uv.y;
  } else {
    uv = fract(uv);
  }

  gl_FragColor = texture2D(uIn, uv);
}
