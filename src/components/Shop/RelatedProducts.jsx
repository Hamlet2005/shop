import React from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { shop } from '../products'
import css from './shop.module.css'

const RelatedProducts = () => {
	const settings = {
		infinite: true,
		nextArrow: <AiOutlineArrowRight />,
		prevArrow: <AiOutlineArrowLeft />,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	} 
	return (
		<div className={css.productSlider}>
			<h2>Related Products</h2>
			<div className={css.slider}>
				<Slider {...settings}>
						{shop.map(item => {
							return (
								<div key={item.id} className={css.productInfo}>
									<Link to={`/products/${item.id}`}>
										<img src={item.img} alt='' />
									</Link>
									<div className={css.products}>
										<p>{item.p}</p>
										<h6>{item.price} £</h6>
									</div>
								</div>
							)
						})}
				</Slider>
			</div>
		</div>
	)
}

export default RelatedProducts
