// Diccionario Digital LESDO / LSRD - 100% Oficial con Videos y Búsqueda Instantánea

const Dictionary = {
  initialized: false,
  allWords: [],
  filteredWords: [],
  selectedLetter: 'ALL',
  selectedCategory: 'ALL',
  searchQuery: '',

  async init() {
    if (this.initialized) return;
    this.initialized = true;

    this.setupAuth();
    this.loadData();
    this.renderAlphabetIndex();
    this.renderCategoryChips();
    this.setupEventListeners();
    this.applyFilters();
  },

  setupAuth() {
    // Graceful profile detection
    const userNameEl = document.getElementById('userName');
    if (window.Auth && typeof window.Auth.getSession === 'function') {
      window.Auth.getSession().then(session => {
        if (session && session.user) {
          const profileName = session.user.user_metadata?.full_name || session.user.email?.split('@')[0] || 'Estudiante';
          if (userNameEl) userNameEl.textContent = profileName;
        }
      }).catch(() => {});
    }

    document.getElementById('btnLogout')?.addEventListener('click', () => {
      if (window.Auth?.signOut) window.Auth.signOut();
      else window.location.href = 'index.html';
    });
    document.getElementById('btnLogoutMobile')?.addEventListener('click', () => {
      if (window.Auth?.signOut) window.Auth.signOut();
      else window.location.href = 'index.html';
    });
  },

  loadData() {
    this.allWords = (window.LESDO_MOCK_DATA?.dictionary || []).map(w => ({
      ...w,
      word: (w.word || '').replace(/^[,\.\s\-–—]+/, '').trim()
    })).filter(w => w.word.length > 0);
    // Ensure alphabetical sorting
    this.allWords.sort((a, b) => a.word.localeCompare(b.word, 'es', { sensitivity: 'base' }));
  },

  renderAlphabetIndex() {
    const container = document.getElementById('azIndexBar');
    if (!container) return;

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÑ'.split('');
    let html = `<button class="az-btn ${this.selectedLetter === 'ALL' ? 'active' : ''}" data-letter="ALL">Todos</button>`;

    alphabet.forEach(letter => {
      // Check if there's at least one word starting with this letter
      const hasWords = this.allWords.some(w => {
        const first = (w.word || '').trim().toUpperCase();
        return first.startsWith(letter);
      });

      if (hasWords) {
        html += `<button class="az-btn ${this.selectedLetter === letter ? 'active' : ''}" data-letter="${letter}">${letter}</button>`;
      }
    });

    container.innerHTML = html;

    container.querySelectorAll('.az-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.az-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.selectedLetter = btn.dataset.letter;
        this.applyFilters();
      });
    });
  },

  renderCategoryChips() {
    const container = document.getElementById('catChipsBar');
    if (!container) return;

    const categoriesMap = {};
    this.allWords.forEach(w => {
      const cat = w.category || 'Vocabulario General';
      categoriesMap[cat] = (categoriesMap[cat] || 0) + 1;
    });

    const sortedCats = Object.keys(categoriesMap).sort();
    let html = `<button class="cat-chip ${this.selectedCategory === 'ALL' ? 'active' : ''}" data-category="ALL">Todas las Categorías (${this.allWords.length})</button>`;

    sortedCats.forEach(cat => {
      const count = categoriesMap[cat];
      html += `<button class="cat-chip ${this.selectedCategory === cat ? 'active' : ''}" data-category="${cat}">${cat} (${count})</button>`;
    });

    container.innerHTML = html;

    container.querySelectorAll('.cat-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.cat-chip').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.selectedCategory = btn.dataset.category;
        this.applyFilters();
      });
    });
  },

  applyFilters() {
    let results = this.allWords;

    // Filter by category
    if (this.selectedCategory !== 'ALL') {
      results = results.filter(w => (w.category || 'Vocabulario General') === this.selectedCategory);
    }

    // Filter by letter
    if (this.selectedLetter !== 'ALL') {
      results = results.filter(w => {
        const first = (w.word || '').trim().toUpperCase();
        return first.startsWith(this.selectedLetter);
      });
    }

    // Filter by search query
    if (this.searchQuery.trim() !== '') {
      const q = this.normalizeText(this.searchQuery);
      results = results.filter(w => {
        const wordNorm = this.normalizeText(w.word || '');
        const defNorm = this.normalizeText(w.definition || '');
        const catNorm = this.normalizeText(w.category || '');
        return wordNorm.includes(q) || defNorm.includes(q) || catNorm.includes(q);
      });
    }

    this.filteredWords = results;
    this.renderResults();
  },

  normalizeText(str) {
    return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  },

  renderResults() {
    const container = document.getElementById('resultsContainer');
    const statusHeader = document.getElementById('resultsCountStatus');
    if (!container) return;

    if (statusHeader) {
      if (this.searchQuery.trim() !== '') {
        statusHeader.textContent = `Mostrando ${this.filteredWords.length} resultados para "${this.searchQuery}"`;
      } else if (this.selectedLetter !== 'ALL') {
        statusHeader.textContent = `Mostrando ${this.filteredWords.length} señas con la letra [ ${this.selectedLetter} ]`;
      } else if (this.selectedCategory !== 'ALL') {
        statusHeader.textContent = `Mostrando ${this.filteredWords.length} señas en categoría "${this.selectedCategory}"`;
      } else {
        statusHeader.textContent = `Catálogo Completo: ${this.filteredWords.length} señas disponibles con video oficial`;
      }
    }

    if (this.filteredWords.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1.5rem; background: var(--surface); border-radius: 16px; border: 1px solid rgba(0,0,0,0.08);">
          <div style="font-size: 3rem; margin-bottom: 0.5rem;">🔍</div>
          <h3 style="font-size: 1.3rem; color: var(--primary); margin-bottom: 0.5rem;">No se encontraron señas</h3>
          <p style="color: var(--text-secondary); max-width: 480px; margin: 0 auto 1.25rem;">
            No encontramos coincidencias para "${this.searchQuery}". Intenta con otra palabra o consulta el portal oficial.
          </p>
          <button class="btn btn-primary btn-sm" onclick="Dictionary.clearSearch()">
            Restablecer Búsqueda
          </button>
        </div>
      `;
      return;
    }

    // Limit initial DOM nodes for ultra-fast rendering (paginate / lazy display first 120 items)
    const displayList = this.filteredWords.slice(0, 150);

    container.innerHTML = displayList.map(item => `
      <div class="dict-card" data-word="${item.word}">
        <div>
          <div class="dict-card__header">
            <h3 class="dict-card__title">${item.word}</h3>
            <span class="dict-card__badge">${item.category || 'LSRD'}</span>
          </div>
          <p class="dict-card__desc">${item.definition || 'Seña oficial en Lengua de Señas Dominicana.'}</p>
        </div>
        <div class="dict-card__footer">
          <span style="font-size:0.75rem; color:var(--text-secondary); font-weight:600;">🇩🇴 CONADIS / ANSORDO</span>
          <button class="dict-card__btn">
            <span>▶</span> Ver Video
          </button>
        </div>
      </div>
    `).join('');

    // Attach click listeners to cards
    container.querySelectorAll('.dict-card').forEach(card => {
      card.addEventListener('click', () => {
        const wordName = card.dataset.word;
        const item = this.allWords.find(w => w.word === wordName);
        if (item) this.openVideoModal(item);
      });
    });
  },

  openVideoModal(item) {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('modalVideo');
    const title = document.getElementById('modalWordTitle');
    const badge = document.getElementById('modalCategoryBadge');
    const def = document.getElementById('modalDefinitionText');

    if (!modal || !video) return;

    if (title) title.textContent = item.word;
    if (badge) badge.textContent = `Categoría: ${item.category || 'Vocabulario General'}`;
    if (def) def.textContent = item.definition || 'Postura y movimiento oficial según el Diccionario de la Lengua de Señas Dominicana.';

    if (item.video_url) {
      video.src = item.video_url;
      video.load();
      video.play().catch(() => {});
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  },

  closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('modalVideo');
    if (modal) modal.classList.remove('active');
    if (video) {
      video.pause();
      video.src = '';
    }
    document.body.style.overflow = '';
  },

  setModalSpeed(rate) {
    const video = document.getElementById('modalVideo');
    if (video) {
      video.playbackRate = rate;
      this.showToast(`Velocidad de video: ${rate}x`, 'info');
    }
  },

  toggleModalSound() {
    const video = document.getElementById('modalVideo');
    const btn = document.getElementById('modalBtnSound');
    if (video) {
      video.muted = !video.muted;
      if (btn) {
        btn.textContent = video.muted ? '🔇 Sonido: Silenciado' : '🔊 Sonido: Activado';
      }
      this.showToast(video.muted ? 'Video silenciado' : 'Sonido activado', 'info');
    }
  },

  replayModalVideo() {
    const video = document.getElementById('modalVideo');
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  },

  switchTab(tabId) {
    const tabCatalog = document.querySelector('.dict-tab[data-tab="catalog"]');
    const tabReader = document.querySelector('.dict-tab[data-tab="reader"]');
    const sectionCatalog = document.getElementById('sectionCatalog');
    const sectionReader = document.getElementById('sectionReader');

    if (tabId === 'catalog') {
      tabCatalog?.classList.add('active');
      tabReader?.classList.remove('active');
      if (sectionCatalog) sectionCatalog.style.display = 'block';
      if (sectionReader) sectionReader.style.display = 'none';
      this.showToast('Mostrando Catálogo Digital en Video', 'info');
    } else if (tabId === 'reader') {
      tabReader?.classList.add('active');
      tabCatalog?.classList.remove('active');
      if (sectionCatalog) sectionCatalog.style.display = 'none';
      if (sectionReader) sectionReader.style.display = 'block';
      this.showToast('Lector del Libro Oficial LSRD abierto', 'info');
      // Initialize BookReader
      if (window.BookReader && !window.BookReader.initialized) {
        window.BookReader.init();
      }
    }
  },

  clearSearch() {
    const input = document.getElementById('searchInput');
    const clearBtn = document.getElementById('btnClearSearch');
    if (input) {
      input.value = '';
      this.searchQuery = '';
    }
    if (clearBtn) clearBtn.style.display = 'none';
    this.selectedLetter = 'ALL';
    this.selectedCategory = 'ALL';
    
    // Reset index & chip buttons
    document.querySelectorAll('.az-btn').forEach(b => b.classList.toggle('active', b.dataset.letter === 'ALL'));
    document.querySelectorAll('.cat-chip').forEach(b => b.classList.toggle('active', b.dataset.category === 'ALL'));
    
    this.applyFilters();
  },

  setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    const clearBtn = document.getElementById('btnClearSearch');
    const closeBtn = document.getElementById('closeModal');
    const modal = document.getElementById('videoModal');

    // Instant Search Input
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value;
        if (clearBtn) {
          clearBtn.style.display = this.searchQuery ? 'block' : 'none';
        }
        this.applyFilters();
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        this.clearSearch();
        searchInput?.focus();
      });
    }

    // Modal Close
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeVideoModal());
    }
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) this.closeVideoModal();
      });
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeVideoModal();
    });

    // Mobile nav toggle
    const navToggle = document.getElementById('navToggle');
    const navMobile = document.getElementById('navMobile');
    if (navToggle && navMobile) {
      navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMobile.style.display = navToggle.classList.contains('active') ? 'flex' : 'none';
      });
    }
  },

  showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    container.innerHTML = '';
    const toast = document.createElement('div');
    toast.className = `toast toast--${type} active`;
    toast.style.cssText = 'position:fixed; bottom:20px; right:20px; background:#0A2463; color:white; padding:12px 20px; border-radius:8px; box-shadow:0 4px 12px rgba(0,0,0,0.3); z-index:99999; font-weight:600; display:flex; align-items:center; gap:8px; border-left: 4px solid #1E88E5;';
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 1800);
  }
};

// ==========================================
// NATIVE ILLUSTRATED BOOK READER ENGINE
// ==========================================
const BookReader = {
  initialized: false,
  allWords: [],
  activeWords: [],
  currentPage: 1, // 1 = Portada, 2 = Entrada 1, etc.
  soundEnabled: true,
  searchQuery: '',

  init() {
    if (this.initialized) return;
    this.initialized = true;

    this.allWords = window.LESDO_MOCK_DATA?.dictionary || [];
    this.activeWords = [...this.allWords];

    this.setupEventListeners();
    this.render();
  },

  getTotalPages() {
    return this.activeWords.length + 1;
  },

  setupEventListeners() {
    const searchInput = document.getElementById('bookSearchInput');
    const clearBtn = document.getElementById('btnBookClearSearch');
    const resetBtn = document.getElementById('btnBookResetSearch');
    const chapterSelect = document.getElementById('bookChapterSelect');

    searchInput?.addEventListener('input', (e) => {
      this.search(e.target.value);
    });

    clearBtn?.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      this.clearSearch();
    });

    resetBtn?.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      this.clearSearch();
    });

    chapterSelect?.addEventListener('change', (e) => {
      const val = e.target.value;
      if (val === 'cover') {
        this.goToPage(1);
      } else {
        const idx = this.allWords.findIndex(w => (w.category || 'Vocabulario General') === val);
        if (idx !== -1) {
          if (this.activeWords.length !== this.allWords.length) {
            this.activeWords = [...this.allWords];
          }
          this.goToPage(idx + 2);
        }
      }
    });

    // Navigation buttons
    document.getElementById('btnBookPrev')?.addEventListener('click', () => this.prevPage());
    document.getElementById('btnBookNext')?.addEventListener('click', () => this.nextPage());
    document.getElementById('btnBookCover')?.addEventListener('click', () => this.goToPage(1));

    // Page direct input
    const pageInput = document.getElementById('bookPageNumberInput');
    const goBtn = document.getElementById('btnBookGoPage');

    const handleGoPage = () => {
      const val = parseInt(pageInput?.value, 10);
      if (!isNaN(val)) this.goToPage(val);
    };

    goBtn?.addEventListener('click', handleGoPage);
    pageInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleGoPage();
    });

    // Sound toggle
    const soundBtn = document.getElementById('btnBookSoundToggle');
    soundBtn?.addEventListener('click', () => {
      this.soundEnabled = !this.soundEnabled;
      if (soundBtn) {
        soundBtn.textContent = this.soundEnabled ? '🔊 Sonido Hojas: ON' : '🔇 Sonido Hojas: OFF';
      }
      Dictionary.showToast(this.soundEnabled ? 'Efecto de sonido de hojas activado' : 'Efecto de sonido silenciado', 'info');
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      const sectionReader = document.getElementById('sectionReader');
      if (!sectionReader || sectionReader.style.display === 'none') return;
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'SELECT') return;

      if (e.key === 'ArrowLeft') this.prevPage();
      else if (e.key === 'ArrowRight') this.nextPage();
    });
  },

  search(query) {
    this.searchQuery = (query || '').trim();
    const statusPill = document.getElementById('bookSearchStatusPill');
    const statusText = document.getElementById('bookSearchStatusText');

    if (!this.searchQuery) {
      this.clearSearch();
      return;
    }

    const norm = Dictionary.normalizeText(this.searchQuery);
    this.activeWords = this.allWords.filter(w => {
      const wordNorm = Dictionary.normalizeText(w.word || '');
      const defNorm = Dictionary.normalizeText(w.definition || '');
      const catNorm = Dictionary.normalizeText(w.category || '');
      return wordNorm.includes(norm) || defNorm.includes(norm) || catNorm.includes(norm);
    });

    if (statusPill && statusText) {
      statusPill.style.display = 'flex';
      statusText.innerHTML = `🔍 <strong>${this.activeWords.length} páginas</strong> encontradas para "<em>${this.searchQuery}</em>"`;
    }

    this.goToPage(this.activeWords.length > 0 ? 2 : 1, false);
  },

  clearSearch() {
    this.searchQuery = '';
    this.activeWords = [...this.allWords];
    const statusPill = document.getElementById('bookSearchStatusPill');
    if (statusPill) statusPill.style.display = 'none';
    const searchInput = document.getElementById('bookSearchInput');
    if (searchInput) searchInput.value = '';
    this.render();
  },

  prevPage() {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    } else {
      Dictionary.showToast('Estás en la portada del libro', 'info');
    }
  },

  nextPage() {
    if (this.currentPage < this.getTotalPages()) {
      this.goToPage(this.currentPage + 1);
    } else {
      Dictionary.showToast('Has llegado a la última página del libro', 'info');
    }
  },

  goToPage(pageNum, playSound = true) {
    const total = this.getTotalPages();
    if (pageNum < 1) pageNum = 1;
    if (pageNum > total) pageNum = total;

    this.currentPage = pageNum;
    if (playSound) this.playPageFlipSound();

    this.render();
  },

  jumpToWord(wordName) {
    const idx = this.allWords.findIndex(w => w.word.toLowerCase() === wordName.toLowerCase());
    if (idx !== -1) {
      this.clearSearch();
      this.goToPage(idx + 2);
    }
  },

  playPageFlipSound() {
    if (!this.soundEnabled) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const bufferSize = ctx.sampleRate * 0.09;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.35));
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1400;
      filter.Q.value = 1.0;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.18, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.085);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start();
      noise.stop(ctx.currentTime + 0.09);
    } catch (e) {}
  },

  render() {
    const pageLeft = document.getElementById('bookPageLeft');
    const pageRight = document.getElementById('bookPageRight');
    const spreadContainer = document.getElementById('bookSpreadContainer');
    const pageInput = document.getElementById('bookPageNumberInput');
    const totalCountEl = document.getElementById('bookTotalPagesCount');

    const total = this.getTotalPages();
    if (pageInput) pageInput.value = this.currentPage;
    if (totalCountEl) totalCountEl.textContent = total;

    if (spreadContainer) {
      spreadContainer.classList.remove('book-page-turning');
      void spreadContainer.offsetWidth;
      spreadContainer.classList.add('book-page-turning');
    }

    // PAGE 1: COVER SPREAD
    if (this.currentPage === 1) {
      if (pageLeft) {
        pageLeft.innerHTML = `
          <div>
            <div class="book-page-header">
              <span>🇩🇴 República Dominicana</span>
              <span>Edición Oficial 2026</span>
            </div>

            <div style="text-align:center; padding: 2rem 1rem;">
              <div style="font-size: 3.5rem; margin-bottom: 0.75rem;">🤟</div>
              <div style="display:inline-block; background:rgba(10,36,99,0.08); color:#0A2463; padding:4px 14px; border-radius:20px; font-weight:800; font-size:0.82rem; margin-bottom:1rem; text-transform:uppercase;">
                Lengua de Señas Dominicana (LSRD)
              </div>
              <h1 style="font-size: 1.85rem; font-weight: 900; color: #0A2463; line-height: 1.25; margin-bottom: 1rem;">
                DICCIONARIO ILUSTRADO DIGITAL
              </h1>
              <p style="font-size: 0.95rem; color: #4A5568; line-height: 1.6; max-width: 380px; margin: 0 auto 1.5rem;">
                Guía visual, anatómica y práctica para el aprendizaje y la inclusión social y educativa de la comunidad sorda en la República Dominicana.
              </p>
              
              <div style="display:inline-flex; gap:0.5rem; align-items:center; background:#FFF; border:1px solid #E2E8F0; padding:8px 16px; border-radius:12px; box-shadow:0 2px 6px rgba(0,0,0,0.04);">
                <span style="font-size:1.1rem;">🏛️</span>
                <span style="font-size:0.85rem; font-weight:700; color:#1E293B;">CONADIS • ANSORDO • LESDO</span>
              </div>
            </div>
          </div>

          <div class="book-page-footer">
            <span>ISBN 978-9945-00-000-0</span>
            <span>Pág. 1</span>
          </div>
        `;
      }

      if (pageRight) {
        pageRight.innerHTML = `
          <div>
            <div class="book-page-header">
              <span>Índice General de Capítulos</span>
              <span>1,390 Señas Oficiales</span>
            </div>

            <h3 style="font-size:1.2rem; font-weight:800; color:#0A2463; margin-bottom:0.85rem; display:flex; align-items:center; gap:8px;">
              <span>📑</span> Capítulos del Libro
            </h3>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:1.25rem;">
              <button class="btn btn-sm btn-ghost" onclick="BookReader.goToPage(2)" style="text-align:left; justify-content:flex-start; font-size:0.82rem; font-weight:700; color:#0A2463; border:1px solid rgba(0,0,0,0.1); background:#FFF;">
                🅰️ Alfabeto Dactilológico
              </button>
              <button class="btn btn-sm btn-ghost" onclick="BookReader.search('hola')" style="text-align:left; justify-content:flex-start; font-size:0.82rem; font-weight:700; color:#0A2463; border:1px solid rgba(0,0,0,0.1); background:#FFF;">
                👋 Saludos y Cortesía
              </button>
              <button class="btn btn-sm btn-ghost" onclick="BookReader.search('familia')" style="text-align:left; justify-content:flex-start; font-size:0.82rem; font-weight:700; color:#0A2463; border:1px solid rgba(0,0,0,0.1); background:#FFF;">
                👨‍👩‍👧 Familia y Personas
              </button>
              <button class="btn btn-sm btn-ghost" onclick="BookReader.search('comida')" style="text-align:left; justify-content:flex-start; font-size:0.82rem; font-weight:700; color:#0A2463; border:1px solid rgba(0,0,0,0.1); background:#FFF;">
                🍎 Alimentos y Bebidas
              </button>
              <button class="btn btn-sm btn-ghost" onclick="BookReader.search('escuela')" style="text-align:left; justify-content:flex-start; font-size:0.82rem; font-weight:700; color:#0A2463; border:1px solid rgba(0,0,0,0.1); background:#FFF;">
                🏫 Educación y Escuela
              </button>
              <button class="btn btn-sm btn-ghost" onclick="BookReader.search('lunes')" style="text-align:left; justify-content:flex-start; font-size:0.82rem; font-weight:700; color:#0A2463; border:1px solid rgba(0,0,0,0.1); background:#FFF;">
                📅 Días y Calendario
              </button>
              <button class="btn btn-sm btn-ghost" onclick="BookReader.search('salud')" style="text-align:left; justify-content:flex-start; font-size:0.82rem; font-weight:700; color:#0A2463; border:1px solid rgba(0,0,0,0.1); background:#FFF;">
                🏥 Salud y Emergencias
              </button>
              <button class="btn btn-sm btn-ghost" onclick="BookReader.search('dominicana')" style="text-align:left; justify-content:flex-start; font-size:0.82rem; font-weight:700; color:#0A2463; border:1px solid rgba(0,0,0,0.1); background:#FFF;">
                🇩🇴 Geografía Nacional
              </button>
            </div>

            <div style="background:rgba(30,136,229,0.06); padding:0.85rem; border-radius:12px; border:1px solid rgba(30,136,229,0.2); text-align:center;">
              <p style="font-size:0.85rem; color:#1E3A8A; font-weight:600; margin-bottom:0.5rem;">
                💡 Usa el buscador en la barra superior para encontrar cualquier palabra al instante.
              </p>
              <button class="btn btn-primary btn-sm" onclick="BookReader.goToPage(2)" style="font-weight:800; padding:0.55rem 1.4rem;">
                📖 Comenzar a Leer el Libro ▶
              </button>
            </div>
          </div>

          <div class="book-page-footer">
            <span>Guía de Estudio LESDO</span>
            <span>Pág. 2</span>
          </div>
        `;
      }
      return;
    }

    // WORD SPREAD: Pages 2..N
    const wordIndex = this.currentPage - 2;
    const item = this.activeWords[wordIndex];

    if (!item) {
      if (pageLeft) pageLeft.innerHTML = `<div style="text-align:center; padding:3rem;"><p>Página no encontrada.</p></div>`;
      if (pageRight) pageRight.innerHTML = ``;
      return;
    }

    const isLetter = item.category === 'Alfabeto' || (item.word.length === 1 && /^[A-ZÑ]$/i.test(item.word));
    const letterChar = item.word.trim().toUpperCase();
    const letterSvgPath = `images/alphabet/${letterChar}.svg`;

    // LEFT PAGE: Word anatomical posture & description
    if (pageLeft) {
      pageLeft.innerHTML = `
        <div>
          <div class="book-page-header">
            <span>📖 ${item.category || 'Vocabulario General'}</span>
            <span>Entrada #${wordIndex + 1}</span>
          </div>

          <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:1rem; margin-bottom:0.85rem;">
            <div>
              <h1 style="font-size:1.85rem; font-weight:900; color:#0A2463; margin:0 0 4px; line-height:1.2;">
                ${item.word}
              </h1>
              <span style="display:inline-block; font-size:0.75rem; font-weight:800; background:rgba(30,136,229,0.12); color:#1E88E5; padding:3px 10px; border-radius:10px;">
                ${item.category || 'Vocabulario Oficial LSRD'}
              </span>
            </div>
            <div style="font-size:1.8rem; background:#FFF; width:48px; height:48px; border-radius:12px; display:flex; align-items:center; justify-content:center; box-shadow:0 3px 8px rgba(0,0,0,0.06); border:1px solid #E2E8F0;">
              ${item.icon || (isLetter ? '🔤' : '🤟')}
            </div>
          </div>

          <!-- Visual Illustration Box -->
          <div style="background:#FFF; border-radius:14px; border:2px solid #E2E8F0; padding:1rem; text-align:center; margin-bottom:0.85rem; box-shadow:0 4px 12px rgba(0,0,0,0.03);">
            ${isLetter ? `
              <img src="${letterSvgPath}" alt="Seña ${letterChar}" style="max-height:135px; margin:0 auto; display:block;" onerror="this.src='images/alphabet/A.svg'">
              <div style="font-size:0.78rem; font-weight:700; color:#64748B; margin-top:6px;">Configuración Dactilológica Oficial</div>
            ` : `
              <div style="display:flex; justify-content:space-around; align-items:center; padding:8px 0;">
                <div style="text-align:center;">
                  <span style="font-size:2rem; display:block;">✋</span>
                  <span style="font-size:0.72rem; font-weight:700; color:#64748B;">Mano Dominante</span>
                </div>
                <div style="font-size:1.3rem; color:#1E88E5;">➔</div>
                <div style="text-align:center;">
                  <span style="font-size:2rem; display:block;">🗣️</span>
                  <span style="font-size:0.72rem; font-weight:700; color:#64748B;">Espacio Gestual</span>
                </div>
                <div style="font-size:1.3rem; color:#1E88E5;">➔</div>
                <div style="text-align:center;">
                  <span style="font-size:2rem; display:block;">🎯</span>
                  <span style="font-size:0.72rem; font-weight:700; color:#64748B;">Ubicación</span>
                </div>
              </div>
              <div style="font-size:0.75rem; font-weight:700; color:#0A2463; background:#F0FDF4; border:1px solid #BBF7D0; padding:3px 10px; border-radius:8px; display:inline-block; margin-top:4px;">
                ✔ Signo Oficial CONADIS / ANSORDO
              </div>
            `}
          </div>

          <!-- Anatomical Posture Explanation -->
          <div style="background:#F8FAFC; border-radius:12px; border:1px solid #E2E8F0; padding:0.85rem;">
            <div style="font-size:0.75rem; font-weight:800; color:#0A2463; text-transform:uppercase; margin-bottom:4px; display:flex; align-items:center; gap:6px;">
              <span>✋</span> Configuración y Postura
            </div>
            <p style="font-size:0.88rem; color:#334155; line-height:1.45; margin:0;">
              ${item.definition || 'Realiza el gesto oficial con la mano dominante siguiendo la posición y trayectoria establecida.'}
            </p>
          </div>
        </div>

        <div class="book-page-footer">
          <span>Diccionario Ilustrado LSRD</span>
          <span>Pág. ${this.currentPage * 2 - 1}</span>
        </div>
      `;
    }

    // RIGHT PAGE: Video playback, conversation application & related words
    if (pageRight) {
      pageRight.innerHTML = `
        <div>
          <div class="book-page-header">
            <span>Demostración en Video Oficial</span>
            <span>Pág. ${this.currentPage * 2}</span>
          </div>

          <!-- Video Player Screen -->
          <div style="background:#000; border-radius:14px; overflow:hidden; box-shadow:0 6px 18px rgba(0,0,0,0.25); margin-bottom:0.85rem; position:relative; aspect-ratio:16/10;">
            ${item.video_url ? `
              <video id="inBookVideo" src="${item.video_url}" autoplay loop muted playsinline style="width:100%; height:100%; object-fit:cover; display:block;"></video>
              <div style="position:absolute; bottom:8px; right:8px; display:flex; gap:4px; z-index:2;">
                <button onclick="BookReader.toggleInBookSound()" id="btnInBookMute" class="btn btn-sm btn-ghost" style="background:rgba(0,0,0,0.7); color:white; padding:2px 8px; font-size:0.75rem; border-radius:6px; border:1px solid rgba(255,255,255,0.2);">
                  🔇
                </button>
                <button onclick="Dictionary.openVideoModal(BookReader.activeWords[BookReader.currentPage - 2])" class="btn btn-sm btn-secondary" style="padding:2px 10px; font-size:0.75rem; font-weight:700; border-radius:6px;">
                  🔍 Pantalla Completa
                </button>
              </div>
            ` : `
              <div style="display:flex; height:100%; align-items:center; justify-content:center; color:#94A3B8; font-size:0.9rem; font-weight:600;">
                Demostración gráfica ilustrada
              </div>
            `}
          </div>

          <!-- Practical Context Box -->
          <div style="background:#F8FAFC; border-radius:12px; border:1px solid #E2E8F0; padding:0.85rem; margin-bottom:0.75rem;">
            <div style="font-size:0.75rem; font-weight:800; color:#0A2463; text-transform:uppercase; margin-bottom:4px; display:flex; align-items:center; gap:6px;">
              <span>💬</span> Uso en Conversación Cotidiana
            </div>
            <p style="font-size:0.85rem; color:#475569; line-height:1.4; margin:0;">
              Se utiliza de forma natural en República Dominicana para comunicar la idea de "<strong>${item.word}</strong>". Mantén siempre contacto visual y una postura corporal abierta al realizar la seña.
            </p>
          </div>

          <!-- Related Words Tags -->
          <div>
            <div style="font-size:0.72rem; font-weight:800; color:#64748B; text-transform:uppercase; margin-bottom:4px;">
              Señas Relacionadas:
            </div>
            <div style="display:flex; flex-wrap:wrap; gap:6px;">
              ${this.getRelatedWords(item).map(w => `
                <button class="btn btn-sm btn-ghost" onclick="BookReader.jumpToWord('${w}')" style="background:#FFF; border:1px solid #E2E8F0; color:#0A2463; font-weight:700; font-size:0.75rem; padding:2px 8px; border-radius:8px;">
                  ${w} ➔
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="book-page-footer">
          <span>LESDO • República Dominicana</span>
          <span>Pág. ${this.currentPage * 2} de ${total * 2}</span>
        </div>
      `;
    }
  },

  getRelatedWords(item) {
    const sameCat = this.allWords
      .filter(w => w.word !== item.word && (w.category || '') === (item.category || ''))
      .slice(0, 3)
      .map(w => w.word);

    if (sameCat.length > 0) return sameCat;
    return ['Hola', 'Gracias', 'Familia'];
  },

  toggleInBookSound() {
    const video = document.getElementById('inBookVideo');
    const btn = document.getElementById('btnInBookMute');
    if (video) {
      video.muted = !video.muted;
      if (btn) btn.textContent = video.muted ? '🔇' : '🔊';
      Dictionary.showToast(video.muted ? 'Video silenciado' : 'Sonido activado', 'info');
    }
  }
};

window.Dictionary = Dictionary;
window.BookReader = BookReader;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    Dictionary.init();
    BookReader.init();
  });
} else {
  Dictionary.init();
  BookReader.init();
}

window.addEventListener('load', () => {
  if (!Dictionary.initialized) Dictionary.init();
  if (!BookReader.initialized) BookReader.init();
});

