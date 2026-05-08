import { createClient } from '@supabase/supabase-js';

/**
 * Client Supabase Admin (avec service_role key)
 * ⚠️ À utiliser UNIQUEMENT côté serveur, jamais côté client
 */
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);
