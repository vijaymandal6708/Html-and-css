import { useContext } from "react"
import { store } from "../App"

function Child2 (){

    let name = useContext(store)

    return(


        <>

          <h1>this is child 2</h1>

          <h1>{name}</h1>
          
          {/* <store.Consumer>
            {
                (data)=><h1>{data}</h1>
            }
          </store.Consumer> */}

        </>
    )
}

export default Child2