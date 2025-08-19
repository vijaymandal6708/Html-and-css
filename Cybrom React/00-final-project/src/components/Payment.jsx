import { useContext, useState } from "react";
import { CartContext, OrdersContext } from "../App";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const { cart, clearCart } = useContext(CartContext);
  const { addOrder } = useContext(OrdersContext);
  const navigate = useNavigate();

  const [method, setMethod] = useState(""); // start empty

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleConfirmPayment = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      navigate("/cart");
      return;
    }

    if (!method) {
      alert("Please select a payment method!");
      return;
    }

    addOrder({
      id: Date.now(),
      items: [...cart],
      total: subtotal,
      paymentMethod: method,
      date: new Date().toLocaleString(),
    });

    clearCart();
    alert("✅ Payment successful! Order placed.");
    navigate("/orders");
  };

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center underline">Payment Methods</h2>

      {/* Products List */}
      <div className="mb-6 p-6 border rounded-2xl shadow-md bg-white space-y-4">
        <h3 className="text-xl font-semibold mb-4">Your Products:</h3>
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 p-2 border-b last:border-b-0"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="flex-1">
              <p className="font-medium">{item.title}</p>
              <p className="text-gray-500 text-sm">
                ₹{item.price} × {item.quantity}
              </p>
            </div>
            <p className="font-semibold">₹{item.price * item.quantity}</p>
          </div>
        ))}
        <div className="flex justify-between mt-4 text-lg font-bold">
          <span>Subtotal:</span>
          <span>₹{subtotal}</span>
        </div>
      </div>

      {/* Payment Method Dropdown */}
      <div className="mb-6 p-6 border rounded-2xl shadow-md bg-gray-50">
        <label className="block mb-2 font-medium">Select Payment Method:</label>
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="w-full p-3 border rounded-lg"
        >
          <option value="" disabled>
            Select your payment method
          </option>
          <option value="COD">Cash on Delivery 💵</option>
          <option value="UPI">UPI / Wallet 📱</option>
          <option value="Card">Credit / Debit Card 💳</option>
        </select>
      </div>

      <button
        onClick={handleConfirmPayment}
        className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl text-lg font-semibold"
      >
        Confirm & Pay
      </button>
    </div>
  );
};

export default Payment;
