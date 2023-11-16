import React from 'react'
import ContactCard from './ContactCard'
import{useSelector}from 'react-redux'

const ContactList = () => {
  const contact=useSelector(state=>state.contactElement)
  console.log('contactElement',contact)
  return (
    <div>
      {
        contact.map((e)=>  <ContactCard mini={e} />
        )
      }
    </div>
  )
}

export default ContactList
