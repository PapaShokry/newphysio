import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://dgvtznbrauqnzajunrjs.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRndnR6bmJyYXVxbnphanVucmpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1NzM3MzEsImV4cCI6MjA1MzE0OTczMX0.bJOazWIDynsAMuWN5huZGGK76YLghVhsokHVfy0HXCM";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);