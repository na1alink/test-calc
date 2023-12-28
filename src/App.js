import React from 'react'

import NumberProvider from './components/NumberProvider'
import Calculator from './components/Calculator'
import './index.css'

export default function App() {
	return (
		<NumberProvider>
			<Calculator />
		</NumberProvider>
	)
}
