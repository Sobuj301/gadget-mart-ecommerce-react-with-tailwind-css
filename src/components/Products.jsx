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

    // 👉 limit logic
    const visibleProducts = showMore
        ? sortItems
        : sortItems.slice(0, 12);

    return (
        <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Heading
                subTitle="Featured Products"
                title="Discover trending gadgets."
            />

            <Search
                sortType={sortType}
                setSortType={setSortType}
                search={search}
                setSearch={setSearch}
            />

            {filterProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {visibleProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <NotFound setSearch={setSearch} search={search} />
            )}

            <div className="text-center mt-8">
                <button
                    onClick={() => setShowMore(!showMore)}
                    className="
      px-6 py-2
      border border-gray-300
      rounded-md
      text-gray-700
      bg-white
      hover:bg-gray-100
      transition
      duration-200
    "
                >
                    {showMore ? "Show Less" : "Show More"}
                </button>
            </div>
        </div>
    );
};

export default Products;