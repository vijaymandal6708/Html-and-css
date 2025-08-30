// src/App.jsx
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
  /** ---------------- helpers ---------------- */
  const safeParse = (key, fallback) => {
    try {
      const v = JSON.parse(localStorage.getItem(key));
      return v ?? fallback;
    } catch {
      return fallback;
    }
  };

  /** ---------------- CART STATE ---------------- */
  const [cart, setCart] = useState(() => safeParse("cart", []));

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch {}
  }, [cart]);

  /** ---------------- ORDERS STATE ---------------- */
  const [orders, setOrders] = useState(() => safeParse("orders", []));

  useEffect(() => {
    try {
      localStorage.setItem("orders", JSON.stringify(orders));
    } catch {}
  }, [orders]);

  /** ---------------- CART FUNCTIONS ---------------- */
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      let next;
      if (existing) {
        next = prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (Number(item.quantity) || 0) + 1 }
            : item
        );
      } else {
        next = [...prevCart, { ...product, quantity: 1 }];
      }
      try { localStorage.setItem("cart", JSON.stringify(next)); } catch {}
      return next;
    });
    alert("✅ Item added to cart!");
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const next = prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(0, (Number(item.quantity) || 0) - 1) }
            : item
        )
        .filter((item) => (Number(item.quantity) || 0) > 0);
      try { localStorage.setItem("cart", JSON.stringify(next)); } catch {}
      return next;
    });
  };

  const deleteFromCart = (productId) => {
    setCart((prevCart) => {
      const next = prevCart.filter((item) => item.id !== productId);
      try { localStorage.setItem("cart", JSON.stringify(next)); } catch {}
      return next;
    });
  };

  const clearCart = () => {
    setCart([]);
    try { localStorage.setItem("cart", JSON.stringify([])); } catch {}
  };

  /** ---------------- ORDER FUNCTIONS ---------------- */
  // ✅ Accept a full order object (matches Payment.jsx)
  const addOrder = (order) => {
    const normalized = {
      id: order?.id ?? Date.now(),
      items: Array.isArray(order?.items) ? order.items : [],
      total: Number(order?.total) || 0,
      customerName: order?.customerName || order?.username || "Guest",
      customerAddress: order?.customerAddress || order?.address || "Not Provided",
      paymentMethod: order?.paymentMethod || "",
      date: order?.date || new Date().toLocaleString(),
    };

    setOrders((prev) => {
      const next = [normalized, ...(prev || [])]; // newest first
      try { localStorage.setItem("orders", JSON.stringify(next)); } catch {}
      return next;
    });

    // Do NOT clear the cart here; Payment.jsx already clears after success.
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
