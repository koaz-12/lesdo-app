-- database/storage-setup.sql

-- Crear bucket para videos
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
    'lesdo-videos',
    'lesdo-videos',
    true,
    52428800, -- 50MB en bytes
    ARRAY['video/mp4', 'video/webm']::text[]
);

-- Crear bucket para miniaturas
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
    'lesdo-thumbnails',
    'lesdo-thumbnails',
    true,
    5242880, -- 5MB en bytes
    ARRAY['image/jpeg', 'image/png', 'image/webp']::text[]
);

-- Políticas de RLS para el bucket 'lesdo-videos'
-- Permitir lectura a todos (público)
CREATE POLICY "Public access to lesdo-videos" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'lesdo-videos');

-- Permitir escritura/edición/eliminación solo a usuarios autenticados (idealmente admin o service_role, aquí simplificado para auth)
CREATE POLICY "Auth users can upload lesdo-videos" 
ON storage.objects FOR INSERT 
WITH CHECK (bucket_id = 'lesdo-videos' AND auth.role() = 'authenticated');

CREATE POLICY "Auth users can update lesdo-videos" 
ON storage.objects FOR UPDATE 
USING (bucket_id = 'lesdo-videos' AND auth.role() = 'authenticated');

CREATE POLICY "Auth users can delete lesdo-videos" 
ON storage.objects FOR DELETE 
USING (bucket_id = 'lesdo-videos' AND auth.role() = 'authenticated');


-- Políticas de RLS para el bucket 'lesdo-thumbnails'
-- Permitir lectura a todos (público)
CREATE POLICY "Public access to lesdo-thumbnails" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'lesdo-thumbnails');

-- Permitir escritura/edición/eliminación solo a usuarios autenticados
CREATE POLICY "Auth users can upload lesdo-thumbnails" 
ON storage.objects FOR INSERT 
WITH CHECK (bucket_id = 'lesdo-thumbnails' AND auth.role() = 'authenticated');

CREATE POLICY "Auth users can update lesdo-thumbnails" 
ON storage.objects FOR UPDATE 
USING (bucket_id = 'lesdo-thumbnails' AND auth.role() = 'authenticated');

CREATE POLICY "Auth users can delete lesdo-thumbnails" 
ON storage.objects FOR DELETE 
USING (bucket_id = 'lesdo-thumbnails' AND auth.role() = 'authenticated');

/*
Estructura de carpetas recomendada para Storage:

lesdo-videos/
    alfabeto/
        vocales.mp4
        consonantes-1.mp4
    saludos/
        hola-adios.mp4
        como-estas.mp4
    dias-meses/
        dias-semana.mp4
    expresiones/
        si-no.mp4
    diccionario/
        hola.mp4
        gracias.mp4
    quizzes/
        q1.mp4

lesdo-thumbnails/
    alfabeto/
        vocales.jpg
        consonantes-1.jpg
    saludos/
        hola-adios.jpg
        como-estas.jpg
    dias-meses/
        dias-semana.jpg
    expresiones/
        si-no.jpg
    diccionario/
        hola.jpg
        gracias.jpg
*/
