// Módulo de Flashcards - LESDO App

const Flashcards = {
  words: [],
  filteredWords: [],
  currentIndex: 0,
  knownSet: new Set(),
  reviewSet: new Set(),
  user: null,

  async init() {
    const session = await Auth.getSession();
    if (!session) {
      window.location.href = 'index.html';
      return;
    }
    this.user = session.user;

    const profile = await Auth.getProfile(this.user.id);
    const name = profile?.display_name || this.user.user_metadata?.full_name || this.user.email?.split('@')[0] || 'Estudiante';
    document.getElementById('userName').textContent = name;
    document.getElementById('btnLogout').addEventListener('click', () => Auth.signOut());

    this.loadWords();
    this.setupEventListeners();
    this.renderCard();
  },

  loadWords() {
    this.words = window.LESDO_MOCK_DATA?.dictionary || [];
    this.filteredWords = [...this.words];
  },

  filterByCategory(category) {
    if (category === 'all') {
      this.filteredWords = [...this.words];
    } else {
      this.filteredWords = this.words.filter(w => w.category === category);
    }
    this.currentIndex = 0;
    this.renderCard();
  },

  renderCard() {
    if (this.filteredWords.length === 0) return;

    const card = this.filteredWords[this.currentIndex];
    const flashcardEl = document.getElementById('flashcard');
    flashcardEl.classList.remove('is-flipped');

    const cardImg = document.getElementById('cardImg');
    const cardIcon = document.getElementById('cardIcon');

    if (card.image_url) {
      cardImg.src = card.image_url;
      cardImg.style.display = 'block';
      cardIcon.style.display = 'none';
    } else {
      cardImg.style.display = 'none';
      cardIcon.textContent = card.icon || '🤟';
      cardIcon.style.display = 'block';
    }

    document.getElementById('cardCategory').textContent = card.category || 'General';
    document.getElementById('cardWordFront').textContent = card.word;
    document.getElementById('cardWordBack').textContent = card.word;
    document.getElementById('cardDefinition').textContent = card.definition || 'Gesto representativo en LESDO';

    // Update Counter & Stats
    const total = this.filteredWords.length;
    document.getElementById('cardCounter').textContent = `Tarjeta ${this.currentIndex + 1} de ${total}`;
    document.getElementById('knownCount').textContent = `✅ ${this.knownSet.size} dominadas`;
    document.getElementById('reviewCount').textContent = `🔄 ${this.reviewSet.size} por repasar`;

    const percent = Math.round(((this.currentIndex + 1) / total) * 100);
    document.getElementById('sessionProgressFill').style.width = `${percent}%`;
  },

  flipCard() {
    const flashcardEl = document.getElementById('flashcard');
    flashcardEl.classList.toggle('is-flipped');
  },

  nextCard() {
    if (this.currentIndex < this.filteredWords.length - 1) {
      this.currentIndex++;
      this.renderCard();
    } else {
      this.showToast('¡Has llegado al final de esta sección de tarjetas!', 'success');
    }
  },

  prevCard() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.renderCard();
    }
  },

  markKnown() {
    const currentWord = this.filteredWords[this.currentIndex]?.word;
    if (currentWord) {
      this.knownSet.add(currentWord);
      this.reviewSet.delete(currentWord);
      this.showToast(`¡Excelente! "${currentWord}" agregada a dominadas.`, 'success');
      this.nextCard();
    }
  },

  markReview() {
    const currentWord = this.filteredWords[this.currentIndex]?.word;
    if (currentWord) {
      this.reviewSet.add(currentWord);
      this.knownSet.delete(currentWord);
      this.showToast(`"${currentWord}" marcada para repaso posterior.`, 'info');
      this.nextCard();
    }
  },

  setupEventListeners() {
    // Click on card scene to flip
    document.getElementById('cardScene').addEventListener('click', () => this.flipCard());

    // Action buttons
    document.getElementById('btnNextCard').addEventListener('click', () => this.nextCard());
    document.getElementById('btnPrevCard').addEventListener('click', () => this.prevCard());
    document.getElementById('btnKnownCard').addEventListener('click', () => this.markKnown());
    document.getElementById('btnReviewCard').addEventListener('click', () => this.markReview());

    // Category filter chips
    const chips = document.querySelectorAll('.filter-chip');
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.filterByCategory(chip.dataset.category);
      });
    });

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        this.flipCard();
      } else if (e.code === 'ArrowRight') {
        this.nextCard();
      } else if (e.code === 'ArrowLeft') {
        this.prevCard();
      }
    });
  },

  showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast__item toast--${type} animate-slide-up`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }
};

document.addEventListener('DOMContentLoaded', () => Flashcards.init());
