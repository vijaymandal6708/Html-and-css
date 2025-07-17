import { useState } from "react"

function State(){

  let [sting, setSting] = useState("Cold drink")
      let [person,setPerson] = useState({
        namee:"vijay", age:23
      })

      let [a,setA] = useState(false)

  return(
    <>
    
      <div >

        {/* <h1>What is the water type = {sting}</h1>
        <h1>Person name is = {person.namee}</h1>
        <h4>Vijay age is = {person.age}</h4> */}
        
        {a ? "" : <h1>Hide me</h1>}
        <br />
        
        <button className="border p-3 rounded-2xl" onClick={()=>setA(true)}>Click here</button> &nbsp;&nbsp;&nbsp;&nbsp;
        <button className="border p-3 rounded-2xl" onClick={()=>setA(false)}>Click here</button>
        <br /> <br />
        <button className="border p-3 rounded-2xl" onClick={()=>setA(!a)}>Toggle here</button>
        <br /> <br />
        <button className="border p-3 rounded-2xl" onClick={()=>setA(!a)}>{ a ? "Show" : "Hide"}</button>

      </div>  

    </>
  )
}

export default State