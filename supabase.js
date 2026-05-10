const SUPABASE_URL = 'https://cwdvaeszbrnfjtosatsm.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_cTw289iIgva91ogsGsqFjQ_YTpkPKk_';

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);