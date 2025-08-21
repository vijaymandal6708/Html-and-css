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

// --- Contexts ---
export const CartContext = createContext();
export const OrdersContext = createContext();

function App() {
  /** ---------------- CART STATE ---------------- */
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  /** ---------------- ORDERS STATE ---------------- */
  const [orders, setOrders] = useState(() => {
    return JSON.parse(localStorage.getItem("orders")) || [];
  });

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  /** ---------------- CART FUNCTIONS ---------------- */
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
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
      }
      return prevCart.filter((item) => item.id !== productId);
    });
  };

  const deleteFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => setCart([]);

  /** ---------------- ORDER FUNCTIONS ---------------- */
  const addOrder = (cartItems, userDetails) => {
    const newOrder = {
      id: Date.now(),
      items: cartItems,
      total: cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
      username: userDetails?.username || "Guest",
      address: userDetails?.address || "Not Provided",
      date: new Date().toLocaleString(),
    };

    setOrders((prev) => [newOrder, ...prev]);
    clearCart(); // ✅ clear cart after placing order
  };

  /** ---------------- RENDER ---------------- */
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
