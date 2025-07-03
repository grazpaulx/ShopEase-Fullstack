import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate, Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [wishlist, setWishlist] = useState([]);

  // Load wishlist from localStorage
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  // Check if product is in wishlist
  const isWishlisted = wishlist.some((item) => item.id === product.id);

  // Toggle Wishlist
  const toggleWishlist = () => {
    let updatedWishlist;
    if (isWishlisted) {
      updatedWishlist = wishlist.filter((item) => item.id !== product.id);
    } else {
      updatedWishlist = [...wishlist, product];
    }
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  // Handle Add to Cart
  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
    navigate("/cart");
  };

  // Fallback image if URL fails
  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/300x200.png?text=Image+Not+Available";
  };

  return (
    <div className="border rounded-2xl shadow-md p-4 bg-white hover:scale-105 transition-all relative">
      {/* Wishlist icon */}
      <div
        className="absolute top-3 right-3 text-xl cursor-pointer"
        onClick={toggleWishlist}
      >
        {isWishlisted ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
      </div>

      {/* Product Image */}
      <Link to={`/product/${product.id}`}>
        <img
          src={product.imageUrl}
          alt={product.name}
          onError={handleImageError}
          className="w-full h-48 object-cover rounded-md"
        />
      </Link>

      {/* Product Info */}
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="font-semibold text-blue-600">₹{product.price}</p>

      {/* Buttons */}
      <div className="mt-3 flex gap-2">
        <button
          onClick={handleAddToCart}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all"
        >
          Add to Cart
        </button>
        <button
          onClick={() => navigate("/cart")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
