import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

const Api = () => {

    let [apidata,setApidata] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/userdata')
        .then((res)=>console.log(setApidata(res.data)))
    },[])

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
        </tr>
        {
            apidata.map((e)=>(
                <tr>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.contact}</td>
                    <td>{e.city}</td>
                    <td>{e.email}</td>
                </tr>
            ))
        }
      </table>
    </>
    )
}

export default Api