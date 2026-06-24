import { use, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router";
import useCartProduct from "../hooks/useCartProduct";
import EmptyCart from "../components/EmtryCart";

const CartPage = () => {
    const {cart} = useContext(CartContext)
    const {cartProducts,subTotal} = useCartProduct()
    const { updateCartQuantity, removeCartProduct } = use(CartContext);



    if(cart == 0){
        return <EmptyCart></EmptyCart>
    }
    
    const handleQuantity = (id, type) => {
        updateCartQuantity(id, type)
    }

    const handleRemove = (id) => {
        removeCartProduct(id)
    }

    return (
        <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">

            <div className="lg:col-span-2 space-y-4">
                {cartProducts.map((product) => (

                    <div
                        key={product.id}
                        className="
                             flex flex-col sm:flex-row sm:items-center gap-4
                             border border-gray-200 dark:border-gray-700
                             p-4 rounded-lg
                             bg-white dark:bg-gray-900
                             hover:shadow-md transition
                               "
                    >
                        {/* IMAGE */}
                        <img
                            src={product.image}
                            alt={product.title}
                            className="
          w-full sm:w-20 h-40 sm:h-20
          object-cover rounded
        "
                        />

                        {/* TITLE + PRICE */}
                        <div className="flex-1 text-center sm:text-left">
                            <h2 className="font-bold text-lg text-gray-900 dark:text-white">
                                {product.title}
                            </h2>

                            <p className="text-gray-600 dark:text-gray-400">
                                ${product.price}
                            </p>
                        </div>

                        {/* QTY CONTROLS */}
                        <div className="flex items-center justify-center gap-2">

                            <button onClick={() => handleQuantity(product.id, "dec")}
                                className="
            px-3 py-1 rounded
            bg-gray-200 dark:bg-gray-700
            text-black dark:text-white
            hover:scale-105 transition
          "
                            >
                                -
                            </button>

                            <span className="font-semibold w-6 text-center text-gray-900 dark:text-white">
                                {product.quantity}
                            </span>

                            <button onClick={() => handleQuantity(product.id, "inc")}
                                className="
            px-3 py-1 rounded
            bg-gray-200 dark:bg-gray-700
            text-black dark:text-white
            hover:scale-105 transition
          "
                            >
                                +
                            </button>

                        </div>

                        {/* REMOVE */}
                        <button onClick={() => handleRemove(product.id)}
                            className="
          text-red-500 font-medium
          hover:text-red-700 transition
          sm:ml-2 text-center
        "
                        >
                            Remove
                        </button>

                    </div>
                ))}

            </div>

            <div
                className="sticky top-24 self-start
    border border-gray-200 dark:border-gray-700
    p-4 rounded-lg h-fit w-full
    bg-white dark:bg-gray-900
    shadow-sm hover:shadow-md transition
  "
            >

                {/* TITLE */}
                <h2 className="text-xl font-bold mb-4 text-center lg:text-left text-gray-900 dark:text-white">
                    Order Summary
                </h2>

                {/* DETAILS */}
                <div className="space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">

                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span className="font-medium">${subTotal}</span>
                    </div>

                    <div className="flex justify-between">
                        <span>Shipping</span>
                        <span className="font-medium">$50</span>
                    </div>

                    <hr className="border-gray-200 dark:border-gray-700" />

                    <div className="flex justify-between font-bold text-lg text-gray-900 dark:text-white">
                        <span>Total</span>
                        <span>${subTotal + 50}</span>
                    </div>

                </div>

                {/* CHECKOUT BUTTON */}
                <Link
                    to="/checkout"
                    className="
    block w-full mt-4 py-3 rounded-lg font-medium text-center transition
    bg-black text-white
    dark:bg-white dark:text-black
    hover:opacity-90
    active:scale-[0.98]
    shadow-sm hover:shadow-md
  "
                >
                    Checkout
                </Link>

            </div>
        </div>
    );
};

export default CartPage;