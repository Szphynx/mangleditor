// Blend — combine two images with blend modes
precision highp float;
varying vec2 vUv;
uniform sampler2D uBase;
uniform sampler2D uOverlay;
uniform int uMode;     // 0=normal,1=multiply,2=screen,3=overlay,4=softLight,5=hardLight,6=difference,7=exclusion,8=add,9=subtract
uniform float uOpacity;

vec3 blendNormal(vec3 base, vec3 blend) { return blend; }
vec3 blendMultiply(vec3 base, vec3 blend) { return base * blend; }
vec3 blendScreen(vec3 base, vec3 blend) { return 1.0 - (1.0 - base) * (1.0 - blend); }

vec3 blendOverlay(vec3 base, vec3 blend) {
  return vec3(
    base.r < 0.5 ? 2.0 * base.r * blend.r : 1.0 - 2.0 * (1.0 - base.r) * (1.0 - blend.r),
    base.g < 0.5 ? 2.0 * base.g * blend.g : 1.0 - 2.0 * (1.0 - base.g) * (1.0 - blend.g),
    base.b < 0.5 ? 2.0 * base.b * blend.b : 1.0 - 2.0 * (1.0 - base.b) * (1.0 - blend.b)
  );
}

vec3 blendSoftLight(vec3 base, vec3 blend) {
  return vec3(
    blend.r < 0.5 ? 2.0*base.r*blend.r + base.r*base.r*(1.0-2.0*blend.r) : sqrt(base.r)*(2.0*blend.r-1.0)+2.0*base.r*(1.0-blend.r),
    blend.g < 0.5 ? 2.0*base.g*blend.g + base.g*base.g*(1.0-2.0*blend.g) : sqrt(base.g)*(2.0*blend.g-1.0)+2.0*base.g*(1.0-blend.g),
    blend.b < 0.5 ? 2.0*base.b*blend.b + base.b*base.b*(1.0-2.0*blend.b) : sqrt(base.b)*(2.0*blend.b-1.0)+2.0*base.b*(1.0-blend.b)
  );
}

vec3 blendHardLight(vec3 base, vec3 blend) { return blendOverlay(blend, base); }
vec3 blendDifference(vec3 base, vec3 blend) { return abs(base - blend); }
vec3 blendExclusion(vec3 base, vec3 blend) { return base + blend - 2.0 * base * blend; }
vec3 blendAdd(vec3 base, vec3 blend) { return min(base + blend, 1.0); }
vec3 blendSubtract(vec3 base, vec3 blend) { return max(base - blend, 0.0); }

void main() {
  vec4 baseColor = texture2D(uBase, vUv);
  vec4 overlayColor = texture2D(uOverlay, vUv);

  vec3 result;
  if (uMode == 0) result = blendNormal(baseColor.rgb, overlayColor.rgb);
  else if (uMode == 1) result = blendMultiply(baseColor.rgb, overlayColor.rgb);
  else if (uMode == 2) result = blendScreen(baseColor.rgb, overlayColor.rgb);
  else if (uMode == 3) result = blendOverlay(baseColor.rgb, overlayColor.rgb);
  else if (uMode == 4) result = blendSoftLight(baseColor.rgb, overlayColor.rgb);
  else if (uMode == 5) result = blendHardLight(baseColor.rgb, overlayColor.rgb);
  else if (uMode == 6) result = blendDifference(baseColor.rgb, overlayColor.rgb);
  else if (uMode == 7) result = blendExclusion(baseColor.rgb, overlayColor.rgb);
  else if (uMode == 8) result = blendAdd(baseColor.rgb, overlayColor.rgb);
  else if (uMode == 9) result = blendSubtract(baseColor.rgb, overlayColor.rgb);
  else result = overlayColor.rgb;

  gl_FragColor = vec4(mix(baseColor.rgb, result, uOpacity), baseColor.a);
}
