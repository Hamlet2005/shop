import React from 'react'
import css from './about.module.css'

const History = () => {
	return (
		<article className={css.history}>
			<div className={css.historyInfo}>
				<div className={css.aboutHistory}>
					<h2>Our History</h2>
					<h5>By Versa Jewellery Owner</h5>
					<p>
						Have you ever come across a thing that is impossible to resist? Meet
						the Lawson Jefferson 38! Run by the vibration of a quartz crystal
						(32,786 times per second) under current to keep possibly accurate
						time. You will feel absolutely over the moon with it, we guarantee!
					</p>
				</div>
				<div className={css.allSales}>
					<div className={css.sales}>
						<h2>462</h2>
						<div></div>
						<p>sales</p>
					</div>
					<div className={css.sales}>
						<h2>602</h2>
						<div></div>
						<p>jewelleries</p>
					</div>
				</div>
			</div>

			<div className={css.img}></div>
		</article>
	)
}

export default History
