import React from "react";
import AppRouter from "./router";
import { CartProvider } from "./context/CartContext";
import "./styles/App.css";
import "./styles/index.css"; 
import bgImage from "./assets/bg.jpg";

const App = () => {
  return (
    <CartProvider>
      <div 
        className="min-h-screen flex flex-col bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Main Content */}
        <div className="flex-grow bg-white bg-opacity-80">
          <AppRouter />
        </div>

        {/* Fixed Footer */}
        <footer className="bg-gray-900 text-white text-center py-4">
          © 2025 Your E-Commerce. All rights reserved.
        </footer>
      </div>
    </CartProvider>
  );
};

export default App;
