import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://localhost:7008/api/Product/${id}`);
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
        } else {
          setErrorMsg("Product not found.");
        }
      } catch (error) {
        setErrorMsg("Error fetching product.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center text-gray-500 mt-10">Loading...</p>;
  if (errorMsg) return <p className="text-center text-red-500 mt-10">{errorMsg}</p>;

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6 grid md:grid-cols-2 gap-6">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full rounded-xl object-cover h-80"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-gray-600 mb-2">Category: {product.category}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-bold text-blue-700 mb-6">₹{product.price}</p>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Add to Cart
            </button>
            <button
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
              onClick={() => navigate("/payment")}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
