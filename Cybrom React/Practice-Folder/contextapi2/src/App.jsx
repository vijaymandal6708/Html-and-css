import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './components/Child'
import Child2 from './components/Child2'

let data = createContext()

function App() {
  
  let actualdata = "mydata"

  return (
    <>
      <data.Provider value={actualdata}>
        <Child></Child>
      </data.Provider>
      <data.Provider value={actualdata}>
        <Child2></Child2>
      </data.Provider>
    </>
  )
}

export default App
export {data}
