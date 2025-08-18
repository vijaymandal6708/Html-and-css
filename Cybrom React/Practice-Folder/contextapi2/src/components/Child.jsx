import React from 'react'
import { data } from '../App'

const Child = () => {
  return (
    <div>
      <data.Consumer>
        {(data)=><h1>{data}</h1>}
      </data.Consumer>
    </div>
  )
}

export default Child
