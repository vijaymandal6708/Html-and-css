import './App.css'
import Form from './components/Form'
import Multiform from './components/Multiform'
import Localstorage from './components/LocalStorage'
import { Route,Routes } from 'react-router-dom'
import Localfrm from './components/Localfrm'

function App() {

  return (
    <>
       <Routes>
        <Route index element={<Localstorage/>}></Route>
        <Route path='/showdata' element={<Localfrm></Localfrm>}></Route>
       </Routes>
    </>
  )
}

export default App
