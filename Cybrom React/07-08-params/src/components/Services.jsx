import React from 'react'
import {useParams} from 'react-router-dom'

const Services = () => {
    let {contact} = useParams()
  return (
    <div>
      <h1>Services{contact}</h1>
      <h1>h</h1>
    </div>
  )
}

export default Services
