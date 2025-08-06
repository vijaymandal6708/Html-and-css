import { createContext } from 'react'
import Child1 from './components/Child1'
import './App.css'
import Dashboard from './components/Dashboard'
import Setting from './components/Setting'
import Child2 from './components/Child2'

let store = createContext()

let user = createContext()

let data = createContext()

function App() {
  
  // for making global
  let name = "From App page"

  let detail = { name:"vijay", email:"vijaymandalm6708", password:1234 }

  let newdata = "my new data"

  return (
    <>
      <store.Provider value={name}>
        <Child1></Child1>
      </store.Provider>

      <user.Provider value={detail}>
        <Dashboard></Dashboard>
        <Setting></Setting>
      </user.Provider>

      <data.Provider value={newdata}>
        <Child1></Child1>
        <Child2></Child2>
        <Dashboard></Dashboard>
        <Setting></Setting>
      </data.Provider>
      
    </>
  )
}

export default App
export {store}
export {user}
export {data}
