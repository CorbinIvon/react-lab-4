import insertCard from '../utils/supabase-client'

async function createCard(formData) {
  'use server'
  // get each field out of formData
  const title = formData.get("title")
  const subtitle = formData.get("subtitle")
  const img = formData.get("img")
  const description = formData.get("description")
  // call supabase-client insertCard
  insertCard({ title, subtitle, img, description })
}

import Field from './Field';
import Label from './Label';
import Input from './Input';
import Button from './Button';

export default function CardForm() {
  return (
    <form action={createCard} className='bg-slate-800 rounded-lg p-2 w-1/3'>
      <Field>
        <Label label="Title" htmlFor="title" />
        <Input type="text" placeholder="Enter title here..." name="title" id="title" className="text-black rounded-md p-1"/>
      </Field>
      <Field>
        <Label label="Subtitle" htmlFor="subtitle" />
        <Input type="text" placeholder="Enter subtitle here..." name="subtitle" id="subtitle" className="text-black rounded-md p-1"/>
      </Field>
      <Field>
        <Label label="Image" htmlFor="img" />
        <Input type="text" placeholder="Enter image url here..." name="img" id="img" className="text-black rounded-md p-1"/>
      </Field>
      <Field>
        <Label label="Description" htmlFor="description" />
        <Input type="textarea" placeholder="Enter description here..." name="description" id="description" className="text-black rounded-md p-1"/>
      </Field>
      <Button type="submit">Create Card</Button>
    </form>
  );
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