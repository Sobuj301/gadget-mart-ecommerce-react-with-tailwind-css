import { useState } from "react";
import Heading from "./Heading";
import ProductCard from "./ProductCard";
import Search from "./Search";
import NotFound from "./NotFound";

const Products = ({ products }) => {
    const [showMore, setShowMore] = useState(false);
    const [sortType, setSortType] = useState("");
    const [search, setSearch] = useState("");
    
    const keyword = search.toLowerCase();
    const filterProducts = products.filter(
        (item) =>
            item.title.toLowerCase().includes(keyword) ||
            item.category.toLowerCase().includes(keyword)
    );

    const sortItems = [...filterProducts].sort((a, b) => {
        if (sortType === "low") return a.price - b.price;
        if (sortType === "high") return b.price - a.price;
        return 0;
    });

    const visibleProducts = showMore ? sortItems : sortItems.slice(0, 12);

    return (
        <section className="py-16 bg-white dark:bg-[#0f172a] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10">
                    <Heading
                        subTitle="Featured Products"
                        title="Discover trending gadgets."
                    />
                </div>

                <div className="mb-8">
                    <Search
                        sortType={sortType}
                        setSortType={setSortType}
                        search={search}
                        setSearch={setSearch}
                    />
                </div>

                {filterProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {visibleProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <NotFound setSearch={setSearch} search={search} />
                )}

                {/* Show More/Less Button - Premium Style */}
                {filterProducts.length > 12 && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowMore(!showMore)}
                            className="px-8 py-3 border-2 border-[#22C55E] text-[#22C55E] hover:bg-[#22C55E] hover:text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95"
                        >
                            {showMore ? "Show Less" : "Explore More Gadgets"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Products;