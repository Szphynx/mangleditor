varying vec2 vUv;
uniform sampler2D uIn;
uniform vec2 uResolution;
uniform float uCurvature;
uniform float uScanLines;
uniform float uRgbShift;
uniform float uBrightness;

vec2 curve(vec2 uv) {
    uv = (uv - 0.5) * 2.0;
    uv *= 1.1;	
    uv.x *= 1.0 + pow((abs(uv.y) / 5.0), 2.0);
    uv.y *= 1.0 + pow((abs(uv.x) / 4.0), 2.0);
    uv  = (uv / 2.0) + 0.5;
    uv =  uv *0.92 + 0.04;
    return uv;
}

void main() {
    vec2 q = vUv;
    vec2 uv = q;
    
    if (uCurvature > 0.0) {
        uv = mix(q, curve(q), uCurvature);
    }
    
    float x_shift = uRgbShift * 0.01;
    
    vec3 col = vec3(0.0);
    if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        return;
    }
    
    col.r = texture2D(uIn, vec2(uv.x + x_shift, uv.y)).r;
    col.g = texture2D(uIn, uv).g;
    col.b = texture2D(uIn, vec2(uv.x - x_shift, uv.y)).b;
    
    // Scanlines
    if (uScanLines > 0.0) {
        float s = sin(uv.y * uResolution.y * uScanLines * 3.1415);
        col *= 1.0 - (0.15 * s);
    }
    
    col *= uBrightness;
    
    // Vignette
    float vig = (0.0 + 1.0*16.0*uv.x*uv.y*(1.0-uv.x)*(1.0-uv.y));
    col *= pow(vig, 0.3);
    
    gl_FragColor = vec4(col, 1.0);
}
