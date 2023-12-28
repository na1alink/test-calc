import React, { useContext } from 'react'
import { NumberContext } from '../NumberProvider'

const BackButton = () => {
	const { handleBackButton } = useContext(NumberContext)
	return (
		<button
			type='button'
			className='function-button col-3'
			onClick={() => handleBackButton()}
		>
			&#8592;
		</button>
	)
}

export default BackButton
