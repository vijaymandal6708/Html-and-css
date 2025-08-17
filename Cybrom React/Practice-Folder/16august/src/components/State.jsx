import React, { useState } from 'react'

const State = () => {
  
  let [flag, setFlag] = useState(false)

  function hide(){
    setFlag(!flag)
  }

  return (
    <div>
      {!flag && <h1>Hello</h1>}
      <button onClick={hide}>{flag? "show" : "hide"}</button>
    </div>
  )
}

export default State
