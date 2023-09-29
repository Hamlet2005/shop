import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { sliderInfo } from '../products'
import css from './home.module.css'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import Article from './Article'
import Bestsellers from './Bestsellers'
import Journal from './Journal'
import SwissEssence from './SwissEssence'

const settings = {
    dots: true,
    infinite: true,
    nextArrow: <AiOutlineArrowRight/>,
    prevArrow: <AiOutlineArrowLeft/>,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

const Home = () => {
	return (
		<div className={css.home}>
			<Slider {...settings} className={css.slider}>
				{sliderInfo.map(item => {
					return (
						<div className={css.card} key={item.id}>
							<div className={css.infoDiv}>
								<div className={css.infoHeader}>
									<h2>Classic tennis necklace</h2>
									<p>{item.p}</p>
								</div>
								<div className={css.img}>
									<img src={item.img} alt={item.p} />
								</div>
							</div>
						</div>
					)
				})}
			</Slider>
			<Article />
			<Bestsellers />
			<SwissEssence />
			<Journal />
		</div>
	)
}

export default Home
