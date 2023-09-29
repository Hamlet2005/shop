import React from 'react'
import img1 from '../../images/service.png'
import img2 from '../../images/service2.png'
import img3 from '../../images/service3.png'
import img4 from '../../images/service4.png'
import css from './features.module.css'

const Service = () => {
	return (
		<article className={css.service}>
			<div className={css.block}>
				<div className={css.serviceInfo}>
					<h2>Earrings Services</h2>
					<p>
						The new Lawson collection is already here!. This quartz Lawson
						Franklin 38 model, designed with simplicity and elegance, is truly a
						cherry on the cake. Comes in different sizes and band colors, has a
						stainless steel back for a personalized engraving.
					</p>
				</div>
				<div className={css.img}>
					<img src={img1} alt='' />
				</div>
			</div>
			<div className={css.block}>
				<div className={css.img}>
					<img src={img2} alt='' />
				</div>
				<div className={css.serviceInfo1}>
					<h2>Necklaces Services</h2>
					<p>
						The new Lawson collection is already here!. This quartz Lawson
						Franklin 38 model, designed with simplicity and elegance, is truly a
						cherry on the cake. Comes in different sizes and band colors, has a
						stainless steel back for a personalized engraving.
					</p>
				</div>
			</div>
			<div className={css.block}>
				<div className={css.serviceInfo}>
					<h2>Bracelets Services</h2>
					<p>
						The new Lawson collection is already here!. This quartz Lawson
						Franklin 38 model, designed with simplicity and elegance, is truly a
						cherry on the cake. Comes in different sizes and band colors, has a
						stainless steel back for a personalized engraving.
					</p>
				</div>
				<div className={css.img}>
					<img src={img3} alt='' />
				</div>
			</div>
			<div className={css.block}>
				<div className={css.img}>
					<img src={img4} alt='' />
				</div>
				<div className={css.serviceInfo1}>
					<h2>Rings Services</h2>
					<p>
						The new Lawson collection is already here!. This quartz Lawson
						Franklin 38 model, designed with simplicity and elegance, is truly a
						cherry on the cake. Comes in different sizes and band colors, has a
						stainless steel back for a personalized engraving.
					</p>
				</div>
			</div>
		</article>
	)
}

export default Service
