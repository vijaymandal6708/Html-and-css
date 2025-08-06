import { createContext } from "react"
import Child1 from "./components/Child1"

let data = createContext()

function App() {

  let actualdata = "this is actual"

  return (
    <>
      <data.Provider value={actualdata}>
        <Child1></Child1>
      </data.Provider>
    </>
  )
}

export default App
export {data}
