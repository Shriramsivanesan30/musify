// ─── COMPOSER UNIVERSE PORTAL SCRIPT ───

// 1. Composer Data Repository
const COMPOSER_DB = {
  anirudh: {
    name: "Anirudh Ravichander",
    id: "anirudh",
    tag: "Dark Synth & Mass Beats",
    desc: "Enter the world of relentless synth basslines, explosive drum drops, and high-energy cinematic layers. The pioneer of modern mass elevation soundtracks.",
    color: "#E50914",
    colorRGB: "229, 9, 20",
    poster: "posters/aniruth.jpg",
    characteristic: "Mass Elevation & Electronic Fury",
    particleStyle: "red-synth",
    tracks: [
      { title: "Rolex Theme", movie: "VIKRAM", src: "audio/rolex-theme.mp3", img: "posters/vikram.jpg", tag: "Dark Synth", duration: "1:40", vibes: "Tension • Aggression • Pure Chaos" },
      { title: "Rage of Raga", movie: "DC", src: "audio/dc.mp3", img: "posters/dc.jpg", tag: "Mass", duration: "3:10", vibes: "Symmetric Drums • Build Up • Power" },
      { title: "AA23 Theme", movie: "AA23", src: "audio/aa23.mp3", img: "posters/aa23.jpg", tag: "Epic", duration: "2:05", vibes: "Mysterious • Heavy Pulse" },
      { title: "Na Ready", movie: "LEO", src: "audio/leo.mp3", img: "posters/leo.jpg", tag: "Dance Beat", duration: "2:15", vibes: "Folk Drumming • Celebration" },
      { title: "Perseverance Theme", movie: "VIDAMUYARCHI", src: "audio/Perseverance Theme.mp3", img: "posters/preservarance.jpg", tag: "Heavy", duration: "2:40", vibes: "Orchestral Synth • Unstoppable" },
      { title: "Power House", movie: "COOLIE", src: "audio/coolie.mp3", img: "posters/coolie.png", tag: "Mass BGM", duration: "1:55", vibes: "Gold Tint • Dark Bass Drops" }
    ]
  },
  rahman: {
    name: "A. R. Rahman",
    id: "rahman",
    tag: "Cosmic Soul & Devotion",
    desc: "Immerse yourself in soul-stirring classical woodwinds, ethereal choir dynamics, and spiritual fusion. The legendary maestro who took Tamil cinema to the global stage.",
    color: "#4A9EFF",
    colorRGB: "74, 158, 255",
    poster: "posters/rahman.jpg.jpg",
    characteristic: "Ambient Sufi & Symphony of Peace",
    particleStyle: "cosmic-blue",
    tracks: [
      { title: "Mersal Arasan", movie: "MERSAL", src: "audio/mersal-arasan.mp3", img: "posters/sss.jpg", tag: "Celebration", duration: "2:30", vibes: "Folk Percussion • Trumpets • Royal" },
      { title: "Rasaali", movie: "AYM", src: "audio/rasaali.mp3", img: "posters/sss.jpg", tag: "Symphonic", duration: "3:45", vibes: "Violin Ensemble • Ethereal Romance" },
      { title: "Vaan Varuvaan", movie: "KAATRU VELIYIDAI", src: "audio/vaan-varuvaan.mp3", img: "posters/sss.jpg", tag: "Ethereal", duration: "2:20", vibes: "Spiritual Air • Ambient Whistles" },
      { title: "Anjali Anjali", movie: "DUET", src: "audio/anjali-anjali.mp3", img: "posters/sss.jpg", tag: "Saxophone Gold", duration: "2:10", vibes: "Classic Sax • Melodious • Pure Devotion" }
    ]
  },
  yuvan: {
    name: "Yuvan Shankar Raja",
    id: "yuvan",
    tag: "Rainy Nostalgia & Melancholy",
    desc: "Dwell in the raw, personal, and nostalgic space of Tamil cinema's favorite indie-hearted king. Fusing lo-fi acoustic elements with unmatched emotional depth.",
    color: "#00D4FF",
    colorRGB: "0, 212, 255",
    poster: "posters/yuvan.png",
    characteristic: "Melancholic Love & Midnight Vibes",
    particleStyle: "rainy",
    tracks: [
      { title: "Soorakaathal", movie: "ISSPADE RAJAVUM IDHAYA RANIYUM", src: "audio/soorakaathal.mp3", img: "posters/yuvan.png", tag: "Unplugged", duration: "2:35", vibes: "Acoustic Strum • Wet Streets • Heartbreak" },
      { title: "Nostalgic Rain", movie: "96", src: "audio/96.mp3", img: "posters/96.jpg", tag: "Rain Theme", duration: "3:12", vibes: "Violin • Nostalgia • Slow Rain" },
      { title: "Midnight Solitude", movie: "LO-FI SPECIAL", src: "audio/rolex-theme.mp3", img: "posters/yuvan.png", tag: "Midnight Chill", duration: "2:00", vibes: "Muted Rain Drops • Calm Drive" }
    ]
  },
  harris: {
    name: "Harris Jayaraj",
    id: "harris",
    tag: "Acoustic Warmth & Sleek Beats",
    desc: "Indulge in sophisticated harmonies, sparkling acoustic guitar strums, and smooth western-classical structures. The absolute soundtrack of urban romance.",
    color: "#C9A84C",
    colorRGB: "201, 168, 76",
    poster: "posters/welive.jpg",
    characteristic: "Acoustic Elegance & Humming Melodies",
    particleStyle: "guitar-glow",
    tracks: [
      { title: "Guitar Prelude", movie: "MINNALE", src: "audio/vaan-varuvaan.mp3", img: "posters/welive.jpg", tag: "Acoustic Guitar", duration: "2:10", vibes: "Soft Hum • Sparkly Guitar • Warmth" },
      { title: "Urban Rhythm", movie: "GHAJINI", src: "audio/leo.mp3", img: "posters/welive.jpg", tag: "Modern Beats", duration: "2:45", vibes: "Western Riffs • Dynamic Snare" },
      { title: "Romantic Humming", movie: "KO", src: "audio/anjali-anjali.mp3", img: "posters/welive.jpg", tag: "Humming", duration: "2:05", vibes: "Vocal Refrain • Sweeping Chords" }
    ]
  },
  sai: {
    name: "Sai Abhyankkar",
    id: "sai",
    tag: "Retro-Modern Grooves & Indie Sway",
    desc: "Step onto a neon-lit dancefloor where high-energy indie synth-pop meets vintage retro rhythms. The brilliant new voice making everyone sway to the groove.",
    color: "#BD00FF",
    colorRGB: "189, 0, 255",
    poster: "posters/saie.jpg",
    characteristic: "Neon Synth-Pop & Infinite Sway",
    particleStyle: "neon-groove",
    tracks: [
      { title: "Katchi Sera (Instrumental)", movie: "INDIE GOLD", src: "audio/leo.mp3", img: "posters/saie.jpg", tag: "Groovy Pop", duration: "2:20", vibes: "Brass Stabs • Infectious Sway • Retro Pop" },
      { title: "Aasa Kooda (Rhythm)", movie: "INDIE SINGLE", src: "audio/rolex-theme.mp3", img: "posters/saie.jpg", tag: "Groove", duration: "2:15", vibes: "Bass Walk • Retro Funk • Summer Breeze" }
    ]
  }
};

// 2. Parse Query Params and Initialize Page Theme
const urlParams = new URLSearchParams(window.location.search);
const composerId = urlParams.get('id') || 'anirudh';
const composer = COMPOSER_DB[composerId] || COMPOSER_DB.anirudh;

// Apply Composer-specific variables to Document Root
document.documentElement.style.setProperty('--composer-accent', composer.color);
document.documentElement.style.setProperty('--composer-accent-rgb', composer.colorRGB);
document.documentElement.style.setProperty('--composer-glow', `rgba(${composer.colorRGB}, 0.4)`);

// Populate HTML Elements
document.getElementById('composer-profile-pic').src = composer.poster;
document.getElementById('composer-profile-pic').alt = composer.name;
document.getElementById('composer-title-tag').textContent = composer.tag;
document.getElementById('composer-name').textContent = composer.name;
document.getElementById('composer-bio').textContent = composer.desc;
document.getElementById('composer-characteristic').textContent = composer.characteristic;
document.getElementById('tracklist-count').textContent = `${composer.tracks.length} masterworks available`;
document.title = `CinePulse &ndash; ${composer.name} Universe`;

// 3. Custom Cursor & Interactive Mouse Tracking
const cursor = document.getElementById('cursor');
const trail = document.getElementById('cursor-trail');
let mx = 0, my = 0, tx = 0, ty = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
});

function animTrail() {
  tx += (mx - tx) * 0.15;
  ty += (my - ty) * 0.15;
  trail.style.left = tx + 'px';
  trail.style.top = ty + 'px';
  requestAnimationFrame(animTrail);
}
animTrail();

// 4. Background Animation Engine (Canvas 2D)
const canvas = document.getElementById('universe-bg-canvas');
const ctx = canvas.getContext('2d');

let ww = canvas.width = window.innerWidth;
let hh = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  ww = canvas.width = window.innerWidth;
  hh = canvas.height = window.innerHeight;
});

// Particle configuration classes
class ParticleSystem {
  constructor(style) {
    this.style = style;
    this.particles = [];
    this.init();
  }
  
  init() {
    this.particles = [];
    const count = this.style === 'rainy' ? 120 : (this.style === 'cosmic-blue' ? 150 : 80);
    for (let i = 0; i < count; i++) {
      this.particles.push(this.createParticle());
    }
  }

  createParticle() {
    if (this.style === 'rainy') {
      return {
        x: Math.random() * ww,
        y: Math.random() * -hh,
        vy: Math.random() * 12 + 10,
        length: Math.random() * 20 + 15,
        opacity: Math.random() * 0.4 + 0.1,
        width: Math.random() * 1.5 + 0.5
      };
    } else if (this.style === 'cosmic-blue') {
      return {
        x: Math.random() * ww,
        y: Math.random() * hh,
        r: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.25 - 0.1,
        vy: (Math.random() - 0.5) * 0.25 - 0.1,
        opacity: Math.random() * 0.8 + 0.2,
        pulseSpeed: Math.random() * 0.03 + 0.01,
        pulsePhase: Math.random() * Math.PI
      };
    } else if (this.style === 'guitar-glow') {
      return {
        x: Math.random() * ww,
        y: hh + Math.random() * 100,
        r: Math.random() * 4 + 1.5,
        vx: (Math.random() - 0.5) * 0.5,
        vy: -Math.random() * 1.5 - 0.8,
        opacity: Math.random() * 0.4 + 0.15,
        swaySpeed: Math.random() * 0.02 + 0.01,
        swayAmplitude: Math.random() * 2 + 1,
        swayPhase: Math.random() * Math.PI * 2
      };
    } else if (this.style === 'red-synth') {
      return {
        x: Math.random() * ww,
        y: Math.random() * hh,
        r: 0,
        maxR: Math.random() * 70 + 30,
        opacity: 0,
        growSpeed: Math.random() * 0.4 + 0.2,
        maxOpacity: Math.random() * 0.12 + 0.04
      };
    } else { // neon-groove
      return {
        x: Math.random() * ww,
        y: Math.random() * hh,
        r: Math.random() * 3 + 1,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        opacity: Math.random() * 0.4 + 0.1
      };
    }
  }

  updateAndDraw(t) {
    ctx.clearRect(0, 0, ww, hh);

    if (this.style === 'rainy') {
      ctx.strokeStyle = `rgba(${composer.colorRGB}, 0.55)`;
      ctx.lineWidth = 1;
      this.particles.forEach(p => {
        p.y += p.vy;
        if (p.y > hh) {
          p.y = -20;
          p.x = Math.random() * ww;
          p.vy = Math.random() * 12 + 10;
        }
        ctx.strokeStyle = `rgba(${composer.colorRGB}, ${p.opacity})`;
        ctx.lineWidth = p.width;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + (mx - ww/2) * 0.02, p.y + p.length);
        ctx.stroke();
      });
    } 
    
    else if (this.style === 'cosmic-blue') {
      this.particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulsePhase += p.pulseSpeed;
        
        if (p.x < 0) p.x = ww;
        if (p.x > ww) p.x = 0;
        if (p.y < 0) p.y = hh;
        if (p.y > hh) p.y = 0;

        const currentOpacity = p.opacity * (Math.sin(p.pulsePhase) * 0.4 + 0.6);
        ctx.fillStyle = `rgba(${composer.colorRGB}, ${currentOpacity})`;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        
        // Occasional starry twinkle halos
        if (p.opacity > 0.8 && Math.sin(p.pulsePhase) > 0.9) {
          ctx.strokeStyle = `rgba(${composer.colorRGB}, ${currentOpacity * 0.3})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
          ctx.stroke();
        }
      });
    } 
    
    else if (this.style === 'guitar-glow') {
      this.particles.forEach(p => {
        p.y += p.vy;
        p.swayPhase += p.swaySpeed;
        p.x += Math.sin(p.swayPhase) * p.swayAmplitude * 0.15;
        
        if (p.y < -10) {
          p.y = hh + 20;
          p.x = Math.random() * ww;
        }
        
        ctx.fillStyle = `rgba(${composer.colorRGB}, ${p.opacity})`;
        ctx.shadowColor = composer.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow
      });
    } 
    
    else if (this.style === 'red-synth') {
      this.particles.forEach(p => {
        p.r += p.growSpeed;
        if (p.r < p.maxR * 0.5) {
          p.opacity += 0.005;
          if (p.opacity > p.maxOpacity) p.opacity = p.maxOpacity;
        } else {
          p.opacity -= 0.004;
          if (p.opacity < 0) p.opacity = 0;
        }
        
        if (p.r >= p.maxR || p.opacity <= 0) {
          p.r = 0;
          p.opacity = 0;
          p.x = Math.random() * ww;
          p.y = Math.random() * hh;
          p.growSpeed = Math.random() * 0.4 + 0.2;
          p.maxR = Math.random() * 70 + 30;
          p.maxOpacity = Math.random() * 0.12 + 0.04;
        }
        
        ctx.strokeStyle = `rgba(${composer.colorRGB}, ${p.opacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.stroke();
      });
    } 
    
    else { // neon-groove: draw wavy neon lines in the background
      ctx.strokeStyle = `rgba(${composer.colorRGB}, 0.08)`;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      for (let x = 0; x < ww; x += 5) {
        const y = hh / 2 + Math.sin(x * 0.003 + t * 0.001) * 120 + Math.cos(x * 0.006 + t * 0.0015) * 60;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      ctx.strokeStyle = `rgba(189, 0, 255, 0.05)`; // Groovy purple alternate line
      ctx.beginPath();
      for (let x = 0; x < ww; x += 5) {
        const y = hh / 2 + Math.sin(x * 0.0025 + t * 0.0008 + Math.PI) * 100 + Math.sin(x * 0.005 + t * 0.001) * 40;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Floating modern geometric square particles
      this.particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > ww) p.vx *= -1;
        if (p.y < 0 || p.y > hh) p.vy *= -1;
        
        ctx.fillStyle = `rgba(${composer.colorRGB}, ${p.opacity})`;
        ctx.beginPath();
        ctx.fillRect(p.x - p.r, p.y - p.r, p.r * 2, p.r * 2);
      });
    }
  }
}

const particleEngine = new ParticleSystem(composer.particleStyle);

function renderLoop(time) {
  particleEngine.updateAndDraw(time);
  requestAnimationFrame(renderLoop);
}
requestAnimationFrame(renderLoop);


// 5. Build and Populate Track Cards dynamically
const tracksContainer = document.getElementById('tracks-container');
const audioPlayer = document.getElementById('universe-audio');

function populateTracklist() {
  tracksContainer.innerHTML = '';
  composer.tracks.forEach((track, index) => {
    const card = document.createElement('div');
    card.className = 'track-card';
    card.dataset.trackIndex = index;
    
    card.innerHTML = `
      <div class="track-number">${(index + 1).toString().padStart(2, '0')}</div>
      <div class="track-poster-box">
        <img class="track-poster" src="${track.img}" alt="${track.movie} Poster" onerror="this.src='posters/retro.jpg';">
      </div>
      <div class="track-details">
        <div class="track-name-row">
          <span class="track-title">${track.title}</span>
          <span class="track-badge">${track.tag}</span>
        </div>
        <div class="track-movie">${track.movie}</div>
      </div>
      <div class="track-vibes">${track.vibes}</div>
      <div class="track-duration">${track.duration}</div>
      <div class="track-play-btn" aria-label="Play">
        <div class="track-play-icon"></div>
        <div class="track-playing-lines">
          <div class="playing-line"></div>
          <div class="playing-line"></div>
          <div class="playing-line"></div>
        </div>
      </div>
    `;
    
    card.addEventListener('click', () => {
      if (currentPlayingIndex === index) {
        togglePlayState();
      } else {
        playTrack(index);
      }
    });
    
    tracksContainer.appendChild(card);
  });
}

// 6. Audio Player State Management & Playback Logic
let currentPlayingIndex = -1;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;

const miniPlayer = document.getElementById('mini-player');
const playerTitle = document.getElementById('player-title');
const playerSub = document.getElementById('player-sub');
const playerProgressBar = document.getElementById('player-bar');
const playerBarCompact = document.getElementById('player-bar-compact');
const playerProgressArea = document.getElementById('player-progress');
const playerTimeCurrent = document.getElementById('player-time-current');
const playerTimeTotal = document.getElementById('player-time-total');

const playBtn = document.getElementById('p-play');
const compactPlayBtn = document.getElementById('p-play-compact');
const prevBtn = document.getElementById('p-prev');
const nextBtn = document.getElementById('p-next');
const shuffleBtn = document.getElementById('p-shuffle');
const repeatBtn = document.getElementById('p-repeat');
const likeBtn = document.getElementById('p-like');

const fallbackTrack = 'audio/rolex-theme.mp3';
let usingFallback = false;

function formatTime(secs) {
  if (isNaN(secs) || secs === Infinity) return '0:00';
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function playTrack(index) {
  if (index < 0 || index >= composer.tracks.length) return;
  
  // Deactivate previous active card
  if (currentPlayingIndex !== -1) {
    const prevCard = document.querySelector(`.track-card[data-track-index="${currentPlayingIndex}"]`);
    if (prevCard) prevCard.classList.remove('is-active', 'is-playing');
  }

  currentPlayingIndex = index;
  const track = composer.tracks[index];
  usingFallback = false;

  audioPlayer.src = track.src;
  audioPlayer.load();

  // Update Bottom Player Text
  playerTitle.textContent = track.title;
  playerSub.textContent = `${track.movie} • ${composer.name}`;
  
  // Update Card Selection CSS States
  const activeCard = document.querySelector(`.track-card[data-track-index="${index}"]`);
  if (activeCard) activeCard.classList.add('is-active');

  // Trigger audio playback
  audioPlayer.play()
    .then(() => {
      setPlayerPlayingState(true);
    })
    .catch(err => {
      console.warn(`Initial play failed: ${track.src}, attempting fallback.`, err);
      // fallback to available soundtrack
      usingFallback = true;
      audioPlayer.src = fallbackTrack;
      audioPlayer.load();
      audioPlayer.play()
        .then(() => {
          setPlayerPlayingState(true);
        })
        .catch(fallbackErr => {
          console.error("All play attempts failed.", fallbackErr);
          setPlayerPlayingState(false);
        });
    });
}

function setPlayerPlayingState(playing) {
  isPlaying = playing;
  
  // Toggle mini player expanding styles
  miniPlayer.classList.toggle('is-expanded', playing);
  
  // Toggle bottom play button icon
  playBtn.classList.toggle('is-playing', playing);
  
  // Update active track card class to match playing state
  const activeCard = document.querySelector(`.track-card[data-track-index="${currentPlayingIndex}"]`);
  if (activeCard) {
    activeCard.classList.toggle('is-playing', playing);
  }
}

function togglePlayState() {
  if (currentPlayingIndex === -1) {
    // If nothing has been played, play the first track in list
    playTrack(0);
    return;
  }
  
  if (isPlaying) {
    audioPlayer.pause();
    setPlayerPlayingState(false);
  } else {
    audioPlayer.play()
      .then(() => {
        setPlayerPlayingState(true);
      })
      .catch(() => {
        setPlayerPlayingState(false);
      });
  }
}

function playNextTrack() {
  if (composer.tracks.length === 0) return;
  
  if (isShuffle) {
    const randomIndex = Math.floor(Math.random() * composer.tracks.length);
    playTrack(randomIndex);
  } else {
    const nextIndex = (currentPlayingIndex + 1) % composer.tracks.length;
    playTrack(nextIndex);
  }
}

function playPrevTrack() {
  if (composer.tracks.length === 0) return;
  
  const prevIndex = (currentPlayingIndex - 1 + composer.tracks.length) % composer.tracks.length;
  playTrack(prevIndex);
}

// 7. Event Listeners for Player Controls

playBtn.addEventListener('click', togglePlayState);
compactPlayBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // Avoid triggering card click
  togglePlayState();
});

prevBtn.addEventListener('click', playPrevTrack);
nextBtn.addEventListener('click', playNextTrack);

shuffleBtn.addEventListener('click', () => {
  isShuffle = !isShuffle;
  shuffleBtn.classList.toggle('active', isShuffle);
});

repeatBtn.addEventListener('click', () => {
  isRepeat = !isRepeat;
  repeatBtn.classList.toggle('active', isRepeat);
});

likeBtn.addEventListener('click', () => {
  likeBtn.classList.toggle('liked');
  likeBtn.innerHTML = likeBtn.classList.contains('liked') ? '&#9829;' : '&#9825;';
});

// Click timeline seeking
playerProgressArea.addEventListener('click', (e) => {
  if (!audioPlayer.duration) return;
  const rect = playerProgressArea.getBoundingClientRect();
  const clickPercent = (e.clientX - rect.left) / rect.width;
  audioPlayer.currentTime = clickPercent * audioPlayer.duration;
});

// Audio HTML5 Events
audioPlayer.addEventListener('timeupdate', () => {
  if (!audioPlayer.duration) return;
  const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  playerProgressBar.style.width = `${percent}%`;
  playerBarCompact.style.width = `${percent}%`;
  playerTimeCurrent.textContent = formatTime(audioPlayer.currentTime);
});

audioPlayer.addEventListener('loadedmetadata', () => {
  playerTimeTotal.textContent = formatTime(audioPlayer.duration);
});

audioPlayer.addEventListener('ended', () => {
  if (isRepeat) {
    audioPlayer.currentTime = 0;
    audioPlayer.play();
  } else {
    playNextTrack();
  }
});

// Initialize UI
populateTracklist();
