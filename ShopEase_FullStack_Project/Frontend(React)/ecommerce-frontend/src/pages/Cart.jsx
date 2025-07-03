import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../pages/cart.css";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li key={index} className="bg-white p-4 rounded-xl shadow-md flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-gray-600">₹{item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 font-bold"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-right">
            <p className="text-xl font-bold">Total: ₹{totalPrice}</p>
            <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
