import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Form(){

   let [frmdata,setFrmdata] = useState({})

   let nav = useNavigate()

   function handleinput(e){
      setFrmdata({...frmdata,[e.target.name]:e.target.value})
   }

   function finalsubmit(e){
      e.preventDefault()
      axios.post('http://localhost:3000/userdata',frmdata)
      .then(()=>alert("inserted.."))
      .catch((err)=>alert(err))

      nav('./apidata')
   }

   return(
      <>
      
        <form action="" onSubmit={finalsubmit} align="center" style={{marginTop:"200px"}}>

          <label htmlFor="">Name:</label>
          <input type="text" name="name" onChange={handleinput}/> <br /> <br />

          <label htmlFor="">Contact:</label>
          <input type="text" name="contact" onChange={handleinput}/> <br /> <br />

          <label htmlFor="">City:</label>
          <input type="text" name="city" onChange={handleinput}/> <br /> <br />

          <label htmlFor="">Email:</label>
          <input type="text" name="email" onChange={handleinput}/> <br /> <br />

          <input type="submit"/>

        </form>
      
      </>
   )
}

export default Form