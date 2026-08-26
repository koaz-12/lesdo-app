// Configuración de Supabase para LESDO App
// Coloca tu URL real de Supabase cuando la obtengas del dashboard.
const SUPABASE_URL = 'https://hlfgkjxobhwmmmsldljad.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhsZmdranhvYmh3bW1zbGRsamFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc3NjM1NzAsImV4cCI6MjEwMzMzOTU3MH0.kD3DG2_ex-50aKJ28DpsHdQe3cXpsGKlYjp0Uvb0u0w';

// Activa el modo offline/local si la URL de Supabase no es accesible
const OFFLINE_MODE = true;

// Inicializar cliente Supabase solo si no estamos en modo local forzado
if (!OFFLINE_MODE && window.supabase && SUPABASE_URL && !SUPABASE_URL.includes('TU-PROYECTO')) {
  try {
    window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  } catch (e) {
    window.supabaseClient = null;
  }
} else {
  window.supabaseClient = null;
}

// Constantes de la aplicación
const APP_CONFIG = {
  APP_NAME: 'LESDO',
  APP_DESCRIPTION: 'Aprende Lengua de Señas Dominicana',
  VIDEOS_BUCKET: 'lesdo-videos',
  THUMBNAILS_BUCKET: 'lesdo-thumbnails',
  TOAST_DURATION: 4000,
  SEARCH_DEBOUNCE_MS: 300,
};
