import { data } from "../App"
import { useContext } from "react"
function Child1() {

    let actualdata = useContext(data)

    return(
        <>
          <h1>Child1</h1>
          {/* <data.Consumer>
              {(data)=><h1>{data}</h1>}
          </data.Consumer> */}
          <h2>{data}</h2>
        </>
    )
    
}

export default Child1