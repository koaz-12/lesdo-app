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
    this.allWords = window.LESDO_MOCK_DATA?.dictionary || [];
    // Ensure every item has a normalized sort key
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

window.Dictionary = Dictionary;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => Dictionary.init());
} else {
  Dictionary.init();
}

window.addEventListener('load', () => {
  if (!Dictionary.initialized) Dictionary.init();
});

