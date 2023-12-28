import React, { useContext } from 'react'
import { NumberContext } from '../NumberProvider'

import './style.scss'

const Display = () => {
	const { number, storedNumber, functionType } = useContext(NumberContext)
	return (
		<div className='display'>
			<p
				className={
					storedNumber && storedNumber.length > 12
						? 'long-stored-display'
						: undefined
				}
			>
				{!storedNumber ? ' ' : `${storedNumber} ${functionType} ${number}`}
			</p>
			<h2
				className={
					storedNumber && storedNumber.length > 12
						? 'long-main-display'
						: undefined
				}
			>
				{!number.length && !storedNumber ? '0' : number || storedNumber}
			</h2>
		</div>
	)
}

export default Display
