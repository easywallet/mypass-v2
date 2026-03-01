import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Only warn during build to avoid breaking the deployment.
if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("Supabase environment variables are missing at initialization.");
}

export const supabase = createClient(
    supabaseUrl || 'https://missing-url.supabase.co',
    supabaseAnonKey || 'missing-key'
);
