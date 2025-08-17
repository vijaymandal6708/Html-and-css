import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
     <header>
        <nav>
            <Link to="/">State</Link>
            <Link to="form">Form</Link>
            <Link to="color">Color</Link>
        </nav>
     </header>
     <hr />
     <main>
        <Outlet></Outlet>
     </main>
     <hr /> 
     <footer>
        <h1>This is Footer</h1>
     </footer> 
    </>
  )
}

export default Layout
