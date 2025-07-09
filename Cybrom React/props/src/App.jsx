import './App.css'
import Child1 from './components/Child1'
import Child2 from './components/Child2'
import Child3 from './components/Child3'
import Child4 from './components/Child4'

function App() {

   let info = {
      name:"Ajay",
      contact:1234,
      city:"bhopal"
    }

  return (
    
    <>
      <h1>Welcome to react js class</h1>
      <Child1 name="Vijay" age={23} contact={6265826714} city="Bhopal"></Child1>
      <Child2 name="Vijay" age={23} contact={6265} city="Bhopal"></Child2>
      <Child3 userinfo={info}></Child3>
      <hr />
      <Child4 user={{...info}}></Child4>
    </>
  )
}

export default App
