import { ArrowRight, Slice } from "lucide-react";
import { Link } from "react-router";
import ScrollReveal from "./ScrollReveal";

const CategoryCard = ({ category }) => {
    const { name, slug, image } = category

    return (
        <ScrollReveal>
            <Link to={`/category/${slug}`}> 
                <div className="group border border-neutral-100 relative overflow-hidden h-72 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500">
                    <img className="h-full w-full object-cover  transition-transform duration-500 group-hover:scale-105" src={image} alt={name} />
                    <h2 className="font-bold text-xl absolute bottom-6 left-6 tracking-wider text-emerald-600 uppercase group-hover:translate-x-2 transition-all duration-500">{name}</h2>
                    <span className="absolute transition-all duration-500 bottom-6 right-6 scale-0 opacity-0 group-hover:text-emerald-600 group-hover:opacity-100 group-hover:scale-100"><ArrowRight size={30} /></span>

                </div>
            </Link>
        </ScrollReveal>
    );
};

export default CategoryCard;