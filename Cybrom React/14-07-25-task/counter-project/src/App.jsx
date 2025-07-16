import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  const Color = count%2 === 0 ? "lightblue" : "orange"

  return (
    <>
    
      <div className="container" style={{backgroundColor:Color, height:"250px", width:"500px", borderRadius:"15px", boxShadow:"3px 3px 5px 5px", display:"flex", justifyContent:"center", flexDirection:"column", justifyContent:"center", marginTop:"200px"}}>
        <center><h1>{count}</h1></center>
        <center><button onClick={()=>setCount(count+1)}>+</button></center>
        <br />
        <center><button onClick={()=>{
          (count>0) ? setCount(count-1) : setCount(count=0)
        }}>-</button></center>
        <br />
        <center><button onClick={()=>setCount(0)}>Reset</button></center>
        </div>

    </>
  )
}

export default App
