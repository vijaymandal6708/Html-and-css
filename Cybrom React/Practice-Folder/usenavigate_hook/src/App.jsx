import { Routes, Route } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Service from './components/Service'

function App() {

  return (
    <>
      
      <Routes>
        <Route index element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/service" element={<Service></Service>}></Route>
      </Routes>

    </>
  )
}

export default App
