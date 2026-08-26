// Datos locales para modo offline / demostración (mismos datos de seed.sql)

window.LESDO_MOCK_DATA = {
  categories: [
    {
      id: '11111111-1111-1111-1111-111111111111',
      name: 'Alfabeto',
      slug: 'alfabeto',
      description: 'Aprende las letras del abecedario en LESDO',
      icon: '🤟',
      color: '#1E88E5',
      sort_order: 1,
      lessons: [{ count: 5 }]
    },
    {
      id: '22222222-2222-2222-2222-222222222222',
      name: 'Saludos y Presentaciones',
      slug: 'saludos',
      description: 'Conoce cómo interactuar y presentarte a los demás',
      icon: '👋',
      color: '#00BFA5',
      sort_order: 2,
      lessons: [{ count: 5 }]
    },
    {
      id: '33333333-3333-3333-3333-333333333333',
      name: 'Días y Meses',
      slug: 'dias-meses',
      description: 'Expresa el tiempo, días de la semana y meses del año',
      icon: '📅',
      color: '#7C4DFF',
      sort_order: 3,
      lessons: [{ count: 4 }]
    },
    {
      id: '44444444-4444-4444-4444-444444444444',
      name: 'Expresiones Comunes',
      slug: 'expresiones',
      description: 'Palabras y frases útiles para el día a día',
      icon: '💬',
      color: '#FF7043',
      sort_order: 4,
      lessons: [{ count: 5 }]
    }
  ],

  lessons: [
    // Alfabeto
    { id: 'a1111111-1111-1111-1111-111111111111', category_id: '11111111-1111-1111-1111-111111111111', title: 'Vocales (A, E, I, O, U)', description: 'Aprende las 5 vocales en LESDO', duration_seconds: 120, sort_order: 1 },
    { id: 'a2222222-2222-2222-2222-222222222222', category_id: '11111111-1111-1111-1111-111111111111', title: 'Consonantes grupo 1 (B-F)', description: 'Primer grupo de consonantes', duration_seconds: 180, sort_order: 2 },
    { id: 'a3333333-3333-3333-3333-333333333333', category_id: '11111111-1111-1111-1111-111111111111', title: 'Consonantes grupo 2 (G-L)', description: 'Segundo grupo de consonantes', duration_seconds: 180, sort_order: 3 },
    { id: 'a4444444-4444-4444-4444-444444444444', category_id: '11111111-1111-1111-1111-111111111111', title: 'Consonantes grupo 3 (M-R)', description: 'Tercer grupo de consonantes', duration_seconds: 180, sort_order: 4 },
    { id: 'a5555555-5555-5555-5555-555555555555', category_id: '11111111-1111-1111-1111-111111111111', title: 'Consonantes grupo 4 (S-Z)', description: 'Cuarto grupo de consonantes', duration_seconds: 180, sort_order: 5 },

    // Saludos
    { id: 'b1111111-1111-1111-1111-111111111111', category_id: '22222222-2222-2222-2222-222222222222', title: 'Hola y Adiós', description: 'Saludos básicos de inicio y despedida', duration_seconds: 90, sort_order: 1 },
    { id: 'b2222222-2222-2222-2222-222222222222', category_id: '22222222-2222-2222-2222-222222222222', title: '¿Cómo estás?', description: 'Preguntar sobre el estado de ánimo', duration_seconds: 100, sort_order: 2 },
    { id: 'b3333333-3333-3333-3333-333333333333', category_id: '22222222-2222-2222-2222-222222222222', title: 'Me llamo...', description: 'Presentar tu nombre', duration_seconds: 110, sort_order: 3 },
    { id: 'b4444444-4444-4444-4444-444444444444', category_id: '22222222-2222-2222-2222-222222222222', title: 'Mucho gusto', description: 'Expresión de cortesía al conocer a alguien', duration_seconds: 80, sort_order: 4 },
    { id: 'b5555555-5555-5555-5555-555555555555', category_id: '22222222-2222-2222-2222-222222222222', title: 'Por favor y Gracias', description: 'Palabras de cortesía esenciales', duration_seconds: 90, sort_order: 5 },

    // Días y Meses
    { id: 'c1111111-1111-1111-1111-111111111111', category_id: '33333333-3333-3333-3333-333333333333', title: 'Días de la semana', description: 'Lunes a Domingo', duration_seconds: 200, sort_order: 1 },
    { id: 'c2222222-2222-2222-2222-222222222222', category_id: '33333333-3333-3333-3333-333333333333', title: 'Meses del año', description: 'Enero a Diciembre', duration_seconds: 300, sort_order: 2 },
    { id: 'c3333333-3333-3333-3333-333333333333', category_id: '33333333-3333-3333-3333-333333333333', title: 'Ayer / Hoy / Mañana', description: 'Conceptos temporales', duration_seconds: 120, sort_order: 3 },
    { id: 'c4444444-4444-4444-4444-444444444444', category_id: '33333333-3333-3333-3333-333333333333', title: 'Las estaciones', description: 'Primavera, Verano, Otoño, Invierno', duration_seconds: 150, sort_order: 4 },

    // Expresiones Comunes
    { id: 'd1111111-1111-1111-1111-111111111111', category_id: '44444444-4444-4444-4444-444444444444', title: 'Sí y No', description: 'Respuestas básicas afirmativas y negativas', duration_seconds: 60, sort_order: 1 },
    { id: 'd2222222-2222-2222-2222-222222222222', category_id: '44444444-4444-4444-4444-444444444444', title: 'Preguntas básicas', description: 'Qué, Quién, Cuándo, Dónde, Por qué', duration_seconds: 180, sort_order: 2 },
    { id: 'd3333333-3333-3333-3333-333333333333', category_id: '44444444-4444-4444-4444-444444444444', title: 'Expresiones de cortesía', description: 'Con permiso, Disculpa, De nada', duration_seconds: 100, sort_order: 3 },
    { id: 'd4444444-4444-4444-4444-444444444444', category_id: '44444444-4444-4444-4444-444444444444', title: 'Números del 1 al 10', description: 'Conteo básico de números', duration_seconds: 150, sort_order: 4 },
    { id: 'd5555555-5555-5555-5555-555555555555', category_id: '44444444-4444-4444-4444-444444444444', title: 'Colores primarios y secundarios', description: 'Rojo, Azul, Amarillo, Verde', duration_seconds: 200, sort_order: 5 }
  ],

  dictionary: [
    { word: 'Hola', definition: 'Saludo común para iniciar una interacción.', category: 'Saludos y Presentaciones', icon: '👋' },
    { word: 'Adiós', definition: 'Despedida común.', category: 'Saludos y Presentaciones', icon: '👋' },
    { word: 'Gracias', definition: 'Expresión de gratitud y agradecimiento.', category: 'Saludos y Presentaciones', icon: '👋' },
    { word: 'Por favor', definition: 'Expresión de cortesía para solicitar algo.', category: 'Saludos y Presentaciones', icon: '👋' },
    { word: 'Buenos días', definition: 'Saludo formal matutino.', category: 'Saludos y Presentaciones', icon: '👋' },
    { word: 'Buenas noches', definition: 'Saludo o despedida nocturna.', category: 'Saludos y Presentaciones', icon: '👋' },
    { word: 'Sí', definition: 'Afirmación o acuerdo.', category: 'Expresiones Comunes', icon: '💬' },
    { word: 'No', definition: 'Negación o desacuerdo.', category: 'Expresiones Comunes', icon: '💬' },
    { word: 'Lunes', definition: 'Primer día de la semana laboral.', category: 'Días y Meses', icon: '📅' },
    { word: 'Martes', definition: 'Segundo día de la semana.', category: 'Días y Meses', icon: '📅' },
    { word: 'Rojo', definition: 'Color primario cálido.', category: 'Expresiones Comunes', icon: '💬' },
    { word: 'Azul', definition: 'Color primario frío.', category: 'Expresiones Comunes', icon: '💬' },
    { word: 'Uno', definition: 'Número 1.', category: 'Expresiones Comunes', icon: '💬' },
    { word: 'Dos', definition: 'Número 2.', category: 'Expresiones Comunes', icon: '💬' },
    { word: 'Tres', definition: 'Número 3.', category: 'Expresiones Comunes', icon: '💬' }
  ],

  quizzes: [
    {
      id: 'e1111111-1111-1111-1111-111111111111',
      lesson_id: 'a1111111-1111-1111-1111-111111111111',
      question_text: '¿Qué vocal se muestra en la seña?',
      quiz_options: [
        { id: '1', option_text: 'Vocal A', is_correct: true, sort_order: 1 },
        { id: '2', option_text: 'Vocal E', is_correct: false, sort_order: 2 },
        { id: '3', option_text: 'Vocal I', is_correct: false, sort_order: 3 },
        { id: '4', option_text: 'Vocal O', is_correct: false, sort_order: 4 }
      ]
    },
    {
      id: 'e2222222-2222-2222-2222-222222222222',
      lesson_id: 'b1111111-1111-1111-1111-111111111111',
      question_text: '¿Qué saludo representa esta seña?',
      quiz_options: [
        { id: '1', option_text: 'Adiós', is_correct: false, sort_order: 1 },
        { id: '2', option_text: 'Hola', is_correct: true, sort_order: 2 },
        { id: '3', option_text: 'Gracias', is_correct: false, sort_order: 3 },
        { id: '4', option_text: 'Por favor', is_correct: false, sort_order: 4 }
      ]
    }
  ]
};
