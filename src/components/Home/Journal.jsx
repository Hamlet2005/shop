import React from 'react'
import css from "./home.module.css"
import Slider from 'react-slick'
import { journalImg } from '../products'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'


const Journal = () => {

	const settings = {
		infinite: true,
		nextArrow: <AiOutlineArrowRight/>,
    	prevArrow: <AiOutlineArrowLeft/>,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
		  {
			breakpoint: 1380,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2,
			}
		  },
		  {
			breakpoint: 810,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  initialSlide: 2
			}
		  }
		]
	  };

  return (
	<article className={css.journal}>
		<h2>Journal & Blog</h2>

		<div className={css.sliderJournal}>
		<Slider {...settings} className={css.slider}>
			{journalImg.map(item => {
				return (
                    <div className={css.journalInfo} key={item.id}>
                        <img src={item.img} alt="" />
						<p>{item.date}</p>
						<p>{item.title}</p>
                    </div>
				)
			})}
			</Slider>
		</div>
	</article>
  )
}

export default Journal