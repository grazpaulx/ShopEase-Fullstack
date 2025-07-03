import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css"; // Ensure this file exists for styling

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [userData, setUserData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      localStorage.setItem("user", JSON.stringify(userData));
      alert("Signup successful! Please login.");
      setIsSignup(false);
    } else {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser && storedUser.email === userData.email && storedUser.password === userData.password) {
        localStorage.setItem("user", JSON.stringify(userData)); // Ensure user is stored
        alert("Login successful!");
        navigate("/"); // Redirect to Home Page after login
      } else {
        alert("Invalid credentials!");
      }
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>{isSignup ? "Sign Up" : "Login"}</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" value={userData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={userData.password} onChange={handleChange} required />
          <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
        </form>
        <p onClick={() => setIsSignup(!isSignup)} className="switch-auth">
          {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
        </p>
      </div>
    </div>
  );
};

export default Auth;
