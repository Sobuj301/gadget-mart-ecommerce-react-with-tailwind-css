import Swal from "sweetalert2";
import useCartProduct from "../hooks/useCartProduct";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router";

const CheckoutPage = () => {
  const { totalItem, subTotal } = useCartProduct()
  const { removeCart, setCart } = useContext(CartContext)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      name: form.name.value,
      number: form.number.value,
      city: form.city.value,
      address: form.address.value,
      items: totalItem,
      total: subTotal,
    };

    // 🔵 LOADING ALERT
    Swal.fire({
      title: "Sending...",
      text: "Please wait while we submit your data",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxU5-SwXPKXpLn8fe88r5L_uh404DxMHADRcJe46Njvcw5_gaM82QyuiLALwn6wy1ejkQ/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (result.success) {
        removeCart()
        setCart([])
        Swal.fire({
          title: "Success 🎉",
          text: "Your data has been submitted!",
          icon: "success",
          confirmButtonText: "OK",
        });

        form.reset();

        const timer = setTimeout(() => {
          navigate('/success');
        }, 2000);

        return () => clearTimeout(timer);

      } else {
        throw new Error("Failed");
      }
    } catch (error) {
      Swal.fire({
        title: "Error ❌",
        text: "Something went wrong. Try again!",
        icon: "error",
        confirmButtonText: "Retry",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="min-h-screen max-w-4xl mx-auto px-4 py-10">

      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Checkout
      </h1>

      {/* SHIPPING INFO */}
      <div className="border p-5 rounded-lg bg-white dark:bg-gray-900 mb-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          Shipping Information
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <input
            required
            name="name"
            type="text"
            placeholder="Full Name"
            className="p-2 border rounded dark:bg-gray-800 dark:text-white"
          />

          <input
            required
            name="number"
            type="text"
            placeholder="Phone Number"
            className="p-2 border rounded dark:bg-gray-800 dark:text-white"
          />

          <input
            required
            name="city"
            type="text"
            placeholder="City"
            className="p-2 border rounded dark:bg-gray-800 dark:text-white"
          />

          <input
            required
            name="address"
            type="text"
            placeholder="Address"
            className="p-2 border rounded dark:bg-gray-800 dark:text-white"
          />

        </div>
      </div>

      {/* ORDER SUMMARY (SIMPLE) */}
      <div className="border p-5 rounded-lg bg-white dark:bg-gray-900 mb-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          Order Summary
        </h2>

        <div className="flex justify-between mb-2">
          <span>Items Total</span>
          <span>{totalItem}</span>
        </div>

        <div className="flex justify-between mb-2">
          <span>Shipping</span>
          <span>$50</span>
        </div>

        <hr className="my-3 border-gray-300 dark:border-gray-700" />

        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>${subTotal + 50}</span>
        </div>
      </div>

      {/* PLACE ORDER BUTTON */}
      <button
        disabled={totalItem === 0}
        className={`w-full py-3 rounded font-medium
    bg-black text-white
    dark:bg-white dark:text-black
    hover:opacity-90 transition
    ${totalItem === 0 ? "opacity-50 cursor-not-allowed" : ""}
  `}
      >
        Place Order
      </button>

    </form>
  );
};

export default CheckoutPage;