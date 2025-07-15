import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <center><h1>{count}</h1></center>
      <center><button onClick={()=>setCount(count+1)}>+</button></center>
      <br />
      <center><button onClick={()=>setCount(count-1)}>-</button></center>
      <br />
      <center><button onClick={()=>setCount(0)}>Reset</button></center>

    </>
  )
}

export default App
