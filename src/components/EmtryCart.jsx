import React from "react";
import { useNavigate } from "react-router";

const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4 min-h-screen">
      <div className="text-6xl mb-4">🛒</div>

      <h2 className="text-2xl font-semibold mb-2">
        Your cart is empty
      </h2>

      <p className="text-gray-500 mb-6">
        Add some products to see them here.
      </p>

      <button
        onClick={() => navigate("/")}
        className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default EmptyCart;