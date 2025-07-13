import './App.css'
import Child1 from './components/Child1'

function App() {

  let data = {
    name: "Vijay",
    age: 23
  }

  return (
    <>
      <h1>Hello</h1>
      <Child1 data={data}></Child1>
    </>
  )
}

export default App
