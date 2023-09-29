import React from 'react'
import css from "./shop.module.css"

const Delivery = ({ link }) => {
	return <div>
    {link === 'Delivery' ? 
      <div className={css.delivery}>
        <p className={css.p}>Estimated delivery</p>

        <select name="select" className={css.select} >
          <option value="1">Deliver to London, UK </option>
          <option value="2">Deliver to Canada </option>
          <option value="3">Deliver to California, USA </option>
          <option value="4">Deliver to Frankfurt </option>
        </select>

        <b>Aug 26 - 29</b>
        <p>Need it sooner? <span>Upgrade shipping in the cart</span></p>
      </div> 
      : null
    }
  </div>
}

export default Delivery
