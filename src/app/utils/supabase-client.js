import { createClient } from '@supabase/supabase-js'
import Card from '../components/Card'
const supabaseUrl = 'https://xbaugsvuvnumbzjzsygn.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY

export function getClient() {
  return createClient(supabaseUrl, supabaseKey)
}

export async function insertCard(card = { title: null, subtitle: null, img: null, description: null }) {
  const supabase = getClient()
  // implement https://supabase.com/docs/reference/javascript/insert

  const { data: Cards, error } = await supabase.from('Cards').insert({
    title: card.title,
    subtitle: card.subtitle,
    img: card.img,
    description: card.description,
  })
  // Insert the card into the DOM. Insert into the id="cards-container" div
  return <Card title={card.title} subtitle={card.subtitle} img={card.img} description={card.description} />
}

export async function findCards() {
  const supabase = getClient()
  // implements https://supabase.com/docs/reference/javascript/select

  const { data: Cards, error } = await supabase.from('Cards').select('*')
  if (error) console.log(error)
  return Cards
}
