// Módulo de Autenticación - LESDO App

const translateError = (errorMsg) => {
  if (!errorMsg) return 'Error desconocido.';
  const msg = errorMsg.toLowerCase();
  if (msg.includes('invalid login') || msg.includes('invalid credential')) {
    return 'Usuario o contraseña incorrectos. Si no has creado tu usuario aún, ve a la pestaña "Registrarse" o ejecuta el script SQL en Supabase.';
  }
  if (msg.includes('already registered')) {
    return 'Este usuario o correo ya está registrado.';
  }
  if (msg.includes('at least 6') || msg.includes('password should be')) {
    return 'La contraseña debe tener al menos 6 caracteres.';
  }
  if (msg.includes('email not confirmed')) {
    return 'El correo no está confirmado en Supabase. Puedes desactivar "Confirm email" en Supabase > Auth > Providers o crear el usuario con el script SQL provisto.';
  }
  return errorMsg;
};

const Auth = {
  // Helper para obtener el cliente de Supabase
  getClient() {
    return window.supabaseClient;
  },

  // Helper para normalizar identificador (usuario o correo)
  normalizeIdentifier(identifier) {
    if (!identifier) return '';
    const clean = identifier.trim().toLowerCase();
    return clean.includes('@') ? clean : `${clean}@lesdo.app`;
  },

  // Registrar nuevo usuario
  async signUp(identifier, password, displayName) {
    if (!this.getClient()) {
      const session = this.loginOffline(displayName || identifier);
      return { user: session.user, error: null };
    }
    try {
      const email = this.normalizeIdentifier(identifier);
      const username = identifier.includes('@') ? identifier.split('@')[0] : identifier.trim();
      const { data, error } = await this.getClient().auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: displayName || username,
            username: username
          }
        }
      });
      
      if (error) {
        return { user: null, error: translateError(error.message) };
      }
      
      return { user: data.user, error: null };
    } catch (err) {
      console.warn("Supabase auth offline fallback:", err);
      const session = this.loginOffline(displayName || identifier);
      return { user: session.user, error: null };
    }
  },

  // Iniciar sesión con usuario o correo
  async signIn(identifier, password) {
    if (!this.getClient()) {
      const session = this.loginOffline(identifier);
      return { user: session.user, error: null };
    }
    try {
      const email = this.normalizeIdentifier(identifier);
      const { data, error } = await this.getClient().auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        return { user: null, error: translateError(error.message) };
      }

      return { user: data.user, error: null };
    } catch (err) {
      console.warn("Supabase auth offline fallback:", err);
      const session = this.loginOffline(identifier);
      return { user: session.user, error: null };
    }
  },

  // Iniciar sesión en modo local / demo offline
  loginOffline(identifier = 'Erick') {
    const clean = identifier ? identifier.trim() : 'Erick';
    const name = clean.includes('@') ? clean.split('@')[0] : clean;
    const session = {
      user: {
        id: 'f0000000-0000-0000-0000-000000000002',
        email: `${name.toLowerCase()}@lesdo.app`,
        user_metadata: {
          full_name: name.charAt(0).toUpperCase() + name.slice(1),
          username: name.toLowerCase()
        }
      }
    };
    localStorage.setItem('lesdo_offline_session', JSON.stringify(session));
    return session;
  },

  // Cerrar sesión
  async signOut() {
    localStorage.removeItem('lesdo_offline_session');
    try {
      if (this.getClient()) await this.getClient().auth.signOut();
    } catch (e) {}
    window.location.href = 'index.html';
  },

  // Obtener usuario actual
  async getUser() {
    const session = await this.getSession();
    return session?.user || null;
  },

  // Obtener sesión actual (con fallback a offline si hay bloqueo de red)
  async getSession() {
    try {
      if (this.getClient()) {
        const { data } = await this.getClient().auth.getSession();
        if (data?.session) return data.session;
      }
    } catch (e) {
      console.warn("Supabase network error, checking local session:", e);
    }
    const local = localStorage.getItem('lesdo_offline_session');
    if (local) {
      try { return JSON.parse(local); } catch (e) {}
    }
    return null;
  },

  // Verificar si está autenticado, redirigir si no
  // Retorna el objeto user (no session) para uso consistente
  async requireAuth() {
    const session = await this.getSession();
    if (!session) {
      window.location.href = 'index.html';
      return null;
    }
    return session.user;
  },

  // Redirigir si ya está autenticado (para página de login)
  async redirectIfAuthenticated() {
    const session = await this.getSession();
    if (session) {
      window.location.href = 'dashboard.html';
    }
  },

  // Escuchar cambios de estado de auth
  onAuthStateChange(callback) {
    this.getClient().auth.onAuthStateChange((event, session) => {
      callback(event, session);
    });
  },

  // Obtener perfil del usuario
  async getProfile(userId) {
    if (!this.getClient()) {
      const session = await this.getSession();
      return {
        id: userId || session?.user?.id || 'f0000000-0000-0000-0000-000000000002',
        display_name: session?.user?.user_metadata?.full_name || 'Erick'
      };
    }
    try {
      if (!userId) {
        const user = await this.getUser();
        if (!user) return null;
        userId = user.id;
      }
      const { data, error } = await this.getClient()
        .from('user_profiles')
        .select('*')
        .eq('id', userId)
        .single();
        
      if (error) throw error;
      return data;
    } catch (error) {
      console.warn('Using local profile fallback:', error);
      const session = await this.getSession();
      return {
        id: userId || session?.user?.id || 'f0000000-0000-0000-0000-000000000002',
        display_name: session?.user?.user_metadata?.full_name || 'Erick'
      };
    }
  },

  // Actualizar perfil
  async updateProfile(userId, updates) {
    try {
      const { data, error } = await this.getClient()
        .from('user_profiles')
        .update(updates)
        .eq('id', userId)
        .select()
        .single();
        
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error updating profile:', error);
      return null;
    }
  }
};
