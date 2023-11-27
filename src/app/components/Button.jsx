export default function Button({ children, onClick, type = 'button' }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className="bg-slate-700 hover:bg-slate-800 transition-colors duration-300 ease-in-out text-white font-bold py-2 px-4 rounded mt-4 float-right"
    >
      {children}
    </button>
  )
}
// Instructions:
/*
- html5 button tag https://www.w3schools.com/tags/tag_button.asp
- props
    - children
    - onClick
    - type
        - default value of ‘button’
- attributes
    - onClick
    - type
    - className - make it look decent
*/
