// src/pages/PaymentPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    // Simulate successful payment
    navigate("/order-confirmation");
  };

  return (
    <div className="p-4 max-w-xl mx-auto bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">Payment Page</h2>
      <p className="mb-2">Product: Sample Product</p>
      <p className="mb-2">Price: ₹499</p>
      <button
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 mt-4 w-full"
        onClick={handlePayment}
      >
        Proceed to Pay
      </button>
    </div>
  );
};

export default PaymentPage;
