import React from 'react'
import css from "./contacts.module.css"
import ContactsInfo from './ContactsInfo'
import Field from './Field'

const Contacts = () => {
  return (
	<div>
    <ContactsInfo/>
    <div className={css.img}></div>
    <Field/>
  </div>
  )
}

export default Contacts