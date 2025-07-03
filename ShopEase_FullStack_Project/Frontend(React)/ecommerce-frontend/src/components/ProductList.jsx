import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [loading, setLoading] = useState(true);

  // ✅ API call to fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://localhost:7008/api/Product");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // ✅ Unique categories
  const categories = [...new Set(products.map((product) => product.category))];

  // ✅ Filtering
  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesPrice =
      priceRange === ""
        ? true
        : priceRange === "0-500"
        ? product.price <= 500
        : priceRange === "501-1000"
        ? product.price > 500 && product.price <= 1000
        : product.price > 1000;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  // ✅ Sorting
  if (sortOption === "priceLowHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "priceHighLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === "nameAZ") {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption === "nameZA") {
    filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
  }

  return (
    <div className="p-4">
      {/* ✅ Filter & Search Section */}
      <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-between items-center mb-6">
        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 rounded-md w-full md:w-[25%]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Category */}
        <select
          className="border p-2 rounded-md w-full md:w-[20%]"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category, idx) => (
            <option value={category} key={idx}>{category}</option>
          ))}
        </select>

        {/* Sort */}
        <select
          className="border p-2 rounded-md w-full md:w-[20%]"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
          <option value="nameAZ">Name: A to Z</option>
          <option value="nameZA">Name: Z to A</option>
        </select>

        {/* Price Range */}
        <select
          className="border p-2 rounded-md w-full md:w-[20%]"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        >
          <option value="">All Prices</option>
          <option value="0-500">₹0 - ₹500</option>
          <option value="501-1000">₹501 - ₹1000</option>
          <option value="1000+">Above ₹1000</option>
        </select>
      </div>

      {/* ✅ Product Display Section */}
      {loading ? (
        <p className="text-center text-gray-500">Loading products...</p>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No products found!</p>
      )}
    </div>
  );
};

export default ProductList;
