// Datos enriquecidos de LESDO (Lengua de Señas Dominicana) con Ilustraciones y Gestos Reales

const getLetterImg = (l) => `https://commons.wikimedia.org/wiki/Special:FilePath/Sign_language_${l.toUpperCase()}.svg`;

window.LESDO_MOCK_DATA = {
  categories: [
    {
      id: '11111111-1111-1111-1111-111111111111',
      name: 'Alfabeto',
      slug: 'alfabeto',
      description: 'Aprende el abecedario dactilológico completo en LESDO',
      icon: '🤟',
      color: '#1E88E5',
      sort_order: 1,
      lessons: [{ count: 5 }]
    },
    {
      id: '22222222-2222-2222-2222-222222222222',
      name: 'Saludos y Presentaciones',
      slug: 'saludos',
      description: 'Conoce cómo interactuar, presentarte y saludar en LESDO',
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
      description: 'Palabras cotidianas, cortesía y preguntas esenciales',
      icon: '💬',
      color: '#FF7043',
      sort_order: 4,
      lessons: [{ count: 5 }]
    }
  ],

  lessons: [
    // ALFABETO
    {
      id: 'a1111111-1111-1111-1111-111111111111',
      category_id: '11111111-1111-1111-1111-111111111111',
      title: 'Las 5 Vocales (A, E, I, O, U)',
      description: 'Fundamento esencial del abecedario dactilológico dominicano.',
      duration_seconds: 120,
      sort_order: 1,
      guide: [
        { sign: 'A', image_url: getLetterImg('A'), hand: 'Puño cerrado con el pulgar apoyado en el lateral del dedo índice apuntando hacia arriba.', tip: 'La palma debe mirar siempre hacia el frente.' },
        { sign: 'E', image_url: getLetterImg('E'), hand: 'Dedos doblados hacia abajo tocando ligeramente la punta del pulgar.', tip: 'Parece una pequeña garra relajada.' },
        { sign: 'I', image_url: getLetterImg('I'), hand: 'Puño cerrado levantando únicamente el dedo meñique hacia arriba.', tip: 'El meñique simboliza el palito de la i.' },
        { sign: 'O', image_url: getLetterImg('O'), hand: 'Todos los dedos curvados uniéndose con el pulgar para formar un círculo perfecto.', tip: 'Forma la letra O con toda la mano.' },
        { sign: 'U', image_url: getLetterImg('U'), hand: 'Dedos índice y medio extendidos y juntos hacia arriba; pulgar sujeta anular y meñique.', tip: 'Mantén los dos dedos firmemente unidos.' }
      ]
    },
    {
      id: 'a2222222-2222-2222-2222-222222222222',
      category_id: '11111111-1111-1111-1111-111111111111',
      title: 'Consonantes grupo 1 (B, C, D, F)',
      description: 'Primer bloque de consonantes estructurales.',
      duration_seconds: 180,
      sort_order: 2,
      guide: [
        { sign: 'B', image_url: getLetterImg('B'), hand: 'Cuatro dedos extendidos y juntos hacia arriba con el pulgar doblado sobre la palma.', tip: 'Palma hacia el frente.' },
        { sign: 'C', image_url: getLetterImg('C'), hand: 'Mano curvada en forma de media luna formando la letra C lateral.', tip: 'La apertura mira hacia tu lado opuesto.' },
        { sign: 'D', image_url: getLetterImg('D'), hand: 'Dedo índice apuntando hacia arriba, los demás dedos forman un círculo con el pulgar.', tip: 'El índice hace de asta de la D.' },
        { sign: 'F', image_url: getLetterImg('F'), hand: 'Índice y pulgar se tocan por las yemas formando un círculo; los otros tres dedos extendidos arriba.', tip: 'Similar al símbolo de OK.' }
      ]
    },
    {
      id: 'a3333333-3333-3333-3333-333333333333',
      category_id: '11111111-1111-1111-1111-111111111111',
      title: 'Consonantes grupo 2 (G, H, J, K, L)',
      description: 'Consonantes con orientación horizontal y movimiento.',
      duration_seconds: 180,
      sort_order: 3,
      guide: [
        { sign: 'G', image_url: getLetterImg('G'), hand: 'Índice y pulgar paralelos apuntando en horizontal hacia el lado opuesto.', tip: 'Como midiendo algo pequeño con dos dedos.' },
        { sign: 'H', image_url: getLetterImg('H'), hand: 'Índice y medio extendidos juntos en posición horizontal.', tip: 'Dos dedos apuntando hacia el lateral.' },
        { sign: 'J', image_url: getLetterImg('J'), hand: 'Con la posición de la I (meñique arriba), dibuja una curva en el aire hacia abajo.', tip: 'Traza la colita de la letra J en el aire.' },
        { sign: 'K', image_url: getLetterImg('K'), hand: 'Índice arriba, medio diagonal hacia adelante, pulgar apoyado entre ambos.', tip: 'Forma una letra K con los dedos.' },
        { sign: 'L', image_url: getLetterImg('L'), hand: 'Índice extendido hacia arriba y pulgar horizontal formando un ángulo de 90°.', tip: 'Forma una L clara.' }
      ]
    },
    {
      id: 'a4444444-4444-4444-4444-444444444444',
      category_id: '11111111-1111-1111-1111-111111111111',
      title: 'Consonantes grupo 3 (M, N, Ñ, P, Q, R)',
      description: 'Consonantes con pliegues dactilares y movimientos distintivos.',
      duration_seconds: 180,
      sort_order: 4,
      guide: [
        { sign: 'M', image_url: getLetterImg('M'), hand: 'Tres dedos (índice, medio y anular) doblados sobre el pulgar apuntando abajo.', tip: 'Representa las 3 patitas de la M.' },
        { sign: 'N', image_url: getLetterImg('N'), hand: 'Dos dedos (índice y medio) doblados sobre el pulgar apuntando abajo.', tip: 'Representa las 2 patitas de la N.' },
        { sign: 'Ñ', image_url: getLetterImg('N'), hand: 'Misma posición que la N, pero moviendo la mano suavemente de lado a lado.', tip: 'El movimiento representa la virgulilla (~).' },
        { sign: 'P', image_url: getLetterImg('P'), hand: 'Posición de la K pero con la muñeca inclinada apuntando hacia abajo.', tip: 'Dedo medio hacia abajo.' },
        { sign: 'Q', image_url: getLetterImg('Q'), hand: 'Posición de la G apuntando directamente hacia el suelo.', tip: 'Índice y pulgar hacia abajo.' },
        { sign: 'R', image_url: getLetterImg('R'), hand: 'Cruzar el dedo medio sobre el dedo índice extendido.', tip: 'Como cruzar los dedos para desear suerte.' }
      ]
    },
    {
      id: 'a5555555-5555-5555-5555-555555555555',
      category_id: '11111111-1111-1111-1111-111111111111',
      title: 'Consonantes grupo 4 (S, T, V, W, X, Y, Z)',
      description: 'Último grupo del alfabeto con trazos finales.',
      duration_seconds: 180,
      sort_order: 5,
      guide: [
        { sign: 'S', image_url: getLetterImg('S'), hand: 'Puño cerrado con el pulgar cruzado por encima de los dedos.', tip: 'A diferencia de la A, el pulgar va al frente.' },
        { sign: 'T', image_url: getLetterImg('T'), hand: 'Pulgar metido entre el dedo índice y medio en un puño cerrado.', tip: 'El pulgar asoma entre los dos primeros dedos.' },
        { sign: 'V', image_url: getLetterImg('V'), hand: 'Índice y medio extendidos y separados formando una V (paz).', tip: 'Palma hacia el frente.' },
        { sign: 'W', image_url: getLetterImg('W'), hand: 'Índice, medio y anular extendidos y separados formando una W.', tip: 'Tres dedos separados.' },
        { sign: 'X', image_url: getLetterImg('X'), hand: 'Dedo índice encorvado en forma de gancho apuntando hacia arriba.', tip: 'Como un garfio.' },
        { sign: 'Y', image_url: getLetterImg('Y'), hand: 'Pulgar y meñique extendidos, los tres dedos centrales cerrados (shaka).', tip: 'Forma de Y.' },
        { sign: 'Z', image_url: getLetterImg('Z'), hand: 'Con el dedo índice extendido, dibuja la letra Z en el aire.', tip: 'Un trazo claro de 3 líneas en el aire.' }
      ]
    },

    // SALUDOS
    {
      id: 'b1111111-1111-1111-1111-111111111111',
      category_id: '22222222-2222-2222-2222-222222222222',
      title: 'Hola y Adiós',
      description: 'Apertura y cierre de cualquier interacción comunicativa.',
      duration_seconds: 90,
      sort_order: 1,
      guide: [
        { sign: 'Hola', icon: '👋', hand: 'Mano abierta a la altura de la sien, se desplaza suavemente hacia afuera.', tip: 'Acompaña siempre con una sonrisa y contacto visual.' },
        { sign: 'Adiós', icon: '👋', hand: 'Mano abierta a la altura del hombro, doblando los cuatro dedos hacia la palma en vaivén.', tip: 'Gesto universal de despedida.' }
      ]
    },
    {
      id: 'b2222222-2222-2222-2222-222222222222',
      category_id: '22222222-2222-2222-2222-222222222222',
      title: '¿Cómo estás? y Bien / Mal',
      description: 'Preguntar por el estado de ánimo y responder.',
      duration_seconds: 100,
      sort_order: 2,
      guide: [
        { sign: '¿Cómo estás?', icon: '🤔', hand: 'Ambas manos en puño con pulgares arriba giran hacia afuera abriéndose con expresión inquisitiva.', tip: 'La expresión de cejas juntas indica pregunta.' },
        { sign: 'Bien', icon: '👍', hand: 'Punta de los dedos tocan la barbilla y se extienden hacia adelante abriendo la palma hacia arriba.', tip: 'Expresión facial alegre y positiva.' },
        { sign: 'Mal', icon: '👎', hand: 'Mano en la barbilla que baja y gira bruscamente con la palma hacia abajo.', tip: 'Expresión facial seria o de disgusto.' }
      ]
    },
    {
      id: 'b3333333-3333-3333-3333-333333333333',
      category_id: '22222222-2222-2222-2222-222222222222',
      title: 'Mi Nombre es...',
      description: 'Cómo presentarte y pedir el nombre de otros en LESDO.',
      duration_seconds: 110,
      sort_order: 3,
      guide: [
        { sign: 'Nombre', icon: '🏷️', image_url: getLetterImg('H'), hand: 'Dedos índice y medio de ambas manos en posición H se tocan dos veces en forma de cruz.', tip: 'Luego deletreas tu nombre con el alfabeto dactilológico.' },
        { sign: 'Yo / Mí', icon: '👤', hand: 'Señalar con el dedo índice hacia el centro de tu pecho.', tip: 'Contacto suave sobre el pecho.' }
      ]
    },
    {
      id: 'b4444444-4444-4444-4444-444444444444',
      category_id: '22222222-2222-2222-2222-222222222222',
      title: 'Mucho Gusto / Encantado',
      description: 'Cortesía social al conocer a una nueva persona.',
      duration_seconds: 80,
      sort_order: 4,
      guide: [
        { sign: 'Mucho Gusto', icon: '🤝', hand: 'Mano derecha abierta se coloca plana sobre el pecho y realiza movimientos circulares suaves.', tip: 'Indica placer o agrado desde el corazón.' }
      ]
    },
    {
      id: 'b5555555-5555-5555-5555-555555555555',
      category_id: '22222222-2222-2222-2222-222222222222',
      title: 'Por favor, Gracias y De Nada',
      description: 'Las normas de cortesía más importantes en LESDO.',
      duration_seconds: 90,
      sort_order: 5,
      guide: [
        { sign: 'Por favor', icon: '🤲', hand: 'Palma abierta sobre el pecho realizando un círculo en sentido de las agujas del reloj.', tip: 'Expresión amable y suave inclinación de cabeza.' },
        { sign: 'Gracias', icon: '🙏', hand: 'Puntas de los dedos en la barbilla se extienden al frente hacia la otra persona.', tip: 'Como enviando un agradecimiento desde la boca.' },
        { sign: 'De nada', icon: '👌', hand: 'Mano en letra D o abierta frente al cuerpo con movimiento hacia el exterior.', tip: 'Acompañado de gesto afable.' }
      ]
    },

    // DÍAS Y MESES
    {
      id: 'c1111111-1111-1111-1111-111111111111',
      category_id: '33333333-3333-3333-3333-333333333333',
      title: 'Días de la Semana (Lunes a Domingo)',
      description: 'Expresar días y planificar actividades.',
      duration_seconds: 200,
      sort_order: 1,
      guide: [
        { sign: 'Lunes', image_url: getLetterImg('L'), hand: 'Mano en letra L realizando un pequeño círculo en el aire en sentido horario.', tip: 'L de Lunes en círculo.' },
        { sign: 'Martes', image_url: getLetterImg('M'), hand: 'Mano en letra M realizando un pequeño círculo en el aire.', tip: 'M de Martes en círculo.' },
        { sign: 'Miércoles', image_url: getLetterImg('W'), hand: 'Mano en letra W o M realizando un círculo suave.', tip: 'Representa el día central de la semana.' },
        { sign: 'Jueves', image_url: getLetterImg('J'), hand: 'Mano en letra J trazando la J en el aire.', tip: 'Movimiento descendente con giro.' },
        { sign: 'Viernes', image_url: getLetterImg('V'), hand: 'Mano en letra V realizando un círculo en el aire.', tip: 'V de Viernes.' },
        { sign: 'Sábado', image_url: getLetterImg('S'), hand: 'Mano en letra S girando frente a la boca/barbilla.', tip: 'Puño cerrado en S.' },
        { sign: 'Domingo', icon: '⛪', hand: 'Ambas manos abiertas con palmas hacia el frente haciendo círculos hacia afuera.', tip: 'Representa el día de descanso y reunión.' }
      ]
    },
    {
      id: 'c2222222-2222-2222-2222-222222222222',
      category_id: '33333333-3333-3333-3333-333333333333',
      title: 'Meses del Año',
      description: 'Estaciones temporales y calendario dominicano.',
      duration_seconds: 300,
      sort_order: 2,
      guide: [
        { sign: 'Mes', icon: '📅', hand: 'Índice de la mano izquierda extendido hacia arriba; índice derecho desciende sobre él.', tip: 'Simula las hojas del calendario cayendo.' },
        { sign: 'Año', icon: '🌍', hand: 'Ambos puños cerrados; la mano dominante gira en órbita completa alrededor de la otra mano.', tip: 'Representa la Tierra girando alrededor del sol.' }
      ]
    },
    {
      id: 'c3333333-3333-3333-3333-333333333333',
      category_id: '33333333-3333-3333-3333-333333333333',
      title: 'Ayer, Hoy y Mañana',
      description: 'Línea de tiempo espacial: pasado (atrás), presente (abajo), futuro (adelante).',
      duration_seconds: 120,
      sort_order: 3,
      guide: [
        { sign: 'Hoy / Ahora', image_url: getLetterImg('Y'), hand: 'Ambas manos en letra Y descienden juntas frente al torso.', tip: 'Movimiento hacia abajo = momento presente.' },
        { sign: 'Ayer', image_url: getLetterImg('A'), hand: 'Mano en letra A toca la mejilla y se mueve hacia atrás sobre el hombro.', tip: 'Hacia atrás = pasado.' },
        { sign: 'Mañana', icon: '🌅', hand: 'Pulgar apoyado en la mejilla se mueve hacia adelante con un giro.', tip: 'Hacia adelante = futuro.' }
      ]
    },
    {
      id: 'c4444444-4444-4444-4444-444444444444',
      category_id: '33333333-3333-3333-3333-333333333333',
      title: 'Las Horas y el Tiempo',
      description: 'Cómo indicar la hora y lapsos de tiempo.',
      duration_seconds: 150,
      sort_order: 4,
      guide: [
        { sign: 'Hora / Reloj', icon: '⌚', hand: 'Dedo índice derecho toca dos veces la muñeca izquierda donde se usa el reloj.', tip: 'Gesto universal del reloj.' },
        { sign: 'Minuto', image_url: getLetterImg('L'), hand: 'Mano derecha en letra L gira un pequeño ángulo sobre la palma izquierda.', tip: 'Simula el movimiento del minutero.' }
      ]
    },

    // EXPRESIONES COMUNES
    {
      id: 'd1111111-1111-1111-1111-111111111111',
      category_id: '44444444-4444-4444-4444-444444444444',
      title: 'Sí y No',
      description: 'Respuestas básicas afirmativas y negativas.',
      duration_seconds: 60,
      sort_order: 1,
      guide: [
        { sign: 'Sí', image_url: getLetterImg('S'), hand: 'Mano en puño (letra S) asiente verticalmente hacia arriba y abajo.', tip: 'Como una cabeza diciendo que sí.' },
        { sign: 'No', icon: '❌', hand: 'Juntar rápidamente los dedos índice y medio con el pulgar como un pico cerrándose.', tip: 'Acompañar con leve negación de cabeza.' }
      ]
    },
    {
      id: 'd2222222-2222-2222-2222-222222222222',
      category_id: '44444444-4444-4444-4444-444444444444',
      title: 'Preguntas Clave (Qué, Dónde, Cuándo, Quién)',
      description: 'Palabras interrogativas indispensables en LESDO.',
      duration_seconds: 180,
      sort_order: 2,
      guide: [
        { sign: '¿Qué?', icon: '🤷', hand: 'Ambas manos abiertas con palmas arriba se mueven de lado a lado con cejas fruncidas.', tip: 'Gesto natural de duda.' },
        { sign: '¿Dónde?', icon: '📍', hand: 'Dedo índice extendido hacia arriba se mueve de lado a lado como un péndulo.', tip: 'Expresión facial de búsqueda.' },
        { sign: '¿Quién?', icon: '👤', hand: 'Pulgar colocado en la barbilla con el dedo índice doblándose y estirándose.', tip: 'Como señalando a alguien.' }
      ]
    },
    {
      id: 'd3333333-3333-3333-3333-333333333333',
      category_id: '44444444-4444-4444-4444-444444444444',
      title: 'Disculpa y Con Permiso',
      description: 'Normas de cortesía y espacio personal.',
      duration_seconds: 100,
      sort_order: 3,
      guide: [
        { sign: 'Disculpa / Perdón', image_url: getLetterImg('A'), hand: 'Mano en puño (letra A o S) frota en círculos sobre el centro del pecho.', tip: 'Expresión de arrepentimiento sincero.' },
        { sign: 'Con permiso', icon: '🚶', hand: 'Los cuatro dedos de la mano dominante rozan hacia afuera la palma de la otra mano dos veces.', tip: 'Pidiendo paso o atención amablemente.' }
      ]
    },
    {
      id: 'd4444444-4444-4444-4444-444444444444',
      category_id: '44444444-4444-4444-4444-444444444444',
      title: 'Números del 1 al 10',
      description: 'Conteo cardinal en lengua de señas.',
      duration_seconds: 150,
      sort_order: 4,
      guide: [
        { sign: '1 al 5', icon: '🖐️', hand: '1 (Índice), 2 (Índice y medio), 3 (Pulgar, índice y medio), 4 (Cuatro dedos), 5 (Mano abierta).', tip: 'Nota: En LESDO el 3 incluye el pulgar.' },
        { sign: '6 al 10', icon: '🔟', hand: '6 (Pulgar toca meñique), 7 (Pulgar toca anular), 8 (Pulgar toca medio), 9 (Pulgar toca índice), 10 (Pulgar arriba sacudiéndose).', tip: 'Palma hacia el frente.' }
      ]
    },
    {
      id: 'd5555555-5555-5555-5555-555555555555',
      category_id: '44444444-4444-4444-4444-444444444444',
      title: 'Colores Básicos (Rojo, Azul, Amarillo, Verde)',
      description: 'Identificación visual de colores en señas dominicanas.',
      duration_seconds: 200,
      sort_order: 5,
      guide: [
        { sign: 'Rojo', icon: '🔴', hand: 'Dedo índice toca el labio inferior y desciende hacia la barbilla.', tip: 'Asociado al color de los labios.' },
        { sign: 'Azul', image_url: getLetterImg('A'), hand: 'Mano en letra A sacudiéndose suavemente hacia los lados.', tip: 'Letra A en movimiento.' },
        { sign: 'Amarillo', image_url: getLetterImg('Y'), hand: 'Mano en letra Y sacudiéndose suavemente hacia los lados.', tip: 'Y de Yellow / Amarillo.' },
        { sign: 'Verde', image_url: getLetterImg('V'), hand: 'Mano en letra V sacudiéndose suavemente hacia los lados.', tip: 'V de Verde en movimiento.' }
      ]
    }
  ],

  dictionary: [
  {
    "word": "Hola",
    "icon": "👋",
    "definition": "Mano abierta a la altura de la sien con movimiento hacia el exterior.",
    "category": "Saludos y Presentaciones"
  },
  {
    "word": "Adiós",
    "icon": "👋",
    "definition": "Mano abierta a la altura del hombro moviendo los dedos en vaivén.",
    "category": "Saludos y Presentaciones"
  },
  {
    "word": "Gracias",
    "icon": "🙏",
    "definition": "Puntas de los dedos tocan la barbilla y se extienden al frente.",
    "category": "Saludos y Presentaciones"
  },
  {
    "word": "Por favor",
    "icon": "🤲",
    "definition": "Palma abierta sobre el pecho realizando un suave círculo en sentido horario.",
    "category": "Saludos y Presentaciones"
  },
  {
    "word": "Buenos días",
    "icon": "🌅",
    "definition": "Seña de \"Bueno\" (mano en barbilla al frente) + seña de \"Sol / Día\" saliendo.",
    "category": "Saludos y Presentaciones"
  },
  {
    "word": "Buenas noches",
    "icon": "🌙",
    "definition": "Seña de \"Bueno\" + mano dominante baja sobre la otra simulando la puesta del sol.",
    "category": "Saludos y Presentaciones"
  },
  {
    "word": "Mucho gusto",
    "icon": "🤝",
    "definition": "Mano derecha abierta plana sobre el pecho realizando un círculo suave.",
    "category": "Saludos y Presentaciones"
  },
  {
    "word": "Nombre",
    "image_url": "https://commons.wikimedia.org/wiki/Special:FilePath/Sign_language_H.svg",
    "icon": "🏷️",
    "definition": "Dedos índice y medio de ambas manos en H se tocan en cruz dos veces.",
    "category": "Saludos y Presentaciones"
  },
  {
    "word": "Letra A",
    "image_url": "https://commons.wikimedia.org/wiki/Special:FilePath/Sign_language_A.svg",
    "icon": "🅰️",
    "definition": "Puño cerrado con el pulgar apoyado en el lateral del índice apuntando arriba.",
    "category": "Alfabeto"
  },
  {
    "word": "Letra E",
    "image_url": "https://commons.wikimedia.org/wiki/Special:FilePath/Sign_language_E.svg",
    "icon": "📧",
    "definition": "Dedos doblados hacia abajo tocando ligeramente la punta del pulgar.",
    "category": "Alfabeto"
  },
  {
    "word": "Letra I",
    "image_url": "https://commons.wikimedia.org/wiki/Special:FilePath/Sign_language_I.svg",
    "icon": "ℹ️",
    "definition": "Puño cerrado levantando únicamente el dedo meñique hacia arriba.",
    "category": "Alfabeto"
  },
  {
    "word": "Letra O",
    "image_url": "https://commons.wikimedia.org/wiki/Special:FilePath/Sign_language_O.svg",
    "icon": "⭕",
    "definition": "Todos los dedos curvados uniéndose con el pulgar para formar un círculo.",
    "category": "Alfabeto"
  },
  {
    "word": "Letra U",
    "image_url": "https://commons.wikimedia.org/wiki/Special:FilePath/Sign_language_U.svg",
    "icon": "⛎",
    "definition": "Dedos índice y medio extendidos y juntos hacia arriba.",
    "category": "Alfabeto"
  },
  {
    "word": "Lunes",
    "image_url": "https://commons.wikimedia.org/wiki/Special:FilePath/Sign_language_L.svg",
    "icon": "📅",
    "definition": "Mano en letra L realizando un pequeño círculo en el aire.",
    "category": "Días y Meses"
  },
  {
    "word": "Martes",
    "image_url": "https://commons.wikimedia.org/wiki/Special:FilePath/Sign_language_M.svg",
    "icon": "📅",
    "definition": "Mano en letra M realizando un pequeño círculo en el aire.",
    "category": "Días y Meses"
  },
  {
    "word": "Miércoles",
    "image_url": "https://commons.wikimedia.org/wiki/Special:FilePath/Sign_language_W.svg",
    "icon": "📅",
    "definition": "Mano en letra W realizando un círculo en el aire.",
    "category": "Días y Meses"
  },
  {
    "word": "Jueves",
    "image_url": "https://commons.wikimedia.org/wiki/Special:FilePath/Sign_language_J.svg",
    "icon": "📅",
    "definition": "Mano en letra J trazando la curva en el aire.",
    "category": "Días y Meses"
  },
  {
    "word": "Viernes",
    "image_url": "https://commons.wikimedia.org/wiki/Special:FilePath/Sign_language_V.svg",
    "icon": "📅",
    "definition": "Mano en letra V realizando un círculo en el aire.",
    "category": "Días y Meses"
  },
  {
    "word": "Sábado",
    "image_url": "https://commons.wikimedia.org/wiki/Special:FilePath/Sign_language_S.svg",
    "icon": "📅",
    "definition": "Mano en letra S girando suavemente frente a la barbilla.",
    "category": "Días y Meses"
  },
  {
    "word": "Domingo",
    "icon": "⛪",
    "definition": "Ambas manos abiertas haciendo círculos hacia afuera.",
    "category": "Días y Meses"
  },
  {
    "word": "Sí",
    "image_url": "https://commons.wikimedia.org/wiki/Special:FilePath/Sign_language_S.svg",
    "icon": "✅",
    "definition": "Puño cerrado en letra S asintiendo verticalmente como una cabeza.",
    "category": "Expresiones Comunes"
  },
  {
    "word": "No",
    "icon": "❌",
    "definition": "Índice y medio se juntan rápidamente con el pulgar como un pico cerrándose.",
    "category": "Expresiones Comunes"
  },
  {
    "word": "República Dominicana",
    "image_url": "https://commons.wikimedia.org/wiki/Special:FilePath/Sign_language_R.svg",
    "icon": "🇩🇴",
    "definition": "Mano en letra R sobre el corazón, luego seña de D describiendo el mapa.",
    "category": "Lugares"
  },
  {
    "word": "Santo Domingo",
    "image_url": "https://commons.wikimedia.org/wiki/Special:FilePath/Sign_language_S.svg",
    "icon": "📍",
    "definition": "Mano en letra S y D trazando un círculo de capital.",
    "category": "Lugares"
  },
  {
    "word": "Probar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/367.-probar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pero",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/366.-pero-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Otra vez",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/365.-otra-vez-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Actitud",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/364.-actitud-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Apestoso",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/362.-y-363.-apestoso-y-maloliente-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Maloliente",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/362.-y-363.-apestoso-y-maloliente-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Apestoso y maloliente",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/362.-y-363.-apestoso-y-maloliente-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Otro",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/361.-otro-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Simple",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/359.-y-360.-simple-y-sencillo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Sencillo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/359.-y-360.-simple-y-sencillo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Simple y sencillo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/359.-y-360.-simple-y-sencillo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cualquier",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/358.-cualquier-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Mayor que",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/357.-mayor-que-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Menor que",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/356.-menor-que-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Desarrollo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/355.-desarrollo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Mejorar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/354.-mejorar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Retroceso",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/352.-y-353.-retroceso-y-retroceder-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Retroceder",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/352.-y-353.-retroceso-y-retroceder-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Retroceso y retroceder",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/352.-y-353.-retroceso-y-retroceder-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Avance",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/350.-y-351.-avance-y-avanzar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Avanzar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/350.-y-351.-avance-y-avanzar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Avance y avanzar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/350.-y-351.-avance-y-avanzar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Defensa",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/349.-defensa-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Automático",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/348.-automatico-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Caso",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/347.-caso-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Esfuerzo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/346.-esfuerzo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Consejo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/345.-consejo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Duda",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/344.-duda-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Nervioso",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/343.-nervioso-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Miedo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/341.-y-342.-miedo-y-temor-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Temor",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/341.-y-342.-miedo-y-temor-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Miedo y temor",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/341.-y-342.-miedo-y-temor-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Carácter",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/340.-caracter-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Para",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/338.-y-339.-para-y-por-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Por",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/338.-y-339.-para-y-por-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Para y por",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/338.-y-339.-para-y-por-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Entonces",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/337.-entonces-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ambos",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/336.-ambos-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Por ejemplo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/335.-por-ejemplo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Justicia",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/334.-justicia-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Justo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/333.-justo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Especial",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/332.-especial-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Sobre",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/330.-y-331.-sobre-y-acerca-de-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Acerca de",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/330.-y-331.-sobre-y-acerca-de-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Sobre y acerca de",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/330.-y-331.-sobre-y-acerca-de-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Tal vez",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/329.-tal-vez-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Quizás",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/328.-quizas-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "También",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/327.-tambien-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Siempre",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/326.-siempre-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Integración e integrado",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/324.-y-325.-integracion-e-integrado-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Contrario",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/323.-y-324.-contrario-y-opuesto-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Opuesto",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/323.-y-324.-contrario-y-opuesto-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Contrario y opuesto",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/323.-y-324.-contrario-y-opuesto-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Claro",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/322.-claro-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Apartamento",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/321.-apartamento-sena-1.mp4",
    "category": "Lugares y Geografía",
    "icon": "🇩🇴",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Inclusión, incluye e incluir",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/321.-322.-y-323.-inclusion-incluye-e-incluir-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Máquina expendedora",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/320.-maquina-expendedora-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Espinilla",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/319.-espinilla-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Luna",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/318.-luna-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Anoche",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/317.-anoche-sena-1.mp4",
    "category": "Tiempo y Calendario",
    "icon": "📅",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Oscurecer",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/315.-y-316.-oscurecer-y-oscurecerse-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Oscurecerse",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/315.-y-316.-oscurecer-y-oscurecerse-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Oscurecer y oscurecerse",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/315.-y-316.-oscurecer-y-oscurecerse-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Amanecer",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/314.-amanecer-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Mañana en la mañana",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/313.-manana-en-la-manana-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Mañana próximo día",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/312.-manana-proximo-dia-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Tiempo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/311.-tiempo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Deber",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/309.-y-310.-deber-y-deuda-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Deuda",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/309.-y-310.-deber-y-deuda-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Deber y deuda",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/309.-y-310.-deber-y-deuda-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cinta métrica",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/308.-cinta-metrica-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cuándo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/307.-cuando-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Por qué",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/306.-por-que-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cómo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/305.-como-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Deprisa",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/304.-deprisa-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Regular",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/303.-regular-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Peor",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/302.-peor-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Mellizo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/300.-y-301.-mellizo-y-gemelo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Gemelo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/300.-y-301.-mellizo-y-gemelo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Mellizo y gemelo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/300.-y-301.-mellizo-y-gemelo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Exacto",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/299.-exacto-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Casi",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/298.-casi-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Grupo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/295.-grupo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Intentar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/293.-y-294.-intentar-y-tratar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Tratar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/293.-y-294.-intentar-y-tratar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Intentar y tratar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/293.-y-294.-intentar-y-tratar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Mostrar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/292.-mostrar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Explicar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/291.-explicar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Arreglar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/289.-y-290.-arreglar-y-reparar-sena-2.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Reparar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/289.-y-290.-arreglar-y-reparar-sena-2.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Arreglar y reparar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/289.-y-290.-arreglar-y-reparar-sena-2.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Atar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/288.-atar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Comparar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/287.-comparar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Vestir",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/286.-vestir-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Tender",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/285.-tender-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Añadir",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/283.-y-284.-anadir-y-agregar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Agregar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/283.-y-284.-anadir-y-agregar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Añadir y agregar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/283.-y-284.-anadir-y-agregar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cerca",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/95.-cerca-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Apuñalar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/281.-apunalar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Aparecer",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/280.-aparecer-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Desaparecer",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/278.-desaparecer-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Influye e influencia",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/276.-y-277.-influye-e-influencia-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Problema",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/275.-Problema-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Compromiso",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/273.-y-274.-compromiso-y-casamiento-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Casamiento",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/273.-y-274.-compromiso-y-casamiento-sena-1.mp4",
    "category": "Lugares y Geografía",
    "icon": "🇩🇴",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Compromiso y casamiento",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/273.-y-274.-compromiso-y-casamiento-sena-1.mp4",
    "category": "Lugares y Geografía",
    "icon": "🇩🇴",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Promesa",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/271.-y-272.-compromiso-y-promesa-sena-1.mp4",
    "category": "Tiempo y Calendario",
    "icon": "📅",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Compromiso y promesa",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/271.-y-272.-compromiso-y-promesa-sena-1.mp4",
    "category": "Tiempo y Calendario",
    "icon": "📅",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Premio",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/270.-Premio-sena-.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Enfrentar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/269.-Enfrentar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Fracaso",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/268.-Fracaso-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Decisión",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/267.-decision-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Nacional",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/266.-Nacional-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Aprender",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/265.-Aprender-sena-1.mp4",
    "category": "Educación y Escuela",
    "icon": "🎓",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Luchar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/264.-luchar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Flauta",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/263.-flauta-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Isla",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/262.-Isla-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Frontera",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/261.-frontera-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Fiel",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/260.-Fiel-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Seguridad",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/259.-Seguridad-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cristiano",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/258.-cristiano-sena-1.mp4",
    "category": "Tiempo y Calendario",
    "icon": "📅",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Disfrutar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/257.-Disfrutar-sena-1.mp4",
    "category": "Alimentos y Bebidas",
    "icon": "🍎",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Aumentar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/256.-Aumentar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Trompeta",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/255.-Trompeta-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Peligroso",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/254.-Peligroso-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Regla",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/252.-y-253.-regla-y-reglamento-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Reglamento",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/252.-y-253.-regla-y-reglamento-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Regla y reglamento",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/252.-y-253.-regla-y-reglamento-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Hermanas mirabal",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/251.-Hermanas-Mirabal-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Matías ramón mella",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/250.-Matias-Ramon-Mella-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Francisco del rosario sánchez",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/249.-Francisco-del-Rosario-Sanchez-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Juan pablo duarte",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/248.-Juan-Pablo-Duarte-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Honrar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/247.-Honrar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "República dominicana seña ok",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/246.-Republica-Dominicana-sena-1-ok.mp4",
    "category": "Lugares y Geografía",
    "icon": "🇩🇴",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Mensaje de texto",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/245.-mensaje-de-texto-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ruido",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/244.-ruido-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Abrazar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/242.-y-243.-abrazar-y-abrazo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Abrazo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/242.-y-243.-abrazar-y-abrazo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Abrazar y abrazo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/242.-y-243.-abrazar-y-abrazo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Terremoto",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/240.-y-241.-terremoto-y-temblor-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Temblor",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/240.-y-241.-terremoto-y-temblor-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Terremoto y temblor",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/240.-y-241.-terremoto-y-temblor-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Obrero",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/239.-obrero-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Alambre",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/238.-alambre-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Alumno, na",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/236.-y-237.-alumno-na-y-estudiante-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Estudiante",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/236.-y-237.-alumno-na-y-estudiante-sena-1.mp4",
    "category": "Educación y Escuela",
    "icon": "🎓",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Alumno, na y estudiante",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/236.-y-237.-alumno-na-y-estudiante-sena-1.mp4",
    "category": "Educación y Escuela",
    "icon": "🎓",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Continuar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/235.-Continuar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Apuesta",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/234.-Apuesta-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Adulto",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/233.-Adulto-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Sexo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/232.-Sexo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Proceso",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/230.-y-231.-proceso-y-procesar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Procesar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/230.-y-231.-proceso-y-procesar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Proceso y procesar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/230.-y-231.-proceso-y-procesar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Experto",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/228.-y-229.-experto-y-habilidad-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Habilidad",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/228.-y-229.-experto-y-habilidad-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Experto y habilidad",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/228.-y-229.-experto-y-habilidad-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Daño",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/227.-Dano-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Examinar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/226.-examinar-sena-2.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Expiró",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/225.-Expiro-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Excusa",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/224.-Excusa-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ley",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/348.-ley-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Dirigente",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/222.-Dirigente-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Charla",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/221.-Charla-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Guerra",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/220.-guerra-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Haitiano",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/219.-Haitiano-sena-1.mp4",
    "category": "Tiempo y Calendario",
    "icon": "📅",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Guiar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/218.-Guiar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Llevar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/217.-Llevar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Alguno",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/216.-Alguno-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Manguera",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/215.-Manguera-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Guitarra",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/214.-Guitarra-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Satisfacer",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/213.-Satisfacer-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "General",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/496.-general-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Apoyo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/210.-y-211.-apoyo-y-apoyar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Apoyar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/210.-y-211.-apoyo-y-apoyar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Apoyo y apoyar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/210.-y-211.-apoyo-y-apoyar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Sostener apoyo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/209.-sostener-apoyo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Gigante",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/208.-gigante-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pintor de pared",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/207.-pintor-de-pared-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pintor de arte",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/207.-pintor-de-arte-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Paquete",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/206.-paquete-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Embarazada",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/205.-embarazada-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Quirófano",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/204.-quirofano-sena-1.mp4",
    "category": "Tiempo y Calendario",
    "icon": "📅",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Tabaco",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/203.-tabaco-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Diversión",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/202.-diversion-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Gramática",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/201.-gramatica-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Soñar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/199.-y-200.-sonar-y-sueno-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Sueño",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/199.-y-200.-sonar-y-sueno-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Soñar y sueño",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/199.-y-200.-sonar-y-sueno-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Consulta médica",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/197.-Consulta-medica-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cita médica",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/196.-Cita-medica-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cita general",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/195.-Cita-general-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Vómito",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/194.-vomito-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Virus",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/193.-virus-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Noveno",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/192.-noveno-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Octavo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/191.-octavo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Séptimo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/190.-septimo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Sexto",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/189.-sexto-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Quinto",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/188.-quinto-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cuarto",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/187.-cuarto-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Tercero",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/186.-tercero-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Segundo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/185.-segundo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Primero",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/184.-primero-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Digno",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/183.-digno-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Nieve",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/181.-nieve-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Tibio",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/180.-tibio-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Seguro general",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/179.-seguro-general-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Doctor",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/178.-doctor-sena-1.mp4",
    "category": "Salud y Emergencias",
    "icon": "🏥",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Sumar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/177.-sumar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Fotógrafo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/176.-fotografo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Camarógrafo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/175.-camarografo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Estrella",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/174.-estrella-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Medio ambiente",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/173.-medio-ambiente-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ambiente",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/172.-ambiente-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Anochecer",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/171.-anochecer-sena-1.mp4",
    "category": "Tiempo y Calendario",
    "icon": "📅",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Mediodía",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/170.-mediodia-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Minuto",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/169.-minuto-sena-1.mp4",
    "category": "Tiempo y Calendario",
    "icon": "📅",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Hora",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/168.-hora-sena-1.mp4",
    "category": "Tiempo y Calendario",
    "icon": "📅",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Segundo tiempo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/167.-segundo-tiempo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Fecha",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/166.-fecha-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Edad",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/165.-edad-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Calendario",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/164.-calendario-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Guandul",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/163.-guandul-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pulpo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/162.-pulpo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Monte",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/161.-monte-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Inglés",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/160.-ingles-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Alfabeto, abecedario, deletrear",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/157.-158.-y-159.-alfabeto-abecedario-deletrear-y-deletreo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Deletreo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/157.-158.-y-159.-alfabeto-abecedario-deletrear-y-deletreo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Alfabeto, abecedario, deletrear y deletreo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/157.-158.-y-159.-alfabeto-abecedario-deletrear-y-deletreo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Una vía",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/156.-una-via-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Destapador",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/155.-destapador-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Columna",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/154.-columna-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pulgar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/153.-pulgar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Índice",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/152.-indice-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Mayor",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/151.-mayor-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Anular",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/150.-anular-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Teclado",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/148.-teclado-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Instagram",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/147.-instagram-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Facebook",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/146.-facebook-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Zafacón",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/144.-zafacon-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Vitrina",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/143.-vitrina-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Vidrio",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/142.-vidrio-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Vendedor",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/141.-vendedor-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Vena",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/140.-vena-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Vela",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/139.-vela-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Tomate",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/138.-tomate-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Tiza",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/137.-tiza-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Testículo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/136.-testiculo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Tanque",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/134.-tanque-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Tamarindo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/133.-tamarindo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Tacón",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/132.-tacon-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Taco",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/131.-taco-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Suéter",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/130.-sueter-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Sudor",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/129.-sudor-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Besar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/128.-besar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Semáforo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/127.-semaforo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Sartén",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/126.-sarten-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pez enlatado",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/125.-pez-enlatado-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Salchicha",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/124.-salchicha-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Sábana",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/123.-sabana-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Riñón",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/122.-rinon-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Revista",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/121.-revista-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Restaurante",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/120.-restaurante-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Reloj",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/119.-reloj-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Puente",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/118.-puente-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Poste",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/117.-poste-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pizza",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/116.-pizza-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Piscina",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/115.-piscina-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pilón",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/114.-pilon-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Flexible",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/113.-flexible-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pene",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/112.-pene-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pared",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/110.-pared-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Palma",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/109.-palma-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ovario",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/108.-ovario-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Orinar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/107.-orinar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ombligo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/106.-ombligo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Oído",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/105.-oido-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Nudillo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/12/104.-nudillo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Muslo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/103.-muslo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Muerte",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/102.-muerte-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Muela",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/101.-muela-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Minifalda",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/100.-minifalda-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Microscopio",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/99.-microscopio-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Microonda",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/98.-microonda-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Menstruación",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/97.-menstruacion-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Médico, ca",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/96.-medico-ca-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Mapa",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/95.-mapa-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Mantel",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/94.-mantel-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Maní",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/93.-mani-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Licuadora",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/92.-licuadora-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Licra",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/91.-licra-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Liceo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/90.-liceo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Lámpara de mesa",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/89.-lampara-de-mesa-sena-1.mp4",
    "category": "Tiempo y Calendario",
    "icon": "📅",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Guayo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/87.-y-88.-guayo-y-rallador-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Rallador",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/87.-y-88.-guayo-y-rallador-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Guayo y rallador",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/87.-y-88.-guayo-y-rallador-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Gripe",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/86.-gripe-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Grapa, grapar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/83.-84-y-85.-grapa-grapar-y-grapadora-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Grapadora",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/83.-84-y-85.-grapa-grapar-y-grapadora-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Grapa, grapar y grapadora",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/83.-84-y-85.-grapa-grapar-y-grapadora-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Goma",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/82.-goma-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Jarra",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/80.-jarra-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Inodoro",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/79.-inodoro-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Hotdog",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/78.-hotdog-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Clínica",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/77.-clinica-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Hospital",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/76.-hospital-sena-1.mp4",
    "category": "Salud y Emergencias",
    "icon": "🏥",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Horno",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/75.-horno-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Hipo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/74.-hipo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Himno",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/73.-himno-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Hígado",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/72.-higado-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Heladería",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/71.-heladeria-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Collar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/69.-y-70.-collar-y-gargantilla-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Gargantilla",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/69.-y-70.-collar-y-gargantilla-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Collar y gargantilla",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/69.-y-70.-collar-y-gargantilla-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Fósforo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/68.-fosforo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Faja",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/67.-faja-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Exprimidor de limón",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/66.-exprimidor-de-limon-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Examen",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/65.-examen-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Esmalte",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/64.-esmalte-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Enfermero, ra",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/63.-enfermero-ra-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Enchufe",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/60.-y-61.-enchufe-y-toma-corriente-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Toma corriente",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/60.-y-61.-enchufe-y-toma-corriente-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Enchufe y toma corriente",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/60.-y-61.-enchufe-y-toma-corriente-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Empanada",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/60.-empanada-sena-1.mp4",
    "category": "Alimentos y Bebidas",
    "icon": "🍎",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Dolor",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/58.-dolor-sena-1.mp4",
    "category": "Salud y Emergencias",
    "icon": "🏥",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Discoteca sea",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/57.-discoteca-sea-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Digitar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/56.-digitar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Diario",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/55.-diario-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Diálogo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/54.-dialogo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Dentadura postiza",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/52.-y-53.-dentadura-postiza-y-caja-de-dientes-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Caja de dientes",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/52.-y-53.-dentadura-postiza-y-caja-de-dientes-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Dentadura postiza y caja de dientes",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/52.-y-53.-dentadura-postiza-y-caja-de-dientes-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Delantal",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/51.-delantal-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Defecar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/50.-defecar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cucharón",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/49.-cucharon-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Dormitorio",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/47.-y-48.-cuarto-y-dormitorio-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cuarto y dormitorio",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/47.-y-48.-cuarto-y-dormitorio-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cristal",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/46.-cristal-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Copiadora",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/45.-copiadora-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Contaminación seña .mp",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/44.-contaminacion-sena-1.mp4.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Congelador, freezer",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/42.-y-43.-congelador-freezer-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Compás",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/41.-compas-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Colonia",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/39.-y-40.-colonia-y-perfume-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Perfume",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/39.-y-40.-colonia-y-perfume-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Colonia y perfume",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/39.-y-40.-colonia-y-perfume-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Colcha",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/38.-colcha-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cubre colchón",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/37.-cubre-colchon-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Colador",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/36.-colador-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Closet",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/35.-closet-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cintillo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/34.-cintillo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Chuleta",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/33.-chuleta-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Chacabana",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/32.-chacabana-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cerrojo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/31.-cerrojo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cepillo de peinar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/30.-cepillo-de-peinar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cepillo de diente",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/29.-cepillo-de-diente-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cemento empañetar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/28.-cemento-empanetar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Candado",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/27.-candado-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Camarón",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/26.-camaron-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Caldero",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/24.-y-25.-caldero-y-olla-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Olla",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/24.-y-25.-caldero-y-olla-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Caldero y olla",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/24.-y-25.-caldero-y-olla-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Calculadora",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/23.-calculadora-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Greca",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/22.-greca-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cadena",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/21.-cadena-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Butaca",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/20.-butaca-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Botellón",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/19.-botellon-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Botella",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/18.-botella-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Bikini",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/17.-bikini-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Bermuda",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/15.-y-16.-bermuda-y-short-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Short",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/15.-y-16.-bermuda-y-short-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Bermuda y short",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/15.-y-16.-bermuda-y-short-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Barbilla",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/14.-barbilla-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Barba",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/13.-barba-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Bañera",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/12.-banera-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Bandera",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/11.-bandera-sena-1.mp4",
    "category": "Lugares y Geografía",
    "icon": "🇩🇴",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Bandeja",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/10.-bandeja-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Avenida",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/9.-avenida-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Arete",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/8.-arete-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Anular acción",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/7.-anular-accion-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ano",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/6.-ano-sena-1.mp4",
    "category": "Tiempo y Calendario",
    "icon": "📅",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Anillo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/5.-anillo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Almohada",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/4.-almohada-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Aire acondicionado",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/3.-aire-acondicionado-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Aceite",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/2.-aceite-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Abrelata",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/1.-abrelata-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Teléfono, móvil",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/745.-746.-y-747.-telefono-movil-y-celular-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Celular",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/745.-746.-y-747.-telefono-movil-y-celular-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Teléfono, móvil y celular",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/745.-746.-y-747.-telefono-movil-y-celular-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Repollo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/744.-repollo-sena-1-.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Organizar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/743.-organizar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cuchillo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/742.-cuchillo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Copa",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/741.-copa-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Desear",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/740.-desear-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cotui",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/739.-Cotui-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Bahoruco",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/738.-Bahoruco-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Participar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/737.-participar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Situación",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/736.-situacion-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Practicar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/735.-practicar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Kilómetro",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/734.-kilometro-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Amplio",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/733.-amplio-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Distrito nacional",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/732.-Distrito-Nacional-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Monte plata",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/730.-Monte-Plata-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Boca chica",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/729.-Boca-Chica-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "San pedro de macorís",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/728.-San-Pedro-de-Macoris-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "La romana",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/727.-La-Romana-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Higuey",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/726.-Higuey-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Sabana de la mar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/725.-Sabana-de-la-Mar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Hato mayor",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/724.-Hato-Mayor-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "El seibo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/723.-El-Seibo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Puerto plata",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/722.-Puerto-Plata-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Monte cristi",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/721.-Monte-Cristi-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Dajabón",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/720.-Dajabon-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "San francisco macorís",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/719.-San-Francisco-Macoris-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Salcedo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/718.-Salcedo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Nagua",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/717.-Nagua-Sena-1.mp4",
    "category": "Alimentos y Bebidas",
    "icon": "🍎",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Moca",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/716.-Moca-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "La vega",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/715.-La-Vega-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Bonao",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/714.-Bonao-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Samaná",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/713.-Samana-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Santiago",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/712.-Santiago-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Mao",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/711.-Mao-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "San josé de ocoa",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/710.-San-Jose-de-Ocoa-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "San cristóbal",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/709.-San-Cristobal-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Baní",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/708.-Bani-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "San juan",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/707.-San-Juan.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Independencia, independencia e independiente",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/704.-705.-y-706.-Independencia-independencia-e-independiente-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Elías piña s",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/703.-Elias-Pina-S1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Neyba",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/702.-Neyba-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Barahona",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/701.-Barahona-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Azua",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/700.-Azua-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Jefe",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/698.-y-699.-jefe-y-gerente-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Gerente",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/698.-y-699.-jefe-y-gerente-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Jefe y gerente",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/698.-y-699.-jefe-y-gerente-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "No gustar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/697.-no-gustar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Gustar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/696.-gustar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Español",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/695.-espanol-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Sociales",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/694.-sociales-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Naturales asignatura",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/693.-naturales-asignatura-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Natural",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/691.-y-692.-natural-y-normal-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Normal",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/691.-y-692.-natural-y-normal-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Natural y normal",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/691.-y-692.-natural-y-normal-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Matemáticas asignatura",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/690.-matematicas-asignatura-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ciencia",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/293.-ciencia-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Idioma",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/687.-idioma-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Lengua",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/686.-lengua-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Persona con discapacidad",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/685.-persona-con-discapacidad-sena-1.mp4",
    "category": "Familia y Personas",
    "icon": "👨‍👩‍👧",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Persona sorda",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/684.-persona-sorda-sena-1.mp4",
    "category": "Familia y Personas",
    "icon": "👨‍👩‍👧",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ají",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/683.-aji-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ajo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/682.-ajo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cebolla",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/681.-cebolla-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cereza",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/680.-cereza-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Azúcar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/679.-azucar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Maíz",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/678.-maiz-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Valoración",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/676.-y-677.-valoracion-y-valor-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Valor",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/676.-y-677.-valoracion-y-valor-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Valoración y valor",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/676.-y-677.-valoracion-y-valor-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Visita",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/675.-visita-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Tarea",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/674.-tarea-sena-1.mp4",
    "category": "Educación y Escuela",
    "icon": "🎓",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Maleta",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/673.-maleta-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Zona franca",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/672.-zona-franca-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Opinión",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/671.-opinion-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Molestar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/670.-molestar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Llegar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/668.-y-669.-llegar-y-llego-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Llegó",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/668.-y-669.-llegar-y-llego-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Llegar y llegó",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/668.-y-669.-llegar-y-llego-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cena",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/667.-cena-sena-1.mp4",
    "category": "Alimentos y Bebidas",
    "icon": "🍎",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Almuerzo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/666.-almuerzo-sena-1.mp4",
    "category": "Alimentos y Bebidas",
    "icon": "🍎",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Desayuno",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/665.-desayuno-sena-1.mp4",
    "category": "Alimentos y Bebidas",
    "icon": "🍎",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Respirar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/664.-respirar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ganar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/663.-ganar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Objetivo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/660.-y-661.-objetivo-y-meta-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Meta",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/660.-y-661.-objetivo-y-meta-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Objetivo y meta",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/660.-y-661.-objetivo-y-meta-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Invitar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/659.-invitar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Igual",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/658.-igual-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Diferente",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/657.-diferente-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Monitor",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/656.-monitor-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Tablet",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/655.-tablet-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Televisión",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/654.-television-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Fila",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/653.-fila-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Imagen",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/652.-imagen-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Letra",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/651.-letra-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Palabra",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/650.-palabra-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Vocabulario",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/649.-vocabulario-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Seco",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/648.-seco-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cubeta",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/647.-cubeta-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Yuca",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/646.-yuca-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Moneda",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/645.-moneda-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Masa",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/643.-y-644.-masa-y-amasar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Amasar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/643.-y-644.-masa-y-amasar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Masa y amasar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/643.-y-644.-masa-y-amasar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ambulancia",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/642.-ambulancia-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Emergencia",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/641.-emergencia-sena-1.mp4",
    "category": "Salud y Emergencias",
    "icon": "🏥",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Bombero",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/640.-bombero-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Beso",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/639.-beso-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Violación sexual",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/638.-violacion-sexual-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Abuso",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/637.-abuso-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Respeto",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/635.-y-635.-respeto-y-respetar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Respetar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/635.-y-635.-respeto-y-respetar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Respeto y respetar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/635.-y-635.-respeto-y-respetar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Importante",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/634.-importante-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Miel",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/633.-miel-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Luz",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/632.-luz-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Deseo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/631.-deseo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Piso",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/630.-piso-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Trapear",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/629.-trapear-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Fregar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/628.-fregar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Lavar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/627.-lavar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Lavar el carro",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/627.-lavar-el-carro-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Lavar las manos",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/625.-lavar-las-manos-sena-1.mp4",
    "category": "Tiempo y Calendario",
    "icon": "📅",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Lengua de señas",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/624.-lengua-de-senas-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Maestro",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/622.-y-623.-maestro-y-profesor-sena-1.mp4",
    "category": "Educación y Escuela",
    "icon": "🎓",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Profesor",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/622.-y-623.-maestro-y-profesor-sena-1.mp4",
    "category": "Educación y Escuela",
    "icon": "🎓",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Maestro y profesor",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/622.-y-623.-maestro-y-profesor-sena-1.mp4",
    "category": "Educación y Escuela",
    "icon": "🎓",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Contar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/621.-contar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Completo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/619.-y-620.-completo-y-lleno-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Lleno",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/619.-y-620.-completo-y-lleno-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Completo y lleno",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/619.-y-620.-completo-y-lleno-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Encerrar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/618.-encerrar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Copia o copiar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/616.-y-617.-copia-o-copiar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Copiáme",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/614.-y-615.-copiame-y-copiarme-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Copiarme",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/614.-y-615.-copiame-y-copiarme-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Copiáme y copiarme",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/614.-y-615.-copiame-y-copiarme-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Subrayar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/613.-subrayar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Observar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/612.-observar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ega",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/604.-ega-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Audífono",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/603.-audifono-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Clip",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/601.-clip-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Borrador",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/600.-borrador-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pizarra",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/599.-pizarra-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Hoja de papel",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/598.-hoja-de-papel-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cartulina",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/597.-cartulina-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pincel",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/596.-pincel-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Témpera",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/595.-tempera-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Masilla",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/594.-masilla-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Lonchera",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/593.-lonchera-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Estuche",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/592.-estuche-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Mochila",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/591.-mochila-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Libro",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/590.-libro-sena-1.mp4",
    "category": "Educación y Escuela",
    "icon": "🎓",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Sacapuntas",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/589.-sacapuntas-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Lapicero",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/588.-lapicero-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Borra",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/587.-borra-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Lápiz",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/586.-lapiz-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cuaderno",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/585.-cuaderno-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Hielera",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/584.-hielera-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Jarrón",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/583.-jarron-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Platillo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/582.-platillo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Servilleta",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/581.-servilleta-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Taza",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/580.-taza-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Tenedor",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/579.-tenedor-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cuchara",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/578.-cuchara-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Plato",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/577.-plato-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Vaso",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/576.-vaso-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Temprano",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/575.-temprano-sena-1.mp4",
    "category": "Tiempo y Calendario",
    "icon": "📅",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Tarde",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/571.-y-572.-tarde-y-tardanza-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Tardanza",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/571.-y-572.-tarde-y-tardanza-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Tarde y tardanza",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/571.-y-572.-tarde-y-tardanza-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Luego",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/569.-y-570.-luego-y-despues-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Después",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/569.-y-570.-luego-y-despues-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Luego y después",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/569.-y-570.-luego-y-despues-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Final, fin",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/566.-567.-y-568.-final-fin-y-ultimo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Último",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/566.-567.-y-568.-final-fin-y-ultimo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Final, fin y último",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/566.-567.-y-568.-final-fin-y-ultimo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Despacio",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/565.-despacio-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Mal",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/563.-y-564.-mal-y-error-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Error",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/563.-y-564.-mal-y-error-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Mal y error",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/563.-y-564.-mal-y-error-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Bien",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/562.-bien-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Solo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/561.-solo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Demasiado",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/560.-demasiado-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Poco",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/559.-poco-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Mucho",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/558.-mucho-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Más",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/557.-mas-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Adverbio",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/556.-adverbio-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Necesitar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/554.-necesitar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Esperar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/553.-esperar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Compañero, ra",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/547.-companero-ra-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Acompañar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/546.-acompanar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Aceptar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/545.-aceptar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Separar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/544.-separar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Saber",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/543.-saber-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Entender",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/542.-entender-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Construir",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/541.-construir-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cambiar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/540.-cambiar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Quedarse",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/539.-quedarse-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Creer",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/538.-creer-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Encontrar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/536.-y-537.-encontrar-y-escoger-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Escoger",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/536.-y-537.-encontrar-y-escoger-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Encontrar y escoger",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/536.-y-537.-encontrar-y-escoger-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Empezar, comenzar e iniciar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/533.-534.-y-535.-empezar-comenzar-e-iniciar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Tomar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/532.-tomar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Volver atrás, otra vez, devolver",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/531.-volver-atras-otra-vez-devolver-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Venir",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/530.-venir-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ir",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/528.-ir-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Destruir",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/527.-destruir-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Alcanzar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/450.-Alcanzar-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Evitar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/524.-y-525.-evitar-y-bloquear-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Bloquear",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/524.-y-525.-evitar-y-bloquear-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Evitar y bloquear",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/524.-y-525.-evitar-y-bloquear-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Crear s",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/523.-crear-S1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Buscar s",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/522.-buscar-S1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cerrar s",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/521.-cerrar-S1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Romper s",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/520.-romper-S1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Sustituir",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/518.-y-519.-sustituir-y-reemplazar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Reemplazar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/518.-y-519.-sustituir-y-reemplazar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Sustituir y reemplazar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/518.-y-519.-sustituir-y-reemplazar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pagar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/517.-pagar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Comprar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/516.-comprar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Recibir",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/515.-recibir-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Regalar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/514.-regalar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Dar s",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/513.-dar-S1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Tener s",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/512.-tener-S1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Vender s",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/511.-vender-S1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Crecimiento",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/509.-y-510-crecimiento-y-crecer-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Crecer",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/509.-y-510-crecimiento-y-crecer-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Crecimiento y crecer",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/509.-y-510-crecimiento-y-crecer-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Quejarse",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/508.-quejarse-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Recoger s",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/507.-recoger-s1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Abrir s",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/506.-abrir-s1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Entrevista",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/504.-y-505.-entrevista-y-entrevistar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Entrevistar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/504.-y-505.-entrevista-y-entrevistar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Entrevista y entrevistar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/504.-y-505.-entrevista-y-entrevistar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Complicar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/502.-y-503.-complicar-y-complicado-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Complicado",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/502.-y-503.-complicar-y-complicado-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Complicar y complicado",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/502.-y-503.-complicar-y-complicado-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Promoción",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/501.-promocion-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Empeorar s",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/499.-empeorar-s1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Mejor",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/498.-mejor-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Mejorar s",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/497.-mejorar-s1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Generación",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/495.-generacion-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Recordar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/494.-recordar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Beber",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/490.-y-491.-beber-y-tomar-sena-1.mp4",
    "category": "Familia y Personas",
    "icon": "👨‍👩‍👧",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Beber y tomar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/490.-y-491.-beber-y-tomar-sena-1.mp4",
    "category": "Familia y Personas",
    "icon": "👨‍👩‍👧",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Revisar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/489.-revisar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Actividad",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/487.-actividad-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Asustarse",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/485.-y-486.-asustarse-y-atemorizarse-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Atemorizarse",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/485.-y-486.-asustarse-y-atemorizarse-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Asustarse y atemorizarse",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/485.-y-486.-asustarse-y-atemorizarse-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Aburrirse",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/484.-aburrirse-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Interesarse e interesante",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/482.-y-483.-interesarse-e-interesante-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Consolar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/481.-consolar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Gozar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/479.-y-480.-gozar-y-gozoso-sa-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Gozoso, sa",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/479.-y-480.-gozar-y-gozoso-sa-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Gozar y gozoso, sa",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/479.-y-480.-gozar-y-gozoso-sa-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Enfadado,da",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/478.-enfadadoda-sena-1-.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Querer",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/11/477.-querer-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Salir, partir",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/475.-y-476.-salir-partir-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Correctamente",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/474.-correctamente-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Aplauso, aplaudir",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/472.-y-473.-aplauso-aplaudir-sena-2.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Aplauso, aplaudir seña .mp",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/472.-y-473.-aplauso-aplaudir-sena-1.mp4.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Tristeza",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/471.-Tristeza-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Laptop, portátil",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/469-y-470.-laptop-portatil-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Computadora, ordenador",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/467-y-468.-computadora-ordenador-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Diccionario",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/466.-Diccionario-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Carta",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/465.-Carta-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Escribir",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/464.-Escribir-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Callar, callerse",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/463.-callar-callerse-sena-1.mp4",
    "category": "Lugares y Geografía",
    "icon": "🇩🇴",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Decir",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/462.-decir-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Negar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/461.-Negar-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Afirmativo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/460.-afirmativo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Expresar, expresarse",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/458-y-459.-expresar-expresarse-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Comunicación",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/457.-Comunicacion-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Oler",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/456.-Oler-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Tocar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/455.-Tocar-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Escuchar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/454.-escuchar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Escuchar con los ojos",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/454.-escuchar-con-los-ojos-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Sentir, sensaciones",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/452-y-453.-sentir-sensaciones-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Alejar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/451.-Alejar-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Agarrar, coger",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/448.-y-449.-agarrar-coger-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Soltar, tirar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/446.-y-447.-soltar-tirar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Lanzar, arrojar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/444.-y-445.-lanzar-arrojar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Correr",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/443.-Correr-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Sentarse",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/442.-Sentarse-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Caer",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/441.-Caer-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Nadar, natación",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/439.-y-440.-nadar-natacion-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Saltar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/438.-saltar-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pasear, paseo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/436.-y-437.-pasear-paseo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Caminar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/435.-caminar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Andar dominicano",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/434.-Andar-dominicano-Sena-1.mp4",
    "category": "Tiempo y Calendario",
    "icon": "📅",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": ". mover, moverse, movimiento",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/431.-432.-433.-mover-moverse-movimiento-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Levantar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/430.-Levantar-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Clavar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/429.-Clavar-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Morder",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/428.-morder-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Señalar una persona privado",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/427.-senalar-una-persona-privado-sena-2.mp4",
    "category": "Familia y Personas",
    "icon": "👨‍👩‍👧",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Señalar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/426.-Senalar-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Patear",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/425.-patear-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Poner",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/424.-Poner-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Dejar, abandonar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/422.-y-423.-dejar-abandonar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ignorar no hacer caso",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/421.-ignorar-no-hacer-caso-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ya",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/418.-ya-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Grueso objeto",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/417.-grueso-objeto-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Delgado objeto",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/416.-delgado-objeto-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pequeño",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/415.-Pequeno-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Grande",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/414.-Grande-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Incorrecto",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/413.-Incorrecto-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Correcto",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/412.-correcto-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Débil",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/411.-Debil-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Fuerte",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/410.-Fuerte-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Difícil",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/409.-Dificil-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Fácil",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/408.-Facil-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Nuevo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/407.-Nuevo-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Viejo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/405.-Viejo-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Barato",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/404.-Barato-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Caro",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/403.-Caro-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Falso",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/402.-Falso-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Honesto, honestidad",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/400.-y-401.-honesto-honestidad-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cierto",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/399.-Cierto-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Malo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/398.-malo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Bueno",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/397.-Bueno-Sena1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Adjetivo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/396.-adjetivo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Bisabuela",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/395.-bisabuela-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Bisabuelo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/394.-bisabuelo-sena-1.mp4",
    "category": "Familia y Personas",
    "icon": "👨‍👩‍👧",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cámara profesional",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/393.-camara-profesional-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cámara de fotos",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/392.-camara-de-fotos-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cámara de vigilancia",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/391.-camara-de-vigilancia-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cámara de video",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/390.-camara-de-video-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Gas",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/389.-gas-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Planeta tierra",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/388.-planeta-tierra-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Tierra",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/386.-y-387.-tierra-y-arena-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Arena",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/386.-y-387.-tierra-y-arena-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Tierra y arena",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/386.-y-387.-tierra-y-arena-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Brisa",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/385.-brisa-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Aire",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/384.-aire-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Fuego",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/383.-fuego-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Novio, novia, noviazgo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/379.-y-380.-novio-novia-noviazgo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Hogar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/378.-hogar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Puerta",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/377.-puerta-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cama",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/376.-cama-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Comercio",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/375.-comercio-sena-1.mp4",
    "category": "Alimentos y Bebidas",
    "icon": "🍎",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Administrador",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/374.-administrador-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Asistente",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/372.-y-373.-asistente-y-monitor-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Asistente y monitor",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/372.-y-373.-asistente-y-monitor-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Actuar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/278.-actuar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Precio",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/368.-y-369.-precio-y-tarifa-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Tarifa",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/368.-y-369.-precio-y-tarifa-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Precio y tarifa",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/368.-y-369.-precio-y-tarifa-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Boleto",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/366.-y-367.-boleto-y-ticket-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ticket",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/366.-y-367.-boleto-y-ticket-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Boleto y ticket",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/366.-y-367.-boleto-y-ticket-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Hielo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/365.-hielo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Fresco",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/364.-fresco-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Caliente",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/363.-caliente-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Levantarse",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/362.-levantarse-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Retirarse salir, irse",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/361.-retirarse-salir-irse-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Retirarse renunciar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/360.-retirarse-renunciar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ordenando",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/359.-ordenando-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Servicio",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/358.-servicio-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Mudarse",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/357.-mudarse-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Prisión, cárcel, preso seña .mp",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/354.-355.-y-356.-prision-carcel-preso-sena-1.mp4.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Soldado",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/352.-y-353.-soldado-y-militar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Militar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/352.-y-353.-soldado-y-militar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Soldado y militar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/352.-y-353.-soldado-y-militar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Policia",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/351.-policia-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Biblia",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/350.-biblia-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Norma",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/349.-norma-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Odio",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/347.-odio-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Orgullo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/346.-orgullo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Humildad",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/344.-y-445.-humildad-y-humilde-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Humilde",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/344.-y-445.-humildad-y-humilde-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Humildad y humilde",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/344.-y-445.-humildad-y-humilde-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Logrado, éxito, alcanzado",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/341.-342.-y-343.-logrado-exito-alcanzado-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Emocionado",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/340.-emocionado-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Entusiamo, motivado, motivación",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/337.-338.-y-339.-entusiamo-motivado-motivacion-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Feliz",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/335.-y-336.-feliz-y-contento-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Contento",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/335.-y-336.-feliz-y-contento-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Feliz y contento",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/335.-y-336.-feliz-y-contento-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Profesional",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/334.-profesional-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Capítulo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/333.-capitulo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Línea",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/332.-linea-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Párrafo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/331.-parrafo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Horario",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/329.-y-330.-horario-y-agenda-sena-1.mp4",
    "category": "Tiempo y Calendario",
    "icon": "📅",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Agenda",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/329.-y-330.-horario-y-agenda-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Horario y agenda",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/329.-y-330.-horario-y-agenda-sena-1.mp4",
    "category": "Tiempo y Calendario",
    "icon": "📅",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Sándwich",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/328.-sandwich-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Operación",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/327.-operacion-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Inyección",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/326.-inyeccion-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pastilla",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/324.-y-325.-pastilla-y-pildora-sena-1.mp4",
    "category": "Salud y Emergencias",
    "icon": "🏥",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Píldora",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/324.-y-325.-pastilla-y-pildora-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pastilla y píldora",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/324.-y-325.-pastilla-y-pildora-sena-1.mp4",
    "category": "Salud y Emergencias",
    "icon": "🏥",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Hipoacusia",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/323.-hipoacusia-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Carro público",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/242.-carro-publico-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Bus, autobus, guagua",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/240.-y-241.-bus-autobus-guagua-sena-1.mp4",
    "category": "Alimentos y Bebidas",
    "icon": "🍎",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Aeropuerto",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/239.-aeropuerto-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pararse",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/238.-pararse-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Detener",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/236.-y-237.-detener-y-parar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Parar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/236.-y-237.-detener-y-parar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Detener y parar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/236.-y-237.-detener-y-parar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Carretera",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/235.-carretera-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Metro",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/113.-metro-sena-1-.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Tránsito, tráfico, tapón",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/231.-232.-y-233.-transito-trafico-tapon-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Transporte",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/230.-transporte-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Salud",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/314.-salud-sena-1.mp4",
    "category": "Salud y Emergencias",
    "icon": "🏥",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Memoria",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/313.-memoria-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Reflexionar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/311.-y-312.-reflexionar-y-meditar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Meditar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/311.-y-312.-reflexionar-y-meditar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Reflexionar y meditar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/311.-y-312.-reflexionar-y-meditar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pensar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/309.-y-310.-pensar-y-pensamiento-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pensamiento",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/309.-y-310.-pensar-y-pensamiento-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pensar y pensamiento",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/309.-y-310.-pensar-y-pensamiento-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Personal",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/308.-personal-sena-1.mp4",
    "category": "Familia y Personas",
    "icon": "👨‍👩‍👧",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Personalidad",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/307.-personalidad-sena-1.mp4",
    "category": "Familia y Personas",
    "icon": "👨‍👩‍👧",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Significado",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/306.-significado-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ausente",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/305.-ausente-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Falta",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/304.-falta-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Necesidad",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/303.-necesidad-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": ". noticia, anunciar, avisar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/300.-301.-302.-noticia-anunciar-avisar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Noticia tv",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/299.-noticia-tv-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Competencia",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/298.-competencia-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Carrera",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/297.-carrera-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Deporte",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/296.-deporte-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Historia o cuento",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/295.-historia-o-cuento-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Historia",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/294.-historia-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Elemento",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/292.-elemento-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Forma",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/291.-forma-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Dato",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/290.-dato-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Información, informar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/288.-y-289.-informacion-informar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Idea",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/287.-idea-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Conocimiento",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/286.-conocimiento-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Análisis, analizar, investigar, investigación",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/282.-283.-284.-y-285-analisis-analizar-investigar-investigacion-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": ". y análisis, analizar, investigar, investigación",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/282.-283.-284.-y-285-analisis-analizar-investigar-investigacion-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Concepto",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/281.-concepto-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Acuerdo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/280.-acuerdo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Actor",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/279.-actor-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Futuro",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/276.-futuro-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pasado",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/274.-y-275.-pasado-y-antes-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Antes",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/274.-y-275.-pasado-y-antes-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pasado y antes",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/274.-y-275.-pasado-y-antes-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Presente, hoy",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/271.-272.-y-273.-presente-hoy-y-ahora-sena-1.mp4",
    "category": "Tiempo y Calendario",
    "icon": "📅",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ahora",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/271.-272.-y-273.-presente-hoy-y-ahora-sena-1.mp4",
    "category": "Tiempo y Calendario",
    "icon": "📅",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Presente, hoy y ahora",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/271.-272.-y-273.-presente-hoy-y-ahora-sena-1.mp4",
    "category": "Tiempo y Calendario",
    "icon": "📅",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Religión",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/250.-religion-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Formalidad",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/270.-formalidad-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Secreto",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/269.-secreto-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Longitud",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/268.-longitud-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Aumento",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/267.-aumento-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Alto",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/265.-y-266-alto-y-altura-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Altura",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/265.-y-266-alto-y-altura-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Alto y altura",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/265.-y-266-alto-y-altura-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Tamaño",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/264.-tamano-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Largo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/263.-largo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ancho",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/262.-ancho-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Área",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/260.-y-261.-area-y-aula-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Aula",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/260.-y-261.-area-y-aula-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Área y aula",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/260.-y-261.-area-y-aula-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Estudio",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/258.-y-259.-estudio-y-estudiar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Estudiar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/258.-y-259.-estudio-y-estudiar-sena-1.mp4",
    "category": "Educación y Escuela",
    "icon": "🎓",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Estudio y estudiar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/258.-y-259.-estudio-y-estudiar-sena-1.mp4",
    "category": "Educación y Escuela",
    "icon": "🎓",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Clase",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/257.-clase-sena-1.mp4",
    "category": "Educación y Escuela",
    "icon": "🎓",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Universidad",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/256.-universidad-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Instituto",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/255.-instituto-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Escuela",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/253.-y-254.-escuela-y-colegio-sena-1.mp4",
    "category": "Educación y Escuela",
    "icon": "🎓",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Colegio",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/253.-y-254.-escuela-y-colegio-sena-1.mp4",
    "category": "Educación y Escuela",
    "icon": "🎓",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Escuela y colegio",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/253.-y-254.-escuela-y-colegio-sena-1.mp4",
    "category": "Educación y Escuela",
    "icon": "🎓",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Educación",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/252.-educacion-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Dios",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/251.-Dios-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pintura",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/249.-pintura-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Dibujo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/248.-dibujo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cine",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/247.-cine-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Arte",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/246.-arte-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Autor",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/244.-y-245.-autor-y-escritor-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Escritor",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/244.-y-245.-autor-y-escritor-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Autor y escritor",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/244.-y-245.-autor-y-escritor-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cultura",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/243.-cultura-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Chaqueta",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/229.-chaqueta-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Abrigo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/228.-abrigo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Zapatilla",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/226.-y-227.-zapatilla-y-sandalias-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Sandalias",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/226.-y-227.-zapatilla-y-sandalias-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Zapatilla y sandalias",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/226.-y-227.-zapatilla-y-sandalias-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Calipso",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/225.-calipso-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Lente",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/223.-y-224.-lente-y-gafa-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Gafa",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/223.-y-224.-lente-y-gafa-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Lente y gafa",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/223.-y-224.-lente-y-gafa-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cordón",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/222.-cordon-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cinturón",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/220.-y-221.-cinturon-y-correa-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Correa",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/220.-y-221.-cinturon-y-correa-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cinturón y correa",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/220.-y-221.-cinturon-y-correa-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cremallera abierta",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/219.-cremallera-abierta-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cremallera",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/218.-cremallera-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Abotonar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/217.-abotonar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Botón",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/216.-boton-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cuello",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/24.-cuello-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Manga corta",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/214.-manga-corta-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Manga larga",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/213.-manga-larga-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Dar corriente",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/212.-dar-corriente-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Electricidad",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/210.-y-211.-electricidad-y-corriente-electrica-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Corriente eléctrica",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/210.-y-211.-electricidad-y-corriente-electrica-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Electricidad y corriente eléctrica",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/210.-y-211.-electricidad-y-corriente-electrica-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cuadro",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/208.-y-209.-cuadro-y-cuadrado-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cuadrado",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/208.-y-209.-cuadro-y-cuadrado-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cuadro y cuadrado",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/208.-y-209.-cuadro-y-cuadrado-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Escultura",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/206.-y-207.-escultura-y-esculpir-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Esculpir",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/206.-y-207.-escultura-y-esculpir-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Escultura y esculpir",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/206.-y-207.-escultura-y-esculpir-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Paragua",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/204.-y-205.-paragua-y-sombrilla-sena-1.mp4",
    "category": "Alimentos y Bebidas",
    "icon": "🍎",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Sombrilla",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/204.-y-205.-paragua-y-sombrilla-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Paragua y sombrilla",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/204.-y-205.-paragua-y-sombrilla-sena-1.mp4",
    "category": "Alimentos y Bebidas",
    "icon": "🍎",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Funda",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/203.-funda-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Llave",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/202.-llave-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Bolso",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/200.-y-201.-bolso-y-cartera-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cartera",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/200.-y-201.-bolso-y-cartera-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Bolso y cartera",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/200.-y-201.-bolso-y-cartera-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Bolsillo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/199.-bolsillo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cuerda",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/198.-cuerda-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Aguja",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/197.-aguja-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Hilo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/196.-hilo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Clavo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/195.-clavo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Herramienta",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/194.-herramienta-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Escalera",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/193.-escalera-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Elevador",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/191.-y-192.-elevador-y-ascensor-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ascensor",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/191.-y-192.-elevador-y-ascensor-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Elevador y ascensor",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/191.-y-192.-elevador-y-ascensor-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Construcción",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/190.-construccion-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Edificio",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/189.-edificio-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Entrada",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/187.-y-188.-entrada-y-entrar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Entrar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/187.-y-188.-entrada-y-entrar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Entrada y entrar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/187.-y-188.-entrada-y-entrar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ventana",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/186.-ventana-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Devuelta",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/184.-y-185.-devuelta-y-cambio-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cambio",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/184.-y-185.-devuelta-y-cambio-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Devuelta y cambio",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/184.-y-185.-devuelta-y-cambio-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Dinero",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/183.-dinero-sena-1-.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Banco",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/182.-banco-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cuenta",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/181.-cuenta-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Compañia",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/180.-compania-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Almacén",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/179.-almacen-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Transferencia financiera",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/178.-transferencia-financiera-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Producto",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/177.-producto-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Acabar, acabado",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/175.-y-176.-acabar-acabado-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Consumir",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/173.-y-174.-consumir-y-consumido-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Consumido",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/173.-y-174.-consumir-y-consumido-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Consumir y consumido",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/173.-y-174.-consumir-y-consumido-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Economía",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/172.-economia-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Departamento",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/171.-departamento-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Provincia",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/170.-provincia-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ciudad, pueblo, comunidad",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/167.-168.-y-169.-ciudad-pueblo-comunidad-sena-1.mp4",
    "category": "Lugares y Geografía",
    "icon": "🇩🇴",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Capital",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/166.-capital-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Representar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/165.-representar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Representante",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/164.-representante-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cámara de diputados",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/163.-camara-de-diputados-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Diputado",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/162.-diputado-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Senado",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/161.-senado-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Senador",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/160.-senador-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Director",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/159.-director-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ministro",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/158.-ministro-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Presidente",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/157.-presidente-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Dictadura",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/156.-dictadura-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Democracia",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/155.-democracia-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Gobierno",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/154.-gobierno-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Constitución",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/153.-constitucion-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Congreso, comité, consejo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/150.-151.-y-152.-congreso-comite-consejo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Club",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/149.-club-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Huelga",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/148.-huelga-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Protesta",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/147.-protesta-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Campaña publicitaria",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/145.-y-146.-campana-publicitaria-y-publicidad-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Publicidad",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/145.-y-146.-campana-publicitaria-y-publicidad-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Campaña publicitaria y publicidad",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/145.-y-146.-campana-publicitaria-y-publicidad-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Marcha",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/144.-marcha-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Campaña política",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/142.-y-143.-campana-politica-y-pancarta-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pancarta",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/142.-y-143.-campana-politica-y-pancarta-sena-1.mp4",
    "category": "Alimentos y Bebidas",
    "icon": "🍎",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Campaña política y pancarta",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/142.-y-143.-campana-politica-y-pancarta-sena-1.mp4",
    "category": "Alimentos y Bebidas",
    "icon": "🍎",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Responsabilidad",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/140.-y-141.-responsabilidad-y-cargo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cargo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/140.-y-141.-responsabilidad-y-cargo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Responsabilidad y cargo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/140.-y-141.-responsabilidad-y-cargo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Autoridad",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/139.-autoridad-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Prohibición",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/137.-y-138.-prohibicion-y-prohibido-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Prohibido",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/137.-y-138.-prohibicion-y-prohibido-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Prohibición y prohibido",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/137.-y-138.-prohibicion-y-prohibido-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Derecho",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/136.-derecho-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Obligado",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/135.-obligado-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Obligación",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/134.-obligacion-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Equipo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/133.-equipo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Fábrica e industria",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/131.-y-132.-fabrica-e-industria-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Asociación",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/130.-asociacion-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Organización",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/129.-organizacion-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": ". .",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/124.-125.-126.-127.-y-128.-administracion-administrar-negocio-negociar-gobernar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": ". administración, administrar, negocio, negociar, gobernar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/124.-125.-126.-127.-y-128.-administracion-administrar-negocio-negociar-gobernar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": ". . y . administración, administrar, negocio, negociar, gobernar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/124.-125.-126.-127.-y-128.-administracion-administrar-negocio-negociar-gobernar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Estructura de construcción",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/123.-estructura-de-construccion-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Encuentro",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/122.-encuentro-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Reunión",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/121.-reunion-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Sociedad",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/120.-sociedad-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Medir",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/119.-medir-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Kilogramo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/116.-kilogramo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Milímetro",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/118.-milimetro-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Gramo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/115.-gramo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Litro",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/114.-litro-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Peso",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/111.-y-112.-peso-y-pesar-sena-1-.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pesar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/111.-y-112.-peso-y-pesar-sena-1-.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Peso y pesar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/111.-y-112.-peso-y-pesar-sena-1-.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pino árbol de navidad",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/73.-pino-arbol-de-navidad-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Hongo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/72.-hongo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Tallo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/71.-tallo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Raíz",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/70.-raiz-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Hoja",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/69.-hoja-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Árbol",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/68.-arbol-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Semilla, sembrar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/65.-66.-y-67.-semilla-sembrar-y-siembra-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Siembra",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/65.-66.-y-67.-semilla-sembrar-y-siembra-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Semilla, sembrar y siembra",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/65.-66.-y-67.-semilla-sembrar-y-siembra-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Flor",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/64.-flor-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pasto, cesped, hierba",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/61.-62.-y-63.-Pasto-Cesped-Hierba-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Planta",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/60.-planta-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Lombriz",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/59.-lombriz-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Araña",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/58.-arana-sena-3.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Aguila",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/57.-aguila-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pájaro",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/55.-y-56.-pajaro-y-ave-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ave",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/55.-y-56.-pajaro-y-ave-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pájaro y ave",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/55.-y-56.-pajaro-y-ave-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Elefante",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/54.-elefante-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "León",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/53.-leon-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ciervo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/51.-y-52.-ciervo-y-venado-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Venado",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/51.-y-52.-ciervo-y-venado-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ciervo y venado",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/51.-y-52.-ciervo-y-venado-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Dragón",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/50.-dragon-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Tigre",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/49.-tigre-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Montaña",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/48.-montana-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Océano",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/47.-oceano-sena-1.mp4",
    "category": "Tiempo y Calendario",
    "icon": "📅",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Mar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/46.-mar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Río",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/45.-rio-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Desierto",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/44.-desierto-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Bosque",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/43.-bosque-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Campo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/42.-campo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Naturaleza",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/40.y-41.-naturaleza-y-naturales-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Naturales",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/40.y-41.-naturaleza-y-naturales-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Naturaleza y naturales",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/40.y-41.-naturaleza-y-naturales-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Vida, vivo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/37.-38.-y-39.-vida-vivo-y-vivir-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Vivir",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/37.-38.-y-39.-vida-vivo-y-vivir-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Vida, vivo y vivir",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/37.-38.-y-39.-vida-vivo-y-vivir-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Enfermedad",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/36.-enfermedad-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Diarrea",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/35.-diarrea-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Resfriado",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/34.-resfriado-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Hueso",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/33.-hueso-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Piel",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/32.-piel-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Sangre",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/31.-sangre-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cadera",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/30.-cadera-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cintura",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/29.-cintura-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Espíritu",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/28.-espiritu-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Alma",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/27.-alma-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Mente",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/26.-mente-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Corazón",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/25.-corazon-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Músculo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/23.-musculo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Muñeca",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/433.-muneca-sena-1-.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Hombro",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/21.-hombro-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Codo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/20.-codo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Estómago",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/19.-estomago-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cerebro",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/18.-cerebro-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Bigote",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/17.-bigote-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cabeza",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/16.-cabeza-sena-1.mp4",
    "category": "Salud y Emergencias",
    "icon": "🏥",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Rodilla",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/15.-rodilla-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Mitad",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/14.-mitad-sena-1-.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Parte",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/13.-parte-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Amor",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/12.-amor-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Boda",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/11.-boda-sena-1-.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pareja",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/10.-pareja-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Conocido",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/8.-y-9.-conocido-y-conocerse-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Conocerse",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/8.-y-9.-conocido-y-conocerse-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Conocido y conocerse",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/8.-y-9.-conocido-y-conocerse-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Amigo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/6.-y-7.-amigo-y-amistad-sena-1.mp4",
    "category": "Familia y Personas",
    "icon": "👨‍👩‍👧",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Amistad",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/6.-y-7.-amigo-y-amistad-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Amigo y amistad",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/6.-y-7.-amigo-y-amistad-sena-1.mp4",
    "category": "Familia y Personas",
    "icon": "👨‍👩‍👧",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Mujer",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/5.-mujer-sena-1.mp4",
    "category": "Familia y Personas",
    "icon": "👨‍👩‍👧",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Hombre",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/4.-hombre-sena-1.mp4",
    "category": "Familia y Personas",
    "icon": "👨‍👩‍👧",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Persona",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/3.-persona-sena-1.mp4",
    "category": "Familia y Personas",
    "icon": "👨‍👩‍👧",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Humano",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/2.-humano-sena-1.mp4",
    "category": "Tiempo y Calendario",
    "icon": "📅",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Gente",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/1.-gente-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Arcilla, barro modelar con barro",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/110.-arcilla-barro-modelar-con-barro-sena-1-.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Sal",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/109.-sal-sena-1-.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Yeso",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/108.-yeso-sena-1-.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Plata",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/107.-plata-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Oro",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/106.-oro-sena-1-.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Alambre eléctrico",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/105.-alambre-electrico-sena-1-.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Hierro",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/103.-y-104-hierro-y-reja.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Reja",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/103.-y-104-hierro-y-reja.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Hierro y reja",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/103.-y-104-hierro-y-reja.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Interior",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/101.-interior-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Exterior",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/100.-exterior-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Allá",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/99.-Alla-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ahi",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/98.-Ahi-y-alli-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Alli",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/98.-Ahi-y-alli-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ahi y alli",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/98.-Ahi-y-alli-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Aquí, acá",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/97.-aqui-aca-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Lejos",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/96.-lejos-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Enfrente",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/94.-enfrente-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Diagonal",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/93.-diagonal-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Alrededor",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/92.-alrededor-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Encima",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/91.-encima-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Centro",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/89.-y-90-centro-y-medio-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Medio",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/89.-y-90-centro-y-medio-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Centro y medio",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/89.-y-90-centro-y-medio-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Izquierda",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/88.-izquierda-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Derecha",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/87.-derecha-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Norte",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/86.-norte-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Sur",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/85.-sur-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Oeste",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/84.-oeste-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Este",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/83.-este-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Camino",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/82.-camino-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Calle",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/81.-calle-sena-1.mp4",
    "category": "Lugares y Geografía",
    "icon": "🇩🇴",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Dirección",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/339.-direccion-Sena-2.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cielo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/79.-cielo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Controlar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/78.-controlar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Trueno",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/77.-trueno-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Viento",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/76.-viento-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Verdura",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/75.-verdura-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cosecha",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/74.-cosecha-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Bate, béisbol",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/467.-y-468.-bate-beisbol-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Avión",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/466.-avion-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pelota",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/465.-pelota-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Canica, bolita, belluga",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/464.-canica-bolita-belluga-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Juego de baraja, cartas",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/462.-y-463.-juego-de-baraja-cartas-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Boliche",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/461.-boliche-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Tobogán",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/460.-tobogan-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Columpio",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/459.-columpio-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Voleibol",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/458.-voleibol-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Basquétbol",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/457.-basquetbol-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Fútbol",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/456.-futbol-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Juego de mesa",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/455.-juego-de-mesa-sena-1.mp4",
    "category": "Tiempo y Calendario",
    "icon": "📅",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Dominó, dómino",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/454.-domino-domino-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ajedrez",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/453.-ajedrez-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Juego",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/10/452.-juego-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Aro",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/451.-aro-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Soga de brincar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/450.-soga-de-brincar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Robot",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/449.-robot-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Dado",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/448.-dado-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Trompo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/447.-trompo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pistola agua",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/446.-pistola-agua-sena-1.mp4",
    "category": "Alimentos y Bebidas",
    "icon": "🍎",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Chichigua",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/445.-chichigua-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Juego de cocina",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/444.-juego-de-cocina-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Globo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/443.-globo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Patineta",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/442.-patineta-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Patín",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/441.-patin-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Carro de juguete",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/440.-carro-de-juguete-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Carro",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/438.-y-439.-carro-y-automovil-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Automovil",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/438.-y-439.-carro-y-automovil-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Carro y automovil",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/438.-y-439.-carro-y-automovil-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Bicicleta",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/437.-bicicleta-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Rompecabeza",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/436.-rompecabeza-sena-1.mp4",
    "category": "Salud y Emergencias",
    "icon": "🏥",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Juego de jack",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/435.-juego-de-jack-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pimpón",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/434.-pimpon-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Tren",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/432.-tren-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Barco",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/431.-barco-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Guante de béisbol",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/430.-guante-de-beisbol-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Guante general",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/429.-guante-general-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Madera",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/428.-madera-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Caja",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/427.-caja-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Permiso",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/426.-permiso-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Papel",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/425.-papel-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Algodón",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/424.-algodon-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Materiales",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/423.-materiales-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Granizo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/422.-granizo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Rayo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/421.-rayo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Tormenta",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/420.-tormenta-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ciclón, huracán",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/418.-y-419.-ciclon-huracan-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Nublado",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/417.-nublado-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Lluvia",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/416.-lluvia-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Frío",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/415.-frio-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Calor",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/414.-calor-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Sol",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/413.-sol-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Maquillar, maquillarse",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/411.-y-412.-maquillar-maquillarse-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cepillar, cepillo, cepillarse",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/408.-409.-y-410.-cepillar-cepillo-cepillarse-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Peinar, peinarse",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/406.-y-407.-peinar-peinarse-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Bañar, bañarse",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/404.-y-405.-banar-banarse-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Descansar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/403.-descansar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Golpear",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/402.-golpear-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pelear",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/400.-y-401.-pelear-y-pelea-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pelea",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/400.-y-401.-pelear-y-pelea-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pelear y pelea",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/400.-y-401.-pelear-y-pelea-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Discutir",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/398.-discutir-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ver",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/397.-ver-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Mirar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/396.-mirar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Responder",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/395.-responder-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Preguntar, pregunta",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/393.-y-394.-preguntar-pregunta-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Auxilio, socorro",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/391.-y-392.-auxilio-socorro-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ayudar, ayuda",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/389.-y-390.-ayudar-ayuda-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Dormir",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/388.-dormir-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Enseñar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/387.-ensenar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Hablar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/386.-hablar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": ". trabajar, laborar, trabajo, labor",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/382.-383.-384.-y-385.-trabajar-laborar-trabajo-labor-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": ". y . trabajar, laborar, trabajo, labor",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/382.-383.-384.-y-385.-trabajar-laborar-trabajo-labor-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Reír se",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/381.-reirse-sena-4.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Llorar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/379.-llorar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Bailar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/380.-bailar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cantar, canción, música",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/376.-377.-y-378.-cantar-cancion-musica-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Soplar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/375.-soplar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Borrar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/374.-borrar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Dibujar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/373.-dibujar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pintar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/372.-pintar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pegar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/371.-pegar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Tijera",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/370.-tijera-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Recortar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/369.-recortar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Leer",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/368.-leer-y-lectura-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Lectura",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/368.-leer-y-lectura-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Leer y lectura",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/368.-leer-y-lectura-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Verbo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/367.-verbo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Fuera, afuera",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/366.-fuera-afuera-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Dentro, adentro",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/365.-dentro-adentro-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Detrás",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/364.-detras-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Delante",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/363.-delante-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Abajo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/362.-abajo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Arriba",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/361.-arriba-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Sorprendido, sorprendida",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/357-y-358.-sorprendido-sorprendida-y-sorpresa-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Sorpresa",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/357-y-358.-sorprendido-sorprendida-y-sorpresa-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Sorprendido, sorprendida y sorpresa",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/357-y-358.-sorprendido-sorprendida-y-sorpresa-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cansado, da",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/356.-cansado-da-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Avergonzado, avergonzada",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/355.-avergonzado-avergonzada-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Enfermo, enferma",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/354.-enfermo-enferma-sena-1.mp4",
    "category": "Salud y Emergencias",
    "icon": "🏥",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Preocupado, preocupada",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/353.-preocupado-preocupada-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Enojado, enojada",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/352.-enojado-enojada-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Triste",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/351.-triste-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Alegre",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/349.-y-350.-alegre-y-feliz-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Alegre y feliz",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/349.-y-350.-alegre-y-feliz-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Flaco, flaca",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/348.-flaco-flaca-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Delgado, delgada",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/347.-delgado-delgada-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Gordo, gorda",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/346.-gordo-gorda-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Limpio, limpia",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/345.-limpio-limpia-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Limpiar",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/344.-limpiar-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Sucio, sucia",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/343.-sucio-sucia-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Biblioteca",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/342.-biblioteca-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Comedor",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/341.-comedor-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Oficina",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/340.-oficina-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Patio",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/338.-patio-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Parqueo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/337.-parqueo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Curso",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/335.-curso-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Farmacia",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/334.-farmacia-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Bomba de gasolina",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/333.-bomba-de-gasolina-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Colmado",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/332.-colmado-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Tienda de ropa",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/331.-tienda-de-ropa-Sena-2.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Tienda",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/330.-tienda-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Mercado",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/329.-mercado-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Supermercado",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/328.-supermercado-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Hotel",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/326.-hotel-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Playa",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/325.-playa-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Iglesia",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/324.-iglesia-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Comunidad",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/323.-comunidad-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cuerno",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/321.-cuerno-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Escama",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/320.-escama-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cresta",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/319.-cresta-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cola",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/318.-cola-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Patas",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/317.-Patas-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Trompa",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/316.-Trompa-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ala",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/315.-ala-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Abeja",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/314.-abeja-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Mosca",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/313.-mosca-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Mariposa",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/312.-mariposa-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Mosquito",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/311.-mosquito-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Piojo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/310.-piojo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Iguana",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/309.-iguana-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Lagarto",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/308.-lagarto-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Gusano",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/307.-gusano-sena-1.mp4",
    "category": "Tiempo y Calendario",
    "icon": "📅",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Hormiga",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/306.-hormiga-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ciempiés",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/305.-ciempies-sena-2.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Insecto",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/304.-insecto-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Toro",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/303.-toro-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Vaca",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/302.-vaca-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cerdo, cerda, puerco, puerca",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/301.-cerdo-cerda-puerco-puerca-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ratón",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/300.-raton-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Sapo, rana, maco",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/299.-sapo-rana-maco-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pollo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/210.-pollo-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pez",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/297.-pez-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pavo, pava",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/296.-pavo-pava-sena-2.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pavo real",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/295.-pavo-real-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Paloma",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/294.-paloma-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Oveja",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/293.-oveja-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Oso, osa",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/292.-oso-osa-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Gorila",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/291.-gorila-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Mono, mona",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/290.-mono-mona-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Jirafa",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/289.-jirafa-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Gato, gata",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/288.-gato-gata-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Gallo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/287.-gallo-sena-3-.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Perro, perra",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/286.-perro-perra-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Gallina",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/285.-gallina-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Conejo, coneja",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/284.-conejo-coneja-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Cocodrilo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/283.-cocodrilo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Chivo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/282.-chivo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Serpiente",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/281.-serpiente-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Culebra",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/280.-culebra-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Tortuga",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/279.-tortuga-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Caballo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/278.-caballo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Animal seña .mp",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/277.-animal-sena-1.mp4.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Palito de queso",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/276.-palito-de-quesosena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Chicharroncito",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/275.-chicharroncito-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Hojuelita",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/274.-hojuelita-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Platanito",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/273.-platanito.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Papita",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/272.-Papita-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Papita picadera",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/271.-papita-picadera-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Palomita de maiz",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/270.-palomita-de-maiz-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Menta",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/269.-menta-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Chicle",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/268.-chicle-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Dulce",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/267.-dulce-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Zanahoria",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/266.-zanahoria-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Berenjena",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/265.-berenjena-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Apio",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/264.-apio-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Vainita",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/263.-vainita-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Vegetales",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/262.-vegetales-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Sandia",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/261.-sandia-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Aguacate",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/260.-aguacate-sena-1.mp4",
    "category": "Alimentos y Bebidas",
    "icon": "🍎",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": ", limón",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/259-limon-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Fresa",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/258.-fresa-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Chinola",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/257.-chinola-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Manzana",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/256.-manzana-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Lechosa",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/255.-lechosa-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Mango",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/254.-mango-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Coco",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/253.-coco-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Naranja",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/252.-naranja-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Guineo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/251.-guineo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Uva",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/250.-uva-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Piña",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/249.-pina-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Fruta",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/248.-fruta-sena-1.mp4",
    "category": "Alimentos y Bebidas",
    "icon": "🍎",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Té",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/247.-te-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Refresco",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/246.-refresco-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Leche",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/245.-leche-sena-1.mp4",
    "category": "Alimentos y Bebidas",
    "icon": "🍎",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Jugo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/244.-jugo-sena-1.mp4",
    "category": "Alimentos y Bebidas",
    "icon": "🍎",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Chocolate",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/243.-chocolate-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Café",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/242.-cafe-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Agua",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/241.-agua-Sena-1.mp4",
    "category": "Alimentos y Bebidas",
    "icon": "🍎",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Bebida",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/09/240.-Bebida-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Lasaña",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/239.-Lasana-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Guineo verde",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/238.-Guineo-Verde-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Espagueti",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/237.-Espagueti-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Ensalada",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/236.-Ensalada-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Habichuelas con dulce",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/235.-Habichuelas-con-Dulce-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Mangu",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/234.-Mangu-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Sancocho de habichuelas",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/233.-Sancocho-de-Habichuelas-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Sancocho",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/232.-Sancocho-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Arroz blanco",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/231.-Arroz-Blanco-Sena-1.mp4",
    "category": "Alimentos y Bebidas",
    "icon": "🍎",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Moro de habichuelas",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/230.-moro-de-habichuelas-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Locrio de pollo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/229.-locrio-de-pollo-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pescado con coco",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/228.-Pescado-con-coco-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Arroz con coco",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/227.-Arroz-con-coco-Sena-1.mp4",
    "category": "Alimentos y Bebidas",
    "icon": "🍎",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Arroz con leche",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/226.-Arroz-con-Leche-Sena-1.mp4",
    "category": "Alimentos y Bebidas",
    "icon": "🍎",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Paleta de helado",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/225.-paleta-de-helado-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Paleta",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/223.-y-224.-paleta-y-bolon-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Bolón",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/223.-y-224.-paleta-y-bolon-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Paleta y bolón",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/223.-y-224.-paleta-y-bolon-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Galleta",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/222.-galleta-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Bizcocho",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/221.-bizcocho-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Helado",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/220.-helado-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Avena",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/219.-avena-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Mantequilla",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/218.-mantequilla-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Salami",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/217.-salami-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Plátano",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/216.-platano-sena-1.mp4",
    "category": "Tiempo y Calendario",
    "icon": "📅",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Queso",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/215.-queso-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Habichuela",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/214.-habichuela-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pescado",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/213.-pescado-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Carne",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/212.-carne-sena-1.mp4",
    "category": "Alimentos y Bebidas",
    "icon": "🍎",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Arroz",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/211.-arroz-Sena-1.mp4",
    "category": "Alimentos y Bebidas",
    "icon": "🍎",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Sopa",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/209.-sopa-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Papa",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/208.-papa-Sena-1.mp4",
    "category": "Familia y Personas",
    "icon": "👨‍👩‍👧",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Huevo",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/207.-huevo-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pan",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/206.-pan-Sena-1.mp4",
    "category": "Alimentos y Bebidas",
    "icon": "🍎",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Alimento",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/204.-y-205-alimento-y-comida-Sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Comida",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/204.-y-205-alimento-y-comida-Sena-1.mp4",
    "category": "Alimentos y Bebidas",
    "icon": "🍎",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Alimento y comida",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/204.-y-205-alimento-y-comida-Sena-1.mp4",
    "category": "Alimentos y Bebidas",
    "icon": "🍎",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Bata",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/203.-BATA-SENA-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Brasier",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/202.-BRASIER-SENA-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Falda",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/201.-FALDA-SENA-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Blusa",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/200.-BLUSA-SENA-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Vestido",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/199.-VESTIDO-SENA-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Sombrero",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/198.-SOMBRERO-SENA-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Gorra",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/197.-GORRA-SENA-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pijama",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/196.-PIJAMA-SENA-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Corbata",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/195.-CORBATA-SENA-2.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Saco",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/194.-SACO-SENA-1-.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Franela",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/193.-FRANELA-SENA-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Pantalón",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/192.-PANTALON-SENA-1.mp4",
    "category": "Alimentos y Bebidas",
    "icon": "🍎",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Chancleta señas",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/191.-CHANCLETA-SENAS-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  },
  {
    "word": "Media",
    "video_url": "https://diccionariolsrd.cc/wp-content/uploads/2024/08/190-media-sena-1.mp4",
    "category": "Vocabulario General",
    "icon": "🤟",
    "definition": "Seña oficial registrada en el Diccionario Oficial de la Lengua de Señas Dominicana (LSRD)."
  }
],

  quizzes: [
    {
      id: 'e1111111-1111-1111-1111-111111111111',
      lesson_id: 'a1111111-1111-1111-1111-111111111111',
      question_text: '¿Cómo se forma la vocal "A" en LESDO?',
      quiz_options: [
        { id: '1', option_text: 'Puño cerrado con el pulgar erguido a un lado', is_correct: true, sort_order: 1 },
        { id: '2', option_text: 'Mano abierta con dedos extendidos', is_correct: false, sort_order: 2 },
        { id: '3', option_text: 'Solo el dedo meñique hacia arriba', is_correct: false, sort_order: 3 },
        { id: '4', option_text: 'Formando un círculo con todos los dedos', is_correct: false, sort_order: 4 }
      ]
    },
    {
      id: 'e2222222-2222-2222-2222-222222222222',
      lesson_id: 'b1111111-1111-1111-1111-111111111111',
      question_text: '¿Qué saludo se realiza llevando la mano a la sien y moviéndola hacia afuera?',
      quiz_options: [
        { id: '1', option_text: 'Adiós', is_correct: false, sort_order: 1 },
        { id: '2', option_text: 'Hola', is_correct: true, sort_order: 2 },
        { id: '3', option_text: 'Gracias', is_correct: false, sort_order: 3 },
        { id: '4', option_text: 'Por favor', is_correct: false, sort_order: 4 }
      ]
    },
    {
      id: 'e3333333-3333-3333-3333-333333333333',
      lesson_id: 'b5555555-5555-5555-5555-555555555555',
      question_text: '¿Cómo se expresa "Gracias" en LESDO?',
      quiz_options: [
        { id: '1', option_text: 'Tocando la barbilla y extendiendo la mano al frente', is_correct: true, sort_order: 1 },
        { id: '2', option_text: 'Frotando la mano en círculos sobre el pecho', is_correct: false, sort_order: 2 },
        { id: '3', option_text: 'Sacudiendo la mano en letra A', is_correct: false, sort_order: 3 },
        { id: '4', option_text: 'Cruzando los dedos índice y medio', is_correct: false, sort_order: 4 }
      ]
    },
    {
      id: 'e4444444-4444-4444-4444-444444444444',
      lesson_id: 'd1111111-1111-1111-1111-111111111111',
      question_text: '¿Qué seña representa la afirmación "Sí"?',
      quiz_options: [
        { id: '1', option_text: 'Puño en letra S asintiendo verticalmente', is_correct: true, sort_order: 1 },
        { id: '2', option_text: 'Mover el dedo índice como péndulo', is_correct: false, sort_order: 2 },
        { id: '3', option_text: 'Cerrar los dedos en forma de pico', is_correct: false, sort_order: 3 },
        { id: '4', option_text: 'Hacer círculos con la letra L', is_correct: false, sort_order: 4 }
      ]
    }
  ]
};
