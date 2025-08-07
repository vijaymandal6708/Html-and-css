import './App.css'
import {Route,Routes} from "react-router-dom"
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import User from './components/User'
import {Link} from 'react-router-dom'

function App() {

  return (
    <>
      <h1>Hello</h1>
    
      <Link to="/user/1/qasim">User1</Link> <br />
      <Link to="/user/2/abhishek">User2</Link> <br />
      <Link to="/user/3/rohit">User3</Link>


      <Routes>
        <Route path="/user/:id/:name" element={<User/>} />
        <Route path="/about/:id" element={<About/>} />
        <Route path="/contact/:name" element={<Contact/>} />
        <Route path="/services/:contact" element={<Services/>} />
      </Routes>
    </>
  )
}

export default App
