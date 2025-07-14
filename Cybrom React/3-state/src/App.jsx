import { useState } from "react"
function App(){

  let [name,myfun] = useState(12)
  let [age,setAge] = useState(12)
  let [contact,setContact] = useState(1234)
  let [number,setNumber] = useState(0)

  function fun(){
    myfun(90)
  }

  function fun2(){
    setAge(89)
  }


  return(
    <>
      <h1>this is app - {name} {age}</h1>
      <button onClick={fun}>Tap here</button>
      <button onClick={fun2}>Change Age</button>

      <h1>{contact}</h1>
      <button onClick={()=>setContact(897)}>Change Contact</button>

      <center><h1>{number}</h1></center>
      <center><button onClick={()=>setNumber(number+1)}>+</button></center>
      <center><button onClick={()=>setNumber(number-1)}>-</button></center>
    </>
  )
}

export default App;