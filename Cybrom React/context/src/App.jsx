import { createContext } from 'react'
import Child1 from './components/Child1'
import './App.css'
import Dashboard from './components/Dashboard'

let store = createContext()

let user = createContext()

function App() {
  
  // for making global
  let name = "From App page"

  let detail = { name:"vijay", email:"vijaymandalm6708", password:1234 }

  return (
    <>
      <store.Provider value={name}>
        <Child1></Child1>
      </store.Provider>

      <user.Provider value={detail}>
        <Dashboard></Dashboard>
      </user.Provider>
      
    </>
  )
}

export default App
export {store}
export {user}
