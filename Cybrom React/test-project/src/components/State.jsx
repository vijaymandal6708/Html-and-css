import { useState } from "react"


function State(){

    let [flag, setFlag] = useState(false)  

    return(
        <>
          { flag==false && <h1>Hello</h1>}
          <button onClick={()=>setFlag(!flag)}>{flag? "Show" : "Hide"}</button>

        </>
    )

}

export default State