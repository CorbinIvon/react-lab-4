import Card from './components/Card.jsx';

export default function Home() {
  return (
    <div className="m-8">
      <h1 className="text-lg">Corbin Meier - REACT LAB 04</h1>
      <p>
        This site demonstrates the final result for the React Lab 04 assignment.
      </p>
      <div className="flex flex-col items-center m-4">
        <form className="bg-slate-400 rounded-lg p-8 pt-1 w-1/2">
          <label className="block mt-4">
            <span className="text-gray-700">Title</span>
            <input
              type="text"
              className="form-input mt-1 block w-full border-2 border-gray-300 rounded-md text-black"
              placeholder="Enter title here..."
            />
          </label>
          <label className="block mt-4">
            <span className="text-gray-700">Subtitle</span>
            <input
              type="text"
              className="form-input mt-1 block w-full border-2 border-gray-300 rounded-md text-black"
              placeholder="Enter subtitle here..."
            />
          </label>
          <label className="block mt-4">
            <span className="text-gray-700">Image</span>
            <input
              type="text"
              className="form-input mt-1 block w-full border-2 border-gray-300 rounded-md text-black"
              placeholder="Enter image URL here..."
            />
          </label>
          <label className="block mt-4">
            <span className="text-gray-700">Description</span>
            <input
              type="text-area"
              className="form-input mt-1 block w-full border-2 border-gray-300 rounded-md text-black"
              placeholder="Enter description here..."
            />
          </label>
          <button className="bg-slate-700 hover:bg-slate-800 transition-colors duration-300 ease-in-out text-white font-bold py-2 px-4 rounded mt-4 float-right" type='button'>
            Add Card
          </button>
        </form>
      </div>
      <div className="cards-content flex flex-wrap">
        <Card />
      </div>
    </div>
  )
}
