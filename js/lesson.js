const Lesson = {
  user: null,
  categorySlug: null,
  lessonId: null,
  category: null,
  lessons: [],
  currentLesson: null,
  quizzes: [],
  currentQuizIndex: 0,
  userProgress: [],

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
    
    document.getElementById('btnLogout').addEventListener('click', () => Auth.signOut());

    const urlParams = new URLSearchParams(window.location.search);
    this.categorySlug = urlParams.get('category');
    this.lessonId = urlParams.get('lesson');

    if (this.lessonId) {
      await this.loadLessonView(this.lessonId);
    } else if (this.categorySlug) {
      await this.loadCategoryView(this.categorySlug);
    } else {
      window.location.href = 'dashboard.html';
    }
  },

  async loadCategoryView(slug) {
    if (!window.supabaseClient) {
      const mockCat = (window.LESDO_MOCK_DATA?.categories || []).find(c => c.slug === slug) || window.LESDO_MOCK_DATA?.categories[0];
      if (mockCat) {
        this.category = mockCat;
        this.lessons = (window.LESDO_MOCK_DATA?.lessons || []).filter(l => l.category_id === mockCat.id);
        const local = JSON.parse(localStorage.getItem('lesdo_progress') || '[]');
        this.userProgress = local.map(p => p.lesson_id);
        this.renderLessonList();
      }
      return;
    }
    try {
      const { data: categoryData, error: catError } = await window.supabaseClient
        .from('categories')
        .select('*')
        .eq('slug', slug)
        .single();
      
      if (catError) throw catError;
      this.category = categoryData;

      const { data: lessonsData, error: lesError } = await window.supabaseClient
        .from('lessons')
        .select('*')
        .eq('category_id', this.category.id)
        .order('sort_order');
      
      if (lesError) throw lesError;
      this.lessons = lessonsData;

      const { data: progressData } = await window.supabaseClient
        .from('user_progress')
        .select('lesson_id')
        .eq('user_id', this.user.id)
        .eq('completed', true);
      
      this.userProgress = (progressData || []).map(p => p.lesson_id);

      this.renderLessonList();
    } catch (error) {
      console.warn("Error loadCategoryView, fallback to mock data:", error);
      const mockCat = (window.LESDO_MOCK_DATA?.categories || []).find(c => c.slug === slug) || window.LESDO_MOCK_DATA?.categories[0];
      if (mockCat) {
        this.category = mockCat;
        this.lessons = (window.LESDO_MOCK_DATA?.lessons || []).filter(l => l.category_id === mockCat.id);
        const local = JSON.parse(localStorage.getItem('lesdo_progress') || '[]');
        this.userProgress = local.map(p => p.lesson_id);
        this.renderLessonList();
      } else {
        document.getElementById('contentArea').innerHTML = '<p>Error al cargar la categoría.</p>';
      }
    }
  },

  renderLessonList() {
    const container = document.getElementById('contentArea');
    
    let html = `
      <div class="breadcrumb">
        <a href="dashboard.html">Inicio</a> &gt; ${this.category.name}
      </div>
      <div class="hero" style="border-top: 5px solid ${this.category.color}; padding: 2rem; background: #fff; border-radius: 8px; margin-bottom: 2rem;">
        <h1 style="display:flex; align-items:center; gap:1rem;">
          <span style="font-size:3rem;">${this.category.icon}</span> 
          ${this.category.name}
        </h1>
        <p class="text-secondary">${this.category.description}</p>
      </div>
      
      <div class="lesson-list">
    `;

    this.lessons.forEach(lesson => {
      const isCompleted = this.userProgress.includes(lesson.id);
      const thumb = lesson.thumbnail_url || 'https://via.placeholder.com/300x160?text=LESDO';
      
      html += `
        <div class="card lesson-card cursor-pointer" onclick="window.location.href='lesson.html?lesson=${lesson.id}'">
          <img src="${thumb}" alt="${lesson.title}">
          <div class="lesson-card-content">
            <div>
              <h3>${lesson.title}</h3>
              <p class="text-small text-secondary">${Math.round(lesson.duration_seconds / 60)} min</p>
            </div>
            ${isCompleted ? '<div class="completed-badge">✓ Completada</div>' : ''}
          </div>
        </div>
      `;
    });

    html += `</div>`;
    container.innerHTML = html;
  },

  async loadLessonView(lessonId) {
    if (!window.supabaseClient) {
      const mockLesson = (window.LESDO_MOCK_DATA?.lessons || []).find(l => l.id === lessonId) || window.LESDO_MOCK_DATA?.lessons[0];
      if (mockLesson) {
        this.currentLesson = mockLesson;
        this.category = (window.LESDO_MOCK_DATA?.categories || []).find(c => c.id === mockLesson.category_id) || { name: 'Módulo', slug: 'alfabeto' };
        this.quizzes = (window.LESDO_MOCK_DATA?.quizzes || []).filter(q => q.lesson_id === mockLesson.id);
        const local = JSON.parse(localStorage.getItem('lesdo_progress') || '[]');
        this.isCompleted = local.some(p => p.lesson_id === mockLesson.id);
        this.renderLesson();
      }
      return;
    }
    try {
      const { data: lessonData, error } = await window.supabaseClient
        .from('lessons')
        .select('*, categories(*)')
        .eq('id', lessonId)
        .single();
        
      if (error) throw error;
      this.currentLesson = lessonData;
      this.category = lessonData.categories;

      // Load quizzes
      const { data: quizzesData } = await window.supabaseClient
        .from('quizzes')
        .select('*, quiz_options(*)')
        .eq('lesson_id', lessonId)
        .order('sort_order');
      
      this.quizzes = quizzesData || [];
      
      // Load progress
      const { data: progressData } = await window.supabaseClient
        .from('user_progress')
        .select('*')
        .eq('user_id', this.user.id)
        .eq('lesson_id', lessonId)
        .single();
        
      this.isCompleted = progressData?.completed || false;

      this.renderLesson();
    } catch (error) {
      console.warn("Error loadLessonView, fallback to mock data:", error);
      const mockLesson = (window.LESDO_MOCK_DATA?.lessons || []).find(l => l.id === lessonId) || window.LESDO_MOCK_DATA?.lessons[0];
      if (mockLesson) {
        this.currentLesson = mockLesson;
        this.category = (window.LESDO_MOCK_DATA?.categories || []).find(c => c.id === mockLesson.category_id) || { name: 'Módulo', slug: 'alfabeto' };
        this.quizzes = (window.LESDO_MOCK_DATA?.quizzes || []).filter(q => q.lesson_id === mockLesson.id);
        const local = JSON.parse(localStorage.getItem('lesdo_progress') || '[]');
        this.isCompleted = local.some(p => p.lesson_id === mockLesson.id);
        this.renderLesson();
      } else {
        document.getElementById('contentArea').innerHTML = '<p>Error al cargar la lección.</p>';
      }
    }
  },

  webcamStream: null,

  renderLesson() {
    const container = document.getElementById('contentArea');
    
    let html = `
      <div class="breadcrumb">
        <a href="dashboard.html">Inicio</a> &gt; 
        <a href="lesson.html?category=${this.category.slug}">${this.category.name}</a> &gt; 
        ${this.currentLesson.title}
      </div>
      
      <div class="card" style="padding: 2rem;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:1rem; margin-bottom:1rem;">
          <div>
            <h1>${this.currentLesson.title}</h1>
            <p class="text-secondary">${this.currentLesson.description}</p>
          </div>
          <div id="statusArea">
            ${this.isCompleted 
              ? '<span class="completed-badge" style="font-size:1rem; padding:0.5rem 1rem;">✓ Lección Completada</span>' 
              : `<button class="btn btn-primary" id="btnCompleteLesson">Marcar como completada</button>`}
          </div>
        </div>
        
        <!-- Video & Webcam Mirror Split Container -->
        <div class="video-split-container" id="videoSplitContainer">
          <div class="lesson-video-container" style="margin-bottom:0; background:transparent;">
            ${this.renderVideoMarkup(this.currentLesson.video_url, this.currentLesson.thumbnail_url)}
          </div>

          <div class="webcam-box" id="webcamBox" style="display:none;">
            <div class="webcam-badge">📷 Tu Cámara (Modo Espejo)</div>
            <video id="webcamVideo" class="webcam-video" autoplay playsinline muted></video>
          </div>
        </div>

        <!-- Video Control Tools -->
        <div class="video-tools">
          <div class="video-tools__group">
            <span class="text-small text-secondary" style="font-weight:600;">Velocidad:</span>
            <button class="speed-btn" data-speed="0.5">0.5x (Lenta)</button>
            <button class="speed-btn" data-speed="0.75">0.75x</button>
            <button class="speed-btn active" data-speed="1.0">1.0x (Normal)</button>
            <button class="speed-btn" data-speed="1.25">1.25x</button>
          </div>

          <div class="video-tools__group">
            <button class="btn btn-ghost btn-sm" id="btnLoopToggle">
              🔁 Bucle: <span id="loopStatus" style="font-weight:700;">Desactivado</span>
            </button>
            <button class="btn btn-secondary btn-sm" id="btnWebcamToggle">
              📷 Activar Modo Espejo
            </button>
          </div>
        </div>

        <!-- Step-by-Step Sign Execution Guide -->
        ${this.currentLesson.guide && this.currentLesson.guide.length > 0 ? `
          <div style="margin-top: 1.5rem; border-top: 1px solid rgba(0,0,0,0.08); padding-top: 1.5rem;">
            <h3 style="display:flex; align-items:center; gap:0.5rem; margin-bottom: 1rem;">
              <span>✋</span> Guía de Ejecución de las Señas:
            </h3>
            <div style="display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));">
              ${this.currentLesson.guide.map(item => `
                <div style="background: rgba(30,136,229,0.04); border: 1px solid rgba(30,136,229,0.2); border-radius: 8px; padding: 1rem; text-align: left;">
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 0.5rem;">
                    <span style="font-size: 1.25rem; font-weight: 700; color: var(--primary);">${item.sign}</span>
                    <span style="font-size: 0.75rem; background: var(--secondary); color: white; padding: 2px 8px; border-radius: 12px; font-weight: 600;">LESDO</span>
                  </div>
                  <p style="font-size: 0.9rem; color: var(--text-primary); margin-bottom: 0.5rem; line-height: 1.4;">
                    <strong>Posición de mano:</strong> ${item.hand}
                  </p>
                  <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.3;">
                    💡 <em>${item.tip}</em>
                  </p>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
      
      <div id="quizArea"></div>
      
      <div style="display:flex; justify-content:space-between; margin-top: 2rem;">
        <button class="btn btn-secondary" id="btnPrev">← Anterior</button>
        <button class="btn btn-secondary" id="btnNext">Siguiente →</button>
      </div>
    `;
    
    container.innerHTML = html;

    if (!this.isCompleted) {
      document.getElementById('btnCompleteLesson')?.addEventListener('click', () => this.markCompleted());
    }

    this.setupVideoTools();
    this.setupNavigation();

    if (this.quizzes.length > 0) {
      this.currentQuizIndex = 0;
      this.renderQuiz();
    }
  },

  autoplayTimer: null,
  isAutoplaying: false,

  renderVideoMarkup(url, poster) {
    const guides = this.currentLesson.guide || [];
    const firstSign = guides[0] || { sign: this.currentLesson.title, hand: 'Sigue las instrucciones a continuación', tip: 'Práctica activa de señas' };
    
    return `
      <div class="sign-stage" id="signStage">
        <div class="sign-stage__glow"></div>
        
        <!-- Sign Tabs -->
        ${guides.length > 1 ? `
          <div class="sign-stage__tabs">
            ${guides.map((g, idx) => `
              <button class="sign-tab-btn ${idx === 0 ? 'active' : ''}" data-idx="${idx}">
                ${g.sign}
              </button>
            `).join('')}
          </div>
        ` : ''}

        <!-- Active Sign Animation Stage with Next/Prev Buttons -->
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; margin: auto 0; z-index: 2; width: 100%;">
          ${guides.length > 1 ? `
            <button id="btnPrevSign" class="btn btn-ghost" style="color:white; font-size:1.5rem; padding:0.5rem 0.75rem; border-radius:50%; background:rgba(255,255,255,0.18); cursor:pointer;" title="Seña Anterior">◀</button>
          ` : '<div style="width:40px;"></div>'}
          
          <div style="flex: 1; text-align: center;">
            ${firstSign.image_url ? `
              <img id="stageImg" class="sign-hand-img animate-fade-in" src="${firstSign.image_url}" alt="${firstSign.sign}">
              <div id="stageIcon" class="sign-stage__icon" style="display:none;">🤟</div>
            ` : `
              <img id="stageImg" class="sign-hand-img" src="" alt="" style="display:none;">
              <div id="stageIcon" class="sign-stage__icon animate-fade-in">${firstSign.icon || '🤟'}</div>
            `}
            
            <h2 id="stageSignTitle" style="font-size: 2.2rem; color: #fff; margin-bottom: 0.25rem;">
              ${firstSign.sign}
            </h2>
            <p id="stageSignHand" style="font-size: 1.05rem; color: rgba(255,255,255,0.95); max-width: 480px; margin: 0 auto; line-height: 1.4;">
              ${firstSign.hand}
            </p>
          </div>

          ${guides.length > 1 ? `
            <button id="btnNextSign" class="btn btn-ghost" style="color:white; font-size:1.5rem; padding:0.5rem 0.75rem; border-radius:50%; background:rgba(255,255,255,0.18); cursor:pointer;" title="Siguiente Seña">▶</button>
          ` : '<div style="width:40px;"></div>'}
        </div>

        <div style="z-index: 2; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; border-top: 1px solid rgba(255,255,255,0.15); padding-top: 0.75rem; margin-top: 1rem;">
          <span id="stageSignTip" style="font-size: 0.85rem; color: var(--accent); font-weight: 600;">
            💡 ${firstSign.tip}
          </span>
          <button id="btnAutoplaySigns" class="btn btn-sm btn-accent" style="padding: 4px 12px; font-size: 0.8rem; font-weight:700;">
            ▶ Reproducir Animación
          </button>
        </div>
      </div>
    `;
  },

  setupVideoTools() {
    // Sign Stage Tabs logic
    const guides = this.currentLesson.guide || [];
    const tabButtons = document.querySelectorAll('.sign-tab-btn');
    const stageImg = document.getElementById('stageImg');
    const stageIcon = document.getElementById('stageIcon');
    const stageTitle = document.getElementById('stageSignTitle');
    const stageHand = document.getElementById('stageSignHand');
    const stageTip = document.getElementById('stageSignTip');
    const btnAutoplay = document.getElementById('btnAutoplaySigns');
    const btnPrevSign = document.getElementById('btnPrevSign');
    const btnNextSign = document.getElementById('btnNextSign');

    let currentIdx = 0;
    let playbackSpeed = 1.0;

    const selectSign = (idx) => {
      if (idx < 0) idx = guides.length - 1;
      if (idx >= guides.length) idx = 0;
      currentIdx = idx;
      
      tabButtons.forEach(b => b.classList.remove('active'));
      const activeBtn = document.querySelector(`.sign-tab-btn[data-idx="${idx}"]`);
      if (activeBtn) activeBtn.classList.add('active');

      const data = guides[idx];
      if (data) {
        if (stageTitle) stageTitle.textContent = data.sign;
        if (stageHand) stageHand.textContent = data.hand;
        if (stageTip) stageTip.textContent = `💡 ${data.tip}`;

        if (data.image_url && stageImg) {
          stageImg.src = data.image_url;
          stageImg.style.display = 'block';
          if (stageIcon) stageIcon.style.display = 'none';
          stageImg.style.animation = 'none';
          void stageImg.offsetWidth;
          stageImg.style.animation = 'pulse 0.4s ease';
        } else if (stageIcon) {
          if (stageImg) stageImg.style.display = 'none';
          stageIcon.textContent = data.icon || '🤟';
          stageIcon.style.display = 'inline-block';
          stageIcon.style.animation = 'none';
          void stageIcon.offsetWidth;
          stageIcon.style.animation = 'pulse 0.4s ease';
        }
      }
    };

    btnPrevSign?.addEventListener('click', () => {
      if (this.isAutoplaying) stopAutoplay();
      selectSign(currentIdx - 1);
    });

    btnNextSign?.addEventListener('click', () => {
      if (this.isAutoplaying) stopAutoplay();
      selectSign(currentIdx + 1);
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') selectSign(currentIdx + 1);
      if (e.key === 'ArrowLeft') selectSign(currentIdx - 1);
    });

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.isAutoplaying) stopAutoplay();
        selectSign(parseInt(btn.dataset.idx, 10));
      });
    });

    // Autoplay feature
    const startAutoplay = () => {
      if (guides.length <= 1) return;
      this.isAutoplaying = true;
      if (btnAutoplay) {
        btnAutoplay.textContent = '⏸ Pausar Animación';
        btnAutoplay.classList.remove('btn-accent');
        btnAutoplay.classList.add('btn-warning');
      }
      this.showToast('Reproduciendo animación continua de señas...', 'info');

      this.autoplayTimer = setInterval(() => {
        currentIdx = (currentIdx + 1) % guides.length;
        selectSign(currentIdx);
      }, 2000 / playbackSpeed);
    };

    const stopAutoplay = () => {
      this.isAutoplaying = false;
      if (this.autoplayTimer) clearInterval(this.autoplayTimer);
      this.autoplayTimer = null;
      if (btnAutoplay) {
        btnAutoplay.textContent = '▶ Reproducir Animación';
        btnAutoplay.classList.remove('btn-warning');
        btnAutoplay.classList.add('btn-accent');
      }
    };

    btnAutoplay?.addEventListener('click', () => {
      if (this.isAutoplaying) {
        stopAutoplay();
      } else {
        startAutoplay();
      }
    });

    // Speed buttons (changes pulse rhythm)
    const speedButtons = document.querySelectorAll('.speed-btn');
    speedButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        speedButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const speed = parseFloat(btn.dataset.speed);
        if (stageIcon) {
          stageIcon.style.animationDuration = `${1.5 / speed}s`;
        }
        this.showToast(`Velocidad de práctica: ${speed}x`, 'info');
      });
    });

    // Loop toggle
    const btnLoop = document.getElementById('btnLoopToggle');
    const loopStatus = document.getElementById('loopStatus');
    btnLoop?.addEventListener('click', () => {
      video.loop = !video.loop;
      loopStatus.textContent = video.loop ? 'Activado' : 'Desactivado';
      loopStatus.style.color = video.loop ? 'var(--success)' : 'inherit';
      this.showToast(video.loop ? 'Bucle activado para práctica continua' : 'Bucle desactivado', 'info');
    });

    // Webcam mirror toggle
    const btnWebcam = document.getElementById('btnWebcamToggle');
    const webcamBox = document.getElementById('webcamBox');
    const videoSplitContainer = document.getElementById('videoSplitContainer');
    const webcamVideo = document.getElementById('webcamVideo');

    btnWebcam?.addEventListener('click', async () => {
      if (this.webcamStream) {
        // Stop stream
        this.webcamStream.getTracks().forEach(track => track.stop());
        this.webcamStream = null;
        webcamBox.style.display = 'none';
        videoSplitContainer.classList.remove('split-active');
        btnWebcam.textContent = '📷 Activar Modo Espejo';
        btnWebcam.classList.remove('btn-primary');
        btnWebcam.classList.add('btn-secondary');
        this.showToast('Cámara desactivada', 'info');
      } else {
        // Start stream
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ 
            video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: 'user' }, 
            audio: false 
          });
          this.webcamStream = stream;
          webcamVideo.srcObject = stream;
          webcamBox.style.display = 'flex';
          videoSplitContainer.classList.add('split-active');
          btnWebcam.textContent = '🛑 Desactivar Espejo';
          btnWebcam.classList.remove('btn-secondary');
          btnWebcam.classList.add('btn-primary');
          this.showToast('¡Modo Espejo activado! Compara tus señas con el video.', 'success');
        } catch (err) {
          console.error("Webcam error:", err);
          this.showToast('No se pudo acceder a la cámara. Permite el acceso en tu navegador.', 'error');
        }
      }
    });
  },

  async setupNavigation() {
    let allLessons = [];
    const catId = this.category?.id || this.currentLesson?.category_id;
    
    if (window.LESDO_MOCK_DATA?.lessons) {
      allLessons = window.LESDO_MOCK_DATA.lessons.filter(l => l.category_id === catId);
      if (allLessons.length === 0) allLessons = window.LESDO_MOCK_DATA.lessons;
    }

    if (window.supabaseClient && !window.CONFIG?.OFFLINE_MODE) {
      try {
        const { data } = await window.supabaseClient
          .from('lessons')
          .select('id, sort_order')
          .eq('category_id', catId)
          .order('sort_order');
        if (data && data.length > 0) allLessons = data;
      } catch (e) {
        console.warn("Using fallback lessons list:", e);
      }
    }
      
    const idx = allLessons.findIndex(l => l.id === this.currentLesson.id);
    
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');

    if (btnPrev) {
      if (idx > 0) {
        btnPrev.style.visibility = 'visible';
        btnPrev.textContent = '← Lección Anterior';
        btnPrev.onclick = () => window.location.href = `lesson.html?lesson=${allLessons[idx-1].id}`;
      } else {
        btnPrev.style.visibility = 'hidden';
      }
    }
    
    if (btnNext) {
      if (idx >= 0 && idx < allLessons.length - 1) {
        btnNext.style.visibility = 'visible';
        btnNext.textContent = 'Siguiente Lección →';
        btnNext.onclick = () => window.location.href = `lesson.html?lesson=${allLessons[idx+1].id}`;
      } else {
        btnNext.style.visibility = 'visible';
        btnNext.textContent = 'Terminar Categoría ✓';
        btnNext.onclick = () => window.location.href = `dashboard.html`;
      }
    }
  },

  async markCompleted() {
    const local = JSON.parse(localStorage.getItem('lesdo_progress') || '[]');
    if (!local.some(p => p.lesson_id === this.currentLesson.id)) {
      local.push({ lesson_id: this.currentLesson.id, completed: true, completed_at: new Date().toISOString() });
      localStorage.setItem('lesdo_progress', JSON.stringify(local));
    }
    
    try {
      await window.supabaseClient
        .from('user_progress')
        .upsert({
          user_id: this.user.id,
          lesson_id: this.currentLesson.id,
          completed: true,
          completed_at: new Date().toISOString()
        }, { onConflict: 'user_id,lesson_id' });
    } catch (error) {
      console.warn("Saved to local storage:", error);
    }
    
    this.isCompleted = true;
    document.getElementById('statusArea').innerHTML = '<span class="completed-badge" style="font-size:1rem; padding:0.5rem 1rem;">✓ Lección Completada</span>';
    this.showToast('¡Lección completada!', 'success');
  },

  renderQuiz() {
    const quizArea = document.getElementById('quizArea');
    if (this.currentQuizIndex >= this.quizzes.length) {
      quizArea.innerHTML = `
        <div class="quiz-section" style="text-align:center;">
          <h2>¡Práctica Completada! 🎉</h2>
          <p>Has respondido todas las preguntas de esta lección.</p>
        </div>`;
      return;
    }

    const quiz = this.quizzes[this.currentQuizIndex];
    // sort options safely
    const options = (quiz.quiz_options || []).sort((a,b) => a.sort_order - b.sort_order);

    let html = `
      <div class="quiz-section animate-slide-up">
        <h2>Práctica (${this.currentQuizIndex + 1}/${this.quizzes.length})</h2>
        <p>${quiz.question_text || '¿Qué seña se muestra en el video?'}</p>
        
        ${quiz.video_url ? `
          <div style="margin: 1rem 0; text-align:center;">
            <video src="${quiz.video_url}" muted autoplay loop style="max-height: 250px; border-radius:8px;"></video>
          </div>
        ` : ''}
        
        <div class="quiz-options" id="optionsContainer">
          ${options.map(opt => `
            <button class="quiz-option" data-id="${opt.id}" data-correct="${opt.is_correct}">${opt.option_text}</button>
          `).join('')}
        </div>
        
        <div id="quizFeedback" style="margin-top:1rem; display:none;"></div>
        <button class="btn btn-primary" id="btnNextQuiz" style="margin-top:1rem; display:none;">Siguiente Pregunta</button>
      </div>
    `;
    
    quizArea.innerHTML = html;

    const btns = document.querySelectorAll('.quiz-option');
    btns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const optionId = btn.getAttribute('data-id');
        const isCorrect = btn.getAttribute('data-correct') === 'true';
        this.selectAnswer(optionId, isCorrect, btns, btn, quiz.id);
      });
    });

    document.getElementById('btnNextQuiz')?.addEventListener('click', () => {
      this.currentQuizIndex++;
      this.renderQuiz();
    });
  },

  async selectAnswer(optionId, isCorrect, allBtns, selectedBtn, quizId) {
    allBtns.forEach(btn => {
      btn.disabled = true;
      if (btn.getAttribute('data-correct') === 'true') {
        btn.classList.add('correct');
      }
    });

    const feedback = document.getElementById('quizFeedback');
    feedback.style.display = 'block';

    if (isCorrect) {
      feedback.innerHTML = '<span style="color:#137333; font-weight:bold;">¡Correcto! 🎉</span>';
    } else {
      selectedBtn.classList.add('incorrect');
      feedback.innerHTML = '<span style="color:#c5221f; font-weight:bold;">Incorrecto. La respuesta correcta está marcada en verde.</span>';
    }

    document.getElementById('btnNextQuiz').style.display = 'inline-block';

    try {
      await window.supabaseClient.from('quiz_results').insert({
        user_id: this.user.id,
        quiz_id: quizId,
        selected_option_id: optionId,
        is_correct: isCorrect
      });
    } catch (e) {
      console.error("Error saving quiz result", e);
    }
  },

  showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if(!container) return;
    const toast = document.createElement('div');
    toast.className = `toast__item toast--${type} animate-slide-up`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }
};

document.addEventListener('DOMContentLoaded', () => Lesson.init());
