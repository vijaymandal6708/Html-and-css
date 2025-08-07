import React from 'react'
import {useParams} from 'react-router-dom'

const User = () => {
    let {id,name} = useParams()
  return (
    <div>
      <h1>This is user {id} and name {name}</h1>
    </div>
  )
}

export default User
