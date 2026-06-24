import { useEffect, useState } from "react";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbxU5-SwXPKXpLn8fe88r5L_uh404DxMHADRcJe46Njvcw5_gaM82QyuiLALwn6wy1ejkQ/exec")
      .then((res) => res.text())   // 👈 JSON না, text নাও
      .then((data) => {
        const parsed = JSON.parse(data);
        console.log(parsed,"akhn pou ki?")
        setOrders(parsed);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  console.log(orders)

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-xl font-semibold">Loading orders...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-5 bg-gray-100 dark:bg-black">
      <h1 className="text-3xl font-bold mb-6 text-center">
        📦 My Orders
      </h1>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500">No orders found</p>
      ) : (
        <div className="grid gap-4 max-w-3xl mx-auto">
          {orders.map((order, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-5 rounded shadow"
            >
              <h2 className="font-bold text-lg mb-2">
                Order #{index + 1}
              </h2>

              <p><b>Name:</b> {order.name}</p>
              <p><b>Phone:</b> {order.number}</p>
              <p><b>City:</b> {order.city}</p>
              <p><b>Address:</b> {order.address}</p>
              <p><b>Items:</b> {order.items}</p>
              <p><b>Total:</b> {order.total} BDT</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersPage;