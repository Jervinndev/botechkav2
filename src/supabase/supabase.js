import { createClient } from "@supabase/supabase-js";

const APIKEY = import.meta.env.VITE_SUPABASE_URL;
const ANONKEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(APIKEY, ANONKEY);