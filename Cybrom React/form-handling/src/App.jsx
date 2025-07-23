import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import Multiform from './components/Multiform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       {/* <Form></Form> */}
       <Multiform></Multiform>
    </>
  )
}

export default App
