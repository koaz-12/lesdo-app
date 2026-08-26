-- database/schema.sql

-- Habilitar extensión para búsqueda de texto
CREATE EXTENSION IF NOT EXISTS pg_trgm;

-- 1. categories
CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    icon VARCHAR(10),
    color VARCHAR(7),
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. lessons
CREATE TABLE lessons (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    video_url TEXT,
    thumbnail_url TEXT,
    sort_order INTEGER DEFAULT 0,
    duration_seconds INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. dictionary_words
CREATE TABLE dictionary_words (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    word VARCHAR(200) NOT NULL,
    definition TEXT,
    video_url TEXT NOT NULL,
    thumbnail_url TEXT,
    category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX idx_dictionary_word_trgm ON dictionary_words USING gin (word gin_trgm_ops);

-- 4. quizzes
CREATE TABLE quizzes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lesson_id UUID REFERENCES lessons(id) ON DELETE CASCADE,
    question_text TEXT NOT NULL,
    video_url TEXT NOT NULL,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 5. quiz_options
CREATE TABLE quiz_options (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    quiz_id UUID REFERENCES quizzes(id) ON DELETE CASCADE,
    option_text VARCHAR(200) NOT NULL,
    is_correct BOOLEAN DEFAULT false,
    sort_order INTEGER DEFAULT 0
);

-- 6. user_profiles
CREATE TABLE user_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    display_name VARCHAR(100),
    avatar_url TEXT,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- 7. user_progress
CREATE TABLE user_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    lesson_id UUID REFERENCES lessons(id) ON DELETE CASCADE,
    completed BOOLEAN DEFAULT false,
    completed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT now(),
    UNIQUE(user_id, lesson_id)
);

-- 8. quiz_results
CREATE TABLE quiz_results (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    quiz_id UUID REFERENCES quizzes(id) ON DELETE CASCADE,
    selected_option_id UUID REFERENCES quiz_options(id),
    is_correct BOOLEAN DEFAULT false,
    answered_at TIMESTAMPTZ DEFAULT now()
);

-- Índices adicionales
CREATE INDEX idx_lessons_category_id ON lessons(category_id);
CREATE INDEX idx_quizzes_lesson_id ON quizzes(lesson_id);
CREATE INDEX idx_quiz_options_quiz_id ON quiz_options(quiz_id);
CREATE INDEX idx_dictionary_words_category_id ON dictionary_words(category_id);
CREATE INDEX idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX idx_user_progress_lesson_id ON user_progress(lesson_id);
CREATE INDEX idx_quiz_results_user_id ON quiz_results(user_id);
CREATE INDEX idx_quiz_results_quiz_id ON quiz_results(quiz_id);

-- Función y trigger para actualizar updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER user_profiles_updated_at
BEFORE UPDATE ON user_profiles
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();

-- Función y trigger para crear perfil automáticamente
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.user_profiles (id, display_name, avatar_url)
    VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'avatar_url');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Habilitar RLS (Row Level Security)
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE dictionary_words ENABLE ROW LEVEL SECURITY;
ALTER TABLE quizzes ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_options ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_results ENABLE ROW LEVEL SECURITY;

-- Políticas de RLS
-- Lectura pública para contenido educativo
CREATE POLICY "Public select categories" ON categories FOR SELECT USING (true);
CREATE POLICY "Public select lessons" ON lessons FOR SELECT USING (true);
CREATE POLICY "Public select dictionary_words" ON dictionary_words FOR SELECT USING (true);
CREATE POLICY "Public select quizzes" ON quizzes FOR SELECT USING (true);
CREATE POLICY "Public select quiz_options" ON quiz_options FOR SELECT USING (true);

-- user_profiles: solo el propio usuario
CREATE POLICY "Users can view own profile" ON user_profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON user_profiles FOR UPDATE USING (auth.uid() = id);

-- user_progress: solo el propio usuario
CREATE POLICY "Users can view own progress" ON user_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own progress" ON user_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own progress" ON user_progress FOR UPDATE USING (auth.uid() = user_id);

-- quiz_results: solo el propio usuario
CREATE POLICY "Users can view own results" ON quiz_results FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own results" ON quiz_results FOR INSERT WITH CHECK (auth.uid() = user_id);
