export default function Input({ type, placeholder, name, id, className }) {
  if (type == 'textarea') {
    return <textarea placeholder={placeholder} name={name} id={id} className={className} />
  }
  return <input type={type} placeholder={placeholder} name={name} id={id} className={className} />
}
// Instructions:
/*
- html5 input tag - https://www.w3schools.com/tags/tag_input.asp
- props
    - type
        - default value of “text”
    - placeholder
        - default value of “enter text here…”
    - name
    - id
- attributes
    - className - make the input look decent
    - type - uses the `type` prop from above
    - name - uses the `name` prop from above
    - id - uses the `id` prop from above
    - placeholder - uses the `placeholder` prop from above

*/
