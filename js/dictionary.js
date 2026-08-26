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
      
      const thumb = word.thumbnail_url || 'https://via.placeholder.com/100?text=LESDO';
      
      card.innerHTML = `
        <img src="${thumb}" alt="${word.word}" class="word-thumb">
        <div class="word-info">
          <h2>${word.word}</h2>
          ${word.categories ? `<p class="text-small text-secondary">${word.categories.icon} ${word.categories.name}</p>` : ''}
          <p>${word.definition || ''}</p>
        </div>
        <button class="btn btn-primary btn-play">Ver Seña ▶</button>
      `;
      
      card.querySelector('.btn-play').addEventListener('click', () => {
        this.playVideo(word.video_url, word.word);
      });
      card.querySelector('.word-thumb').addEventListener('click', () => {
        this.playVideo(word.video_url, word.word);
      });
      
      container.appendChild(card);
    });
  },

  playVideo(videoUrl, word) {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('modalVideo');
    const title = document.getElementById('modalTitle');
    
    title.textContent = word;
    video.src = videoUrl || ''; // Assign URL or handle missing
    modal.classList.add('active');
    
    if (videoUrl) {
      video.play().catch(e => console.log("Autoplay prevented", e));
    } else {
      alert("Video no disponible");
    }
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
