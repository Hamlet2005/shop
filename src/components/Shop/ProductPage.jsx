import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { shop } from '../products'
import InfoLinks from './InfoLinks'
import RelatedProducts from './RelatedProducts'
import css from './shop.module.css'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import BuyFunc from './BuyFunc'
import { connect } from 'react-redux'

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

const ProductPage = (props) => {
	let { productId } = useParams()	
	const favoriteChecker = id => {
		const bool = props.favorites.some(item => item.id === id)
		return bool
	}
	const [count, setCount] = useState(0);
	const handleClick = num => {
		setCount(num);
	};

	return (
		<div className={css.product}>
			{shop.map(item => {
				return (
					<div key={item.id}>
						{item.id === +productId ? ( 
							<div className={css.productPage}>
								<img src={item.img} alt='' />
								<div className={css.productPageInfo}>
									<h2>{item.p}</h2>
									<h6>{item.price} £</h6> 
									<div className={css.buy}>
										<div className={css.buyProduct}>
											<BuyFunc item={item} handleClick={handleClick}/>
											<button>Buy now</button>
										</div>
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
									<div className={css.stock}>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='18'
											height='18'
											viewBox='0 0 18 18'
											fill='none'
										>
											<g>
												<path
													d='M13.4947 6.04133C13.2176 5.74918 12.7557 5.73631 12.4631 6.01408L7.80453 10.4321L5.58252 8.15074C5.30109 7.862 4.83967 7.85567 4.55068 8.13713C4.26194 8.41831 4.25586 8.88023 4.53704 9.16897L7.26137 11.966C7.40414 12.1127 7.59388 12.1866 7.78411 12.1866C7.9646 12.1866 8.14509 12.12 8.28642 11.9865L13.4675 7.07295C13.7599 6.79564 13.7722 6.33372 13.4947 6.04133Z'
													fill='#41CA00'
												/>
												<path
													d='M9 0C4.03734 0 0 4.03734 0 9C0 13.9627 4.03734 18 9 18C13.9627 18 18 13.9627 18 9C18 4.03734 13.9627 0 9 0ZM9 16.5406C4.84225 16.5406 1.45944 13.158 1.45944 9C1.45944 4.84225 4.84221 1.45944 9 1.45944C13.158 1.45944 16.5406 4.84221 16.5406 9C16.5406 13.158 13.158 16.5406 9 16.5406Z'
													fill='#41CA00'
												/>
											</g>
										</svg>
										<p>In stock</p>
									</div>
								</div>
							</div>
						) : null}
					</div>
				)
			})}
			<InfoLinks />
			<RelatedProducts />
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)
