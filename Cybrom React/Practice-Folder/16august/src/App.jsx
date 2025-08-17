import './App.css'
import State from './components/State'
import Form from './components/Form'
import Color from './components/Color'
import { Routes,Route } from 'react-router-dom'
import Layout from './components/Layout'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<State></State>}></Route>
          <Route path="form" element={<Form></Form>}></Route>
          <Route path="color" element={<Color></Color>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
