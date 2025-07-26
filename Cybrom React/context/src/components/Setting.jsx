import { useContext } from "react"
import { user } from "../App"

function Setting (){

    let detail = useContext(user)

    return(
        <>
          <hr />
          <h1>{detail.email}</h1>
          <h1>{detail.password}</h1>
        </>
    )
}

export default Setting