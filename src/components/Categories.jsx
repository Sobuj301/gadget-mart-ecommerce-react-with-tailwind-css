import CategoryCard from "./CategoryCard";
import Heading from "./Heading";

const Categories = ({ categories }) => {
    return (
            <div className="max-w-7xl mx-auto py-5 md:py-16 px-4 sm:px-6 lg:px-8">
                <Heading title=" Browse by Category" subTitle="Our Collections"></Heading>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        categories.map(category => <CategoryCard key={category.id} category={category}></CategoryCard>)
                    }
                </div>
            </div>
    );
};

export default Categories;