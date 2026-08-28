const Dictionary = {
  user: null,

  async init() {
    const session = await Auth.getSession();
    if (!session) {
      window.location.href = 'index.html';
      return;
    }
    this.user = session.user;
    
    const profile = await Auth.getProfile(this.user.id);
    const name = profile?.display_name || this.user.user_metadata?.full_name || this.user.user_metadata?.username || this.user.email?.split('@')[0] || 'Estudiante';
    document.getElementById('userName').textContent = name;

    this.setupEventListeners();
    await this.search(''); // Load initial words
  },

  async search(query) {
    const container = document.getElementById('resultsContainer');
    container.innerHTML = '<div class="spinner"></div>';

    let allWords = window.LESDO_MOCK_DATA?.dictionary || [];
    let words = allWords;

    if (query.trim() !== '') {
      const qClean = query.trim().toLowerCase();
      words = allWords.filter(w => w.word.toLowerCase().includes(qClean) || (w.category && w.category.toLowerCase().includes(qClean)));
    } else {
      words = allWords.slice(0, 60);
    }
    
    this.renderResults(words, query, allWords.length);
  },

  renderResults(words, query, totalCount = 1390) {
    const container = document.getElementById('resultsContainer');
    container.innerHTML = '';

    if (!words || words.length === 0) {
      container.innerHTML = `
        <div class="card text-center" style="padding: 2rem;">
          <p style="font-size: 1.1rem; color: var(--text-secondary);">No se encontraron señas para '<strong>${query}</strong>'</p>
          <p class="text-small text-secondary" style="margin-top: 0.5rem;">Prueba con otra palabra o consulta el <a href="https://diccionariolsrd.cc/" target="_blank">Diccionario Oficial LSRD</a>.</p>
        </div>`;
      return;
    }

    const countHeader = document.createElement('div');
    countHeader.style.cssText = 'grid-column: 1 / -1; margin-bottom: 0.5rem; font-size: 0.9rem; color: var(--text-secondary); font-weight: 600;';
    countHeader.textContent = query.trim() !== '' 
      ? `Encontrados ${words.length} resultados para "${query}"`
      : `Mostrando ${words.length} señas destacadas (Catálogo de ${totalCount} señas oficiales en video)`;
    container.appendChild(countHeader);

    words.forEach(word => {
      const card = document.createElement('div');
      card.className = 'card word-card';
      
      const icon = word.icon || '🤟';
      const catName = word.category || word.categories?.name || 'Vocabulario General';
      
      card.innerHTML = `
        <div style="font-size: 2.5rem; width: 80px; height: 80px; background: rgba(30,136,229,0.08); border-radius: 8px; display:flex; align-items:center; justify-content:center; cursor:pointer;" class="word-thumb">
          ${icon}
        </div>
        <div class="word-info" style="flex: 1;">
          <h2 style="font-size: 1.3rem; margin-bottom: 0.25rem;">${word.word}</h2>
          <span style="font-size: 0.75rem; background: rgba(30,136,229,0.1); color: var(--secondary); padding: 2px 8px; border-radius: 12px; font-weight: 600; display: inline-block; margin-bottom: 0.5rem;">
            ${catName}
          </span>
          <p class="text-secondary" style="font-size: 0.9rem;">${word.definition || ''}</p>
        </div>
        <button class="btn btn-primary btn-play">Ver Seña ▶</button>
      `;
      
      card.querySelector('.btn-play').addEventListener('click', () => {
        this.playVideo(word.video_url, word);
      });
      card.querySelector('.word-thumb').addEventListener('click', () => {
        this.playVideo(word.video_url, word);
      });
      
      container.appendChild(card);
    });
  },

  playVideo(videoUrl, wordData) {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('modalVideo');
    const title = document.getElementById('modalTitle');
    const word = typeof wordData === 'string' ? { word: wordData, definition: '' } : wordData;
    
    title.textContent = `Seña LESDO: ${word.word}`;
    
    let descEl = document.getElementById('modalDesc');
    if (!descEl) {
      descEl = document.createElement('div');
      descEl.id = 'modalDesc';
      descEl.style.marginTop = '1rem';
      descEl.style.padding = '1.25rem';
      descEl.style.background = 'rgba(30,136,229,0.05)';
      descEl.style.borderRadius = '8px';
      descEl.style.border = '1px solid rgba(30,136,229,0.2)';
      descEl.style.textAlign = 'center';
      video.parentNode.appendChild(descEl);
    }
    
    descEl.innerHTML = `
      ${word.image_url ? `
        <img src="${word.image_url}" alt="${word.word}" class="sign-hand-img" style="width:130px; height:130px; margin-bottom:0.75rem;">
      ` : (!word.video_url ? `
        <div style="font-size: 5rem; margin-bottom: 0.5rem; animation: pulse 1.5s infinite ease-in-out;">${word.icon || '🤟'}</div>
      ` : '')}
      <h2 style="color: var(--primary); font-size: 2rem; margin-bottom: 0.5rem;">${word.word}</h2>
      <div style="background: white; border: 1px solid rgba(0,0,0,0.08); border-radius: 8px; padding: 1rem; margin: 1rem auto; max-width: 500px; text-align: left;">
        <p style="font-size: 1.05rem; color: var(--text-primary); margin-bottom: 0.5rem; line-height: 1.5;">
          <strong>Posición y movimiento:</strong> ${word.definition || 'Gesto representativo en Lengua de Señas Dominicana.'}
        </p>
      </div>
      <span style="font-size: 0.85rem; background: var(--secondary); color: white; padding: 4px 14px; border-radius: 14px; font-weight:600; display: inline-block;">
        ${word.category || word.categories?.name || 'Vocabulario Oficial LSRD'}
      </span>
    `;

    if (word.video_url) {
      video.style.display = 'block';
      video.src = word.video_url;
      video.loop = true;
      video.playsInline = true;
      video.style.maxHeight = '320px';
      video.style.borderRadius = '8px';
      video.style.boxShadow = 'var(--shadow-sm)';
      video.play().catch(e => console.log("Autoplay blocked:", e));
    } else {
      video.style.display = 'none';
      video.src = '';
    }

    modal.classList.add('active');
  },

  setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    const debouncedSearch = this.debounce((e) => {
      this.search(e.target.value);
    }, 300);
    
    searchInput.addEventListener('input', debouncedSearch);

    // Logout and Nav
    document.getElementById('btnLogout').addEventListener('click', () => Auth.signOut());
    document.getElementById('btnLogoutMobile').addEventListener('click', () => Auth.signOut());
    
    const navToggle = document.getElementById('navToggle');
    const navMobile = document.getElementById('navMobile');
    if(navToggle && navMobile) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMobile.style.display = navToggle.classList.contains('active') ? 'flex' : 'none';
        });
    }

    // Modal close
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('modalVideo');
    const closeBtn = document.getElementById('closeModal');
    
    const closeModal = () => {
      modal.classList.remove('active');
      video.pause();
      const iframe = document.getElementById('modalIframe');
      if (iframe) iframe.remove();
      video.src = '';
    };

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if(e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });
  },

  debounce(fn, delay) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }
};

document.addEventListener('DOMContentLoaded', () => Dictionary.init());
