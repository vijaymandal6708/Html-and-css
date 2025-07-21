import { useEffect, useState } from 'react'
import './App.css'

function App() {

  let [count, setCount] = useState(0)
  let [name1,setName] = useState("Samsung")

  useEffect(()=>console.log("working"))

  return (
    <>
   
      <h1>{count}</h1>
      <h1>{name1}</h1>

      <button onClick={()=>setCount(count+1)}>Increse</button>
      <button onClick={()=>setName("lenovo")}>Change</button>

    </>
  )
}

export default App
