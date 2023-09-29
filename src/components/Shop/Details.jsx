import React from 'react'
import css from "./shop.module.css"

const Details = ({link}) => {


	return <div>{link === 'Details' ? 
		<ul className={css.details}>
			<li>Handmade item</li>
			<li>Necklace length: 18 Inches</li>
			<li>Material: Stainless steel</li>
			<li>Chain style: Rope</li>
			<li>Adjustable length: No</li>
		</ul> 
		: null
	}
	</div>
}

export default Details
