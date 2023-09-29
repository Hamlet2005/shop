import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

const Footer = () => {
  
	const [value,setValue] = useState("")
	const [visible, setVisible] = useState(false);
	const changeValue = (e) => {
		setValue(e.target.value)
	}

	const show = () => {
		if(!value.trim()){
			setVisible(true)
		}
	}
	
	const hide = () => {
		setVisible(false)
	}

	return (
	<div className="footer">
		<div className='footerFlex'>
			<div className='footerInput'>
				<p>Lorem ipsum dolor sit amet</p>
				<input type="email" onChange={changeValue} value={value} placeholder='Email' />
				<button onClick={show.bind(this)}>Send</button>
			</div>
			<div className='footerNav'>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/shop">Shop</NavLink>
				<NavLink to="/features">Features</NavLink>
				<NavLink to="/contacts">Contacts</NavLink>
				<NavLink to="/instantQuote">InstantQuote</NavLink>
			</div>
		</div>
		<p>©2020 Versa</p>

		<div>
			<Rodal visible={visible} onClose={hide.bind(this)}>
				<div>Content</div>
				<p className='p1'>Please enter the email </p>
			</Rodal>
		</div>
	</div>
  )
}

export default Footer