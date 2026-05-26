import { motion } from "framer-motion";

const CategoryBanner = ({ params, products }) => {
    const id = params.id;

    const singleProduct = products.find(product => product.category === id)

    console.log(singleProduct, "ki paoya geche")

    return (

        <motion.div
            className="relative w-full h-80 md:h-105 overflow-hidden">
            <div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${singleProduct.image})` }}
            ></div>

            <div className="absolute inset-0 bg-black/55"></div>

            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent"></div>
            <div className="relative z-10 h-full flex items-center px-6 md:px-16">


                <div
                    className="max-w-2xl text-white">

                    <motion.p
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}

                        className="uppercase tracking-[4px] text-sm md:text-base text-emerald-400 font-semibold mb-3">
                        GadgetMart Collection
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: -80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold leading-tight mb-4 capitalize">
                        {singleProduct.title || "Category Name"}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-sm md:text-lg text-gray-200 leading-relaxed mb-6">
                        Discover premium gadgets, modern accessories, and top-quality
                        products specially selected for this category.
                    </motion.p>

                    <div className="text-sm text-gray-300">
                        Home <span className="mx-2">›</span>
                        <span className="capitalize">
                            {singleProduct.category || "Category"}
                        </span>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};

export default CategoryBanner;