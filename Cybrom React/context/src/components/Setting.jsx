import { useContext } from "react"
import { user } from "../App"

function Setting (){

    let detail = useContext(user)

    return(
        <>
          <hr />
          <h2>email:{user.email}</h2>
          <h2>password:{user.password}</h2>
        </>
    )
}

export default Setting