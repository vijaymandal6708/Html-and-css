import './App.css'
import Slider from './components/Slider'
import FeaturedProducts from './components/FeaturedProducts'
import {Routes,Route} from 'react-router-dom'
import LatestProducts from './components/LatestProducts'
import Layout from './components/Layout'
import Categories from './components/Categories'
import Cart from './components/Cart'
import Signup from './components/Signup'
import Login from './components/Login'
import AboutUs from './components/Aboutus'

function App() {

  return (
    <>

       <Routes>
         <Route path="/" element={<Layout/>}>
           <Route
          index
          element={
            <>
              <Slider />
              <FeaturedProducts />
            </>
          }/>
           <Route path="categories" element={<Categories/>}></Route>
           <Route path="latest-products" element={<LatestProducts/>}></Route>
           <Route path="cart" element={<Cart/>}></Route>
           <Route path="signup" element={<Signup/>}></Route>
           <Route path="login" element={<Login/>}></Route>
           <Route path="about" element={<AboutUs/>}></Route>
         </Route>
       </Routes>



    </>
  )
}

export default App
