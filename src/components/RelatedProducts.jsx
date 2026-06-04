import ProductCard from "./ProductCard";

const RelatedProducts = ({moreProduct}) => {
    return (
        <section className="py-12 transition-colors duration-300 bg-white dark:bg-gray-900">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        More Products
                    </h2>

                    <p className="text-gray-500 dark:text-gray-400 mb-6">
                        Similar products you might like
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {moreProduct.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

            </div>

        </section>
    );
};

export default RelatedProducts;