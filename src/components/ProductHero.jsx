import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";
import { addLocalStoreData } from "../utilities/localStore";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
const ProductHero = ({ findProduct }) => {
    const { cart, setCart } = useContext(CartContext)
    const { id, title, category, description, reviewsCount, price } = findProduct

    const handleAddToCart = () => {

        const updateCart = [...cart, id]
        addLocalStoreData(id)
        if (cart.includes(id)) {
            Swal.fire({
                icon: "warning",
                title: "Already Added!",
                text: "This product is already in your cart.",
                confirmButtonText: "OK"
            });
        }
        else {
            setCart(updateCart)
            Swal.fire({
                icon: "success",
                title: "Added to Cart!",
                text: "Product added to cart successfully.",
                confirmButtonText: "OK"
            });
        }
    }
    return (
        <motion.section
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto px-4 py-12 transition-colors duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 flex items-center justify-center transition-colors">
                    <motion.img
                        initial={{ opacity: 0, x: 80, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        src={findProduct.image}
                        alt={title}
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                    />
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white uppercase">{category}</h1>
                    <div className="flex items-center gap-2 text-yellow-500">
                        <div className="flex">
                            {[...Array(4)].map((_, i) => (
                                <Star key={i} size={20} fill="currentColor" />
                            ))}
                        </div>
                        <span className="text-gray-500 dark:text-gray-400 text-sm ml-1">({reviewsCount})</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">$ {price}</span>
                        <span className="text-lg text-gray-400 line-through">{price + (price * 10 / 100)}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {description}
                    </p>
                    <button onClick={handleAddToCart} className="flex items-center justify-center gap-3 px-8 py-3 transition-colors duration-300 mx-auto lg:mx-0 bg-[#22C55E] dark:bg-[#34D399] text-white dark:text-black hover:bg-[#16A34A] dark:hover:bg-[#10B981]">
                        <ShoppingCart size={20} />
                        Add to Cart
                    </button>
                </div>
            </div>
        </motion.section>
    );
};

export default ProductHero;