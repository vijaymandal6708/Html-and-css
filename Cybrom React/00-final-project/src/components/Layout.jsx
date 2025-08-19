import { Link, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../App'   // ⬅️ import context

const Layout = () => {
  const { cart } = useContext(CartContext) // ⬅️ access cart state

  return (
    <>
      <nav className="bg-white p-[8px] px-[40px] flex gap-[40px] items-center text-blue font-[600]">
        <div className="logo h-[6vh] w-[12.5vw] border-[1px] border-[rgb(68,202,250)] box-content flex align-center justify-center rounded-[3px] px-[3px] shadow-[2px_2px_1px_1px_rgb(68,202,250)]">
          <img src="logo.jpg" alt="logo" className="bg-no-repeat bg-contain h-[6vh] w-[11.5vw]" />
        </div>

        <Link to="/" className="home ml-auto">Home</Link>
        <Link to="categories" className="categories">Categories</Link>
        <Link to="latest-products" className="latest-products">Latest Products</Link>  
        <Link to="cart" className="cart-container">
          Cart ({cart.length})
        </Link>
        <Link to="orders" className="signup-container">Orders</Link>
        <Link to="signup" className="signup-container">Signup</Link>
      </nav>

      <Outlet />

      <footer>
        <div className="footer-container flex h-[180px] justify-evenly bg-[rgb(68,202,250)] my-[20px]">
          <div className="leading-[30px] h-[160px] w-[350px] flex flex-col align-center justify-center text-center">
            <h3 className="font-bold text-[16px]">Download Our App</h3>
            <p className="text-[13.2px] italic font-[490]">Download App for Android Ios Phones</p>
            <div className="img-container flex justify-center gap-[15px] mt-[3px]">
              <img src="play-store.png" alt="play-store" className="h-[30px] w-[80px]" />
              <img src="app-store.png" alt="app-store" className="h-[30px] w-[80px]" />
            </div>
          </div>

          <div className="h-[160px] w-[350px] flex flex-col text-center align-center justify-center">
            <img src="logo.jpg" alt="logo" className="h-[35px] w-[120px] rounded-[2px] ml-[120px]" />
            <p className="text-[14px] mt-[12px] italic">Our Purpose is to Deliver The Best Quality</p>
            <p className="text-[14px] italic">Electronic Products Possible</p>
          </div>

          <div className="h-[160px] w-[250px] flex flex-col justify-center text-center">
            <h3 className="font-bold">Useful Links</h3> <br />
            <div className="text-[14px] italic">
              <p>Coupons</p>
              <p>Blog Post</p>
              <p>Return Policy</p>
              <p>Join Affiliate</p>
            </div>
          </div>

          <div className="h-[160px] w-[250px] flex flex-col justify-center text-center">
            <h3 className="font-bold">Follow Us</h3> <br />
            <div className="text-[14px] italic">
              <p>Facebook</p>
              <p>Twitter</p>
              <p>Instagram</p>
              <p>YouTube</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Layout
