import { useState } from 'react'
import './App.css'

function App() {
  let [color,setColor] = useState("white")


  return (
    <>
      <div className="container" style={{backgroundColor:color}}>
        <button className="red" onClick={()=>setColor("red")}>RED</button>
        <button className="green" onClick={()=>setColor("green")}>GREEN</button>
        <button className="yellow" onClick={()=>setColor("yellow")}>YELLOW</button>
        <button className="blue" onClick={()=>setColor("blue")}>BLUE</button>
      </div>
    </>
  )
}

export default App
