// ── Cursor
const cursor = document.getElementById('cursor');
const trail = document.getElementById('cursor-trail');
let mx = 0, my = 0, tx = 0, ty = 0;
document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
});
function animTrail() {
  tx += (mx - tx) * 0.15; ty += (my - ty) * 0.15;
  trail.style.left = tx + 'px'; trail.style.top = ty + 'px';
  requestAnimationFrame(animTrail);
}
animTrail();

// ── Navbar scroll
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ── Particles
const pCont = document.getElementById('particles');
for (let i = 0; i < 24; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  const size = Math.random() * 4 + 1;
  const isRed = Math.random() > 0.5;
  p.style.cssText = `
    width:${size}px;height:${size}px;
    left:${Math.random() * 100}%;
    background:${isRed ? 'rgba(229,9,20,0.6)' : 'rgba(0,212,255,0.4)'};
    animation-duration:${Math.random() * 10 + 8}s;
    animation-delay:${Math.random() * 8}s;
  `;
  pCont.appendChild(p);
}


// ══════════════════════════════════════════════════════════════
//  HOW TO ADD VISUALS FOR EACH BGM
//  1. Put your .mp4 video files inside the  visuals/  folder
//  2. Add the filename(s) to the "visuals" array for the track
//  3. Multiple videos = random one is picked every time it plays
//  Example:
//    visuals: ['visuals/my-video1.mp4', 'visuals/my-video2.mp4']
//  If a file is missing, it falls back to cinepulse-visual.mp4
// ══════════════════════════════════════════════════════════════
const LEGEND_VID = 'visuals/LEGEND - VISUALDON (1080p, h264).mp4';
const DEFAULT_VID = 'visuals/cinepulse-visual.mp4';
const akLEGEND_VID = 'visuals/vidamuyarchi.mp4';
const visuval96 = 'visuals/mov.mp4';
const dc = 'visuals/dc.mp4';
const retroVid = 'visuals/THE ONE - RETRO  Full Video  Suriya  Karthik Subbaraj  Santhosh Narayanam  SDVP  SAMUVEL PETER - SxP 333 サミュベル・ザビエル・ピーター (720p, h264).mp4';
const coolieVid = 'visuals/Bus Fight x Powerhouse x Disco - Coolie OST  Superstar Rajinikanth Sun Pictures Lokesh Anirudh - Sun TV (1080p, h264).mp4';

const trendingData = [
  {
    title: 'Rolex Theme', movie: 'VIKRAM', comp: 'Anirudh',
    tag: 'Dark Synth', moods: ['mass'],
    c1: '#2D0005', c2: '#700010',
    src: 'audio/rolex-theme.mp3',
    img: 'posters/vikram.jpg',
    visuals: [LEGEND_VID, DEFAULT_VID]
  },
  {
    title: 'Rage of Raga', movie: 'DC', comp: 'Anirudh',
    tag: 'Epic', moods: ['mass'],
    c1: '#1A1000', c2: '#3D2800',
    src: 'audio/dc.mp3',
    img: 'posters/dc.jpg',
    visuals: [dc, DEFAULT_VID]
  },
  {
    title: 'AA23 Theme', movie: 'AA23', comp: 'Anirudh',
    tag: 'Epic', moods: ['mass'],
    c1: '#001520', c2: '#003040',
    src: 'audio/aa23.mp3',
    img: 'posters/aa23.jpg',
    visuals: ['visuals/AA23.mp4']
  },
  {
    title: 'Na Ready', movie: 'LEO', comp: 'Anirudh',
    tag: 'Mass', moods: ['mass'],
    c1: '#200010', c2: '#500025',
    src: 'audio/leo.mp3',
    img: 'posters/leo.jpg',
    visuals: ['visuals/leo.mp4']
  },
  {
    title: 'preservarance theme', movie: 'VIDAMUYARCHI', comp: 'Anirudh',
    tag: 'Build-up', moods: ['mass', 'elivation'],
    c1: '#0D0D00', c2: '#222200',
    src: 'audio/Perseverance Theme.mp3',
    img: 'posters/preservarance.jpg',
    visuals: [akLEGEND_VID]
  },
  {
    title: 'kadhale kadhale', movie: '96', comp: 'Govind Vasantha',
    tag: 'Soulful', moods: ['soulful', 'devotional', 'emotional'],
    c1: '#001A00', c2: '#003300',
    src: 'audio/96.mp3',
    img: 'posters/96.jpg',
    visuals: [visuval96],
  },
  {
    title: 'the one',       // ← Add retro song title
    movie: 'RETRO',      // ← Add movie name
    comp: 'Santhosh narayanan',          // ← Add composer
    tag: 'Retro',
    moods: ['nostalgic', 'retro', 'melody'],
    c1: '#1A0A00', c2: '#3D2200',
    src: 'audio/retro.mp3',   // ← Add your MP3 file here
    img: 'posters/retro.jpg', // ← Add poster image here
    visuals: ['visuals/theone.mp4']
  },
  {
    title: 'Power house',       // ← Add GBU song title
    movie: 'COOLIE',        // ← Add movie name
    comp: 'Anirudh',          // ← Add composer
    tag: 'Mass',
    moods: ['mass', 'elevation'],
    c1: '#0D001A', c2: '#220040',
    src: 'audio/coolie.mp3',     // ← Add your MP3 file here
    img: 'posters/coolie.png',  // ← Add poster image here
    visuals: ['visuals/coolie.mp4']
  },
];

const row = document.getElementById('trending-row');
const trackCards = [];

// Build card HTML for a track
function createCardHTML(d) {
  return `
    ${d.img
      ? `<img class="bgm-poster" src="${d.img}" alt="${d.title}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
         <div class="bgm-poster-placeholder" style="background:linear-gradient(145deg,${d.c1},${d.c2});display:none">
           <span style="opacity:0.15;font-size:2.5rem">${d.movie[0]}</span>
         </div>`
      : `<div class="bgm-poster-placeholder" style="background:linear-gradient(145deg,${d.c1},${d.c2})">
           <span style="opacity:0.15;font-size:2.5rem">${d.movie[0]}</span>
         </div>`
    }
    <div class="bgm-card-overlay">
      <div class="bgm-play"></div>
      <div style="font-size:0.65rem;color:rgba(255,255,255,0.6);letter-spacing:0.05em">${d.comp}</div>
      <div style="font-size:0.8rem;font-family:'Cinzel',serif;font-weight:600;letter-spacing:0.05em;color:#F5F5F5;margin-top:3px">${d.title}</div>
    </div>
    <div class="bgm-info">
      <div class="bgm-title">${d.movie}</div>
      <div class="bgm-meta">${d.comp}</div>
      <div class="bgm-tag">${d.tag}</div>
    </div>
    <div class="glow-border"></div>
  `;
}

// Create original cards
trendingData.forEach((d, index) => {
  const card = document.createElement('div');
  card.className = 'bgm-card';
  card.dataset.trackIndex = index;
  card.innerHTML = createCardHTML(d);
  card.addEventListener('click', () => playTrack(index));
  row.appendChild(card);
  trackCards.push(card);
});

// ── Marquee Auto-Scroll with Center Scaling ──
(function initMarquee() {
  const wrapper = document.querySelector('.marquee-wrapper');
  if (!wrapper || !row) return;

  // Duplicate cards for infinite loop (3 copies total)
  const originalCards = Array.from(row.children);
  for (let copy = 0; copy < 2; copy++) {
    originalCards.forEach((card) => {
      const clone = card.cloneNode(true);
      clone.addEventListener('click', () => {
        const idx = parseInt(clone.dataset.trackIndex);
        if (!isNaN(idx)) playTrack(idx);
      });
      row.appendChild(clone);
    });
  }

  const allCards = Array.from(row.children);
  const cardWidth = 200; // flex: 0 0 200px
  let gap = parseFloat(getComputedStyle(document.documentElement).fontSize) * 1.8; // 1.8rem ≈ 28.8px
  let step = cardWidth + gap;
  const totalOriginal = originalCards.length;
  let oneSetWidth = totalOriginal * step;

  let scrollX = oneSetWidth; // Start at 2nd copy (middle)
  let speed = 1.2; // px per frame
  let paused = false;
  let userHovering = false;

  window.addEventListener('resize', () => {
    gap = parseFloat(getComputedStyle(document.documentElement).fontSize) * 1.8;
    step = cardWidth + gap;
    oneSetWidth = totalOriginal * step;
  });

  // Initial position
  row.style.transform = `translateX(-${scrollX}px)`;

  // Pause on hover
  wrapper.addEventListener('mouseenter', () => { userHovering = true; });
  wrapper.addEventListener('mouseleave', () => { userHovering = false; });

  // Center detection & class assignment
  function updateCenterCard() {
    const wrapperRect = wrapper.getBoundingClientRect();
    const centerX = wrapperRect.left + wrapperRect.width / 2;

    allCards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const dist = Math.abs(cardCenterX - centerX);

      card.classList.remove('is-center', 'is-near');
      if (dist < step * 0.45) {
        card.classList.add('is-center');
      } else if (dist < step * 1.3) {
        card.classList.add('is-near');
      }
    });
  }

  // Animation loop
  function animateMarquee() {
    if (!userHovering) {
      scrollX += speed;

      // Seamless reset: when we've scrolled past 2nd copy, jump back to 1st copy position
      if (scrollX >= oneSetWidth * 2) {
        scrollX -= oneSetWidth;
      }
      // If somehow scrolled backward past start
      if (scrollX < 0) {
        scrollX += oneSetWidth;
      }
    }

    row.style.transform = `translateX(-${scrollX}px)`;
    updateCenterCard();
    requestAnimationFrame(animateMarquee);
  }

  requestAnimationFrame(animateMarquee);
})();

// ── Simple Video Visual System (plays video fullscreen when music plays)
class VisualSystem {
  constructor() {
    this.active = false;
    this.video = null;
    this.container = null;
    this.DEFAULT = 'visuals/cinepulse-visual.mp4';
  }
  init(container) {
    this.container = container;
    this.video = document.createElement('video');
    this.video.className = 'vj-loop-video';
    this.video.loop = true;
    this.video.muted = true;
    this.video.playsInline = true;
    this.video.preload = 'auto';
    this.video.src = this.DEFAULT;
    container.appendChild(this.video);
  }
  setVideo(src) {
    if (!this.video) return;
    const target = src || this.DEFAULT;
    // Don't reload if already the same
    if (this.video.getAttribute('data-src') === target) return;
    this.video.setAttribute('data-src', target);
    this.video.onerror = () => {
      // Fall back to default if specific video not found
      if (this.video.src !== new URL(this.DEFAULT, location.href).href) {
        this.video.removeAttribute('data-src');
        this.video.src = this.DEFAULT;
        this.video.load();
        if (this.active) this.video.play().catch(() => { });
      }
    };
    this.video.src = target;
    this.video.load();
    if (this.active) this.video.play().catch(() => { });
  }
  activate() {
    this.active = true;
    this.container.classList.add('active');
    document.body.classList.add('emotional-mode');
    this.video.play().catch(() => { });
  }
  deactivate() {
    this.active = false;
    this.container.classList.remove('active');
    document.body.classList.remove('emotional-mode');
    this.video.pause();
  }
}

const emotionalVisuals = new VisualSystem();
emotionalVisuals.init(document.getElementById('emotional-visuals'));

// ── Audio Player
const audio = document.getElementById('audio-player');
const heroPlay = document.querySelector('.btn-primary');
const playButton = document.querySelector('.p-play');
const prevButton = document.querySelector('.p-prev');
const nextButton = document.querySelector('.p-next');
const playerTitle = document.querySelector('.player-title');
const playerSub = document.querySelector('.player-sub');
const playerBar = document.querySelector('.player-bar');
const playerBarCompact = document.querySelector('.player-bar-compact');
const playerProgress = document.querySelector('.player-progress');
const timeCurrent = document.querySelector('.player-time-current');
const timeTotal = document.querySelector('.player-time-total');
const likeBtn = document.querySelector('.p-like');
const compactPlayBtn = document.querySelector('.p-play-compact');
const audioStatus = document.getElementById('audio-status');
const miniPlayer = document.getElementById('mini-player');
const fallbackTrackSrc = 'audio/rolex-theme.mp3';
let currentTrack = 0;
let usingFallbackTrack = false;

function formatTime(sec) {
  if (!sec || isNaN(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function setStatus(text) {
  audioStatus.textContent = text;
}

function updatePlayer(trackIndex) {
  const track = trendingData[trackIndex];
  currentTrack = trackIndex;
  usingFallbackTrack = false;
  audio.pause();
  audio.src = new URL(track.src, window.location.href).href;
  audio.load();
  audio.muted = false;
  audio.volume = 1;
  playerTitle.textContent = track.title;
  playerSub.textContent = track.comp;
  trackCards.forEach((card, i) => card.classList.toggle('is-active', i === trackIndex));
  setStatus(`Loading ${track.src}`);
  timeCurrent.textContent = '0:00';
  timeTotal.textContent = '0:00';

  // Pick a random visual video for this track, fall back to default
  const videoSrc = (track.visuals && track.visuals.length > 0)
    ? track.visuals[Math.floor(Math.random() * track.visuals.length)]
    : emotionalVisuals.DEFAULT;
  emotionalVisuals.setVideo(videoSrc);
}

function setPlayingState(isPlaying) {
  playButton.classList.toggle('is-playing', isPlaying);
  miniPlayer.classList.toggle('is-expanded', isPlaying);
  if (isPlaying) emotionalVisuals.activate();
  else emotionalVisuals.deactivate();
  setStatus(isPlaying ? `Playing ${trendingData[currentTrack].title}` : 'Paused');
}

async function playTrack(trackIndex = currentTrack) {
  if (trackIndex !== currentTrack || !audio.src) {
    updatePlayer(trackIndex);
  }
  try {
    await audio.play();
    setPlayingState(true);
  } catch (error) {
    setPlayingState(false);
    setStatus(`Could not play ${trendingData[currentTrack].src}: ${error.name || 'audio error'}`);
  }
}

function pauseTrack() {
  audio.pause();
  setPlayingState(false);
}

function playNext(step = 1) {
  const next = (currentTrack + step + trendingData.length) % trendingData.length;
  playTrack(next);
}

heroPlay.addEventListener('click', event => {
  event.preventDefault();
  playTrack(currentTrack);
});

playButton.addEventListener('click', () => {
  if (audio.paused) playTrack(currentTrack);
  else pauseTrack();
});

// Compact play button (visible when paused)
compactPlayBtn.addEventListener('click', () => {
  playTrack(currentTrack);
});

prevButton.addEventListener('click', () => playNext(-1));
nextButton.addEventListener('click', () => playNext(1));

// Like button toggle
likeBtn.addEventListener('click', () => {
  likeBtn.classList.toggle('liked');
  likeBtn.innerHTML = likeBtn.classList.contains('liked') ? '&#9829;' : '&#9825;';
});

// Progress bar click-to-seek
playerProgress.addEventListener('click', (e) => {
  if (!audio.duration) return;
  const rect = playerProgress.getBoundingClientRect();
  const pct = (e.clientX - rect.left) / rect.width;
  audio.currentTime = pct * audio.duration;
});

audio.addEventListener('timeupdate', () => {
  const pct = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
  playerBar.style.width = `${pct}%`;
  playerBarCompact.style.width = `${pct}%`;
  timeCurrent.textContent = formatTime(audio.currentTime);
});
audio.addEventListener('loadedmetadata', () => {
  timeTotal.textContent = formatTime(audio.duration);
});
audio.addEventListener('canplay', () => {
  if (audio.paused) setStatus(`Ready: ${trendingData[currentTrack].title}`);
});
audio.addEventListener('playing', () => setPlayingState(true));
audio.addEventListener('pause', () => {
  if (!audio.ended) setPlayingState(false);
});
audio.addEventListener('ended', () => playNext(1));
audio.addEventListener('error', () => {
  const codes = { 1: 'aborted', 2: 'network/path problem', 3: 'decode problem', 4: 'format not supported' };
  const mediaError = audio.error;
  if (!usingFallbackTrack && trendingData[currentTrack].src !== fallbackTrackSrc) {
    usingFallbackTrack = true;
    audio.src = new URL(fallbackTrackSrc, window.location.href).href;
    audio.load();
    audio.muted = false;
    audio.volume = 1;
    setStatus(`Missing ${trendingData[currentTrack].src}. Playing available BGM instead.`);
    audio.play().then(() => setPlayingState(true)).catch(() => setStatus(`Add ${trendingData[currentTrack].src} to play this track.`));
    return;
  }
  setPlayingState(false);
  setStatus(`Audio error: ${codes[mediaError?.code] || 'unknown'} - ${trendingData[currentTrack].src}`);
});

updatePlayer(0);

// ── Canvas Visualizer (Live Visualizer section)
const canvas = document.getElementById('visualizer-canvas');
const ctx = canvas.getContext('2d');
let vizMode = 'bars';
document.querySelectorAll('.viz-btn').forEach(b => {
  b.addEventListener('click', () => {
    document.querySelectorAll('.viz-btn').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    vizMode = b.dataset.mode;
  });
});

function drawBars(t) {
  const W = canvas.width, H = canvas.height;
  ctx.clearRect(0, 0, W, H);
  const n = 80;
  const bw = (W - n * 2) / n;
  for (let i = 0; i < n; i++) {
    const h = (Math.abs(Math.sin(t * 0.002 + i * 0.25)) * 0.5 + Math.abs(Math.sin(t * 0.0013 + i * 0.1)) * 0.5) * H * 0.75 + 4;
    const x = i * (bw + 2);
    const pct = i / n;
    const r = pct < 0.5 ? 229 : Math.round(229 * (1 - pct) * 2);
    const g = 0;
    const b = pct > 0.5 ? Math.round(255 * (pct - 0.5) * 2) : 0;
    ctx.fillStyle = `rgb(${r},${g},${b})`;
    ctx.globalAlpha = 0.7 + Math.sin(t * 0.004 + i) * 0.3;
    ctx.beginPath();
    ctx.roundRect(x, H - h, bw, h, 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

function drawCircular(t) {
  const W = canvas.width, H = canvas.height;
  ctx.clearRect(0, 0, W, H);
  const cx = W / 2, cy = H / 2, n = 120, r0 = 60;
  for (let i = 0; i < n; i++) {
    const ang = (i / n) * Math.PI * 2 - Math.PI / 2;
    const len = (Math.abs(Math.sin(t * 0.002 + i * 0.2)) * 0.5 + Math.abs(Math.sin(t * 0.0015 + i * 0.1)) * 0.5) * 80 + 8;
    const x1 = cx + Math.cos(ang) * r0;
    const y1 = cy + Math.sin(ang) * r0;
    const x2 = cx + Math.cos(ang) * (r0 + len);
    const y2 = cy + Math.sin(ang) * (r0 + len);
    ctx.strokeStyle = `hsl(${(i / n) * 60 + 340},90%,55%)`;
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.7 + len / 120 * 0.3;
    ctx.beginPath();
    ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
  }
  ctx.globalAlpha = 1;
  ctx.beginPath();
  ctx.arc(cx, cy, r0 - 2, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(229,9,20,0.3)';
  ctx.lineWidth = 1; ctx.stroke();
}

function drawWaveViz(t) {
  const W = canvas.width, H = canvas.height;
  ctx.clearRect(0, 0, W, H);
  ctx.beginPath();
  for (let x = 0; x < W; x++) {
    const y = H / 2 + Math.sin(x * 0.02 + t * 0.003) * 40 + Math.sin(x * 0.05 + t * 0.005) * 20 + Math.sin(x * 0.008 + t * 0.002) * 60;
    x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.strokeStyle = 'rgba(229,9,20,0.8)'; ctx.lineWidth = 2; ctx.stroke();
  ctx.beginPath();
  for (let x = 0; x < W; x++) {
    const y = H / 2 + Math.sin(x * 0.015 + t * 0.004 + 1) * 30 + Math.sin(x * 0.04 + t * 0.006) * 15;
    x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.strokeStyle = 'rgba(0,212,255,0.5)'; ctx.lineWidth = 1.5; ctx.stroke();
}

function renderViz(t) {
  if (vizMode === 'bars') drawBars(t);
  else if (vizMode === 'circular') drawCircular(t);
  else drawWaveViz(t);
  requestAnimationFrame(renderViz);
}
requestAnimationFrame(renderViz);

// ── Intersection Observer for fade-in
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-in').forEach(el => io.observe(el));
