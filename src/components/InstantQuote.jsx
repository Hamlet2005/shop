import React from 'react'
import Field from './Contacts/Field'
import Bestsellers from './Home/Bestsellers'

const InstantQuote = () => {
  return (
	<div className="instant">
    <h2 className='h2'>Get A Free Estimate</h2>
    <Field show={true}/>
    <Bestsellers/>
  </div>
  )
}

export default InstantQuote