import { useContext } from "react";
import { OrdersContext } from "../App";

const Orders = () => {
  const { orders } = useContext(OrdersContext);

  // Show latest order first
  const sortedOrders = [...orders].reverse();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center underline italic">Your Orders</h2>

      {sortedOrders.length === 0 ? (
        <div className="h-[350px] flex flex-col items-center justify-center">
          <img src="noOrder.jpg" alt="no orders" className="h-[200px] w-[200px]" />
          <p className="text-center text-base mt-4">You have no orders yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {sortedOrders.map((order) => (
            <div
              key={order.id}
              className="p-5 border rounded-xl shadow bg-white"
            >
              {/* Order Header */}
              <div className="flex justify-between items-center mb-1 text-sm">
                <h3 className="font-semibold">Order ID: {order.id}</h3>
                <span className="text-gray-500">{order.date}</span>
              </div>

              {/* Customer Details */}
              <div className="mb-2 text-sm text-gray-700">
                <p><span className="font-semibold">Name:</span> {order.customerName}</p>
                <p><span className="font-semibold">Address:</span> {order.customerAddress}</p>
              </div>

              {/* Products List */}
              <div className="space-y-1 border-t pt-1">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 py-1 border-b last:border-b-0"
                  >
                    {/* Product image smaller */}
                    <div className="w-14 h-14 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>

                    {/* Product details compact */}
                    <div className="flex flex-col">
                      <p className="font-medium text-sm leading-tight">{item.title}</p>
                      <p className="text-gray-500 text-xs">
                        ₹{item.price} × {item.quantity}
                      </p>
                    </div>

                    {/* Spacer */}
                    <div className="flex-1"></div>

                    {/* Total */}
                    <div className="text-right font-semibold text-sm">
                      ₹{item.price * item.quantity}
                    </div>
                  </div>
                ))}
              </div>

              {/* Subtotal & Payment */}
              <div className="flex justify-between mt-1 text-sm font-semibold">
                <span>Subtotal:</span>
                <span>₹{order.total}</span>
              </div>

              <div className="mt-1 text-gray-700 text-xs">
                Payment Method: <span className="font-semibold">{order.paymentMethod}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
