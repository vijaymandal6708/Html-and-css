import { useContext } from "react";
import { CartContext } from "../App";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-10">
      <h2 className="text-[25px] font-bold mb-6 text-center italic underline">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-6 max-w-4xl mx-auto">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 border p-6 rounded-2xl shadow-md bg-white"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-[100px] h-[100px] object-cover rounded-lg shadow"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600 mt-1">Price: ₹{item.price}</p>
                <p className="text-gray-700 mt-1">
                  Total: <span className="font-semibold">₹{item.price * item.quantity}</span>
                </p>
              </div>

              <div className="flex items-center gap-4">
                <button
                  className="bg-gray-300 px-4 py-2 rounded-lg text-lg disabled:opacity-50"
                  onClick={() => removeFromCart(item.id)}
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <span className="text-xl font-bold">{item.quantity}</span>
                <button
                  className="bg-[rgb(68,202,250)] text-white px-4 py-2 rounded-lg text-lg"
                  onClick={() => addToCart(item)}
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <div className="mt-6 p-6 border rounded-2xl shadow bg-gray-50">
            <h3 className="text-xl font-bold mb-4">Subtotal: ₹{subtotal}</h3>
            <button
              onClick={() => navigate("/payment")}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
