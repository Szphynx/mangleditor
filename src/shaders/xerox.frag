varying vec2 vUv;
uniform sampler2D uIn;
uniform float uThreshold;
uniform float uNoiseAmount;
uniform float uContrast;
uniform vec2 uResolution;

float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

void main() {
    vec2 uv = vUv;
    vec4 color = texture2D(uIn, uv);
    
    // Grayscale
    float lum = dot(color.rgb, vec3(0.299, 0.587, 0.114));
    
    // Noise
    float n = rand(uv * 10.0 + fract(uThreshold)) * uNoiseAmount - (uNoiseAmount / 2.0);
    lum += n;
    
    // Contrast
    lum = (lum - 0.5) * uContrast + 0.5;
    
    // Threshold (Photocopy harshness)
    float xerox = step(uThreshold, lum);
    
    gl_FragColor = vec4(vec3(xerox), color.a);
}
