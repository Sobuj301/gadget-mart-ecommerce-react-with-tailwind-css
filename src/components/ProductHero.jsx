import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const ProductHero = ({ findProduct }) => {
    const { cart, setCart } = useContext(CartContext)
    const { id, title, category, description, reviewsCount, price } = findProduct

    const handleAddToCart = () => {
        const existItem = cart.find(item => item.id === id);

        let updateCart;

        if (existItem) {
            updateCart = cart.map(item => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item; 
            });
        } else {
            const newCart = {
                id: id,
                quantity: 1
            };

            updateCart = [...cart, newCart];
        }

        setCart(updateCart); // UI update
    };
    return (
        <motion.section
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                {/* IMAGE SECTION */}
                <div className="relative group">

                    <div className="
        bg-gradient-to-br from-gray-100 to-gray-200 
        dark:from-gray-900 dark:to-gray-800 
        rounded-2xl sm:rounded-3xl 
        p-6 sm:p-8 
        flex items-center justify-center 
        h-[320px] sm:h-[400px] lg:h-[520px] 
        shadow-sm overflow-hidden
      ">

                        <motion.img
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            src={findProduct.image}
                            alt={title}
                            className="
            w-auto object-contain 
            max-h-[180px] sm:max-h-[260px] lg:max-h-[420px]
            transition-transform duration-500 
            group-hover:scale-105 
            drop-shadow-lg
          "
                        />

                    </div>

                    {/* glow effect */}
                    <div className="absolute inset-0 rounded-3xl blur-2xl opacity-10 sm:opacity-20 bg-green-400 dark:bg-green-600 -z-10"></div>

                </div>

                {/* CONTENT SECTION */}
                <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">

                    {/* CATEGORY */}
                    <span className="text-xs sm:text-sm tracking-widest text-green-600 dark:text-green-400 font-semibold">
                        {category?.toUpperCase()}
                    </span>

                    {/* TITLE */}
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                        {title}
                    </h1>

                    {/* RATING */}
                    <div className="flex items-center gap-2 text-yellow-500">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} fill="currentColor" />
                            ))}
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            ({reviewsCount} reviews)
                        </span>
                    </div>

                    {/* PRICE */}
                    <div className="flex items-end gap-3 sm:gap-4 flex-wrap">
                        <span className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                            $ {price}
                        </span>

                        <span className="text-base sm:text-lg text-gray-400 line-through">
                            ${Math.round(price + price * 0.1)}
                        </span>

                        <span className="text-xs sm:text-sm font-medium text-green-600 dark:text-green-400">
                            Save 10%
                        </span>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                        {description}
                    </p>

                    {/* BUTTON */}
                    <button
                        onClick={handleAddToCart}
                        className="
          flex items-center justify-center gap-3 
          px-5 sm:px-6 py-3 
          rounded-xl 
          w-full sm:w-fit
          bg-green-500 hover:bg-green-600 
          dark:bg-green-400 dark:hover:bg-green-500
          text-white dark:text-black 
          font-semibold 
          transition-all duration-300 
          shadow-md hover:shadow-lg
        "
                    >
                        <ShoppingCart size={20} />
                        Add to Cart
                    </button>

                </div>

            </div>
        </motion.section>
    );
};

export default ProductHero;