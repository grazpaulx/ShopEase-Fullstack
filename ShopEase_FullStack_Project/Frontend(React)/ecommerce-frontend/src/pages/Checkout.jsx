import React from "react";

const Checkout = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <div className="mb-4">
        <p><strong>Shipping Address:</strong> 123, Example Street, India</p>
        <p><strong>Payment Method:</strong> UPI / Card</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Order Summary:</h3>
        <ul className="list-disc list-inside">
          <li>Product 1 - ₹999</li>
          <li>Product 2 - ₹499</li>
          <li>Total: ₹1498</li>
        </ul>
      </div>
      <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
        Confirm Purchase
      </button>
    </div>
  );
};

export default Checkout;
