import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Localstorage(){

  let [frmdata, setFrmdata] = useState({name:"", age:""})

  // let [FetchData, setFetchData] = useState("")

  let navigator = useNavigate()

  function handleinput(e){
    const {name, value} = e.target 
    setFrmdata({...frmdata,[name]:value})
   }

   function finalsubmit(event){
    event.preventDefault()
    console.log(frmdata);
    localStorage.setItem('userdata',JSON.stringify(frmdata))
    // setFetchData(()=>JSON.parse(localStorage.getItem("userdata")))
    navigator('./showdata')
   }

  return(
    <>
      <h1>Localstorage</h1>
      <form action="" onSubmit={finalsubmit}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" onChange={handleinput}/> <br /> <br />

        <label htmlFor="">Age</label>
        <input type="text" name="age" onChange={handleinput} /> <br /> <br />

        <input type="submit" style={{height:"45px", width:"80px", color:"white", backgroundColor:"green", borderRadius:"8px", border:"none", outline:"none", fontSize:"15px"}}/>
      </form>
      {/* <p>{FetchData.name}</p>
      <p>{FetchData.age}</p> */}
    </>
  )
}

export default Localstorage
