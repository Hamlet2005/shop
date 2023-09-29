import React, { useState } from 'react'

const LearnMore = () => {
	const [more, setMore] = useState(false)
	const activeMore = () => {
		if (!more) {
			setMore(!more)
		} else {
			setMore(!more)
		}
	}
	return (
		<div>
			<p style={{ position: 'relative', top: '20px'}}>
				{more
					? 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita reprehenderit soluta aut fuga quis ad blanditiis alias at hic minima nulla quam dolore, porro velit, consequatur ut non, id iure?'
					: null}
			</p>

			<p className='click' onClick={activeMore}>
				{!more ? 'Learn more' : 'Learn less'}
			</p>
		</div>
	)
}

export default LearnMore
