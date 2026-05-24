// ══════════════════════════════════════════════════════════════
//  HALO Shader Background — Ported from Vanta.js HALO effect
//  Uses Three.js (loaded via CDN) to render a WebGL shader
//  that creates a glowing, animated halo effect.
// ══════════════════════════════════════════════════════════════
(function () {
  'use strict';

  const canvas = document.getElementById('halo-bg');
  if (!canvas || typeof THREE === 'undefined') return;

  // ── Configuration ──
  const CONFIG = {
    baseColor: new THREE.Color(0x8B0000),   // Deep red base
    color2: new THREE.Color(0xff2244),       // Bright red accent
    backgroundColor: new THREE.Color(0x08080e), // Match --black
    amplitudeFactor: 1.0,
    size: 1.0,
    speed: 1.0,
    xOffset: 0,
    yOffset: 0,
    scale: 1,
    mouseEase: true,
  };

  // ── Fragment Shader ──
  const fragmentShader = `
uniform vec2 iResolution;
uniform float iDpr;
uniform vec2 iMouse;
uniform float iTime;

uniform float xOffset;
uniform float yOffset;
uniform vec3 baseColor;
uniform vec3 color2;
uniform vec3 backgroundColor;
uniform float size;
uniform float amplitudeFactor;

uniform sampler2D iBuffer;

const float PI = 3.14159265359;

vec4 j2hue(float c) {
  return .5+.5*cos(6.28*c+vec4(0,-2.1,2.1,0));
}

vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

vec2 sincos( float x ){return vec2(sin(x), cos(x));}

vec4 permute4(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

float p3d(vec3 P){
  vec3 Pi0 = floor(P);
  vec3 Pi1 = Pi0 + vec3(1.0);
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P);
  vec3 Pf1 = Pf0 - vec3(1.0);
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute4(permute4(ix) + iy);
  vec4 ixy0 = permute4(ixy + iz0);
  vec4 ixy1 = permute4(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}


void main() {
  vec2 res2 = iResolution.xy * iDpr;
  vec2 pixel = vec2(gl_FragCoord.xy - 0.5 * res2) / res2.y;
  pixel.x -= xOffset * res2.x / res2.y;
  pixel.y -= yOffset;

  vec2 uv = gl_FragCoord.xy / res2;

  vec2 mouse2 = (iMouse * iDpr / res2 - 0.5) * vec2(1.,-1.);
  vec2 uvBig = (uv - 0.5) * 0.996 + 0.5;

  vec4 oldImage = texture2D(iBuffer, uv);
  vec3 mixedColor = oldImage.rgb - backgroundColor;

  float cropDist = 0.01;
  float cropXOffset = 0.2;
  float cropYOffset = 0.2;

  vec2 offset = uv + vec2((mixedColor.g - cropXOffset) * cropDist, (mixedColor.r - cropYOffset) * cropDist);

  float spinDist = 0.001;
  float spinSpeed = 0.2 + 0.15 * cos(iTime * 0.5);
  float timeFrac = mod(iTime, 6.5);
  vec2 offset2 = uvBig + vec2(cos(timeFrac * spinSpeed) * spinDist, sin(timeFrac * spinSpeed) * spinDist);

  mixedColor = texture2D(iBuffer, offset).rgb * 0.4
    + texture2D(iBuffer, offset2).rgb * 0.6
    - backgroundColor;

  float fadeAmt = 0.0015;
  mixedColor = (mixedColor - fadeAmt) * .995;

  float angle = atan(pixel.x, pixel.y);
  float dist = length(pixel - mouse2*0.15) * 8. + sin(iTime) * .01;

  float flowerPeaks = .05 * amplitudeFactor * size;
  float flowerPetals = 7.;
  float edge = abs((dist + sin(angle * flowerPetals + iTime * 0.5) * sin(iTime * 1.5) * flowerPeaks) * 0.65 / size);

  float colorChangeSpeed = 0.75 + 0.05 * sin(iTime) * 1.5;
  float rainbowInput = timeFrac * colorChangeSpeed;

  float brightness = 0.7;
  vec4 rainbow = sqrt(j2hue(cos(rainbowInput))) + vec4(baseColor,0) - 1.0 + brightness;
  float factor = smoothstep(1., .9, edge) * pow(edge, 2.);
  vec3 color = rainbow.rgb * smoothstep(1., .9, edge) * pow(edge, 20.);
  vec4 ring = vec4(
    backgroundColor + clamp( mixedColor + color, 0., 1.)
    , 1.0);

  gl_FragColor = ring;
}
`;

  const vertexShader = `
void main() {
  gl_Position = vec4(position, 1.0);
}
`;

  // ── Renderer setup ──
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: false, antialias: false });
  renderer.setPixelRatio(dpr);

  const hero = document.getElementById('hero');
  let width = hero.offsetWidth;
  let height = hero.offsetHeight;
  renderer.setSize(width, height);

  // ── Ping-pong buffer targets ──
  const pars = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat };
  let ww = Math.floor(width * dpr / CONFIG.scale);
  let hh = Math.floor(height * dpr / CONFIG.scale);
  let bufferTarget = new THREE.WebGLRenderTarget(ww, hh, pars);
  let bufferFeedback = new THREE.WebGLRenderTarget(ww, hh, pars);

  // ── Scene ──
  const scene = new THREE.Scene();
  const camera = new THREE.Camera();
  camera.position.z = 1;

  const uniforms = {
    iResolution: { value: new THREE.Vector2(width, height) },
    iDpr: { value: dpr },
    iMouse: { value: new THREE.Vector2(width / 2, height / 2) },
    iTime: { value: 0 },
    xOffset: { value: CONFIG.xOffset },
    yOffset: { value: CONFIG.yOffset },
    baseColor: { value: CONFIG.baseColor },
    color2: { value: CONFIG.color2 },
    backgroundColor: { value: CONFIG.backgroundColor },
    size: { value: CONFIG.size },
    amplitudeFactor: { value: CONFIG.amplitudeFactor },
    iBuffer: { value: bufferTarget.texture },
  };

  const material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader,
    fragmentShader,
  });

  const plane = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
  scene.add(plane);

  // ── Mouse tracking with easing ──
  let mouseX = width / 2, mouseY = height / 2;
  let easedMX = mouseX, easedMY = mouseY;

  document.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });

  // ── Animation loop ──
  const startTime = performance.now();
  let animId;

  function animate() {
    animId = requestAnimationFrame(animate);

    const elapsed = (performance.now() - startTime) / 1000.0;
    uniforms.iTime.value = elapsed * CONFIG.speed;

    // Ease mouse
    if (CONFIG.mouseEase) {
      easedMX += (mouseX - easedMX) * 0.05;
      easedMY += (mouseY - easedMY) * 0.05;
    } else {
      easedMX = mouseX;
      easedMY = mouseY;
    }
    uniforms.iMouse.value.set(easedMX, easedMY);

    // Feedback buffer swap
    uniforms.iBuffer.value = bufferFeedback.texture;

    renderer.setRenderTarget(bufferTarget);
    renderer.render(scene, camera);
    renderer.setRenderTarget(null);
    renderer.clear();
    renderer.render(scene, camera);

    // Swap buffers
    let temp = bufferTarget;
    bufferTarget = bufferFeedback;
    bufferFeedback = temp;
  }

  animate();

  // ── Resize handler ──
  function onResize() {
    width = hero.offsetWidth;
    height = hero.offsetHeight;
    renderer.setSize(width, height);
    uniforms.iResolution.value.set(width, height);
    ww = Math.floor(width * dpr / CONFIG.scale);
    hh = Math.floor(height * dpr / CONFIG.scale);
    bufferTarget.setSize(ww, hh);
    bufferFeedback.setSize(ww, hh);
  }

  window.addEventListener('resize', onResize);

  // ── Cleanup on page unload ──
  window.addEventListener('beforeunload', () => {
    cancelAnimationFrame(animId);
    renderer.dispose();
    material.dispose();
    bufferTarget.dispose();
    bufferFeedback.dispose();
  });
})();
