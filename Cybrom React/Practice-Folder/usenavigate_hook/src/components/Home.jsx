import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  let navigate = useNavigate()

  return (
    <div>
      <button onClick={()=>{navigate("/service")}}>go to service page</button>
      <h1>Home</h1>
    </div>
  )
}

export default Home
