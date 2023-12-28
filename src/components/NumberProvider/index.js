import React, { useState } from 'react'

export const NumberContext = React.createContext()

const NumberProvider = props => {
	const [number, setNumber] = useState('')
	const [storedNumber, setStoredNumber] = useState('')
	const [functionType, setFunctionType] = useState('')

	const handleSetDisplayValue = num => {
		if ((!number.includes('.') || num !== '.') && number.length < 8) {
			setNumber(`${(number + num).replace(/^0+/, '')}`)
		}
	}

	const handleSetStoredValue = () => {
		setStoredNumber(number)
		setNumber('')
	}

	const handleClearValue = () => {
		setNumber('')
		setStoredNumber('')
		setFunctionType('')
	}

	const handleBackButton = () => {
		if (number !== '') {
			const deletedNumber = number.slice(0, number.length - 1)
			setNumber(deletedNumber)
		}
	}

	const handleSetCalcFunction = type => {
		if (number) {
			setFunctionType(type)
			handleSetStoredValue()
		}
		if (storedNumber) {
			setFunctionType(type)
		}
	}

	const handlePercentage = () => {
		if (storedNumber && storedNumber !== '0') {
			const result = (+storedNumber / 100).toString()
			setStoredNumber(result)
		}
	}

	const doMath = () => {
		if (number && storedNumber) {
			switch (functionType) {
				case '+':
					setStoredNumber(
						`${
							Math.round(
								`${(parseFloat(storedNumber) + parseFloat(number)) * 100}`
							) / 100
						}`
					)
					break
				case '-':
					setStoredNumber(
						`${
							Math.round(
								`${(parseFloat(storedNumber) - parseFloat(number)) * 1000}`
							) / 1000
						}`
					)
					break
				case '÷':
					setStoredNumber(
						`${
							Math.round(
								`${(parseFloat(storedNumber) / parseFloat(number)) * 1000}`
							) / 1000
						}`
					)
					break
				case '×':
					setStoredNumber(
						`${
							Math.round(
								`${parseFloat(storedNumber) * parseFloat(number) * 1000}`
							) / 1000
						}`
					)
					break
				case '%':
					setStoredNumber(
						`${
							Math.round(
								`${
									((parseFloat(storedNumber) * parseFloat(number)) / 100) * 1000
								}`
							) / 1000
						}`
					)
					break
				case '.':
					setStoredNumber(
						`${storedNumber}${
							!storedNumber || storedNumber === '-' ? '0' : ''
						}.`
					)
					break
				default:
					break
			}
			setNumber('')
		}
	}

	return (
		<NumberContext.Provider
			value={{
				doMath,
				functionType,
				handleBackButton,
				handleClearValue,
				handleSetCalcFunction,
				handleSetDisplayValue,
				handleSetStoredValue,
				handlePercentage,

				number,
				storedNumber,
				setNumber,
			}}
		>
			{props.children}
		</NumberContext.Provider>
	)
}

export default NumberProvider
