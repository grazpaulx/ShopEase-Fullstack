// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import api from "../api";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/Product")
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.error("Error fetching products:", err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-center py-8">Welcome to ShopEase</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
