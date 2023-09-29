import React from 'react'
import { shop } from '../products'
import css from './home.module.css'
import { Link } from 'react-router-dom'

const Bestsellers = () => {

	return (
		<article className={css.bestsellers}>
			<h2>Our Bestsellers</h2>
			<div className={css.block}>
				{shop.map(item => {
					return (
						<div className={css.box} key={item.id}>
							<Link to={`/products/${item.id}`}>
								<img src={item.img} alt='' />
							</Link>
							<div className={css.boxPrice}>
								<p>{item.p}</p>
								<h6>{item.price}£</h6>
							</div>
						</div>
					)
				})}
			</div>
		</article>
	)
}

export default Bestsellers
