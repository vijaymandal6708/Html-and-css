import {Route,Routes} from 'react-router-dom'
import './App.css'
import About from './components/About'
import Services from './components/Services'
import Layout from './components/Layout'

function App() {

  return (
    <>

      <Routes>
         <Route path='/' element={<Layout></Layout>}>
           <Route path='/about' element={<About></About>}></Route>
           <Route path='/services' element={<Services></Services>}></Route>
         </Route>
      </Routes>
    </>
  )
}

export default App
