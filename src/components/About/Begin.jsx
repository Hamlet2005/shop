import React from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import css from './about.module.css'

const Begin = () => {
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
		<article className={css.begin}>
			<div className={css.slider}>
				<Slider {...settings}>
					<div className={css.sliderInfo}>
						<h2>How It Begins</h2>
						<p>
							The new Lawson collection is already here!. This quartz Lawson
							Franklin 38 model, designed with simplicity and elegance, is truly
							a cherry on the cake. Comes in different sizes and band colors,
							has a stainless steel back for a personalized engraving.
						</p>
						<h6>2020</h6>
					</div>
					<div className={css.sliderInfo}>
						<h2>How It Begins</h2>
						<p>
							The new Lawson collection is already here!. This quartz Lawson
							Franklin 38 model, designed with simplicity and elegance, is truly
							a cherry on the cake. Comes in different sizes and band colors,
							has a stainless steel back for a personalized engraving.
						</p>
						<h6>2020</h6>
					</div>
				</Slider>
			</div>
		</article>
	)
}

export default Begin
