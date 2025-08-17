import React, { useState } from 'react'

const Color = () => {

  let [color, setColor] = useState("white")

  function changeColor(){
    
  }

  return (
    <>
      <div className="box" style={{backgroundColor:"color",height:"200px", width:"200px", border:"1px solid black"}}>
        <button onClick={()=>{setColor("red")}}>Red</button>
        <button ></button>
        <button></button>
      </div>
    </>
  )
}

export default Color
