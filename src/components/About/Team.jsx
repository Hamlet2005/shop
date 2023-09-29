import React from 'react'
import css from "./about.module.css"

const Team = () => {
  return (
	<article className={css.team}>
		<h2>Our Team</h2>
		<div className={css.block}>
			<div className={css.box}>
				<h6>Sarah Doll</h6>
				<p>Cut and sewn at our Pennsylvania factory, it features our classic three-inch button down collar with a placket front</p>
				<div className={css.img2}></div>
			</div>
			<div className={css.box2}>
				<div className={css.img1}></div>
				<h6>Elizabeth White</h6>
				<p>Cut and sewn at our Pennsylvania factory, it features our classic three-inch button down collar with a placket front</p>
			</div>
		</div>
	</article>
  )
}

export default Team