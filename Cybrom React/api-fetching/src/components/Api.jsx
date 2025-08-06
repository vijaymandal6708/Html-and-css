import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

const Api = () => {

    let [showfrm,setShowfrm] = useState(false)

    let [editdata,setEditdata] = useState({})

    let [apidata,setApidata] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/userdata')
        .then((res)=>console.log(setApidata(res.data)))
    },[])

    function handledelete(id){
      axios.delete(`http://localhost:3000/userdata/${id}`)
      then(()=>alert("Deleted..."))
    }

    useEffect(()=>{
        axios.get('http://localhost:3000/userdata')
        .then((res)=>setApidata(res.data))
    },[handledelete])

    function handleedit(e){
       const {name,value}= e.target
       setEditdata({...editdata,[name]:value})
    }

    function finaledit(e){
        e.preventDefault()
        axios.put(`http://localhost:3000/userdata/${editdata.id}`,editdata)
        .then(()=>alert("updated"))
    }

    return(
    <>
      <h1>Api page</h1>
      <table border="2">
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Contact</th>
            <th>City</th>
            <th>Email</th>
            <th>Delete</th>
            <th>Edit</th>
        </tr>
        {
            apidata.map((e)=>(
                <tr>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.contact}</td>
                    <td>{e.city}</td>
                    <td>{e.email}</td>
                    <td><button onClick={()=>handledelete(e.id)}>Delete</button></td>
                    <td><button onClick={()=>(setShowfrm(true),setEditdata(e))}>Edit</button></td>
                </tr>
            ))
        }
      </table>
      <hr />
      {showfrm && <form>
       
        <label htmlFor="">Name</label>
        <input type="text" name="name" value={editdata.name} onChange={handleedit}/> <br /> <br />

        <label htmlFor="">Contact</label>
        <input type="text" name="contact"  value={editdata.contact} onChange={handleedit}/> <br /> <br />

        <label htmlFor="">City</label>
        <input type="text" name="city"  value={editdata.city} onChange={handleedit}/> <br /> <br />

        <label htmlFor="">Email</label>
        <input type="text" name="email"  value={editdata.email} onChange={handleedit}/> <br /> <br />

        <label htmlFor="">Id</label>
        <input type="text" name="id" disabled  value={editdata.id} onChange={handleedit}/> <br /> <br />

        <input type="submit" onClick={finaledit} />

        </form>
        }
    </>
    )
}

export default Api