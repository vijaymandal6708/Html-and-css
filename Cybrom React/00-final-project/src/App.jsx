import './App.css'

function App() {

  return (
    <>

       <nav className="bg-[rgb(32,167,229)] p-[8px] px-8 flex gap-[30px] items-center text-white font-[650]">
         <div className="logo h-[6vh] w-[12vw]">
          <img src="logo.jpg" alt="" className="bg-no-repeat bg-contain h-[6vh] w-[12vw] "/>
         </div>
         <div className="categories ml-[300px]">Latest Products</div>
         <div className="wishlist-container">Wishlist</div>
         <div className="cart-container">Cart</div>
         <div className="login-container">Login</div>
       </nav>

    </>
  )
}

export default App
