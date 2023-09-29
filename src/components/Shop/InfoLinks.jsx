import cn from 'classnames'
import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Delivery from './Delivery'
import Description from './Description'
import Details from './Details'
import Reviews from './Reviews'
import css from './shop.module.css'
const InfoLinks = () => {
	let [searchParams, setSearchParams] = useSearchParams()
	const link = searchParams.get('link')
	function click(e) {
		setSearchParams({
			link: e.target.innerHTML,
		})
	}
	return (
		<div>
			<ul className={css.link}>
				<li
					onClick={click}
					className={cn(css.li, link === 'Details' ? css.active : null)}
				>
					Details
				</li>
				<li
					onClick={click}
					className={cn(css.li, link === 'Description' ? css.active : null)}
				>
					Description
				</li>
				<li
					onClick={click}
					className={cn(css.li, link === 'Delivery' ? css.active : null)}
				>
					Delivery
				</li>
				<li
					onClick={click}
					className={cn(css.li, link === 'Reviews' ? css.active : null)}
				>
					Reviews
				</li>
			</ul>
			<Details link={link}/>
			<Description link={link}/>
			<Delivery link={link}/>
			<Reviews link={link}/>
		</div>
	)
}

export default InfoLinks
