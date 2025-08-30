// src/pages/Payment.jsx
import { useContext, useEffect, useMemo, useState } from "react";
import { CartContext, OrdersContext } from "../App";
import { useNavigate } from "react-router-dom";

const formatINR = (n) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 })
    .format(Number(n) || 0);

const Payment = () => {
  const { cart, clearCart } = useContext(CartContext);
  const { addOrder } = useContext(OrdersContext);
  const navigate = useNavigate();

  const [method, setMethod] = useState("");     
  const [name, setName] = useState("");     
  const [address, setAddress] = useState("");
  const [savedAddresses, setSavedAddresses] = useState([]);

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + (Number(item.price) || 0) * (Number(item.quantity) || 0), 0),
    [cart]
  );

  // Load saved addresses + auto-fill name
  useEffect(() => {
    const storedAddresses = JSON.parse(localStorage.getItem("savedAddresses")) || [];
    setSavedAddresses(storedAddresses);

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const signedUpUser = JSON.parse(localStorage.getItem("signfrm"));
    const nameFromLogin = currentUser?.name?.trim();
    const nameFromSignup = signedUpUser?.name?.trim();
    if (nameFromLogin) setName(nameFromLogin);
    else if (nameFromSignup) setName(nameFromSignup);
  }, []);

  const handleConfirmPayment = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      navigate("/orders");
      return;
    }

    const trimmedName = (name || "").trim();
    const trimmedAddress = (address || "").trim();
    const chosenMethod = (method || "").trim();

    if (!trimmedName || !trimmedAddress || !chosenMethod) {
      alert("Please enter your name, address and choose a payment method!");
      return;
    }

    const ok = window.confirm("Do you want to confirm this order?");
    if (!ok) return;

    const order = {
      id: Date.now(),
      items: [...cart],
      total: subtotal,
      customerName: trimmedName,
      customerAddress: trimmedAddress,
      paymentMethod: chosenMethod,
      date: new Date().toLocaleString(),
    };
    addOrder(order);

    if (trimmedAddress && !savedAddresses.includes(trimmedAddress)) {
      const updated = [...savedAddresses, trimmedAddress];
      setSavedAddresses(updated);
      localStorage.setItem("savedAddresses", JSON.stringify(updated));
    }

    clearCart();
    alert("✅ Order confirmed! Redirecting to your orders.");
    navigate("/orders");
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center underline">Payment Methods</h2>

      {/* Products List */}
      <div className="mb-4 p-6 border rounded-xl shadow-md bg-white space-y-2">
        <h3 className="text-lg font-semibold mb-2">Your Products:</h3>
        {cart.map((item) => (
          <div key={item.id} className="flex items-center gap-3 py-1 border-b last:border-b-0">
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 object-cover rounded-md"
              onError={(e) => (e.currentTarget.style.visibility = "hidden")}
            />
            <div className="flex-1">
              <p className="font-medium text-sm">{item.title}</p>
              <p className="text-gray-500 text-xs">
                {formatINR(item.price)} × {item.quantity}
              </p>
            </div>
            <p className="font-semibold text-sm">
              {formatINR((Number(item.price) || 0) * (Number(item.quantity) || 0))}
            </p>
          </div>
        ))}
        <div className="flex justify-between mt-2 text-base font-bold">
          <span>Subtotal:</span>
          <span>{formatINR(subtotal)}</span>
        </div>
      </div>

      {/* Customer Info */}
      <div className="mb-4 p-6 border rounded-xl shadow-md bg-gray-50 space-y-3">
        <h3 className="text-lg font-semibold">Customer Details</h3>

        <div>
          <label className="block mb-1 font-medium text-sm">Full Name:</label>
          <input
            type="text"
            value={name}
            disabled
            placeholder="Enter your full name"
            className="w-full p-2 border rounded-md text-sm"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-sm">Address:</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your delivery address"
            rows="2"
            className="w-full p-2 border rounded-md text-sm"
          />
        </div>

        {savedAddresses.length > 0 && (
          <div>
            <label className="block mb-1 font-medium text-sm">Or Select Previous Address:</label>
            <select
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 border rounded-md text-sm"
              value={address || ""}
            >
              <option value="">-- Choose from saved addresses --</option>
              {savedAddresses.map((addr, i) => (
                <option key={i} value={addr}>
                  {addr}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Payment Method (required) */}
      <div className="mb-4 p-6 border rounded-xl shadow-md bg-gray-50">
        <label className="block mb-1 font-medium text-sm">Select Payment Method:</label>
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="w-full p-2 border rounded-md text-sm"
          required
        >
          <option value="">-- Please select --</option>
          <option value="COD">Cash on Delivery</option>
          <option value="UPI">UPI / Wallet</option>
          <option value="Card">Credit / Debit Card</option>
        </select>
      </div>

      <button
        onClick={handleConfirmPayment}
        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg text-base font-semibold"
      >
        Confirm & Pay
      </button>
    </div>
  );
};

export default Payment;
