// Módulo de Certificado - LESDO App

const Certificate = {
  user: null,

  async init() {
    const session = await Auth.getSession();
    if (!session) {
      window.location.href = 'index.html';
      return;
    }
    this.user = session.user;

    const profile = await Auth.getProfile(this.user.id);
    const fullName = profile?.display_name || this.user.user_metadata?.full_name || this.user.email?.split('@')[0] || 'Estudiante';
    
    // Capitalize properly
    const displayName = fullName.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    document.getElementById('userName').textContent = displayName;
    document.getElementById('certStudentName').textContent = displayName;
    document.getElementById('btnLogout').addEventListener('click', () => Auth.signOut());

    // Format current date in Spanish
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date().toLocaleDateString('es-DO', options);
    document.getElementById('certDate').textContent = today;

    // Generate deterministic verification code from user ID
    const shortId = (this.user.id || 'erick-do').replace(/[^a-zA-Z0-9]/g, '').slice(0, 6).toUpperCase();
    document.getElementById('certCode').textContent = `LESDO-${new Date().getFullYear()}-${shortId || 'DO8974'}`;

    this.setupEventListeners();
  },

  setupEventListeners() {
    document.getElementById('btnPrintCert')?.addEventListener('click', () => {
      window.print();
    });

    document.getElementById('btnShareCert')?.addEventListener('click', async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: 'Mi Certificado LESDO',
            text: `¡He completado mi formación en Lengua de Señas Dominicana (LESDO)!`,
            url: window.location.href,
          });
        } catch (err) {}
      } else {
        navigator.clipboard.writeText(window.location.href);
        this.showToast('¡Enlace del certificado copiado al portapapeles!', 'success');
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

document.addEventListener('DOMContentLoaded', () => Certificate.init());
