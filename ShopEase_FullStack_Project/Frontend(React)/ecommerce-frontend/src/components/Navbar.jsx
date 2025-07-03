import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaShoppingCart, FaHome, FaHeart, FaSignOutAlt } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    alert("Logged out successfully!");
    navigate("/auth");
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-logo">ShopEase</Link>
      </div>
      <div className="nav-right">
        <Link to="/" className="nav-link"><FaHome /> Home</Link>
        <Link to="/cart" className="nav-link"><FaShoppingCart /> Cart</Link>
        <Link to="/wishlist" className="nav-link"><FaHeart /> Wishlist</Link>

        {user ? (
          <>
            <Link to="/profile" className="nav-link"><FaUser /> Profile</Link>
            <Link to="/orders" className="nav-link">My Orders</Link>
            <button className="nav-link logout-btn" onClick={handleLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </>
        ) : (
          <Link to="/auth" className="nav-link">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
