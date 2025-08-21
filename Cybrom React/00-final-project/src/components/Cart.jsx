// src/pages/Cart.jsx
import { useContext } from "react";
import { CartContext } from "../App";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const formatINR = (n) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n || 0);

const Cart = () => {
  const { cart, addToCart, removeFromCart, deleteFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const subtotal = cart.reduce((sum, item) => sum + (Number(item.price) || 0) * (Number(item.quantity) || 0), 0);
  const itemCount = cart.reduce((count, item) => count + (Number(item.quantity) || 0), 0);

  const shipping = subtotal > 1000 ? 0 : (cart.length ? 50 : 0);
  const tax = Math.round(subtotal * 0.05);
  const grandTotal = subtotal + shipping + tax;

  const handleProceed = () => {
    const isLoggedIn = localStorage.getItem("userLoggedIn"); // set this to "true" on user login
    if (isLoggedIn) {
      navigate("/payment");
    } else {
      alert("You must be logged in to proceed with checkout.");
      navigate("/login");
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold my-3 italic underline text-center">Your Cart</h2>

      {cart.length === 0 ? (
        <div className="h-[400px] w-full flex flex-col items-center justify-center text-center">
          <img src="emptycart.jpg" alt="empty cart" className="h-[200px] w-[200px] object-contain mb-3" />
          <h3 className="font-bold text-[20px]">Your Cart is Empty</h3>
          <p className="font-normal text-[14px] mt-[10px] max-w-[560px]">
            You haven't added any product yet. Start exploring our collection and fill your cart with amazing items!
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-4 py-2 rounded-lg bg-[rgb(68,202,250)] hover:bg-[rgb(58,180,227)] text-white font-medium"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => {
            const lineTotal = (Number(item.price) || 0) * (Number(item.quantity) || 0);
            return (
              <div
                key={item.id}
                className="flex items-center gap-6 border p-5 rounded-xl shadow bg-white w-full"
              >
                {/* Product Image */}
                <div className="w-40 h-40 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden grid place-items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => (e.currentTarget.style.visibility = "hidden")}
                  />
                </div>

                {/* Product Details */}
                <div className="flex flex-col justify-between flex-1 gap-2">
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="text-gray-600 text-sm">Price: {formatINR(item.price)}</p>
                  <p className="text-gray-700 text-sm">
                    Total: <span className="font-semibold">{formatINR(lineTotal)}</span>
                  </p>
                </div>

                {/* Quantity Controls + Trash Icon */}
                <div className="flex items-center gap-3">
                  <button
                    className="bg-gray-300 px-3 py-1 rounded-lg text-sm disabled:opacity-50"
                    onClick={() => removeFromCart(item.id)}
                    disabled={item.quantity <= 1}
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="text-lg font-bold min-w-[20px] text-center">{item.quantity}</span>
                  <button
                    className="bg-[rgb(68,202,250)] text-white px-3 py-1 rounded-lg text-sm"
                    onClick={() => addToCart(item)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                  <button
                    onClick={() => deleteFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 ml-2"
                    title="Remove Item"
                    aria-label="Remove item"
                  >
                    <FaTrash size={18} />
                  </button>
                </div>
              </div>
            );
          })}

          {/* Order Summary */}
          <div className="mt-6 p-5 border rounded-xl shadow bg-gray-50">
            <h3 className="text-base font-bold mb-4">Order Summary</h3>
            <p className="text-sm text-gray-700">
              Items: <span className="font-medium">{itemCount}</span>
            </p>
            <p className="text-sm text-gray-700">
              Subtotal: <span className="font-medium">{formatINR(subtotal)}</span>
            </p>
            <p className="text-sm text-gray-700">
              Shipping:{" "}
              <span className="font-medium">
                {shipping === 0 ? "Free" : formatINR(shipping)}
              </span>
            </p>
            <p className="text-sm text-gray-700">
              Tax (5%): <span className="font-medium">{formatINR(tax)}</span>
            </p>
            <hr className="my-3" />
            <p className="text-lg font-bold">Grand Total: {formatINR(grandTotal)}</p>

            <button
              onClick={handleProceed}
              className="w-full mt-4 bg-[rgb(68,202,250)] hover:bg-[rgb(58,180,227)] text-white py-3 rounded-lg text-base font-semibold"
            >
              Proceed
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
