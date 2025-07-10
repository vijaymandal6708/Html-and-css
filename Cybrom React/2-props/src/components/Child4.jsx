import Child5 from "./Child5"
import { TiAdjustBrightness } from "react-icons/ti";

const Child4 = ({user}) => {
  // let {name,age} = props

  return (
    <>
      <h1>This is child 4</h1>
      <h1>{user.name}</h1>
      <h1>{user.city}</h1>
      <h1>{user.contact}</h1>
      <TiAdjustBrightness style={{color:"blue"}}/>
      <hr/>
      <Child5 myname={user}></Child5>
    </>
  )
}

export default Child4