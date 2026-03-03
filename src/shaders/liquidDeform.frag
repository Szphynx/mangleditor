// Liquid Deform — swirling polar texture deformation
// Adapted from Inigo Quilez (iq/2013)
precision highp float;
varying vec2 vUv;
uniform sampler2D uIn;
uniform vec2 uResolution;
uniform float uTime;

uniform float uScale;       
uniform float uIntensity;   
uniform float uSpeed;       
uniform float uSamples;     
uniform float uGammaLift;   

vec3 deform(in vec2 p, in float t) {
  t *= 2.0;

  p += 0.5 * uIntensity * sin(t * vec2(1.1, 1.3) + vec2(0.0, 0.5));

  float a = atan(p.y, p.x);
  float r = length(p);
  float s = r * (1.0 + 0.5 * cos(t * 1.7));

  vec2 uv = 0.1 * t
          + 0.05 * p.yx * uScale
          + 0.05 * vec2(cos(t + a * 2.0),
                        sin(t + a * 2.0)) / max(s, 0.001);

  uv = fract(uv * 0.5 + 0.5); // wrap safely into [0,1]

  return texture2D(uIn, uv).rgb;
}

void main() {
  vec2 q = vUv;
  vec2 p = -1.0 + 2.0 * q;

  // Correct for non-square viewports
  p.x *= uResolution.x / uResolution.y;

  vec3 col = vec3(0.0);
  float numSamples = clamp(uSamples, 1.0, 20.0);

  // We must use a constant up to 20 for loop condition in WebGL 1
  for (int i = 0; i < 20; i++) {
    if (float(i) >= numSamples) break;
    float t = uTime * uSpeed + float(i) * 0.0035;
    col += deform(p, t);
  }
  
  col /= numSamples;

  // Gamma curve — original used vec3(0.6, 0.7, 0.8) per channel
  vec3 gamma = vec3(0.6, 0.7, 0.8) / max(uGammaLift, 0.01);
  col = pow(max(col, vec3(0.0)), gamma);

  gl_FragColor = vec4(col, 1.0);
}
