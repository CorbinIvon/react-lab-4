
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://xbaugsvuvnumbzjzsygn.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY

export function getClient() {
  const supabase = createClient(supabaseUrl, supabaseKey)
  return supabase;
}

export async function insertCard(card) {
  const supabase = getClient()
  // implement https://supabase.com/docs/reference/javascript/insert
}

export async function findCards() {
  const supabase = getClient()
  // implements https://supabase.com/docs/reference/javascript/select
}
