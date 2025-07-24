import { Link,Outlet } from "react-router-dom"

function Layout() {

  return(
    <>
      
       <nav className="flex items-center bg-blue-500 border-b-1 border-white p-2">
        <p className="ml-5">Stock Broker</p>
       </nav>

       <Outlet></Outlet>

       <footer>Footer</footer>
    
    </>
  )
  
}

export default Layout