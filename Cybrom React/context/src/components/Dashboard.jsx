import { useContext } from "react"

function Dashboard (){

    let name = useContext(user)

    return(
        <>
          <h1>Dashboard</h1>
          <h1>{name}</h1>
        </>
    )
}

export default Dashboard