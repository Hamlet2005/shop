import Home from './Home/Home'
import About from './About/About'
import Shop from './Shop/Shop'
import Features from './Features/Features'
import Contacts from './Contacts/Contacts'
import InstantQuote from './InstantQuote'
import ProductPage from './Shop/ProductPage'
import Cart from './Cart'

export const pages = [
	{
		name: "Home",
		path:'/',
		element: <Home/>
	},
	{
		name: "About",
		path:'/about',
		element: <About/>
	},
	{
		name: "Shop",
		path:'/shop',
		element: <Shop/>
	},
	{
		name: "Features",
		path:'/features',
		element: <Features/>
	},
	{
		name: "Contacts",
		path:'/contacts',
		element: <Contacts/>
	},
	{
		name: "InstantQuote",
		path:'/instantQuote',
		element: <InstantQuote/> 
	},
	{
		name: "ProductPage",
		path:'/products/:productId',
		element: <ProductPage/>,
		hidden: true
	},
	{
		name: "Cart",
		path:'/cart',
		element: <Cart/>,
		hidden: true
	}
] 