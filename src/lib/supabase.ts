import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
