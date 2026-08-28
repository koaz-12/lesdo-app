// Controlador del Abecedario y Vocales LESDO

const getLetterImg = (l) => `images/alphabet/${l.toUpperCase()}.svg`;

const ALPHABET_DATA = [
  { letter: 'A', isVowel: true, name: 'Vocal A', img: getLetterImg('A'), hand: 'Puño cerrado con el pulgar erguido y apoyado en el lateral del dedo índice.', tip: 'Palma siempre hacia el frente.' },
  { letter: 'B', isVowel: false, name: 'Letra B', img: getLetterImg('B'), hand: 'Cuatro dedos extendidos y juntos hacia arriba con el pulgar doblado sobre la palma.', tip: 'Dedos firmemente unidos apuntando arriba.' },
  { letter: 'C', isVowel: false, name: 'Letra C', img: getLetterImg('C'), hand: 'Mano curvada en forma de media luna formando la letra C lateral.', tip: 'La apertura mira hacia el lateral.' },
  { letter: 'D', isVowel: false, name: 'Letra D', img: getLetterImg('D'), hand: 'Dedo índice apuntando hacia arriba, los demás dedos forman un círculo con el pulgar.', tip: 'El índice hace de asta vertical.' },
  { letter: 'E', isVowel: true, name: 'Vocal E', img: getLetterImg('E'), hand: 'Dedos doblados hacia abajo tocando ligeramente la punta del pulgar.', tip: 'Parece una pequeña garra relajada.' },
  { letter: 'F', isVowel: false, name: 'Letra F', img: getLetterImg('F'), hand: 'Índice y pulgar se tocan por las yemas formando un círculo; tres dedos extendidos arriba.', tip: 'Similar al símbolo de OK.' },
  { letter: 'G', isVowel: false, name: 'Letra G', img: getLetterImg('G'), hand: 'Índice y pulgar paralelos apuntando en horizontal hacia el lado opuesto.', tip: 'Como midiendo algo pequeño horizontal.' },
  { letter: 'H', isVowel: false, name: 'Letra H', img: getLetterImg('H'), hand: 'Índice y medio extendidos juntos en posición horizontal.', tip: 'Dos dedos horizontales.' },
  { letter: 'I', isVowel: true, name: 'Vocal I', img: getLetterImg('I'), hand: 'Puño cerrado levantando únicamente el dedo meñique hacia arriba.', tip: 'El meñique simboliza el palito de la i.' },
  { letter: 'J', isVowel: false, name: 'Letra J', img: getLetterImg('J'), hand: 'Con el meñique levantado (posición I), dibuja una curva en el aire hacia abajo.', tip: 'Traza la colita de la letra J en el aire.' },
  { letter: 'K', isVowel: false, name: 'Letra K', img: getLetterImg('K'), hand: 'Índice arriba, medio diagonal hacia adelante, pulgar apoyado entre ambos.', tip: 'Forma la letra K con los dedos.' },
  { letter: 'L', isVowel: false, name: 'Letra L', img: getLetterImg('L'), hand: 'Índice extendido hacia arriba y pulgar horizontal formando un ángulo de 90°.', tip: 'Forma una L clara.' },
  { letter: 'M', isVowel: false, name: 'Letra M', img: getLetterImg('M'), hand: 'Tres dedos (índice, medio y anular) doblados sobre el pulgar apuntando abajo.', tip: 'Representa las 3 patitas de la M.' },
  { letter: 'N', isVowel: false, name: 'Letra N', img: getLetterImg('N'), hand: 'Dos dedos (índice y medio) doblados sobre el pulgar apuntando abajo.', tip: 'Representa las 2 patitas de la N.' },
  { letter: 'Ñ', isVowel: false, name: 'Letra Ñ', img: getLetterImg('Ñ'), hand: 'Misma posición de la N pero con movimiento oscilante de lado a lado.', tip: 'El movimiento representa la virgulilla (~).' },
  { letter: 'O', isVowel: true, name: 'Vocal O', img: getLetterImg('O'), hand: 'Todos los dedos curvados uniéndose con el pulgar para formar un círculo perfecto.', tip: 'Forma la letra O con toda la mano.' },
  { letter: 'P', isVowel: false, name: 'Letra P', img: getLetterImg('P'), hand: 'Posición de la K pero con la muñeca inclinada apuntando hacia abajo.', tip: 'Dedo medio hacia abajo.' },
  { letter: 'Q', isVowel: false, name: 'Letra Q', img: getLetterImg('Q'), hand: 'Posición de la G con índice y pulgar apuntando directamente hacia el suelo.', tip: 'Dedos apuntando hacia abajo.' },
  { letter: 'R', isVowel: false, name: 'Letra R', img: getLetterImg('R'), hand: 'Cruzar el dedo medio sobre el dedo índice extendido.', tip: 'Como cruzar los dedos para la suerte.' },
  { letter: 'S', isVowel: false, name: 'Letra S', img: getLetterImg('S'), hand: 'Puño cerrado con el pulgar cruzado por encima de los cuatro dedos.', tip: 'El pulgar va horizontal al frente.' },
  { letter: 'T', isVowel: false, name: 'Letra T', img: getLetterImg('T'), hand: 'Pulgar metido entre el dedo índice y medio en un puño cerrado.', tip: 'El pulgar asoma entre los dos dedos.' },
  { letter: 'U', isVowel: true, name: 'Vocal U', img: getLetterImg('U'), hand: 'Dedos índice y medio extendidos y juntos hacia arriba; pulgar sujeta anular y meñique.', tip: 'Dos dedos firmemente unidos.' },
  { letter: 'V', isVowel: false, name: 'Letra V', img: getLetterImg('V'), hand: 'Índice y medio extendidos y separados formando una V (símbolo de paz).', tip: 'Palma hacia el frente.' },
  { letter: 'W', isVowel: false, name: 'Letra W', img: getLetterImg('W'), hand: 'Índice, medio y anular extendidos y separados formando una W.', tip: 'Tres dedos separados hacia arriba.' },
  { letter: 'X', isVowel: false, name: 'Letra X', img: getLetterImg('X'), hand: 'Dedo índice encorvado en forma de gancho apuntando hacia arriba.', tip: 'Como un garfio hacia el frente.' },
  { letter: 'Y', isVowel: false, name: 'Letra Y', img: getLetterImg('Y'), hand: 'Pulgar y meñique extendidos, los tres dedos centrales cerrados (shaka).', tip: 'Gesto de saludo hawaiano / Y.' },
  { letter: 'Z', isVowel: false, name: 'Letra Z', img: getLetterImg('Z'), hand: 'Con el dedo índice extendido, dibuja la letra Z en el aire con 3 trazos.', tip: 'Traza la Z claramente en el aire.' }
];

const AlphabetApp = {
  initialized: false,
  currentIndex: 0,
  activeList: ALPHABET_DATA,
  autoplayTimer: null,
  isAutoplaying: false,

  init() {
    if (this.initialized) return;
    this.initialized = true;
    this.setupAuth();
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
      const tabVideo = document.querySelector('.alpha-tab[data-tab="video-masterclass"]');
      if (tabVideo) tabVideo.click();
      const currentItem = this.activeList[this.currentIndex];
      if (currentItem) {
        this.showToast(`🎥 Abriendo video para la seña: ${currentItem.name}`, 'info');
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

  switchVideo(type) {
    const video = document.getElementById('alphabetMasterVideo');
    const badge = document.getElementById('videoTitleBadge');
    const btnA = document.getElementById('btnVidAlphabet');
    const btnV = document.getElementById('btnVidVowels');
    const btnC = document.getElementById('btnVidConcepts');

    [btnA, btnV, btnC].forEach(b => {
      if (b) {
        b.classList.remove('btn-primary');
        b.classList.add('btn-secondary');
      }
    });

    if (type === 'alphabet') {
      if (btnA) { btnA.classList.remove('btn-secondary'); btnA.classList.add('btn-primary'); }
      if (video) {
        video.src = 'https://diccionariolsrd.cc/wp-content/uploads/2024/12/157.-158.-y-159.-alfabeto-abecedario-deletrear-y-deletreo-sena-1.mp4';
        video.currentTime = 0;
        video.play();
      }
      if (badge) badge.textContent = '🤟 1. Abecedario y Deletreo Oficial LSRD';
      this.showToast('Cargando video oficial del abecedario...', 'info');
    } else if (type === 'vowels') {
      if (btnV) { btnV.classList.remove('btn-secondary'); btnV.classList.add('btn-primary'); }
      if (video) {
        video.src = 'https://diccionariolsrd.cc/wp-content/uploads/2024/12/157.-158.-y-159.-alfabeto-abecedario-deletrear-y-deletreo-sena-1.mp4';
        video.currentTime = 0;
        video.play();
      }
      if (badge) badge.textContent = '🅰️ 2. Las 5 Vocales Oficiales (A, E, I, O, U)';
      this.showToast('Cargando video de las 5 vocales fundamentales...', 'info');
    } else if (type === 'concepts') {
      if (btnC) { btnC.classList.remove('btn-secondary'); btnC.classList.add('btn-primary'); }
      if (video) {
        video.src = 'https://diccionariolsrd.cc/wp-content/uploads/2024/11/651.-letra-sena-1.mp4';
        video.currentTime = 0;
        video.play();
      }
      if (badge) badge.textContent = '📖 3. Concepto de Letra y Seña en LSRD';
      this.showToast('Cargando video explicativo...', 'info');
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

  showcase(item) {
    if (!item) return;
    const detailImg = document.getElementById('detailImg');
    const detailTitle = document.getElementById('detailTitle');
    const detailHand = document.getElementById('detailHand');
    const detailTip = document.getElementById('detailTip');
    const stageCounter = document.getElementById('stageCounter');

    if (stageCounter) {
      const isVowelView = this.activeList.length === 5;
      const typeLabel = isVowelView ? 'Vocal' : 'Letra';
      stageCounter.textContent = `${typeLabel} ${this.currentIndex + 1} de ${this.activeList.length} • [ ${item.letter} ]`;
    }

    if (detailImg) {
      detailImg.src = item.img;
      detailImg.style.animation = 'none';
      void detailImg.offsetWidth;
      detailImg.style.animation = 'pulse 0.4s ease';
    }
    if (detailTitle) detailTitle.textContent = item.name;
    if (detailHand) detailHand.textContent = item.hand;
    if (detailTip) detailTip.textContent = `💡 ${item.tip}`;

    // Highlight card
    document.querySelectorAll('.vowel-card, .letter-card').forEach(c => c.classList.remove('selected'));
    const activeCards = document.querySelectorAll(`[data-letter="${item.letter}"]`);
    activeCards.forEach(c => c.classList.add('selected'));
  },

  renderVowels() {
    const container = document.getElementById('vowelsGrid');
    if (!container) return;

    const vowels = ALPHABET_DATA.filter(item => item.isVowel);
    this.activeList = vowels;

    container.innerHTML = vowels.map((v, idx) => `
      <div class="vowel-card ${idx === 0 ? 'selected' : ''}" data-letter="${v.letter}">
        <div class="vowel-card__letter">${v.letter}</div>
        <img src="${v.img}" alt="${v.name}" class="sign-hand-img" style="width:100px; height:100px; margin-bottom:0.75rem;">
        <h3 style="font-size: 1.1rem; color: var(--primary); margin-bottom: 0.25rem;">${v.name}</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.3;">${v.hand}</p>
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
        }
      });
    });
  },

  renderAlphabet() {
    const container = document.getElementById('alphabetGrid');
    if (!container) return;

    container.innerHTML = ALPHABET_DATA.map(item => `
      <div class="letter-card" data-letter="${item.letter}">
        <div class="letter-card__name">${item.letter}</div>
        <img src="${item.img}" alt="${item.name}" class="sign-hand-img" style="width:75px; height:75px; margin-bottom:0.5rem; padding:4px;">
        <div style="font-size: 0.8rem; font-weight: 700; color: var(--secondary);">${item.name}</div>
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
        return found || { letter: char, name: char, img: null, hand: 'Espacio o símbolo' };
      });

      display.innerHTML = validLetters.map((l, idx) => `
        <div class="spell-letter-badge" style="animation-delay: ${idx * 0.1}s;">
          <div style="font-size: 1.5rem; font-weight: 800; color: var(--primary); margin-bottom: 0.25rem;">${l.letter}</div>
          ${l.img ? `
            <img src="${l.img}" alt="${l.name}" class="sign-hand-img" style="width:70px; height:70px; padding:4px; margin-bottom:0.25rem;">
          ` : `
            <div style="width:70px; height:70px; display:flex; align-items:center; justify-content:center; font-size:1.5rem; background:rgba(0,0,0,0.05); border-radius:12px; margin-bottom:0.25rem;">—</div>
          `}
          <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight:600;">${l.name}</div>
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
