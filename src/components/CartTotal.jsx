import React from 'react'
import css from './cart.module.css'
import { useSelector } from 'react-redux'
const CartTotal = () => {

	const favorites = useSelector(state => state.favorite.favorites)
	let sum = 0;
	favorites.forEach(e => {
		sum += e.total
	});


	return (
		<div className={css.cartTotal}>
			<h2>Cart Total</h2>
			<div className={css.cartTotalSubtotal}>
				<div className={css.box}>
					<div className={css.cartTotalSubtotalInfo}>
						<div className={css.box2}>
							<p>Subtotal</p>
						</div>
						<div className={css.box1}>
							<p>{sum} £</p>
						</div>
					</div>
					<div className={css.cartTotalSubtotalInfo}>
						<div className={css.box3}>
							<p>Shipping</p>
						</div>
						<div className={css.box1}>
							<p>
								Flat rate: <span>$20.00</span>
							</p>
							<p>
								Shipping to <span>Russia</span>
							</p>
							<h6>Change Address</h6>
						</div>
					</div>
					<div className={css.cartTotalSubtotalInfo}>
						<div className={css.box2}>
							<p>Total</p>
						</div>
						<div className={css.box1}>
							<p>{sum} £</p>
						</div>
					</div>
				</div>
			</div>
			<button className={sum === 0 ? css.unactive : css.btn}>Proceed to Checkout</button>
		</div>
	)
}

export default CartTotal
