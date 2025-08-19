import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Slider from "./components/Slider";
import FeaturedProducts from "./components/FeaturedProducts";
import LatestProducts from "./components/LatestProducts";
import Layout from "./components/Layout";
import Categories from "./components/Categories";
import Cart from "./components/Cart";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Orders from "./components/Orders"; // 👈 new page
import Payment from "./components/Payment";

// Contexts
export const CartContext = createContext();
export const OrdersContext = createContext();

function App() {
  // CART STATE
  const [cart, setCart] = useState([]);

  // ORDERS STATE
  const [orders, setOrders] = useState([]);

  // --- Cart Functions ---
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === productId);
      if (existing && existing.quantity > 1) {
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prevCart.filter((item) => item.id !== productId);
      }
    });
  };

  const clearCart = () => setCart([]);

  // --- Orders Functions ---
  const addOrder = (order) => {
    setOrders((prev) => [...prev, order]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      <OrdersContext.Provider value={{ orders, addOrder }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <>
                  <Slider />
                  <FeaturedProducts />
                </>
              }
            />
            <Route path="categories" element={<Categories />} />
            <Route path="latest-products" element={<LatestProducts />} />
            <Route path="cart" element={<Cart />} />
            <Route path="orders" element={<Orders />} /> {/* 👈 New Orders page */}
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="payment" element={<Payment />} />
          </Route>
        </Routes>
      </OrdersContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
