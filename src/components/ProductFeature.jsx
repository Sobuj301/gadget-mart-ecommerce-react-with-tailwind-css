import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const ProductFeature = ({ findProduct }) => {
    const { features } = findProduct;
    return (
        <ScrollReveal>
            <section className="py-12 bg-white dark:bg-gray-950 transition-colors duration-300">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Heading */}
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
                        Why Choose Gadget Mart?
                    </h2>

                    <p className="text-center text-gray-500 dark:text-gray-400 mb-10">
                        We provide the best experience for your shopping journey
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        {features.map((feature) => (
                            <div
                                key={feature.name}
                                className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                    {feature.name}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}

                    </div>

                </div>

            </section>
        </ScrollReveal>
    );
};

export default ProductFeature;