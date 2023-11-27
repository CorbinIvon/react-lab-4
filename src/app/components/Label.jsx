export default function Label({ label, htmlFor }) {
  return (
    <label className="block mt-4" htmlFor={htmlFor}>
      <span className="text-gray-200">{label}</span>
    </label>
  )
}
// Instructions:
/*
- HTML5 label tag - https://www.w3schools.com/tags/tag_label.asp
- props
    - label - used as the text rendered inside the label
    - htmlFor - the id of the input element this label belongs to
*/
