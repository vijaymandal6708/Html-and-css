import { createContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Slider from "./components/Slider";
import FeaturedProducts from "./components/FeaturedProducts";
import LatestProducts from "./components/LatestProducts";
import Layout from "./components/Layout";
import Categories from "./components/Categories";
import Cart from "./components/Cart";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Orders from "./components/Orders";
import Payment from "./components/Payment";
import AdminPanel from "./components/AdminPanel";
import AdminLogin from "./components/AdminLogin";

export const CartContext = createContext();
export const OrdersContext = createContext();

function App() {
  // --- Initialize from localStorage ---
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const [orders, setOrders] = useState(() => {
    return JSON.parse(localStorage.getItem("orders")) || [];
  });

  // --- Save to localStorage whenever cart changes ---
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // --- Save to localStorage whenever orders change ---
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

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

  // ✅ New function for completely removing item
  const deleteFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => setCart([]);

  // --- Orders Functions ---
  const addOrder = (order) => {
    setOrders((prev) => [...prev, order]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, deleteFromCart, clearCart }}
    >
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
            <Route path="payment" element={<Payment />} />
            <Route path="orders" element={<Orders />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="admin" element={<AdminPanel />} />
            <Route path="adminlogin" element={<AdminLogin />} />
          </Route>
        </Routes>
      </OrdersContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
