import { useState } from "react";

function Form() {

  let [value,setValue] = useState("")
  let [age,setAge] = useState()
  let [contact,setContact] = useState()
  let [email,setEmail] = useState()
  let [pass,setPass] = useState()
  let [cpass,setCpass] = useState()
  let [adress,setAdress] = useState()

  function handleinput(e){
    console.log(e.target.value);
    setValue(e.target.value)
  }

  return(
    <>
      <form action="">
        <label htmlFor="">Name</label>
        <input type="text" onChange={handleinput} />

        <label htmlFor="">Age</label>
        <input type="text" onChange={(e)=>setAge(e.target.value)} />

        <label htmlFor="">Contact</label>
        <input type="text" onChange={(e)=>setContact(e.target.value)} />

        <label htmlFor="">Email</label>
        <input type="text" onChange={(e)=>setEmail(e.target.value)} />

        <label htmlFor="">Pass</label>
        <input type="text" onChange={(e)=>setPass(e.target.value)} />

        <label htmlFor="">Cpass</label>
        <input type="text" onChange={(e)=>setCpass(e.target.value)} />

        <label htmlFor="">Adress</label>
        <input type="text" onChange={(e)=>setAdress(e.target.value)} />
      </form>

      <h1>{value}</h1>
      <h1>{age}</h1>
      <h1>{contact}</h1>
      <h1>{email}</h1>
      <h1>{pass}</h1>
      <h1>{cpass}</h1>
      <h1>{adress}</h1>
    </>
  )
}

export default Form