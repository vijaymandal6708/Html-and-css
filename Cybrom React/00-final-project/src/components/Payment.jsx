import { useContext, useEffect, useMemo, useState } from "react";
import { CartContext, OrdersContext } from "../App";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const formatINR = (n) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 })
    .format(Number(n) || 0);

// Lightweight inline confirmation modal
function ConfirmModal({ open, title = "Confirm", message, onConfirm, onCancel }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-6">{message}</p>
        <div className="flex justify-end gap-3">
          <button onClick={onCancel} className="px-4 py-2 rounded-lg border hover:bg-gray-50 text-sm">Cancel</button>
          <button onClick={onConfirm} className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 text-sm">Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default function Payment() {
  const { cart, clearCart } = useContext(CartContext);
  const { addOrder } = useContext(OrdersContext);
  const navigate = useNavigate();

  const [method, setMethod] = useState("");
  const [name, setName] = useState(""); // auto-fill from signup/login
  const [address, setAddress] = useState("");
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);

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

  const placeOrder = () => {
    const order = {
      id: Date.now(),
      items: [...cart],
      total: subtotal,
      customerName: (name || "").trim(),
      customerAddress: (address || "").trim(),
      paymentMethod: method || "",
      date: new Date().toLocaleString(),
    };

    addOrder(order); // NOTE: App.addOrder must accept an order object (recommended)

    // Save address if new
    const trimmedAddress = order.customerAddress;
    if (trimmedAddress && !savedAddresses.includes(trimmedAddress)) {
      const updated = [trimmedAddress, ...savedAddresses].slice(0, 5); // keep last 5
      setSavedAddresses(updated);
      localStorage.setItem("savedAddresses", JSON.stringify(updated));
    }

    clearCart();

    toast.success("Order placed successfully! Redirecting to Orders…", { autoClose: 1200 });
    setTimeout(() => navigate("/orders", { replace: true }), 300);
  };

  const handleConfirmPayment = () => {
    if (cart.length === 0) {
      toast.info("Your cart is empty. Redirecting to Orders…");
      setTimeout(() => navigate("/orders", { replace: true }), 300);
      return;
    }

    const trimmedName = (name || "").trim();
    const trimmedAddress = (address || "").trim();

    if (!trimmedName || !trimmedAddress) {
      toast.error("Please enter your name and address.");
      return;
    }

    setShowConfirm(true);
  };

  return (
    <div className="p-6 md:p-8 max-w-6xl mx-auto">{/* wider page */}
      <ToastContainer position="top-center" limit={2} />
      <h2 className="text-3xl font-bold mb-5 text-center underline">Payment Methods</h2>

      {/* Products List */}
      <div className="mb-5 p-5 border rounded-2xl shadow-md bg-white space-y-2">
        <h3 className="text-lg font-semibold mb-2">Your Products</h3>
        {cart.length === 0 ? (
          <p className="text-sm text-gray-500">No items in cart.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex items-center gap-3 py-1 border-b last:border-b-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-md"
                onError={(e) => (e.currentTarget.style.visibility = "hidden")}
              />
              <div className="flex-1">
                <p className="font-medium text-sm leading-tight">{item.title}</p>
                <p className="text-gray-500 text-xs">{formatINR(item.price)} × {item.quantity}</p>
              </div>
              <p className="font-semibold text-sm">{formatINR((Number(item.price) || 0) * (Number(item.quantity) || 0))}</p>
            </div>
          ))
        )}
        <div className="flex justify-between mt-2 text-base font-bold">
          <span>Subtotal</span>
          <span>{formatINR(subtotal)}</span>
        </div>
      </div>

      {/* Customer Info */}
      <div className="mb-5 p-5 border rounded-2xl shadow-md bg-gray-50 space-y-3">{/* compact height */}
        <h3 className="text-lg font-semibold">Customer Details</h3>

        <div className="grid md:grid-cols-2 gap-3">
          <div>
            <label className="block mb-1 font-medium text-sm">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full p-2 border rounded-md text-sm"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-sm">Payment Method (optional)</label>
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="w-full p-2 border rounded-md text-sm"
            >
              <option value="">— Optional —</option>
              <option value="COD">Cash on Delivery 💵</option>
              <option value="UPI">UPI / Wallet 📱</option>
              <option value="Card">Credit / Debit Card 💳</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium text-sm">Address</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your delivery address"
            rows={2}
            className="w-full p-2 border rounded-md text-sm"
          />
        </div>

        {savedAddresses.length > 0 && (
          <div>
            <label className="block mb-1 font-medium text-sm">Or Select Previous Address</label>
            <select
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 border rounded-md text-sm"
              value={address || ""}
            >
              <option value="">-- Choose from saved addresses --</option>
              {savedAddresses.map((addr, i) => (
                <option key={i} value={addr}>{addr}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      <button
        onClick={handleConfirmPayment}
        className="w-full md:w-72 mx-auto block bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl text-base font-semibold"
      >
        Confirm & Pay
      </button>

      <ConfirmModal
        open={showConfirm}
        title="Confirm order"
        message="Do you want to confirm this order?"
        onCancel={() => setShowConfirm(false)}
        onConfirm={() => {
          setShowConfirm(false);
          placeOrder();
        }}
      />
    </div>
  );
}
