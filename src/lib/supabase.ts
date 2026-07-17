import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Mock supabase client to prevent app crashing when env variables are missing
const createMockSupabase = () => {
  console.warn(
    'Supabase URL or Anon Key is missing. Using a mock Supabase client. ' +
    'Form submissions will be logged to the console instead of saved to the database.'
  );
  
  return {
    from: (table: string) => ({
      insert: async (payload: any) => {
        console.log(`[Mock Supabase Insert] Table: ${table}`, payload);
        return { data: null, error: null };
      },
    }),
  };
};

export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : (createMockSupabase() as any);

export type Enquiry = {
  id?: string;
  issue_type: string;
  hot_water_type?: string | null;
  property_scope?: string | null;
  contact_preference?: string | null;
  name?: string | null;
  phone?: string | null;
  email?: string | null;
  suburb?: string | null;
  message?: string | null;
  status?: string;
  created_at?: string;
};

export type Callback = {
  id?: string;
  name?: string | null;
  phone?: string | null;
  issue?: string | null;
  preferred_time?: string | null;
  status?: string;
  created_at?: string;
};
