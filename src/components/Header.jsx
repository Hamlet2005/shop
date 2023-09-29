import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { MdOutlineFavoriteBorder, MdOutlineShoppingBag } from 'react-icons/md'
import { Link, NavLink} from 'react-router-dom'
import { pages } from './Pages'
import { useSelector } from 'react-redux'

const Header = () => {
	
	const fav = useSelector(state => state.favorite.favorites.length)

	return (
		<nav>
			<h1>VERSA</h1>
			<ul>
				{pages.map(page => {
					return (
						<li key={page.path}>
							{!page.hidden ? (
								<NavLink to={page.path}>{page.name}</NavLink>
							) : null}
						</li>
					)
				})}
			</ul>

			<div className='fsu'>
				<MdOutlineFavoriteBorder/>
				<Link to="./cart" className="link">
					<MdOutlineShoppingBag />
					{
						fav > 0 ?
						<p>{fav}</p>
						 : null
					}
				</Link>
				<AiOutlineUser />
			</div>
		</nav>
	)
}

export default Header
