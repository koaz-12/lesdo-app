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

    if (!window.supabaseClient) {
      let words = window.LESDO_MOCK_DATA?.dictionary || [];
      if (query.trim() !== '') {
        const qClean = query.trim().toLowerCase();
        words = words.filter(w => w.word.toLowerCase().includes(qClean) || (w.definition && w.definition.toLowerCase().includes(qClean)));
      }
      this.renderResults(words, query);
      return;
    }

    try {
      let q = window.supabaseClient
        .from('dictionary_words')
        .select('*, categories(name, icon)')
        .order('word');
        
      if (query.trim() !== '') {
        q = q.ilike('word', `%${query}%`);
      } else {
        // limit initial results
        q = q.limit(20);
      }

      const { data, error } = await q;

      if (error) throw error;
      this.renderResults(data, query);
    } catch (error) {
      console.warn("Supabase dictionary search failed, using local mock data:", error);
      let words = window.LESDO_MOCK_DATA?.dictionary || [];
      if (query.trim() !== '') {
        const qClean = query.trim().toLowerCase();
        words = words.filter(w => w.word.toLowerCase().includes(qClean) || (w.definition && w.definition.toLowerCase().includes(qClean)));
      }
      this.renderResults(words, query);
    }
  },

  renderResults(words, query) {
    const container = document.getElementById('resultsContainer');
    container.innerHTML = '';

    if (!words || words.length === 0) {
      container.innerHTML = `
        <div class="card text-center">
          <p>No se encontraron resultados para '${query}'</p>
        </div>`;
      return;
    }

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
      <div style="font-size: 4rem; margin-bottom: 0.5rem;">${word.icon || '🤟'}</div>
      <h2 style="color: var(--primary); margin-bottom: 0.5rem;">${word.word}</h2>
      <p style="font-size: 1.1rem; color: var(--text-primary); margin-bottom: 0.75rem; max-width: 450px; margin-left: auto; margin-right: auto; line-height: 1.5;">
        <strong>Cómo se hace:</strong> ${word.definition || 'Gesto representativo en Lengua de Señas Dominicana.'}
      </p>
      <span style="font-size: 0.8rem; background: var(--secondary); color: white; padding: 4px 12px; border-radius: 12px; font-weight:600;">
        ${word.category || word.categories?.name || 'Vocabulario Oficial'}
      </span>
    `;

    const videoContainer = document.getElementById('modalVideoContainer') || video.parentElement;
    
    // Check if iframe already exists, remove or update
    let iframe = document.getElementById('modalIframe');
    if (iframe) iframe.remove();

    if (videoUrl && (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be'))) {
      video.style.display = 'none';
      let videoId = '';
      if (videoUrl.includes('embed/')) videoId = videoUrl.split('embed/')[1].split('?')[0];
      else if (videoUrl.includes('watch?v=')) videoId = videoUrl.split('watch?v=')[1].split('&')[0];
      else if (videoUrl.includes('youtu.be/')) videoId = videoUrl.split('youtu.be/')[1].split('?')[0];
      
      const newIframe = document.createElement('iframe');
      newIframe.id = 'modalIframe';
      newIframe.style.width = '100%';
      newIframe.style.height = '320px';
      newIframe.style.border = 'none';
      newIframe.style.borderRadius = '8px';
      newIframe.src = `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`;
      newIframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      newIframe.allowFullscreen = true;
      videoContainer.insertBefore(newIframe, video);
    } else if (videoUrl) {
      video.style.display = 'block';
      video.src = videoUrl;
      video.play().catch(e => console.log("Autoplay prevented", e));
    } else {
      video.style.display = 'none';
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
