import './App.css'

function App() {

  return (
    <>

       <nav className="bg-[rgb(32,167,229)] p-[8px] px-8">
         <div className="logo h-[6vh] w-[12vw]">
          <img src="logo.jpg" alt="" className="bg-no-repeat bg-contain h-[6vh] w-[12vw]"/>
         </div>
         <div className="search-bar"></div>
         <div className="cart-container"></div>
         <div className="wishlist-container"></div>
         <div className="login-container"></div>
       </nav>

    </>
  )
}

export default App
