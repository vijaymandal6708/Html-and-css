import './App.css'
import Api from './components/Api'
import {Route,Routes} from "react-router-dom"

function App() {

  return (
    <>

      <Routes>
        <Route index element={<Form/>}></Route>
        <Route path="/apidata" element={<Api/>}></Route>
      </Routes>

    </>
  )
}

export default App
