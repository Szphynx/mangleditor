varying vec2 vUv;
uniform sampler2D uIn;
uniform vec2 uResolution;
uniform float uAngle;
uniform float uStrength;
uniform int uSamples;

void main() {
    vec2 uv = vUv;
    vec2 dir = vec2(cos(uAngle), sin(uAngle)) * uStrength * 0.01;
    
    vec4 color = vec4(0.0);
    int validSamples = 0;
    
    for (int i = 0; i < 50; i++) {
        if (i >= uSamples) break;
        
        float t = float(i) / float(uSamples);
        vec2 offset = dir * (t - 0.5); // Center the blur
        vec2 sampleUV = uv + offset;
        
        // Clamp to edge to avoid wrap around artifacts
        if (sampleUV.x >= 0.0 && sampleUV.x <= 1.0 && sampleUV.y >= 0.0 && sampleUV.y <= 1.0) {
            color += texture2D(uIn, sampleUV);
            validSamples++;
        }
    }
    
    if (validSamples > 0) {
        color /= float(validSamples);
    } else {
        color = texture2D(uIn, uv);
    }
    
    gl_FragColor = color;
}
