import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

const Api = () => {

    let [apidata,setApidata] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((res)=>console.log(setApidata(res.data)))
    },[])

    return(
    <>
      <h1>Api page</h1>
      <table border="2">
        <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Url</th>
        </tr>
        {
            apidata.map((e)=>(
                <tr>
                    <td>{e.id}</td>
                    <td>{e.title}</td>
                    <td>{e.url}</td>
                </tr>
            ))
        }
      </table>
    </>
    )
}

export default Api