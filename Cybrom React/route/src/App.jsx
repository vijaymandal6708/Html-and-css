import { Route,Routes } from "react-router-dom"
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Form from './components/Form'

function App() {

  return (
    <>
      <h1>This is app page</h1>

      <Form></Form>

      <Routes>
        <Route path="/home" element={ <Home />}></Route>
        <Route path="/about" element={ <About />}></Route>

      </Routes>
    </>
  )
}

export default App
