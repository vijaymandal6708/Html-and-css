import './App.css'
import State from './components/State'
import { Routes,Route } from 'react-router-dom'
import Form from './components/Form'
import Color from './components/Color'
import Layout from './components/Layout'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
           <Route index element={<State/>}></Route>
           <Route path="form" element={<Form/>}></Route>
           <Route path="color" element={<Color/>}></Route>
        </Route>
        
      </Routes>
    </>
  )
}

export default App
