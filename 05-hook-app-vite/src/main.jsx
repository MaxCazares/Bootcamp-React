import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'


import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCusotmHook } from './01-useState/CounterWithCusotmHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// 
createRoot(document.getElementById('root')).render(
	// <StrictMode>
		// <CounterApp/>
		// <CounterWithCusotmHook/>
		// <SimpleForm/>
		// <FormWithCustomHook />
		<MultipleCustomHooks/>
	// </StrictMode> 
)
