import { useState } from "react";
import Localstorage from "../../../form-handling/src/components/LocalStorage";

function Form(){


    let [value, setValue] = useState({})


    function handleinput(e) {
        //  console.log(e);
        //  const {name, value} = e.target 
        //  setFrmdata({...frmdata,[name]:value})
        setValue({...value,[e.target.name]:e.target.value})
        console.log(value);
        }

        function finalsubmit(e) {
          e.preventDefault()
          console.log(value);
          localStorage.setItem('value1',JSON.stringify(value))
        }


    return(

        
        <>
           
          <br />
          <br />
          <h1 align="center" style={{fontSize:"42px"}}>Form</h1>
          <form action="" align="center">
            <label htmlFor="">Name : </label>
            <input type="text" name="name" onChange={handleinput}/> <br /> <br />

            <label htmlFor="">Email : </label>
            <input type="text" name="email" onChange={handleinput}/> <br /> <br />

            <label htmlFor="">Password : </label>
            <input type="text" name="password" onChange={handleinput}/> <br /> <br />

            <input type="submit" value="Submit" onClick={finalsubmit}/>
          </form>

        </>
    )

}

export default Form