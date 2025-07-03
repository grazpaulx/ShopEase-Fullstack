import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Profile.css";
import {
  FaShoppingCart,
  FaHome,
  FaGift,
  FaEdit,
  FaSignOutAlt,
} from "react-icons/fa";

const UserProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("Logged out successfully!");
    navigate("/auth");
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          className="profile-avatar"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="User Avatar"
        />
        <h2>{user?.name || "Guest User"}</h2>
        <p>Email: {user?.email || "No email found"}</p>

        <div className="profile-links">
          <Link to="/">
            <FaHome /> Home
          </Link>
          <Link to="/cart">
            <FaShoppingCart /> Cart
          </Link>
          <Link to="/wishlist">
            <FaGift /> Wishlist
          </Link>
        </div>

        <div className="profile-actions">
          <button className="edit-btn">
            <FaEdit /> Edit Profile
          </button>
          <button className="logout-btn" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
