// components/Orders.jsx
import React, { useContext } from "react";
import { OrdersContext } from "../App";

const Orders = () => {
  const { orders } = useContext(OrdersContext);

  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center underline">Your Orders</h2>

      {orders.length === 0 ? (
        <p className="text-center text-lg text-gray-600">
          📦 No orders yet. <br /> Start shopping to place your first order!
        </p>
      ) : (
        <div className="space-y-8">
          {orders.map((order) => (
            <div
              key={order.id}
              className="border rounded-2xl p-6 bg-white shadow-md hover:shadow-lg transition"
            >
              {/* Order Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold">
                  Order <span className="text-blue-600">#{order.id}</span>
                </h3>
                <p className="text-gray-500 text-sm">{order.date}</p>
              </div>

              {/* Items List */}
              <ul className="divide-y">
                {order.items.map((item) => (
                  <li key={item.id} className="py-3 flex justify-between items-center">
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-gray-500 text-sm">
                        ₹{item.price} × {item.quantity}
                      </p>
                    </div>
                    <p className="font-semibold">₹{item.price * item.quantity}</p>
                  </li>
                ))}
              </ul>

              {/* Order Footer */}
              <div className="flex flex-col md:flex-row md:justify-between mt-4 border-t pt-4">
                <p className="text-gray-700">
                  Payment: <span className="font-semibold">{order.paymentMethod}</span>
                </p>
                <p className="text-lg font-bold">Total: ₹{order.total}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
