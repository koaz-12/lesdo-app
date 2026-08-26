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

  renderLesson() {
    const container = document.getElementById('contentArea');
    
    let html = `
      <div class="breadcrumb">
        <a href="dashboard.html">Inicio</a> &gt; 
        <a href="lesson.html?category=${this.category.slug}">${this.category.name}</a> &gt; 
        ${this.currentLesson.title}
      </div>
      
      <div class="card" style="padding: 2rem;">
        <h1>${this.currentLesson.title}</h1>
        <p class="text-secondary" style="margin-bottom: 1.5rem;">${this.currentLesson.description}</p>
        
        <div class="lesson-video-container">
          <video src="${this.currentLesson.video_url || ''}" controls poster="${this.currentLesson.thumbnail_url || ''}"></video>
        </div>
        
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div id="statusArea">
            ${this.isCompleted 
              ? '<span class="completed-badge" style="font-size:1rem; padding:0.5rem 1rem;">✓ Lección Completada</span>' 
              : `<button class="btn btn-primary" id="btnCompleteLesson">Marcar como completada</button>`}
          </div>
        </div>
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

    // Setup navigation (naive, assumes we can find prev/next by querying all lessons in category)
    this.setupNavigation();

    if (this.quizzes.length > 0) {
      this.currentQuizIndex = 0;
      this.renderQuiz();
    }
  },

  async setupNavigation() {
    const { data: allLessons } = await window.supabaseClient
      .from('lessons')
      .select('id')
      .eq('category_id', this.category.id)
      .order('sort_order');
      
    if (allLessons) {
      const idx = allLessons.findIndex(l => l.id === this.currentLesson.id);
      
      const btnPrev = document.getElementById('btnPrev');
      if (idx > 0) {
        btnPrev.onclick = () => window.location.href = `lesson.html?lesson=${allLessons[idx-1].id}`;
      } else {
        btnPrev.style.visibility = 'hidden';
      }
      
      const btnNext = document.getElementById('btnNext');
      if (idx < allLessons.length - 1) {
        btnNext.onclick = () => window.location.href = `lesson.html?lesson=${allLessons[idx+1].id}`;
      } else {
        btnNext.textContent = 'Terminar Categoría';
        btnNext.onclick = () => window.location.href = `lesson.html?category=${this.category.slug}`;
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
