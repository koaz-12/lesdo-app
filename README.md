# 🤟 LESDO App — Plataforma de Aprendizaje de Lengua de Señas Dominicana

Una aplicación web moderna, accesible y rápida diseñada para enseñar la Lengua de Señas Dominicana (LESDO).

---

## 🚀 Características
- **Módulos Temáticos**: Alfabeto, Saludos y Presentaciones, Días y Meses, Expresiones Comunes.
- **Diccionario Interactivo**: Buscador en tiempo real con definiciones y categorías.
- **Evaluación y Quizzes**: Cuestionarios interactivos para evaluar retención de señas.
- **Seguimiento de Progreso**: Registro de lecciones completadas y estadísticas de avance.
- **Arquitectura Dual**: Funciona tanto con backend en la nube (**Supabase**) como en **Modo Local/Offline**.

---

## 🛠️ Tecnologías
- **Frontend**: HTML5 semántico, CSS3 puro con variables y tema oscuro, Vanilla JavaScript (ES6+).
- **Backend / Base de Datos**: Supabase (PostgreSQL + Auth + Storage).
- **Despliegue**: Compatible con Vercel, Netlify, GitHub Pages o cualquier servidor web estático.

---

## 💻 Ejecutar Localmente

1. Clona o descarga este repositorio.
2. Inicia un servidor web local:
```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx serve .
```
3. Abre en tu navegador: [http://localhost:8000](http://localhost:8000)

---

## ☁️ Despliegue en Producción

### Opción 1: Vercel (Recomendado)
1. Ve a [vercel.com](https://vercel.com) e inicia sesión con GitHub.
2. Haz clic en **"Add New Project"** e importa este repositorio.
3. Haz clic en **"Deploy"**.

### Opción 2: Netlify
1. Ve a [netlify.com](https://netlify.com).
2. Arrastra la carpeta del proyecto a la sección **"Drop your site folder here"** (Deploy manual sin comandos).
3. ¡Tu sitio estará en línea en 5 segundos!
