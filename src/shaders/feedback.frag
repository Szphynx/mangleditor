// Feedback Loop — blend current frame with previous frame
precision highp float;
varying vec2 vUv;
uniform sampler2D uIn;
uniform sampler2D uPreviousFrame;
uniform float uDecay;
uniform int uBlendMode; // 0=normal, 1=add, 2=multiply

void main() {
  vec4 current = texture2D(uIn, vUv);
  vec4 previous = texture2D(uPreviousFrame, vUv);

  vec3 blended;
  if (uBlendMode == 0) {
    blended = mix(current.rgb, previous.rgb, uDecay);
  } else if (uBlendMode == 1) {
    blended = current.rgb + previous.rgb * uDecay;
    blended = min(blended, 1.0);
  } else {
    blended = current.rgb * (1.0 - uDecay) + current.rgb * previous.rgb * uDecay;
  }

  gl_FragColor = vec4(blended, current.a);
}
