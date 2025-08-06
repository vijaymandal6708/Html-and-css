import { data } from "../App"

import Child2 from "./Child2"

function Child1 (){
    return(
        <>
          <h1>Child1</h1>
          <Child2></Child2>
          <data.Consumer>
            {
              (data)=><h1>{data}</h1>
            }
          </data.Consumer>
        </>
    )
}

export default Child1