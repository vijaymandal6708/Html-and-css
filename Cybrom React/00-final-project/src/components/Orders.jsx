import { useContext } from "react";
import { OrdersContext } from "../App";

const Orders = () => {
  const { orders } = useContext(OrdersContext);

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 ml-[440px] underline italic">Your Orders</h2>

      {orders.length === 0 ? (
        <div className="h-[400px] w-[1000px] px-[280px] flex flex-col items-center justify-center">
          <img src="noOrder.jpg" alt="no orders" className="h-[300px] w-[300px]"/>
          <p className="text-center text-base">You have no orders yet.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="p-4.5 border rounded-2xl shadow bg-white"
            >
              <div className="flex justify-between items-center mb-4 text-sm">
                <h3 className="font-semibold text-base">Order ID: {order.id}</h3>
                <span className="text-gray-500 text-sm">{order.date}</span>
              </div>

              {/* Products List */}
              <div className="space-y-4 border-t pt-2">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-5 p-1 border-b last:border-b-0"
                  >
                    {/* Product image */}
                    <div className="w-32 h-32 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>

                    {/* Product name & quantity vertically */}
                    <div className="flex flex-col justify-center gap-1">
                      <p className="font-medium text-sm">{item.title}</p>
                      <p className="text-gray-500 text-sm">
                        ₹{item.price} × {item.quantity}
                      </p>
                    </div>

                    {/* Spacer */}
                    <div className="flex-1"></div>

                    {/* Total */}
                    <div className="w-28 text-right font-semibold text-sm">
                      ₹{item.price * item.quantity}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between mt-2 text-base font-semibold">
                <span>Subtotal:</span>
                <span>₹{order.total}</span>
              </div>

              <div className="mt-2 text-gray-700 text-sm">
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
