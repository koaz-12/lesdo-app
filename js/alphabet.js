// Controlador del Abecedario y Vocales LESDO con Videos Oficiales Diccionario LSRD

const getLetterImg = (l) => `images/alphabet/${l.toUpperCase()}.svg`;

const LETTER_VIDEOS = {
  'A': 'https://diccionariolsrd.cc/wp-content/uploads/2024/06/1.-A-Sena-1.mp4',
  'B': 'https://diccionariolsrd.cc/wp-content/uploads/2024/06/2.-B-Sena-1.mp4',
  'C': 'https://diccionariolsrd.cc/wp-content/uploads/2024/06/3.-C-Sena-1.mp4',
  'D': 'https://diccionariolsrd.cc/wp-content/uploads/2024/06/4.-D-Sena-1.mp4',
  'E': 'https://diccionariolsrd.cc/wp-content/uploads/2024/06/5.-E-Sena-1.mp4',
  'F': 'https://diccionariolsrd.cc/wp-content/uploads/2024/06/6.-F-Sena-1.mp4',
  'G': 'https://diccionariolsrd.cc/wp-content/uploads/2024/06/7.-G-Sena-1.mp4',
  'H': 'https://diccionariolsrd.cc/wp-content/uploads/2024/06/8.-H-Sena-1.mp4',
  'I': 'https://diccionariolsrd.cc/wp-content/uploads/2024/06/9.-I-Sena-1.mp4',
  'J': 'https://diccionariolsrd.cc/wp-content/uploads/2024/06/10.-J-Sena-1.mp4',
  'K': 'https://diccionariolsrd.cc/wp-content/uploads/2024/06/11.-K-Sena-1.mp4',
  'L': 'https://diccionariolsrd.cc/wp-content/uploads/2024/06/12.-L-Sena-1.mp4',
  'M': 'https://diccionariolsrd.cc/wp-content/uploads/2024/06/13.-M-Sena-1.mp4',
  'N': 'https://diccionariolsrd.cc/wp-content/uploads/2024/06/14.-N-Sena-1.mp4',
  'Ñ': 'https://diccionariolsrd.cc/wp-content/uploads/2024/06/15.-N-Sena-1-1.mp4',
  'O': 'https://diccionariolsrd.cc/wp-content/uploads/2024/06/16.-O-Sena-1.mp4',
  'P': 'https://diccionariolsrd.cc/wp-content/uploads/2024/06/17.-P-Sena-1.mp4',
  'Q': 'https://diccionariolsrd.cc/wp-content/uploads/2024/06/18.-Q-Sena-1.mp4',
  'R': 'https://diccionariolsrd.cc/wp-content/uploads/2024/06/19.-R-Sena-1.mp4',
  'S': 'https://diccionariolsrd.cc/wp-content/uploads/2024/06/20.-S-Sena-1.mp4',
  'T': 'https://diccionariolsrd.cc/wp-content/uploads/2024/06/21.-T-Sena-1.mp4',
  'U': 'https://diccionariolsrd.cc/wp-content/uploads/2024/06/22.-U-Sena-1.mp4',
  'V': 'https://diccionariolsrd.cc/wp-content/uploads/2024/06/23.-V-Sena-1.mp4',
  'W': 'https://diccionariolsrd.cc/wp-content/uploads/2024/06/24.-W-Sena-1.mp4',
  'X': 'https://diccionariolsrd.cc/wp-content/uploads/2024/06/25.-X-Sena-1.mp4',
  'Y': 'https://diccionariolsrd.cc/wp-content/uploads/2024/06/26.-Y-Sena-1.mp4',
  'Z': 'https://diccionariolsrd.cc/wp-content/uploads/2024/06/27.-Z-Sena-1.mp4'
};

const ALPHABET_DATA = [
  { letter: 'A', isVowel: true, name: 'Vocal A', img: getLetterImg('A'), video: LETTER_VIDEOS['A'], hand: 'Puño cerrado con el pulgar erguido y apoyado en el lateral del dedo índice.', tip: 'Palma siempre hacia el frente.' },
  { letter: 'B', isVowel: false, name: 'Letra B', img: getLetterImg('B'), video: LETTER_VIDEOS['B'], hand: 'Cuatro dedos extendidos y juntos hacia arriba con el pulgar doblado sobre la palma.', tip: 'Dedos firmemente unidos apuntando arriba.' },
  { letter: 'C', isVowel: false, name: 'Letra C', img: getLetterImg('C'), video: LETTER_VIDEOS['C'], hand: 'Mano curvada en forma de media luna formando la letra C lateral.', tip: 'La apertura mira hacia el lateral.' },
  { letter: 'D', isVowel: false, name: 'Letra D', img: getLetterImg('D'), video: LETTER_VIDEOS['D'], hand: 'Dedo índice apuntando hacia arriba, los demás dedos forman un círculo con el pulgar.', tip: 'El índice hace de asta vertical.' },
  { letter: 'E', isVowel: true, name: 'Vocal E', img: getLetterImg('E'), video: LETTER_VIDEOS['E'], hand: 'Dedos doblados hacia abajo tocando ligeramente la punta del pulgar.', tip: 'Parece una pequeña garra relajada.' },
  { letter: 'F', isVowel: false, name: 'Letra F', img: getLetterImg('F'), video: LETTER_VIDEOS['F'], hand: 'Índice y pulgar se tocan por las yemas formando un círculo; tres dedos extendidos arriba.', tip: 'Similar al símbolo de OK.' },
  { letter: 'G', isVowel: false, name: 'Letra G', img: getLetterImg('G'), video: LETTER_VIDEOS['G'], hand: 'Índice y pulgar paralelos apuntando en horizontal hacia el lado opuesto.', tip: 'Como midiendo algo pequeño horizontal.' },
  { letter: 'H', isVowel: false, name: 'Letra H', img: getLetterImg('H'), video: LETTER_VIDEOS['H'], hand: 'Índice y medio extendidos juntos en posición horizontal.', tip: 'Dos dedos horizontales.' },
  { letter: 'I', isVowel: true, name: 'Vocal I', img: getLetterImg('I'), video: LETTER_VIDEOS['I'], hand: 'Puño cerrado levantando únicamente el dedo meñique hacia arriba.', tip: 'El meñique simboliza el palito de la i.' },
  { letter: 'J', isVowel: false, name: 'Letra J', img: getLetterImg('J'), video: LETTER_VIDEOS['J'], hand: 'Con el meñique levantado (posición I), dibuja una curva en el aire hacia abajo.', tip: 'Traza la colita de la letra J en el aire.' },
  { letter: 'K', isVowel: false, name: 'Letra K', img: getLetterImg('K'), video: LETTER_VIDEOS['K'], hand: 'Índice arriba, medio diagonal hacia adelante, pulgar apoyado entre ambos.', tip: 'Forma la letra K con los dedos.' },
  { letter: 'L', isVowel: false, name: 'Letra L', img: getLetterImg('L'), video: LETTER_VIDEOS['L'], hand: 'Índice extendido hacia arriba y pulgar horizontal formando un ángulo de 90°.', tip: 'Forma una L clara.' },
  { letter: 'M', isVowel: false, name: 'Letra M', img: getLetterImg('M'), video: LETTER_VIDEOS['M'], hand: 'Tres dedos (índice, medio y anular) doblados sobre el pulgar apuntando abajo.', tip: 'Representa las 3 patitas de la M.' },
  { letter: 'N', isVowel: false, name: 'Letra N', img: getLetterImg('N'), video: LETTER_VIDEOS['N'], hand: 'Dos dedos (índice y medio) doblados sobre el pulgar apuntando abajo.', tip: 'Representa las 2 patitas de la N.' },
  { letter: 'Ñ', isVowel: false, name: 'Letra Ñ', img: getLetterImg('Ñ'), video: LETTER_VIDEOS['Ñ'], hand: 'Misma posición de la N pero con movimiento oscilante de lado a lado.', tip: 'El movimiento representa la virgulilla (~).' },
  { letter: 'O', isVowel: true, name: 'Vocal O', img: getLetterImg('O'), video: LETTER_VIDEOS['O'], hand: 'Todos los dedos curvados uniéndose con el pulgar para formar un círculo perfecto.', tip: 'Forma la letra O con toda la mano.' },
  { letter: 'P', isVowel: false, name: 'Letra P', img: getLetterImg('P'), video: LETTER_VIDEOS['P'], hand: 'Posición de la K pero con la muñeca inclinada apuntando hacia abajo.', tip: 'Dedo medio hacia abajo.' },
  { letter: 'Q', isVowel: false, name: 'Letra Q', img: getLetterImg('Q'), video: LETTER_VIDEOS['Q'], hand: 'Posición de la G con índice y pulgar apuntando directamente hacia el suelo.', tip: 'Dedos apuntando hacia abajo.' },
  { letter: 'R', isVowel: false, name: 'Letra R', img: getLetterImg('R'), video: LETTER_VIDEOS['R'], hand: 'Cruzar el dedo medio sobre el dedo índice extendido.', tip: 'Como cruzar los dedos para la suerte.' },
  { letter: 'S', isVowel: false, name: 'Letra S', img: getLetterImg('S'), video: LETTER_VIDEOS['S'], hand: 'Puño cerrado con el pulgar cruzado por encima de los cuatro dedos.', tip: 'El pulgar va horizontal al frente.' },
  { letter: 'T', isVowel: false, name: 'Letra T', img: getLetterImg('T'), video: LETTER_VIDEOS['T'], hand: 'Pulgar metido entre el dedo índice y medio en un puño cerrado.', tip: 'El pulgar asoma entre los dos dedos.' },
  { letter: 'U', isVowel: true, name: 'Vocal U', img: getLetterImg('U'), video: LETTER_VIDEOS['U'], hand: 'Dedos índice y medio extendidos y juntos hacia arriba; pulgar sujeta anular y meñique.', tip: 'Dos dedos firmemente unidos.' },
  { letter: 'V', isVowel: false, name: 'Letra V', img: getLetterImg('V'), video: LETTER_VIDEOS['V'], hand: 'Índice y medio extendidos y separados formando una V (símbolo de paz).', tip: 'Palma hacia el frente.' },
  { letter: 'W', isVowel: false, name: 'Letra W', img: getLetterImg('W'), video: LETTER_VIDEOS['W'], hand: 'Índice, medio y anular extendidos y separados formando una W.', tip: 'Tres dedos separados hacia arriba.' },
  { letter: 'X', isVowel: false, name: 'Letra X', img: getLetterImg('X'), video: LETTER_VIDEOS['X'], hand: 'Dedo índice encorvado en forma de gancho apuntando hacia arriba.', tip: 'Como un garfio hacia el frente.' },
  { letter: 'Y', isVowel: false, name: 'Letra Y', img: getLetterImg('Y'), video: LETTER_VIDEOS['Y'], hand: 'Pulgar y meñique extendidos, los tres dedos centrales cerrados (shaka).', tip: 'Gesto de saludo hawaiano / Y.' },
  { letter: 'Z', isVowel: false, name: 'Letra Z', img: getLetterImg('Z'), video: LETTER_VIDEOS['Z'], hand: 'Con el dedo índice extendido, dibuja la letra Z en el aire con 3 trazos.', tip: 'Traza la Z claramente en el aire.' }
];

const AlphabetApp = {
  initialized: false,
  currentIndex: 0,
  activeList: ALPHABET_DATA,
  autoplayTimer: null,
  isAutoplaying: false,
  viewMode: localStorage.getItem('lesdo_alphabet_view_mode') || 'video',

  init() {
    if (this.initialized) return;
    this.initialized = true;
    this.setupAuth();
    this.setViewMode(this.viewMode);
    this.renderVowels();
    this.renderAlphabet();
    this.setupTabs();
    this.setupStageNavigation();
    this.setupSpeller();
    this.setupNavToggle();
  },

  setupAuth() {
    document.getElementById('btnLogout')?.addEventListener('click', () => {
      if (window.Auth?.signOut) window.Auth.signOut();
      else window.location.href = 'index.html';
    });
    document.getElementById('btnLogoutMobile')?.addEventListener('click', () => {
      if (window.Auth?.signOut) window.Auth.signOut();
      else window.location.href = 'index.html';
    });
  },

  setupNavToggle() {
    const navToggle = document.getElementById('navToggle');
    const navMobile = document.getElementById('navMobile');
    if (navToggle && navMobile) {
      navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMobile.style.display = navToggle.classList.contains('active') ? 'flex' : 'none';
      });
    }
  },

  setupTabs() {
    const tabs = document.querySelectorAll('.alpha-tab');
    const sections = {
      vowels: document.getElementById('sectionVowels'),
      'full-alphabet': document.getElementById('sectionFullAlphabet'),
      'video-masterclass': document.getElementById('sectionVideoMasterclass'),
      speller: document.getElementById('sectionSpeller')
    };
    const showcaseStage = document.getElementById('showcaseStage');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        if (this.isAutoplaying) this.stopAutoplay();
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const target = tab.dataset.tab;
        Object.keys(sections).forEach(key => {
          if (sections[key]) {
            sections[key].style.display = key === target ? 'block' : 'none';
          }
        });

        // Hide showcase stage when viewing video masterclass or word speller
        if (showcaseStage) {
          showcaseStage.style.display = (target === 'vowels' || target === 'full-alphabet') ? 'block' : 'none';
        }

        if (target === 'vowels') {
          this.activeList = ALPHABET_DATA.filter(a => a.isVowel);
          this.currentIndex = 0;
          this.showcase(this.activeList[0]);
        } else if (target === 'full-alphabet') {
          this.activeList = ALPHABET_DATA;
          this.currentIndex = 0;
          this.showcase(this.activeList[0]);
        }
      });
    });
  },

  setupStageNavigation() {
    const btnPrev = document.getElementById('btnPrevLetter');
    const btnNext = document.getElementById('btnNextLetter');
    const btnAutoplay = document.getElementById('btnAutoplayAlphabet');
    const btnVideo = document.getElementById('btnOpenVideoForLetter');

    btnPrev?.addEventListener('click', () => {
      if (this.isAutoplaying) this.stopAutoplay();
      this.prevLetter();
    });

    btnNext?.addEventListener('click', () => {
      if (this.isAutoplaying) this.stopAutoplay();
      this.nextLetter();
    });

    btnAutoplay?.addEventListener('click', () => {
      if (this.isAutoplaying) {
        this.stopAutoplay();
      } else {
        this.startAutoplay();
      }
    });

    btnVideo?.addEventListener('click', () => {
      if (this.isAutoplaying) this.stopAutoplay();
      const currentItem = this.activeList[this.currentIndex];
      if (currentItem?.isVowel) {
        this.openVideoTab('vowels');
      } else {
        this.openVideoTab('alphabet');
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        if (this.isAutoplaying) this.stopAutoplay();
        this.prevLetter();
      } else if (e.key === 'ArrowRight') {
        if (this.isAutoplaying) this.stopAutoplay();
        this.nextLetter();
      }
    });
  },

  openVideoTab(type = 'vowels') {
    const tabVideo = document.querySelector('.alpha-tab[data-tab="video-masterclass"]');
    if (tabVideo) tabVideo.click();
    this.switchVideo(type);
  },

  switchVideo(type) {
    const wrapper = document.getElementById('videoPlayerWrapper');
    const btnV = document.getElementById('btnVidVowels');
    const btnA = document.getElementById('btnVidAlphabet');
    const btnC = document.getElementById('btnVidConadis');
    const btnK = document.getElementById('btnVidKids');

    [btnV, btnA, btnC, btnK].forEach(b => {
      if (b) {
        b.classList.remove('btn-primary');
        b.classList.add('btn-secondary');
      }
    });

    if (type === 'vowels') {
      if (btnV) { btnV.classList.remove('btn-secondary'); btnV.classList.add('btn-primary'); }
      if (wrapper) {
        wrapper.innerHTML = `
          <iframe id="youtubePlayer" src="https://www.youtube-nocookie.com/embed/iE-HSbr02jc?autoplay=1&rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width:100%; height:460px; border:none; display:block;"></iframe>
          <div id="videoTitleBadge" style="position:absolute; top:12px; left:12px; background:rgba(0,0,0,0.85); color:white; padding:4px 12px; border-radius:8px; font-size:0.85rem; font-weight:700; pointer-events:none;">
            🅰️ Las 5 Vocales | Lengua de Señas Dominicana (LSRD)
          </div>
        `;
      }
      this.showToast('🎥 Reproduciendo Video Oficial de las 5 Vocales (LSRD)...', 'info');
    } else if (type === 'alphabet') {
      if (btnA) { btnA.classList.remove('btn-secondary'); btnA.classList.add('btn-primary'); }
      if (wrapper) {
        wrapper.innerHTML = `
          <iframe id="youtubePlayer" src="https://www.youtube-nocookie.com/embed/h7RGrub4q34?autoplay=1&rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width:100%; height:460px; border:none; display:block;"></iframe>
          <div id="videoTitleBadge" style="position:absolute; top:12px; left:12px; background:rgba(0,0,0,0.85); color:white; padding:4px 12px; border-radius:8px; font-size:0.85rem; font-weight:700; pointer-events:none;">
            🤟 Abecedario Completo A-Z | Lengua de Señas Dominicana (LSRD)
          </div>
        `;
      }
      this.showToast('🎥 Reproduciendo Video del Abecedario Completo (LSRD)...', 'info');
    } else if (type === 'conadis') {
      if (btnC) { btnC.classList.remove('btn-secondary'); btnC.classList.add('btn-primary'); }
      if (wrapper) {
        wrapper.innerHTML = `
          <video id="alphabetMasterVideo" src="https://diccionariolsrd.cc/wp-content/uploads/2024/12/157.-158.-y-159.-alfabeto-abecedario-deletrear-y-deletreo-sena-1.mp4" controls autoplay playsinline style="width: 100%; max-height: 480px; display: block;"></video>
          <div id="videoTitleBadge" style="position:absolute; top:12px; left:12px; background:rgba(0,0,0,0.85); color:white; padding:4px 12px; border-radius:8px; font-size:0.85rem; font-weight:700; pointer-events:none;">
            🇩🇴 Demostración Oficial CONADIS / ANSORDO
          </div>
        `;
      }
      this.showToast('🎥 Reproduciendo Video Oficial CONADIS / ANSORDO...', 'info');
    } else if (type === 'alphabet_kids') {
      if (btnK) { btnK.classList.remove('btn-secondary'); btnK.classList.add('btn-primary'); }
      if (wrapper) {
        wrapper.innerHTML = `
          <iframe id="youtubePlayer" src="https://www.youtube-nocookie.com/embed/Kgj0DmtSczw?autoplay=1&rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width:100%; height:460px; border:none; display:block;"></iframe>
          <div id="videoTitleBadge" style="position:absolute; top:12px; left:12px; background:rgba(0,0,0,0.85); color:white; padding:4px 12px; border-radius:8px; font-size:0.85rem; font-weight:700; pointer-events:none;">
            📚 Abecedario Didáctico Infantil (LSRD)
          </div>
        `;
      }
      this.showToast('🎥 Reproduciendo Abecedario Didáctico Infantil...', 'info');
    }
  },

  seekVideo(seconds) {
    const video = document.getElementById('alphabetMasterVideo');
    if (video) {
      video.currentTime = seconds;
      video.play();
      this.showToast(`▶ Reproduciendo desde el segundo ${seconds}s`, 'info');
    }
  },

  nextLetter() {
    this.currentIndex = (this.currentIndex + 1) % this.activeList.length;
    this.showcase(this.activeList[this.currentIndex]);
  },

  prevLetter() {
    this.currentIndex = (this.currentIndex - 1 + this.activeList.length) % this.activeList.length;
    this.showcase(this.activeList[this.currentIndex]);
  },

  startAutoplay() {
    this.isAutoplaying = true;
    const btn = document.getElementById('btnAutoplayAlphabet');
    if (btn) {
      btn.textContent = '⏸ Pausar Secuencia';
      btn.classList.remove('btn-accent');
      btn.classList.add('btn-warning');
    }

    this.autoplayTimer = setInterval(() => {
      this.nextLetter();
    }, 1600);
  },

  stopAutoplay() {
    this.isAutoplaying = false;
    if (this.autoplayTimer) clearInterval(this.autoplayTimer);
    this.autoplayTimer = null;
    const btn = document.getElementById('btnAutoplayAlphabet');
    if (btn) {
      btn.textContent = '▶ Reproducir Secuencia';
      btn.classList.remove('btn-warning');
      btn.classList.add('btn-accent');
    }
  },

  toggleVideoMute() {
    const stageVideo = document.getElementById('stageLetterVideo');
    const btn = document.getElementById('btnToggleVideoSound');
    if (stageVideo) {
      stageVideo.muted = !stageVideo.muted;
      if (btn) {
        btn.textContent = stageVideo.muted ? '🔇 Sonido: Silenciado' : '🔊 Sonido: Activado';
      }
      this.showToast(stageVideo.muted ? 'Video silenciado' : 'Sonido activado', 'info');
    }
  },

  setSpeed(rate) {
    const stageVideo = document.getElementById('stageLetterVideo');
    if (stageVideo) {
      stageVideo.playbackRate = rate;
      this.showToast(`Velocidad de video: ${rate}x`, 'info');
    }
  },

  setViewMode(mode) {
    this.viewMode = mode;
    localStorage.setItem('lesdo_alphabet_view_mode', mode);

    const btnVideo = document.getElementById('btnModeVideo');
    const btnSide = document.getElementById('btnModeSide');
    const btnIll = document.getElementById('btnModeIllustration');
    const illustContainer = document.getElementById('stageIllustrationContainer');
    const videoFrame = document.getElementById('stageVideoFrame');

    // Reset button styles
    [btnVideo, btnSide, btnIll].forEach(b => {
      if (b) {
        b.classList.remove('btn-secondary');
        b.classList.add('btn-ghost');
        b.style.color = 'white';
      }
    });

    if (mode === 'video') {
      btnVideo?.classList.remove('btn-ghost');
      btnVideo?.classList.add('btn-secondary');
      if (illustContainer) illustContainer.style.display = 'none';
      if (videoFrame) {
        videoFrame.style.display = 'block';
        videoFrame.style.maxWidth = '580px';
      }
    } else if (mode === 'side') {
      btnSide?.classList.remove('btn-ghost');
      btnSide?.classList.add('btn-secondary');
      if (illustContainer) illustContainer.style.display = 'block';
      if (videoFrame) {
        videoFrame.style.display = 'block';
        videoFrame.style.maxWidth = '460px';
      }
    } else if (mode === 'illustration') {
      btnIll?.classList.remove('btn-ghost');
      btnIll?.classList.add('btn-secondary');
      if (illustContainer) illustContainer.style.display = 'block';
      if (videoFrame) videoFrame.style.display = 'none';
    }

    this.showToast(`Modo cambiado: ${mode === 'video' ? 'Solo Video' : mode === 'side' ? 'Ambos al lado' : 'Solo Ilustración'}`, 'info');
  },

  showcase(item) {
    if (!item) return;
    const detailTitle = document.getElementById('detailTitle');
    const detailHand = document.getElementById('detailHand');
    const detailTip = document.getElementById('detailTip');
    const stageCounter = document.getElementById('stageCounter');
    const stageVideo = document.getElementById('stageLetterVideo');
    const detailImg = document.getElementById('detailImg');

    if (stageCounter) {
      const isVowelView = this.activeList.length === 5;
      const typeLabel = isVowelView ? 'Vocal' : 'Letra';
      stageCounter.textContent = `${typeLabel} ${this.currentIndex + 1} de ${this.activeList.length} • [ ${item.letter} ]`;
    }

    // Update SVG Illustration
    if (detailImg && item.img) {
      detailImg.src = item.img;
      detailImg.style.animation = 'none';
      void detailImg.offsetWidth;
      detailImg.style.animation = 'popIn 0.3s ease';
    }

    // Update Live Official Letter Video
    if (stageVideo && item.video) {
      if (stageVideo.src !== item.video) {
        stageVideo.src = item.video;
        stageVideo.load();
        stageVideo.play().catch(() => {});
      }
    }

    if (detailTitle) detailTitle.textContent = `${item.name} 🇩🇴`;
    if (detailHand) detailHand.textContent = item.hand;
    if (detailTip) detailTip.textContent = `💡 ${item.tip}`;

    // Highlight card
    document.querySelectorAll('.vowel-card, .letter-card').forEach(c => c.classList.remove('selected'));
    const activeCards = document.querySelectorAll(`[data-letter="${item.letter}"]`);
    activeCards.forEach(c => c.classList.add('selected'));
  },

  playLetter(letterChar) {
    const item = ALPHABET_DATA.find(d => d.letter === letterChar.toUpperCase());
    if (item) {
      this.activeList = ALPHABET_DATA;
      this.currentIndex = ALPHABET_DATA.findIndex(d => d.letter === item.letter);
      this.showcase(item);
      // Smooth scroll to showcase
      document.getElementById('showcaseStage')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  },

  renderVowels() {
    const container = document.getElementById('vowelsGrid');
    if (!container) return;

    const vowels = ALPHABET_DATA.filter(item => item.isVowel);
    this.activeList = vowels;

    container.innerHTML = vowels.map((v, idx) => `
      <div class="vowel-card ${idx === 0 ? 'selected' : ''}" data-letter="${v.letter}">
        <div class="letter-badge-circle">${v.letter}</div>
        <h3 style="font-size: 1.25rem; color: var(--primary); margin-bottom: 0.35rem; font-weight:800;">${v.name}</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.35; margin-bottom: 0.75rem; min-height: 48px;">${v.hand}</p>
        <button class="btn btn-sm btn-primary" style="font-size:0.78rem; font-weight:700; border-radius:var(--radius-pill); width:100%; justify-content:center;">
          ▶ Ver Video LSRD
        </button>
      </div>
    `).join('');

    container.querySelectorAll('.vowel-card').forEach(card => {
      card.addEventListener('click', () => {
        if (this.isAutoplaying) this.stopAutoplay();
        const letter = card.dataset.letter;
        const item = ALPHABET_DATA.find(d => d.letter === letter);
        if (item) {
          this.currentIndex = this.activeList.findIndex(d => d.letter === letter);
          if (this.currentIndex === -1) this.currentIndex = 0;
          this.showcase(item);
          document.getElementById('showcaseStage')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    });
  },

  renderAlphabet() {
    const container = document.getElementById('alphabetGrid');
    if (!container) return;

    container.innerHTML = ALPHABET_DATA.map(item => `
      <div class="letter-card" data-letter="${item.letter}">
        <div class="mini-badge">${item.letter}</div>
        <div style="font-size: 0.9rem; font-weight: 800; color: var(--primary); margin-bottom:0.35rem;">${item.name}</div>
        <div style="font-size:0.7rem; color:var(--primary); font-weight:700; background:rgba(30,136,229,0.12); padding:3px 8px; border-radius:8px; display:inline-flex; align-items:center; gap:3px;">
          <span>▶</span> Video
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.letter-card').forEach(card => {
      card.addEventListener('click', () => {
        if (this.isAutoplaying) this.stopAutoplay();
        const letter = card.dataset.letter;
        const item = ALPHABET_DATA.find(d => d.letter === letter);
        if (item) {
          this.currentIndex = this.activeList.findIndex(d => d.letter === letter);
          if (this.currentIndex === -1) this.currentIndex = 0;
          this.showcase(item);
          document.getElementById('showcaseStage')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    });
  },

  setupSpeller() {
    const input = document.getElementById('spellerInput');
    const btn = document.getElementById('btnSpellWord');
    const display = document.getElementById('spellerDisplay');

    const doSpell = () => {
      const text = (input?.value || '').trim().toUpperCase();
      if (!text) {
        display.innerHTML = '<span class="text-secondary">Escribe una palabra arriba para ver el deletreo dactilológico.</span>';
        return;
      }

      const letters = text.split('');
      const validLetters = letters.map(char => {
        const found = ALPHABET_DATA.find(a => a.letter === char);
        return found || { letter: char, name: char, hand: 'Símbolo' };
      });

      display.innerHTML = validLetters.map((l, idx) => `
        <div class="spell-letter-badge" onclick="AlphabetApp.playLetter('${l.letter}')" title="Clic para reproducir video de la ${l.letter}" style="animation-delay: ${idx * 0.08}s;">
          <div style="font-size: 1.8rem; font-weight: 900; color: var(--primary); line-height: 1;">${l.letter}</div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); font-weight:700; margin-top: 4px;">${l.name}</div>
          <div style="font-size: 0.65rem; color: #1E88E5; font-weight:800; margin-top: 2px;">▶ Video</div>
        </div>
      `).join('');
    };

    btn?.addEventListener('click', doSpell);
    input?.addEventListener('input', doSpell);
  },

  showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    container.innerHTML = '';
    const toast = document.createElement('div');
    toast.className = `toast toast--${type} active`;
    toast.style.cssText = 'position:fixed; bottom:20px; right:20px; background:#0A2463; color:white; padding:12px 20px; border-radius:8px; box-shadow:0 4px 12px rgba(0,0,0,0.3); z-index:9999; font-weight:600; display:flex; align-items:center; gap:8px; border-left: 4px solid #1E88E5;';
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 1800);
  }
};

window.AlphabetApp = AlphabetApp;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => AlphabetApp.init());
} else {
  AlphabetApp.init();
}

window.addEventListener('load', () => {
  if (!AlphabetApp.initialized) AlphabetApp.init();
});
