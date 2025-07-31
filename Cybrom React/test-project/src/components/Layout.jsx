import { Link,Outlet } from "react-router-dom"
import State from "./State"

function Layout(){

   return(
    <>
    
      <nav className="navbar">
        <div className="left">
          <Link to="/">State Page</Link>
          <Link to="form">Form Page</Link>
          <Link to="color">Color Page</Link>
        </div>
        <div className="right">
          <p>About us</p>
          <p>Contact us</p>
          <p>Your Orders</p>
        </div>
      </nav>

      <Outlet></Outlet>

      <footer>
        <h1>This is Footer</h1>
        <p>Foolish Developer is a blog website where you will find great tutorials on web design and development. Here each tutorial is beautifully described step by step with the required source code
        Foolish Developer is a blog website where you will find great tutorials on web design and development. Here each tutorial is beautifully described step by step with the required source code</p>
      </footer>
    
    </>
   )

}

export default Layout