import React, { useState } from 'react'

const Form = () => {

  let [frmdata,setFrmdata] = useState({})

  function handleinput(e){
    //  console.log(e.target.value)
    setFrmdata({...frmdata,[e.target.name]:e.target.value})
  }

  function finalsubmit(e){
    localStorage.setItem("data", JSON.stringify(frmdata))
  }

  return (
    <div>
      <form action="" align="center" onSubmit={finalsubmit}>
        <label htmlFor="">Name : </label>
        <input type="text" name="name" onChange={handleinput}/> <br /> <br />

        <label htmlFor="">Email : </label>
        <input type="text" name="email" onChange={handleinput}/> <br /> <br />

        <label htmlFor="">Password : </label>
        <input type="text" name="password" onChange={handleinput}/> <br /> <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Form
