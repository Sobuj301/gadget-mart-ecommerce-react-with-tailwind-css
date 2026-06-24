import { useNavigate } from "react-router";

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black">
      <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg max-w-md w-full">
        
        <h1 className="text-3xl font-bold text-green-600 mb-3">
          🎉 Success!
        </h1>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Your order has been placed successfully.  
          We will contact you soon.
        </p>

        <div className="space-y-3">
          <button
            onClick={() => navigate("/")}
            className="w-full py-2 bg-black text-white rounded hover:opacity-90 transition"
          >
            Continue Shopping
          </button>

          <button
            onClick={() => navigate("/orders")}
            className="w-full py-2 border border-gray-400 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            View Orders
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;