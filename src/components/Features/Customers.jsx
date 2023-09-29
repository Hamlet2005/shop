import React from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import customerImg from '../../images/customer1.png'
import css from './features.module.css'

const Customers = () => {
	const settings = {
		infinite: true,
		speed: 500,
		nextArrow: <AiOutlineArrowRight />,
		prevArrow: <AiOutlineArrowLeft />,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
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
		<article className={css.customers}>
			<div className={css.slider}>
				<Slider {...settings}>
					<div className={css.sliderInfo}>
						<h2>Customer Reviews</h2>
						<p>
							The new Lawson collection is already here!. This quartz Lawson
							Franklin 38 model, designed with simplicity and elegance, is truly
							a cherry on the cake. Comes in different sizes and band colors,
							has a stainless steel back for a personalized engraving.
						</p>
						<div>
							<img src={customerImg} alt='' />
							<h6>Jenn Smith</h6>
						</div>
					</div>
					<div className={css.sliderInfo}>
						<h2>Customer Reviews</h2>
						<p>
							The new Lawson collection is already here!. This quartz Lawson
							Franklin 38 model, designed with simplicity and elegance, is truly
							a cherry on the cake. Comes in different sizes and band colors,
							has a stainless steel back for a personalized engraving.
						</p>
						<div>
							<img src={customerImg} alt='' />
							<h6>Jenn Smith</h6>
						</div>
					</div>
				</Slider>
			</div>
		</article>
	)
}

export default Customers
