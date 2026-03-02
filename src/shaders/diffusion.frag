varying vec2 vUv;
uniform sampler2D uIn;
uniform vec2 uResolution;
uniform float uFeed;
uniform float uKill;
uniform float udA;
uniform float udB;
uniform float uDt;

void main() {
    vec2 uv = vUv;
    vec2 pixel = 1.0 / uResolution;
    
    vec4 c = texture2D(uIn, uv);
    float A = c.r; // Use R for A
    float B = c.g; // Use G for B
    
    // 3x3 Laplacian
    float lapA = 0.0;
    float lapB = 0.0;
    
    vec2 offsets[9];
    offsets[0] = vec2(-1.0, -1.0); offsets[1] = vec2(0.0, -1.0); offsets[2] = vec2(1.0, -1.0);
    offsets[3] = vec2(-1.0,  0.0); offsets[4] = vec2(0.0,  0.0); offsets[5] = vec2(1.0,  0.0);
    offsets[6] = vec2(-1.0,  1.0); offsets[7] = vec2(0.0,  1.0); offsets[8] = vec2(1.0,  1.0);
    
    float weights[9];
    weights[0] = 0.05; weights[1] = 0.2; weights[2] = 0.05;
    weights[3] = 0.2;  weights[4] = -1.0; weights[5] = 0.2;
    weights[6] = 0.05; weights[7] = 0.2; weights[8] = 0.05;
    
    for (int i = 0; i < 9; i++) {
        vec4 n = texture2D(uIn, uv + offsets[i] * pixel);
        lapA += n.r * weights[i];
        lapB += n.g * weights[i];
    }
    
    // Reaction-Diffusion formula
    float reaction = A * B * B;
    float nextA = A + (udA * lapA - reaction + uFeed * (1.0 - A)) * uDt;
    float nextB = B + (udB * lapB + reaction - (uKill + uFeed) * B) * uDt;
    
    nextA = clamp(nextA, 0.0, 1.0);
    nextB = clamp(nextB, 0.0, 1.0);
    
    // Render out as grayscale or custom maps. B is the 'spots' so we invert it for typical RD look.
    // We store A in Red, B in Green, and the visual output in Blue so it's somewhat visible.
    float visual = clamp(1.0 - nextB * 2.0, 0.0, 1.0);
    gl_FragColor = vec4(nextA, nextB, visual, 1.0);
}
