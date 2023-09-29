import React, { useState } from 'react'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { shop } from '../products'
import css from './shop.module.css'

const mapDispatchToProps = dispatch => {
	return {
		addToFavorites: item => {
			const fav = {
				...item,
			}
			dispatch({ 
				type: 'ADD_FAVORITE',
				fav: fav,
			})
		},
		delFromFavorites: id => {
			dispatch({
				type: 'DEL_FAVORITE',
				id: id,
			})
		},
	}
}

const mapStateToProps = state => {
	return {
		favorites: state.favorite.favorites,
	}
}

const Shop = props => {
	
	const [value, setValue] = useState('')
	const changeValue = e => {
		setValue(e.target.value)
	}

	const favoriteChecker = id => {
		const bool = props.favorites.some(item => item.id === id)
		return bool
	}

	return (
		<div className={css.shop}>
			<div className={css.shopHead}>
				<h2>Shop</h2>
				<div className='footerInput'>
					<input
						type='text'
						placeholder='Search'
						value={value}
						onChange={changeValue}
					/>
					<button>Send</button>
				</div>
			</div>
			<div className={css.shopProduct}>
				{shop
					.filter(item => {
						return value.toLowerCase() === ''
							? item
							: item.p.toLowerCase().includes(value)
					})
					.map(item => {
						return (
							<div key={item.id} className={css.productInfo}>
								<Link to={`/products/${item.id}`}>
									<img src={item.img} alt='' />
								</Link>
								<div className={css.products}>
									<p>{item.p}</p>
									<h6>{item.price} £</h6>
									{favoriteChecker(item.id) ? (
										<MdOutlineFavoriteBorder
											className={css.active}
											onClick={() => props.delFromFavorites(item.id)}
										/>
									) : (
										<MdOutlineFavoriteBorder
											onClick={() => props.addToFavorites(item)}
										/>
									)}
								</div>
							</div>
						)
					})}
			</div>
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)
