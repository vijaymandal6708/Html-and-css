import React from 'react'
import {useParams} from 'react-router-dom'

const Contact = () => {
    let {name} = useParams()
  return (
    <div>
      <h1>Contact{name}</h1>
    </div>
  )
}

export default Contact
