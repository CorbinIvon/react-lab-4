import Card from './components/Card.jsx'
import CardForm from './components/CardForm.jsx'
import findCards from './utils/supabase-client'

export default function Home() {
  const cards = findCards()
  return (
    <div className="m-8">
      <h1 className="text-lg">Corbin Meier - REACT LAB 04</h1>
      <p>This site demonstrates the final result for the React Lab 04 assignment.</p>
      <div className="flex flex-col items-center m-4">
        <CardForm />
      </div>
      <div className="cards-content flex flex-wrap" id="cards-container">
        {}
      </div>
    </div>
  )
}
