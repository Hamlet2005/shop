import React, { useState } from 'react'
import { MdClose } from 'react-icons/md'
import { connect } from 'react-redux'
import BuyFunc from './Shop/BuyFunc'
import css from './cart.module.css'
import CartTotal from './CartTotal'

const mapStateToProps = state => {
	return {
		favorites: state.favorite.favorites,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		delFromFavorites: id => {
			dispatch({
				type: 'DEL_FAVORITE',
				id: id,
			})
		},
	} 
}


const Cart = props => {

	const [count, setCount] = useState(0);
	const handleClick = num => {
		setCount(num);
	};

	return (
		<div className={css.cart}>
			<h2>Cart</h2>
			<table>
				<tbody>
					{props.favorites.length > 0 && (
						<tr className={css.tableHead}>
							<th className={css.product}>Product</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Subtotal</th>
						</tr>
					)}
				</tbody>
				{props.favorites.length > 0 && (
					props.favorites.map(item => {
						return (
							<tbody key={item.id}>
								<tr className={css.tableBody} >
									<td className={css.product1}>
										<button
											onClick={() => {
												props.delFromFavorites(item.id)
											}}
										>
											<MdClose /> 
										</button>
										<img src={item.img} alt='' />
										{item.p}
									</td>
									<td>{item.price}£</td>
									<td className={css.buy}>
										<BuyFunc item={item} handleClick={handleClick}/>
									</td>
									<td>{item.total}£</td>
								</tr>
							</tbody>
						)
					}) 
				)}
			</table>
			<div className={css.cartOptions}>
				<div className={css.option}>
					<button className={css.coupon}>Coupon</button>
					<button className={css.apply}>Apply Coupon</button>
				</div>
				<button className={css.update}>Update Cart</button>
			</div>
			<CartTotal />
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
