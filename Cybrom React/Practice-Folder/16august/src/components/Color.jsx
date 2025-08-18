import React, { useState } from 'react'

const Color = () => {

  let [color, setColor] = useState("white")

  function changeColor(){
    
  }

  return (
    <div style={{backgroundColor:color, height:"80vh", width:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}>
      <div className="box" style={{height:"100px", width:"300px", border:"1px solid black", backgroundColor:"white", display:"flex", justifyContent:"center", alignItems:"center", gap:"20px", borderRadius:"25px"}}>
        <button onClick={()=>{setColor("red")}}>Red</button>
        <button onClick={()=>{setColor("green")}}>Green</button>
        <button onClick={()=>{setColor("blue")}}>Blue</button>
      </div>
    </div>
  )
}

export default Color
