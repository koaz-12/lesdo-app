// Dashboard - LESDO App

const Dashboard = {
  user: null,
  categories: [],
  progress: [],
  totalLessons: 0,
  completedLessons: 0,

  async init() {
    try {
      const session = await Auth.getSession();
      if (!session) {
        window.location.href = 'index.html';
        return;
      }
      this.user = session.user;

      const profile = await Auth.getProfile(this.user.id);
      const name = profile?.display_name || this.user.user_metadata?.full_name || this.user.user_metadata?.username || this.user.email?.split('@')[0] || 'Estudiante';
      document.getElementById('userName').textContent = name;
      document.getElementById('heroName').textContent = name;

      this.setupEventListeners();
      
      await Promise.allSettled([
        this.loadCategories(),
        this.loadProgress()
      ]);

      this.renderProgress();
      this.renderCategories();
      this.renderBadges();
    } catch (error) {
      console.error("Dashboard init error:", error);
      showToast("Error al cargar el panel de control.", "error");
    }
  },

  async loadCategories() {
    if (!window.supabaseClient) {
      this.categories = window.LESDO_MOCK_DATA?.categories || [];
      this.totalLessons = 19;
      return;
    }
    try {
      const { data: categories, error } = await window.supabaseClient
        .from('categories')
        .select(`
          *,
          lessons (count)
        `)
        .order('sort_order');
        
      if (error) {
        // Fallback a consulta simple si la relación lessons aún no tiene caché
        const { data: simpleCats, error: errSimple } = await window.supabaseClient
          .from('categories')
          .select('*')
          .order('sort_order');
        if (errSimple) throw errSimple;
        this.categories = simpleCats || [];
        this.totalLessons = 0;
      } else {
        this.categories = categories || [];
        this.totalLessons = (categories || []).reduce((sum, cat) => {
          const count = Array.isArray(cat.lessons) ? (cat.lessons[0]?.count || 0) : (cat.lessons?.count || 0);
          return sum + count;
        }, 0);
      }
    } catch (error) {
      this.categories = window.LESDO_MOCK_DATA?.categories || [];
      this.totalLessons = 19;
    }
  },

  async loadProgress() {
    if (!window.supabaseClient) {
      const local = JSON.parse(localStorage.getItem('lesdo_progress') || '[]');
      this.progress = local;
      this.completedLessons = local.length;
      return;
    }
    try {
      const { data: progress, error } = await window.supabaseClient
        .from('user_progress')
        .select('*')
        .eq('user_id', this.user.id)
        .eq('completed', true);
        
      if (error) throw error;
      
      this.progress = progress || [];
      this.completedLessons = this.progress.length;
    } catch (error) {
      const local = JSON.parse(localStorage.getItem('lesdo_progress') || '[]');
      this.progress = local;
      this.completedLessons = local.length;
    }
  },

  renderCategories() {
    const grid = document.getElementById('categoriesGrid');
    grid.innerHTML = ''; // Clear skeletons
    
    if (this.categories.length === 0) {
      grid.innerHTML = '<p>No hay categorías disponibles.</p>';
      return;
    }

    this.categories.forEach(category => {
      // Calculate category progress
      const totalInCat = category.lessons[0]?.count || 0;
      // We would need the list of lesson IDs per category to do this perfectly, 
      // or a smarter query. For simplicity, we'll estimate or just show total if we can't easily cross-reference without a join.
      // Better way: we need to join lessons in the progress query or here.
      // Let's assume we want to just link to the category for now.
      
      const card = document.createElement('div');
      card.className = 'card category-card cursor-pointer';
      card.style.borderTop = `4px solid ${category.color || '#ccc'}`;
      if (category.slug === 'alfabeto') {
        card.onclick = () => window.location.href = `alphabet.html`;
      } else {
        card.onclick = () => window.location.href = `lesson.html?category=${category.slug}`;
      }
      
      card.innerHTML = `
        <div style="font-size: 2rem; margin-bottom: 0.5rem;">${category.icon || '📚'}</div>
        <h3>${category.name}</h3>
        <p class="text-secondary text-small">${category.description || ''}</p>
        <div class="category-card__progress" style="margin-top: 1rem;">
          <div class="progress-text">
            <span>${totalInCat} lecciones</span>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  },

  async renderProgress() {
    document.getElementById('statCompleted').textContent = this.completedLessons;
    document.getElementById('statTotal').textContent = this.totalLessons;
    
    const percent = this.totalLessons > 0 ? Math.round((this.completedLessons / this.totalLessons) * 100) : 0;
    document.getElementById('statStreak').textContent = `${percent}%`;
    
    if (this.completedLessons > 0) {
      document.getElementById('continueSection').style.display = 'block';
      document.getElementById('progressPercent').textContent = `${percent}%`;
      document.getElementById('progressFill').style.width = `${percent}%`;
      
      // Try to find a lesson to continue (next uncompleted)
      try {
        // Find last completed lesson, then find its category, then find the next lesson in that category
        // Fallback: just show a generic message linking to first category
        const lastProgress = this.progress[this.progress.length - 1];
        
        const { data: lessonData } = await window.supabaseClient
          .from('lessons')
          .select('id, title, category_id, categories(name, slug)')
          .eq('id', lastProgress.lesson_id)
          .single();
          
        const card = document.getElementById('continueCard');
        if (lessonData) {
            card.className = 'card continue-card cursor-pointer';
            card.onclick = () => window.location.href = `lesson.html?category=${lessonData.categories.slug}`;
            card.innerHTML = `
                <h4>Continuar en: ${lessonData.categories.name}</h4>
                <p class="text-secondary">Haz clic para ir a la categoría.</p>
            `;
        }
      } catch (err) {
        console.error("Error finding next lesson", err);
      }
    }
  },

  renderBadges() {
    const grid = document.getElementById('badgesGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const completed = this.completedLessons;
    const total = this.totalLessons || 19;

    const badges = [
      {
        id: 'first_step',
        title: 'Primer Paso',
        desc: 'Completa tu 1ra lección de señas',
        icon: '🥉',
        unlocked: completed >= 1
      },
      {
        id: 'explorer',
        title: 'Explorador LESDO',
        desc: 'Completa al menos 5 lecciones',
        icon: '🥈',
        unlocked: completed >= 5
      },
      {
        id: 'alphabet',
        title: 'Maestro del Alfabeto',
        desc: 'Aprende las letras y vocales',
        icon: '🤟',
        unlocked: completed >= 5
      },
      {
        id: 'greetings',
        title: 'Experto en Saludos',
        desc: 'Domina los saludos cotidianos',
        icon: '👋',
        unlocked: completed >= 10
      },
      {
        id: 'master',
        title: 'Graduado LESDO',
        desc: '100% de lecciones dominadas',
        icon: '👑',
        unlocked: completed >= total && total > 0
      }
    ];

    const unlockedCount = badges.filter(b => b.unlocked).length;
    const countBadge = document.getElementById('badgesCount');
    if (countBadge) {
      countBadge.textContent = `${unlockedCount}/${badges.length} Desbloqueadas`;
    }

    badges.forEach(b => {
      const card = document.createElement('div');
      card.className = `badge-card ${b.unlocked ? 'badge-card--unlocked' : 'badge-card--locked'}`;
      card.innerHTML = `
        <div class="badge-icon">${b.icon}</div>
        <h4 style="margin-bottom: 0.25rem; font-size: 1rem;">${b.title}</h4>
        <p class="text-small text-secondary" style="font-size: 0.8rem;">${b.desc}</p>
        <span style="display:inline-block; margin-top: 0.5rem; font-size: 0.75rem; font-weight:700; color:${b.unlocked ? 'var(--success)' : 'var(--text-secondary)'};">
          ${b.unlocked ? '✓ Desbloqueada' : '🔒 Bloqueada'}
        </span>
      `;
      grid.appendChild(card);
    });
  },

  setupEventListeners() {
    document.getElementById('btnLogout').addEventListener('click', async () => {
      await Auth.signOut();
    });
    
    document.getElementById('btnLogoutMobile').addEventListener('click', async () => {
      await Auth.signOut();
    });
    
    const navToggle = document.getElementById('navToggle');
    const navMobile = document.getElementById('navMobile');
    
    if(navToggle && navMobile) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMobile.classList.toggle('active');
            navMobile.style.display = navMobile.classList.contains('active') ? 'flex' : 'none';
        });
    }
  }
};

// Helper: Show toast notification
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if(!container) return;
  const toast = document.createElement('div');
  toast.className = `toast__item toast--${type} animate-slide-up`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), APP_CONFIG?.TOAST_DURATION || 3000);
}

document.addEventListener('DOMContentLoaded', () => Dashboard.init());
