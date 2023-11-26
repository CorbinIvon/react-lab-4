async function createCard(formData) {
  'use server'
  // get each field out of formData 
  // call supabase-client insertCard
}

export default function CardForm() {
  
}

// Instructions:
/*
- html5 tag form - https://www.w3schools.com/html/html_form_elements.asp
- server action `createCard`
    - runs `insertCard` from `supabase-client` 
    - action attribute on 
- rendered form
    - attribute
        - action={createCard}
    - children
        - `<Button>`  component 
            - type=”submit”
        - Four `<``Field``><Label /><Input /></``Field``>`  Components
            - title
            - subtitle
            - img
            - description
*/