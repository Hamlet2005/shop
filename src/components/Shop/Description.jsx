import React from 'react'
import { useParams } from 'react-router-dom'
import { shop } from '../products'
import css from './shop.module.css'

const Description = ({link}) => {
	let { productId } = useParams()

	let item = ''
	shop.forEach(e => {
		if (e.id === +productId) {
			item = e.p
		}
	})
	return (
		<div className={css.description}>
			{link === 'Description' ? (
				<p>
					{item} <br />
					<br />
					Made of stainless steel with silver pvd plating <br />
					<br />
					Length: 18inch <br />
					Width: approx 3mm <br />
					Why not purchase as a gift for a loved one ? We never include invoices
					when sending out an item and can add a gift message if you let us know
					at checkout. <br />
					<br />
					All items are packaged in a plush branded pouch. If you are purchasing
					multiple items from our shop and would like them in separate pouches
					please let us know in the ‘note to seller’ section at checkout.
					Otherwise they will be packaged together. <br />
					<br />
					*** If ordering from a British isle or the Scottish highlands please
					choose the appropriate delivery upgrade at checkout (unless a delivery
					charge has already been added). Please note that orders made from
					these areas without upgrading delivery will be cancelled.
				</p>
			) : null}
		</div>
	)
}

export default Description
