import './App.css'
import Child1 from './components/Child1'
import Child2 from './components/Child2'

function App() {

  return (
    <>
      <h1>Welcome to react js class</h1>
      <Child1 name="Vijay" age={23} contact={6265826714} city="Bhopal"></Child1>
      <Child2 name="Vijay" age={23} contact={6265} city="Bhopal"></Child2>
    </>
  )
}

export default App
