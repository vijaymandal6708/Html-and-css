import './App.css'
import Slider from './components/Slider'

function App() {

  return (
    <>

       <nav className="bg-white p-[8px] px-[40px] flex gap-[40px] items-center text-blue font-[650]">
         <div className="logo h-[6vh] w-[12vw]">
          <img src="logo.jpg" alt="" className="bg-no-repeat bg-contain h-[6vh] w-[12vw] "/>
         </div>
         <div className="categories ml-auto">Categories</div>
         <div className="latest-products">Latest Products</div>
         <div className="wishlist-container">Wishlist</div>
         <div className="cart-container">Cart</div>
         <div className="login-container">Login</div>
       </nav>

       <Slider/>

    </>
  )
}

export default App
