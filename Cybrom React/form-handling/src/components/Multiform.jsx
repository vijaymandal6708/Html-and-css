import { useState } from "react";

function Multiform(){
  let [frmdata, setFrmdata] = useState({name:"", age:""})


  function handleinput(e){
    console.log(e);
    const {name, value} = e.target 
    setFrmdata({...frmdata,[name]:value})
   }

   function finalsubmit(event){
    event.preventDefault()
    console.log(frmdata);
   }

  return(
    <>
      <h1>Multiform</h1>
      <form action="" onSubmit={finalsubmit}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" onChange={handleinput}/> <br /> <br />

        <label htmlFor="">Age</label>
        <input type="text" name="age" onChange={handleinput} /> <br /> <br />

        <input type="submit"/>
      </form>
    </>
  )
}

export default Multiform