import React, { useContext } from 'react'
import { NumberContext } from '../NumberProvider'

const NumberButton = ({ buttonValue }) => {
	const { handleSetDisplayValue } = useContext(NumberContext)
	return (
		<button
			className='number-button col-3'
			type='button'
			onClick={() => handleSetDisplayValue(buttonValue)}
		>
			{buttonValue}
		</button>
	)
}

export default NumberButton
