import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Localfrm(){

    function clearstorage(){
    localStorage.clear()
    setData({name:"",age:""})
    }
    
    const stored = JSON.parse(localStorage.getItem("userdata"))||{name:"",age:""};

    const [data,setData] = useState(stored);
    

    return(

        
        <>
          <p style={{fontSize:"40px"}}>name : {data.name}</p>
          <p style={{fontSize:"40px"}}>age : {data.age}</p>
          <button style={{backgroundColor:"red", color:"white"}} onClick={clearstorage}>Clear</button>
        
        </>
    )
}

export default Localfrm