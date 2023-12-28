import React, { useContext } from 'react'
import { NumberContext } from '../NumberProvider'

const FunctionButton = ({ buttonValue }) => {
	const { handleSetCalcFunction } = useContext(NumberContext)
	return (
		<button
			className='function-button col-3'
			type='button'
			onClick={() => handleSetCalcFunction(buttonValue)}
		>
			{buttonValue}
		</button>
	)
}

export default FunctionButton
