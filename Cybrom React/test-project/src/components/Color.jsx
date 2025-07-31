import { useState } from "react"

function Color(){

  let [color,setColor] = useState("white")

    return(
        <>
        
          <div className="color-container" style={{backgroundColor:color}}>
          <button className="red" onClick={()=>setColor("red")}>RED</button>
          <button className="green" onClick={()=>setColor("green")}>GREEN</button>
          <button className="blue" onClick={()=>setColor("rgba(9, 150, 245, 1)")}>BLUE</button>
          </div>

        </>

      )

}

export default Color