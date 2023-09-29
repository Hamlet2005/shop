import React, { useState } from 'react'
import { connect } from 'react-redux'
import css from './shop.module.css'

const mapDispatchToProps = dispatch => {
	return {
		changePrice: (item, name) => {
			dispatch({ type: 'changePrice', item: item, name: name})
		},
	}
} 

const BuyFunc = (props) => {
	const increment = (e, item) => {
		let qty = e.target.previousElementSibling.textContent
		qty++
		e.target.previousElementSibling.textContent = qty
		const name = "inc";
		props.changePrice(item, name) 
		setNumber(qty)
		props.handleClick(number)
	}
 
	const decrement = (e, item) => {
		let qty = e.target.nextElementSibling.textContent
		if(qty <= 1){
			qty = 1
		} else{
			qty--;
			const name = "dec"; 
			e.target.nextElementSibling.textContent = qty
			props.changePrice(item, name)
		}
		setNumber(qty)
		props.handleClick(number)
	}
	const [number, setNumber] = useState(1)

	return (
		
		<div className={css.func}>
			<button className={css.btn} onClick={e => decrement(e, props.item)} >-</button>
			<span>{number}</span>
			<button className={css.btn} onClick={e => increment(e, props.item)}  >+</button>
		</div>
	)
}

export default connect(null, mapDispatchToProps)(BuyFunc)
