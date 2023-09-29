import React from 'react'
import css from "./home.module.css"
import LearnMore from '../LearnMore'

const Article = () => {
  return (
	<article className={css.article}>
		<div className={css.box}>
			<div className={css.articleImg1}></div>
			<div className={css.articleImg2}></div>
			<div className={css.articleInfo}>
				<h2>A Unique Watch That Fits Your Style</h2>
				<p>The new Lawson collection is already here!. This quartz Lawson Franklin 38 model, designed with simplicity and elegance, is truly a cherry on the cake. Comes in different sizes and band colors, has a stainless steel back for a personalized engraving.</p>
				<LearnMore/>
			</div>
		</div>
		<div className={css.box2}>
			<div className={css.articleInfo2}>
				<h2>A Unique Watch That Fits Your Style</h2>
				<p>The new Lawson collection is already here!. This quartz Lawson Franklin 38 model, designed with simplicity and elegance, is truly a cherry on the cake. Comes in different sizes and band colors, has a stainless steel back for a personalized engraving.</p>
				<LearnMore/>
			</div>
			<div className={css.articleImg3}></div>
		</div>
	</article>
  )
}

export default Article