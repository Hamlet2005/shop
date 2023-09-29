import React from 'react'
import css from "./shop.module.css"
import img1 from "../../images/Ellipse 5-1.png"
import img2 from "../../images/Ellipse 5-2.png"
import img3 from "../../images/Ellipse 5.png"

const Reviews = ({link}) => {
	
  return (
	<div className={css.reviews}>
		{
			link === 'Reviews' ?
			<div className={css.block}>
				<div className={css.box}> 
					<img src={img1} alt="" />
					<div className={css.boxInfo}>
						<p>Frances He</p>
						<span>21.08.2020</span>
					</div>
				</div>
				<p>Love my small paper clip necklace. It’s well made, has a beautiful smooth but shiny finish. It can be worn along or with a fun pendant. Great transaction!</p>
				<div className={css.box}> 
					<img src={img2} alt="" />
					<div className={css.boxInfo}>
						<p>Allyson Flor</p>
						<span>21.08.2020</span>
					</div>
				</div>
				<p>Love my small paper clip necklace. It’s well made, has a beautiful smooth but shiny finish. It can be worn along or with a fun pendant. Great transaction!</p>
				<div className={css.box}> 
					<img src={img3} alt="" />
					<div className={css.boxInfo}>
						<p>Jenn Dee</p>
						<span>21.08.2020</span>
					</div>
				</div>
				<p>Love my small paper clip necklace. It’s well made, has a beautiful smooth but shiny finish. It can be worn along or with a fun pendant. Great transaction!</p>
			</div>
			:null
		}
	</div>
  )
}

export default Reviews