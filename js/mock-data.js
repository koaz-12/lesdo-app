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
    // Saludos y Cortesía
    { word: 'Hola', icon: '👋', definition: 'Mano abierta a la altura de la sien con movimiento hacia el exterior.', category: 'Saludos y Presentaciones' },
    { word: 'Adiós', icon: '👋', definition: 'Mano abierta a la altura del hombro moviendo los dedos en vaivén.', category: 'Saludos y Presentaciones' },
    { word: 'Gracias', icon: '🙏', definition: 'Puntas de los dedos tocan la barbilla y se extienden al frente.', category: 'Saludos y Presentaciones' },
    { word: 'Por favor', icon: '🤲', definition: 'Palma abierta sobre el pecho realizando un suave círculo en sentido horario.', category: 'Saludos y Presentaciones' },
    { word: 'Buenos días', icon: '🌅', definition: 'Seña de "Bueno" (mano en barbilla al frente) + seña de "Sol / Día" saliendo.', category: 'Saludos y Presentaciones' },
    { word: 'Buenas noches', icon: '🌙', definition: 'Seña de "Bueno" + mano dominante baja sobre la otra simulando la puesta del sol.', category: 'Saludos y Presentaciones' },
    { word: 'Mucho gusto', icon: '🤝', definition: 'Mano derecha abierta plana sobre el pecho realizando un círculo suave.', category: 'Saludos y Presentaciones' },
    { word: 'Nombre', image_url: getLetterImg('H'), icon: '🏷️', definition: 'Dedos índice y medio de ambas manos en H se tocan en cruz dos veces.', category: 'Saludos y Presentaciones' },

    // Letras Vocales
    { word: 'Letra A', image_url: getLetterImg('A'), icon: '🅰️', definition: 'Puño cerrado con el pulgar apoyado en el lateral del índice apuntando arriba.', category: 'Alfabeto' },
    { word: 'Letra E', image_url: getLetterImg('E'), icon: '📧', definition: 'Dedos doblados hacia abajo tocando ligeramente la punta del pulgar.', category: 'Alfabeto' },
    { word: 'Letra I', image_url: getLetterImg('I'), icon: 'ℹ️', definition: 'Puño cerrado levantando únicamente el dedo meñique hacia arriba.', category: 'Alfabeto' },
    { word: 'Letra O', image_url: getLetterImg('O'), icon: '⭕', definition: 'Todos los dedos curvados uniéndose con el pulgar para formar un círculo.', category: 'Alfabeto' },
    { word: 'Letra U', image_url: getLetterImg('U'), icon: '⛎', definition: 'Dedos índice y medio extendidos y juntos hacia arriba.', category: 'Alfabeto' },

    // Familia y Personas
    { word: 'Mamá / Madre', icon: '👩', definition: 'Mano abierta con el pulgar tocando dos veces la barbilla.', category: 'Familia' },
    { word: 'Papá / Padre', icon: '👨', definition: 'Mano abierta con el pulgar tocando dos veces la frente.', category: 'Familia' },
    { word: 'Hermano / Hermana', icon: '🧑‍🤝‍🧑', definition: 'Dedos índices de ambas manos se tocan y bajan juntos.', category: 'Familia' },
    { word: 'Hijo / Hija', icon: '👶', definition: 'Mano en el pecho que se desplaza hacia adelante como meciendo a un bebé.', category: 'Familia' },
    { word: 'Abuelo / Abuela', icon: '👵', definition: 'Pulgar en la frente (abuelo) o barbilla (abuela) dando dos pequeños saltos al frente.', category: 'Familia' },
    { word: 'Familia', image_url: getLetterImg('F'), icon: '👨‍👩‍👧‍👦', definition: 'Ambas manos en letra F juntas que hacen un círculo hacia afuera uniéndose al final.', category: 'Familia' },
    { word: 'Amigo / Amiga', icon: '🤝', definition: 'Dedos índices entrelazados como dos ganchos que se intercambian.', category: 'Familia' },

    // Alimentos y Bebidas
    { word: 'Agua', image_url: getLetterImg('W'), icon: '💧', definition: 'Mano en letra W tocando tres veces el labio inferior con el índice.', category: 'Alimentos' },
    { word: 'Café', icon: '☕', definition: 'Puño derecho gira sobre el puño izquierdo como moliendo granos de café.', category: 'Alimentos' },
    { word: 'Comer / Comida', icon: '🍽️', definition: 'Puntas de los dedos unidas al pulgar tocan la boca repetidamente.', category: 'Alimentos' },
    { word: 'Plátano', icon: '🍌', definition: 'Mano izquierda en puño hacia arriba; mano derecha simula pelar una cáscara.', category: 'Alimentos' },
    { word: 'Arroz', icon: '🍚', definition: 'Mano en letra A o simulación de comer con cuchara desde la palma.', category: 'Alimentos' },

    // Salud y Emergencias
    { word: 'Doctor / Médico', icon: '🩺', definition: 'Puntas de los dedos de la mano dominante tocan el pulso en la muñeca contraria.', category: 'Salud' },
    { word: 'Hospital', icon: '🏥', definition: 'Dedos índice y medio forman una cruz sobre el hombro izquierdo.', category: 'Salud' },
    { word: 'Ayuda / Ayudar', icon: '🆘', definition: 'Puño con pulgar arriba descansando sobre la palma plana que se eleva hacia arriba.', category: 'Salud' },
    { word: 'Medicina', icon: '💊', definition: 'Dedo medio gira sobre la palma abierta de la otra mano.', category: 'Salud' },
    { word: 'Dolor', icon: '⚡', definition: 'Dedos índices apuntándose entre sí realizando giros de torsión en la zona adolorida.', category: 'Salud' },

    // Educación y Escuela
    { word: 'Escuela / Colegio', icon: '🏫', definition: 'Palmas abiertas aplauden suavemente dos veces en posición horizontal.', category: 'Educación' },
    { word: 'Profesor / Maestro', icon: '👨‍🏫', definition: 'Ambas manos en las sienes se extienden al frente + seña de persona.', category: 'Educación' },
    { word: 'Aprender', icon: '🧠', definition: 'Mano toma información de la palma contraria y la lleva a la frente.', category: 'Educación' },
    { word: 'Libro', icon: '📖', definition: 'Ambas palmas unidas que se abren como las páginas de un libro.', category: 'Educación' },

    // Días y Expresiones
    { word: 'Lunes', image_url: getLetterImg('L'), icon: '📅', definition: 'Mano en letra L realizando un pequeño círculo en el aire.', category: 'Días y Meses' },
    { word: 'Martes', image_url: getLetterImg('M'), icon: '📅', definition: 'Mano en letra M realizando un pequeño círculo en el aire.', category: 'Días y Meses' },
    { word: 'Miércoles', image_url: getLetterImg('W'), icon: '📅', definition: 'Mano en letra W realizando un círculo en el aire.', category: 'Días y Meses' },
    { word: 'Jueves', image_url: getLetterImg('J'), icon: '📅', definition: 'Mano en letra J trazando la curva en el aire.', category: 'Días y Meses' },
    { word: 'Viernes', image_url: getLetterImg('V'), icon: '📅', definition: 'Mano en letra V realizando un círculo en el aire.', category: 'Días y Meses' },
    { word: 'Sábado', image_url: getLetterImg('S'), icon: '📅', definition: 'Mano en letra S girando suavemente frente a la barbilla.', category: 'Días y Meses' },
    { word: 'Domingo', icon: '⛪', definition: 'Ambas manos abiertas haciendo círculos hacia afuera.', category: 'Días y Meses' },
    { word: 'Sí', image_url: getLetterImg('S'), icon: '✅', definition: 'Puño cerrado en letra S asintiendo verticalmente como una cabeza.', category: 'Expresiones Comunes' },
    { word: 'No', icon: '❌', definition: 'Índice y medio se juntan rápidamente con el pulgar como un pico cerrándose.', category: 'Expresiones Comunes' },
    { word: 'República Dominicana', image_url: getLetterImg('R'), icon: '🇩🇴', definition: 'Mano en letra R sobre el corazón, luego seña de D describiendo el mapa.', category: 'Lugares' },
    { word: 'Santo Domingo', image_url: getLetterImg('S'), icon: '📍', definition: 'Mano en letra S y D trazando un círculo de capital.', category: 'Lugares' },
    { word: 'Casa / Hogar', icon: '🏠', definition: 'Puntas de los dedos de ambas manos se unen formando el tejado de una casa.', category: 'Lugares' }
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
