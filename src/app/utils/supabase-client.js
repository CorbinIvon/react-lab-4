
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://xbaugsvuvnumbzjzsygn.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY

export function getClient() {
  const supabase = createClient(supabaseUrl, supabaseKey)
  return supabase;
}

export default async function insertCard(card) {
  const supabase = getClient()
  // implement https://supabase.com/docs/reference/javascript/insert

const { data, error } = await supabase
  .from('Cards')
  .insert({ 
    title: card.title,
    subtitle: card.subtitle,
    img: card.img,
    description: card.description
  })
  console.log('data: ' + data);
  console.log('error');
  console.log(error);
}

export async function findCards() {
  const supabase = getClient()
  // implements https://supabase.com/docs/reference/javascript/select
}
