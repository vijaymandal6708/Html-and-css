import './App.css'
import State from './components/State'
import { Routes,Route } from 'react-router-dom'
import Form from './components/Form'
import Color from './components/Color'

function App() {

  return (
    <>
      <h1>This is App</h1>
      <Form></Form>
      <Routes>
        <Route index element={<State/>}></Route>
        <Route path="form" element={<Form/>}></Route>
        <Route path="color" element={<Color/>}></Route>
      </Routes>
    </>
  )
}

export default App
