import { useContext } from "react"
import { user } from "../App"

function Dashboard (){

    let detail = useContext(user)

    return(
        <>
          <hr />
          <h1>{detail.name}</h1>
        </>
    )
}

export default Dashboard