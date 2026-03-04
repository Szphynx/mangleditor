// UV Generator — emits a UV coordinate map (RG = UV coordinates, range 0..1)
// Connect this to any UV node to begin a UV chain.
precision highp float;
varying vec2 vUv;

void main() {
  // Simply output the screen-space UV coordinates as RG color data.
  // This is the "identity" UV map — no transformation applied.
  gl_FragColor = vec4(vUv.x, vUv.y, 0.0, 1.0);
}
