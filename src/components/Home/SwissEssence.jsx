import React from 'react'
import css from "./home.module.css"
import LearnMore from '../LearnMore'

const SwissEssence = () => {
  return (
	<article className={css.swiss}>
		<div className={css.swissInfo}>
			<h2>Swiss Essence</h2>
			<p>The first association that comes to one’s mind with the phrase “a good wristwatch” is naturally a one made somewhere in Switzerland. Do you want to know what makes Swiss watches stand out?</p>
			<LearnMore/>
		</div>
		<div className={css.swissImg}></div>
	</article>
  )
}

export default SwissEssence