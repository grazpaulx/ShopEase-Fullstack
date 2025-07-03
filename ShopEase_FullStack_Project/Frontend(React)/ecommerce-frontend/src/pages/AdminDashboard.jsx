import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const AdminDashboard = () => {
  const [user, setUser] = useState(null);

  const dummyUsers = [
    { name: "Alice", email: "alice@example.com" },
    { name: "Bob", email: "bob@example.com" },
    { name: "Charlie", email: "charlie@example.com" },
  ];

  const dummyOrders = [
    { id: "ORD123", user: "Alice", product: "T-shirt", status: "Delivered" },
    { id: "ORD456", user: "Bob", product: "Shoes", status: "Processing" },
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Get user from localStorage
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    setUser(loggedInUser);

    // Fetch products from backend
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://localhost:7008/api/Product");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };

    fetchProducts();
  }, []);

  if (!user?.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">Admin Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Users */}
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-2xl font-semibold mb-4">Users</h2>
          <ul className="space-y-2">
            {dummyUsers.map((u, index) => (
              <li key={index} className="border-b pb-2">
                <p className="font-medium">{u.name}</p>
                <p className="text-sm text-gray-500">{u.email}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-2xl font-semibold mb-4">Products</h2>
          <ul className="space-y-2">
            {products.map((p) => (
              <li key={p.id} className="border-b pb-2">
                <p className="font-medium">{p.name}</p>
                <p className="text-sm text-gray-500">₹{p.price}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Orders */}
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-2xl font-semibold mb-4">Orders</h2>
          <ul className="space-y-2">
            {dummyOrders.map((o, index) => (
              <li key={index} className="border-b pb-2">
                <p className="font-medium">Order ID: {o.id}</p>
                <p className="text-sm">User: {o.user}</p>
                <p className="text-sm">Product: {o.product}</p>
                <p className="text-sm text-green-600">Status: {o.status}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
