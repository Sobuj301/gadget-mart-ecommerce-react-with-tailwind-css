import { Link } from "react-router";
import ScrollReveal from "./ScrollReveal";

const ProductCard = ({ product }) => {
    const { id, title, price,category, image, rating, } = product
    return (
        <ScrollReveal>
            <Link to={`/product/${id}`}>
                <div className="relative group p-5 border border-slate-100 dark:border-slate-800/60 bg-white dark:bg-slate-900/60 backdrop-blur-sm shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] rounded-2xl overflow-hidden transition-all hover:-translate-y-1 duration-300">

                    {/* Fixed Image Container / Stage - Full size image */}
                    <div className="bg-slate-50 dark:bg-slate-950/60 rounded-xl aspect-square flex items-center justify-center overflow-hidden border border-transparent dark:border-slate-800/30">
                        <img
                            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                            src={image}
                            alt={title}
                        />
                    </div>

                    {/* Title & Price Row */}
                    <div className="flex justify-between items-start pt-4 pb-2">
                        <h2 className="text-base font-semibold text-slate-800 dark:text-slate-200 tracking-tight line-clamp-2 max-w-[70%]">
                            {category}
                        </h2>
                        <p className="text-sm font-bold text-emerald-500 whitespace-nowrap">
                            $ {price}
                        </p>
                    </div>

                    {/* Rating Box */}
                    <div className="flex items-center gap-1 pb-4">
                        <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                            ★ {rating}
                        </span>
                    </div>

                    {/* View Details Button */}
                    <div className="absolute right-4 bottom-4 overflow-hidden rounded-xl">
                        <button className="bg-emerald-600 hover:bg-emerald-500 md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0 px-4 py-2 transition-all duration-300 text-xs font-semibold text-white shadow-md shadow-emerald-900/20">
                            View Details
                        </button>
                    </div>
                </div>
            </Link>
        </ScrollReveal>
    );
};

export default ProductCard;