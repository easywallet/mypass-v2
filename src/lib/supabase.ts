import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// No hardcoded placeholders. The app will rely strictly on environment variables.
if (!supabaseUrl || !supabaseAnonKey) {
    if (process.env.NODE_ENV === 'production') {
        throw new Error("Supabase environment variables are missing!");
    }
}

export const supabase = createClient(
    supabaseUrl || '',
    supabaseAnonKey || ''
);
