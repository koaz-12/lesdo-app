// Controlador del Abecedario y Vocales LESDO

const getLetterImg = (l) => `https://commons.wikimedia.org/wiki/Special:FilePath/Sign_language_${l.toUpperCase()}.svg`;

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
  { letter: 'Ñ', isVowel: false, name: 'Letra Ñ', img: getLetterImg('N'), hand: 'Misma posición de la N pero con movimiento oscilante de lado a lado.', tip: 'El movimiento representa la virgulilla (~).' },
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
  init() {
    this.setupAuth();
    this.renderVowels();
    this.renderAlphabet();
    this.setupTabs();
    this.setupSpeller();
    this.setupNavToggle();
  },

  setupAuth() {
    Auth.init();
    document.getElementById('btnLogout')?.addEventListener('click', () => Auth.signOut());
    document.getElementById('btnLogoutMobile')?.addEventListener('click', () => Auth.signOut());
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
      speller: document.getElementById('sectionSpeller')
    };

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const target = tab.dataset.tab;
        Object.keys(sections).forEach(key => {
          if (sections[key]) {
            sections[key].style.display = key === target ? 'block' : 'none';
          }
        });
      });
    });
  },

  showcase(item) {
    const detailImg = document.getElementById('detailImg');
    const detailTitle = document.getElementById('detailTitle');
    const detailHand = document.getElementById('detailHand');
    const detailTip = document.getElementById('detailTip');

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

    const showcaseStage = document.getElementById('showcaseStage');
    if (showcaseStage) {
      showcaseStage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  },

  renderVowels() {
    const container = document.getElementById('vowelsGrid');
    if (!container) return;

    const vowels = ALPHABET_DATA.filter(item => item.isVowel);
    container.innerHTML = vowels.map(v => `
      <div class="vowel-card ${v.letter === 'A' ? 'selected' : ''}" data-letter="${v.letter}">
        <div class="vowel-card__letter">${v.letter}</div>
        <img src="${v.img}" alt="${v.name}" class="sign-hand-img" style="width:100px; height:100px; margin-bottom:0.75rem;">
        <h3 style="font-size: 1.1rem; color: var(--primary); margin-bottom: 0.25rem;">${v.name}</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.3;">${v.hand}</p>
      </div>
    `).join('');

    container.querySelectorAll('.vowel-card').forEach(card => {
      card.addEventListener('click', () => {
        const letter = card.dataset.letter;
        const item = ALPHABET_DATA.find(d => d.letter === letter);
        if (item) this.showcase(item);
      });
    });
  },

  renderAlphabet() {
    const container = document.getElementById('alphabetGrid');
    if (!container) return;

    container.innerHTML = ALPHABET_DATA.map(item => `
      <div class="letter-card" data-letter="${item.letter}">
        <div class="letter-card__name">${item.letter}</div>
        <img src="${item.img}" alt="${item.name}" class="sign-hand-img" style="width:75px; height:75px; margin-bottom:0.5rem; padding:6px;">
        <div style="font-size: 0.8rem; font-weight: 700; color: var(--secondary);">${item.name}</div>
      </div>
    `).join('');

    container.querySelectorAll('.letter-card').forEach(card => {
      card.addEventListener('click', () => {
        const letter = card.dataset.letter;
        const item = ALPHABET_DATA.find(d => d.letter === letter);
        if (item) this.showcase(item);
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
    input?.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') doSpell();
    });
  }
};

document.addEventListener('DOMContentLoaded', () => AlphabetApp.init());
