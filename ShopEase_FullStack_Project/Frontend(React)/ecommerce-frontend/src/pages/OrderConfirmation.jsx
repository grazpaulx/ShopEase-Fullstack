// src/pages/OrderConfirmation.jsx
import React from "react";

const OrderConfirmation = () => {
  const orderId = Math.floor(Math.random() * 1000000);

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg mt-10 text-center">
      <h2 className="text-2xl font-bold mb-4 text-green-600">Order Confirmed!</h2>
      <p className="text-lg">Thank you for your purchase 😊</p>
      <p className="mt-4 font-medium">Order ID: <span className="text-blue-600">{orderId}</span></p>
    </div>
  );
};

export default OrderConfirmation;
