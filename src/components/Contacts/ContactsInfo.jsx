import React from 'react'
import css from "./contacts.module.css"

const ContactsInfo = () => {
  return (
	<div className={css.contactsInfo}>
		<h2>Contacts</h2>
		<div className={css.block}>
			<div className={css.box}>
				<p className={css.p}>Address</p>
				<div></div>
				<p>12 Van Dyke St,<br />Brooklyn, NY 11231</p>
			</div>
			<div className={css.box}>
				<p className={css.p}>Phone</p>
				<div></div>
				<p>1 (800) 123-4567 <br />1 (800) 123-4568</p>
			</div>
			<div className={css.box}>
				<p className={css.p}>Mail</p>
				<div></div>
				<p>sales@yoursite.com <br />hr@yoursite.com</p>
			</div>
			<div className={css.box}>
				<p className={css.p}>Hours</p>
				<div></div>
				<p>Mon - Fri: 8 AM - 6 PM <br />Sat: 9 AM - 4 PM</p>
			</div>
		</div>
		
	</div>
  )
}

export default ContactsInfo