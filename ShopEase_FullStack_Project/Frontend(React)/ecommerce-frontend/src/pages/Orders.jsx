import React from "react";

const Orders = () => {
  const dummyOrders = [
    { id: 1, name: "Product A", date: "2024-12-01", status: "Delivered" },
    { id: 2, name: "Product B", date: "2025-01-15", status: "Shipped" },
    { id: 3, name: "Product C", date: "2025-03-05", status: "Processing" },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">My Orders</h2>
      <ul className="divide-y divide-gray-200">
        {dummyOrders.map((order) => (
          <li key={order.id} className="py-4">
            <div className="flex justify-between">
              <div>
                <p className="font-semibold">{order.name}</p>
                <p className="text-sm text-gray-500">Date: {order.date}</p>
              </div>
              <span className="text-sm text-green-600">{order.status}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
