import React from 'react'
import { useContext } from 'react'
import { data } from '../App'

const Child2 = () => {

  let mydata = useContext(data)

  return (
    <>
      <h1>{data}</h1>
    </>
  )
}

export default Child2
