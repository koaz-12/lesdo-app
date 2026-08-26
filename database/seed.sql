-- database/seed.sql

-- Insertar categorías
INSERT INTO categories (id, name, slug, description, icon, color, sort_order)
VALUES 
    ('11111111-1111-1111-1111-111111111111', 'Alfabeto', 'alfabeto', 'Aprende las letras del abecedario en LESDO', '🤟', '#1E88E5', 1),
    ('22222222-2222-2222-2222-222222222222', 'Saludos y Presentaciones', 'saludos', 'Conoce cómo interactuar y presentarte a los demás', '👋', '#00BFA5', 2),
    ('33333333-3333-3333-3333-333333333333', 'Días y Meses', 'dias-meses', 'Expresa el tiempo, días de la semana y meses del año', '📅', '#7C4DFF', 3),
    ('44444444-4444-4444-4444-444444444444', 'Expresiones Comunes', 'expresiones', 'Palabras y frases útiles para el día a día', '💬', '#FF7043', 4);

-- Insertar lecciones
INSERT INTO lessons (id, category_id, title, description, video_url, thumbnail_url, sort_order, duration_seconds)
VALUES
    -- Alfabeto
    ('a1111111-1111-1111-1111-111111111111', '11111111-1111-1111-1111-111111111111', 'Vocales (A, E, I, O, U)', 'Aprende las 5 vocales', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/alfabeto/vocales.mp4', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-thumbnails/alfabeto/vocales.jpg', 1, 120),
    ('a2222222-2222-2222-2222-222222222222', '11111111-1111-1111-1111-111111111111', 'Consonantes grupo 1 (B-F)', 'Primer grupo de consonantes', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/alfabeto/consonantes-1.mp4', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-thumbnails/alfabeto/consonantes-1.jpg', 2, 180),
    ('a3333333-3333-3333-3333-333333333333', '11111111-1111-1111-1111-111111111111', 'Consonantes grupo 2 (G-L)', 'Segundo grupo de consonantes', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/alfabeto/consonantes-2.mp4', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-thumbnails/alfabeto/consonantes-2.jpg', 3, 180),
    ('a4444444-4444-4444-4444-444444444444', '11111111-1111-1111-1111-111111111111', 'Consonantes grupo 3 (M-R)', 'Tercer grupo de consonantes', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/alfabeto/consonantes-3.mp4', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-thumbnails/alfabeto/consonantes-3.jpg', 4, 180),
    ('a5555555-5555-5555-5555-555555555555', '11111111-1111-1111-1111-111111111111', 'Consonantes grupo 4 (S-Z)', 'Cuarto grupo de consonantes', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/alfabeto/consonantes-4.mp4', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-thumbnails/alfabeto/consonantes-4.jpg', 5, 180),

    -- Saludos y Presentaciones
    ('b1111111-1111-1111-1111-111111111111', '22222222-2222-2222-2222-222222222222', 'Hola y Adiós', 'Saludos básicos', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/saludos/hola-adios.mp4', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-thumbnails/saludos/hola-adios.jpg', 1, 90),
    ('b2222222-2222-2222-2222-222222222222', '22222222-2222-2222-2222-222222222222', '¿Cómo estás?', 'Preguntar sobre el bienestar', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/saludos/como-estas.mp4', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-thumbnails/saludos/como-estas.jpg', 2, 100),
    ('b3333333-3333-3333-3333-333333333333', '22222222-2222-2222-2222-222222222222', 'Me llamo...', 'Decir tu nombre', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/saludos/me-llamo.mp4', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-thumbnails/saludos/me-llamo.jpg', 3, 110),
    ('b4444444-4444-4444-4444-444444444444', '22222222-2222-2222-2222-222222222222', 'Mucho gusto', 'Responder a una presentación', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/saludos/mucho-gusto.mp4', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-thumbnails/saludos/mucho-gusto.jpg', 4, 80),
    ('b5555555-5555-5555-5555-555555555555', '22222222-2222-2222-2222-222222222222', 'Por favor y Gracias', 'Cortesía básica', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/saludos/por-favor-gracias.mp4', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-thumbnails/saludos/por-favor-gracias.jpg', 5, 90),

    -- Días y Meses
    ('c1111111-1111-1111-1111-111111111111', '33333333-3333-3333-3333-333333333333', 'Días de la semana', 'Lunes a Domingo', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/dias-meses/dias-semana.mp4', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-thumbnails/dias-meses/dias-semana.jpg', 1, 200),
    ('c2222222-2222-2222-2222-222222222222', '33333333-3333-3333-3333-333333333333', 'Meses del año', 'Enero a Diciembre', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/dias-meses/meses-ano.mp4', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-thumbnails/dias-meses/meses-ano.jpg', 2, 300),
    ('c3333333-3333-3333-3333-333333333333', '33333333-3333-3333-3333-333333333333', 'Ayer/Hoy/Mañana', 'Conceptos de tiempo', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/dias-meses/ayer-hoy-manana.mp4', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-thumbnails/dias-meses/ayer-hoy-manana.jpg', 3, 120),
    ('c4444444-4444-4444-4444-444444444444', '33333333-3333-3333-3333-333333333333', 'Las estaciones', 'Primavera, Verano, Otoño, Invierno', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/dias-meses/estaciones.mp4', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-thumbnails/dias-meses/estaciones.jpg', 4, 150),

    -- Expresiones Comunes
    ('d1111111-1111-1111-1111-111111111111', '44444444-4444-4444-4444-444444444444', 'Sí y No', 'Respuestas básicas', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/expresiones/si-no.mp4', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-thumbnails/expresiones/si-no.jpg', 1, 60),
    ('d2222222-2222-2222-2222-222222222222', '44444444-4444-4444-4444-444444444444', 'Preguntas básicas', 'Qué, Quién, Cuándo, Dónde', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/expresiones/preguntas.mp4', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-thumbnails/expresiones/preguntas.jpg', 2, 180),
    ('d3333333-3333-3333-3333-333333333333', '44444444-4444-4444-4444-444444444444', 'Expresiones de cortesía', 'Permiso, Perdón', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/expresiones/cortesia.mp4', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-thumbnails/expresiones/cortesia.jpg', 3, 100),
    ('d4444444-4444-4444-4444-444444444444', '44444444-4444-4444-4444-444444444444', 'Números del 1 al 10', 'Conteo básico', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/expresiones/numeros-1-10.mp4', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-thumbnails/expresiones/numeros-1-10.jpg', 4, 150),
    ('d5555555-5555-5555-5555-555555555555', '44444444-4444-4444-4444-444444444444', 'Colores', 'Colores primarios', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/expresiones/colores.mp4', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-thumbnails/expresiones/colores.jpg', 5, 200);


-- Insertar palabras en el diccionario
INSERT INTO dictionary_words (word, definition, video_url, thumbnail_url, category_id)
VALUES
    ('Hola', 'Saludo común para iniciar una interacción.', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/diccionario/hola.mp4', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-thumbnails/diccionario/hola.jpg', '22222222-2222-2222-2222-222222222222'),
    ('Adiós', 'Despedida común.', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/diccionario/adios.mp4', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-thumbnails/diccionario/adios.jpg', '22222222-2222-2222-2222-222222222222'),
    ('Gracias', 'Expresión de gratitud.', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/diccionario/gracias.mp4', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-thumbnails/diccionario/gracias.jpg', '22222222-2222-2222-2222-222222222222'),
    ('Por favor', 'Expresión de cortesía para pedir algo.', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/diccionario/por-favor.mp4', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-thumbnails/diccionario/por-favor.jpg', '22222222-2222-2222-2222-222222222222'),
    ('Buenos días', 'Saludo matutino.', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/diccionario/buenos-dias.mp4', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-thumbnails/diccionario/buenos-dias.jpg', '22222222-2222-2222-2222-222222222222'),
    ('Buenas noches', 'Saludo o despedida nocturna.', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/diccionario/buenas-noches.mp4', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-thumbnails/diccionario/buenas-noches.jpg', '22222222-2222-2222-2222-222222222222'),
    ('Sí', 'Afirmación.', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/diccionario/si.mp4', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-thumbnails/diccionario/si.jpg', '44444444-4444-4444-4444-444444444444'),
    ('No', 'Negación.', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/diccionario/no.mp4', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-thumbnails/diccionario/no.jpg', '44444444-4444-4444-4444-444444444444'),
    ('Lunes', 'Primer día de la semana.', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/diccionario/lunes.mp4', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-thumbnails/diccionario/lunes.jpg', '33333333-3333-3333-3333-333333333333'),
    ('Martes', 'Segundo día de la semana.', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/diccionario/martes.mp4', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-thumbnails/diccionario/martes.jpg', '33333333-3333-3333-3333-333333333333'),
    ('Rojo', 'Color primario.', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/diccionario/rojo.mp4', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-thumbnails/diccionario/rojo.jpg', '44444444-4444-4444-4444-444444444444'),
    ('Azul', 'Color primario.', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/diccionario/azul.mp4', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-thumbnails/diccionario/azul.jpg', '44444444-4444-4444-4444-444444444444'),
    ('Uno', 'Número 1.', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/diccionario/uno.mp4', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-thumbnails/diccionario/uno.jpg', '44444444-4444-4444-4444-444444444444'),
    ('Dos', 'Número 2.', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/diccionario/dos.mp4', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-thumbnails/diccionario/dos.jpg', '44444444-4444-4444-4444-444444444444'),
    ('Tres', 'Número 3.', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/diccionario/tres.mp4', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-thumbnails/diccionario/tres.jpg', '44444444-4444-4444-4444-444444444444');

-- Insertar cuestionarios (Quizzes)
INSERT INTO quizzes (id, lesson_id, question_text, video_url, sort_order)
VALUES
    ('e1111111-1111-1111-1111-111111111111', 'a1111111-1111-1111-1111-111111111111', '¿Qué vocal se muestra en el video?', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/quizzes/q1.mp4', 1),
    ('e2222222-2222-2222-2222-222222222222', 'b1111111-1111-1111-1111-111111111111', '¿Qué seña se muestra en el video?', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/quizzes/q2.mp4', 1),
    ('e3333333-3333-3333-3333-333333333333', 'c1111111-1111-1111-1111-111111111111', '¿Qué día de la semana es este?', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/quizzes/q3.mp4', 1),
    ('e4444444-4444-4444-4444-444444444444', 'd1111111-1111-1111-1111-111111111111', '¿Qué significa esta seña?', 'https://hlfgkjxobhwmmmsldljad.supabase.co/storage/v1/object/public/lesdo-videos/quizzes/q4.mp4', 1);

-- Insertar opciones de cuestionarios
INSERT INTO quiz_options (quiz_id, option_text, is_correct, sort_order)
VALUES
    -- Opciones Quiz 1 (Vocal A)
    ('e1111111-1111-1111-1111-111111111111', 'A', true, 1),
    ('e1111111-1111-1111-1111-111111111111', 'E', false, 2),
    ('e1111111-1111-1111-1111-111111111111', 'I', false, 3),
    ('e1111111-1111-1111-1111-111111111111', 'O', false, 4),

    -- Opciones Quiz 2 (Hola)
    ('e2222222-2222-2222-2222-222222222222', 'Adiós', false, 1),
    ('e2222222-2222-2222-2222-222222222222', 'Hola', true, 2),
    ('e2222222-2222-2222-2222-222222222222', 'Gracias', false, 3),
    ('e2222222-2222-2222-2222-222222222222', 'Por favor', false, 4),

    -- Opciones Quiz 3 (Lunes)
    ('e3333333-3333-3333-3333-333333333333', 'Martes', false, 1),
    ('e3333333-3333-3333-3333-333333333333', 'Viernes', false, 2),
    ('e3333333-3333-3333-3333-333333333333', 'Domingo', false, 3),
    ('e3333333-3333-3333-3333-333333333333', 'Lunes', true, 4),

    -- Opciones Quiz 4 (Sí)
    ('e4444444-4444-4444-4444-444444444444', 'No', false, 1),
    ('e4444444-4444-4444-4444-444444444444', 'Sí', true, 2),
    ('e4444444-4444-4444-4444-444444444444', 'Tal vez', false, 3),
    ('e4444444-4444-4444-4444-444444444444', 'No sé', false, 4);

-- Habilitar extensión pgcrypto para encriptación de contraseñas si no está activa
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Insertar usuario Demo en Supabase Auth directamente (Usuario: demo / Clave: password123)
INSERT INTO auth.users (
    instance_id,
    id,
    aud,
    role,
    email,
    encrypted_password,
    email_confirmed_at,
    raw_app_meta_data,
    raw_user_meta_data,
    created_at,
    updated_at
) VALUES (
    '00000000-0000-0000-0000-000000000000',
    'f0000000-0000-0000-0000-000000000001',
    'authenticated',
    'authenticated',
    'demo@lesdo.app',
    crypt('password123', gen_salt('bf')),
    now(),
    '{"provider":"email","providers":["email"]}',
    '{"full_name":"Estudiante Demo","username":"demo"}',
    now(),
    now()
) ON CONFLICT (id) DO NOTHING;
