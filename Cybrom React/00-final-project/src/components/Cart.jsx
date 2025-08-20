import { useContext } from "react";
import { CartContext } from "../App";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const { cart, addToCart, removeFromCart, deleteFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((count, item) => count + item.quantity, 0);

  const shipping = subtotal > 1000 ? 0 : 50;
  const tax = Math.round(subtotal * 0.05);
  const grandTotal = subtotal + shipping + tax;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold my-3 italic underline ml-[460px]">Your Cart</h2>

      {cart.length === 0 ? (
        <div className="h-[400px] w-[1000px] flex flex-col items-center justify-center px-[280px] text-center">
          <img src="emptycart.jpg" alt="empty cart" className="h-[200px] w-[200px]"/>
          <h3 className="font-bold text-[20px]">Your Cart is Empty</h3>
          <p className="font-normal text-[14px] mt-[10px]">You haven't added any product yet. Start exploring our collection and fill your cart with amazing items!</p>
        </div>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 border p-5 rounded-xl shadow bg-white w-full"
            >
              {/* Product Image */}
              <div className="w-40 h-40 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Product Details */}
              <div className="flex flex-col justify-between flex-1 gap-2">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="text-gray-600 text-sm">Price: ₹{item.price}</p>
                <p className="text-gray-700 text-sm">
                  Total: <span className="font-semibold">₹{item.price * item.quantity}</span>
                </p>
              </div>

              {/* Quantity Controls + Trash Icon */}
              <div className="flex items-center gap-3">
                <button
                  className="bg-gray-300 px-3 py-1 rounded-lg text-sm disabled:opacity-50"
                  onClick={() => removeFromCart(item.id)}
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <span className="text-lg font-bold">{item.quantity}</span>
                <button
                  className="bg-[rgb(68,202,250)] text-white px-3 py-1 rounded-lg text-sm"
                  onClick={() => addToCart(item)}
                >
                  +
                </button>
                <button
                  onClick={() => deleteFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 ml-2"
                  title="Remove Item"
                >
                  <FaTrash size={18} />
                </button>
              </div>
            </div>
          ))}

          {/* Subtotal & Payment Button (unchanged) */}
          <div className="mt-6 p-5 border rounded-xl shadow bg-gray-50">
            <h3 className="text-base font-bold mb-4">Order Summary</h3>
            <p className="text-sm text-gray-700">
              Items: <span className="font-medium">{itemCount}</span>
            </p>
            <p className="text-sm text-gray-700">
              Subtotal: <span className="font-medium">₹{subtotal}</span>
            </p>
            <p className="text-sm text-gray-700">
              Shipping:{" "}
              <span className="font-medium">
                {shipping === 0 ? "Free" : `₹${shipping}`}
              </span>
            </p>
            <p className="text-sm text-gray-700">
              Tax (5%): <span className="font-medium">₹{tax}</span>
            </p>
            <hr className="my-3" />
            <p className="text-lg font-bold">Grand Total: ₹{grandTotal}</p>

            <button
              onClick={() => navigate("/payment")}
              className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg text-base font-semibold"
            >
              Proceed your Orders
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
