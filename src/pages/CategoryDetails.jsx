import { useParams, useRouteLoaderData } from "react-router";
import CategoryBanner from "../components/CategoryBanner";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import Heading from "../components/Heading";

const CategoryDetails = () => {
    const { products, categories } = useRouteLoaderData("root")
    const params = useParams()
    const filterCategory = categories.filter(cate => cate.slug !== params.id)
    const filterProduct = products.filter((item) => item.category === params.id)

    return (
        <div className="max-7xl mx-auto">
            <CategoryBanner params={params} products={products}></CategoryBanner>

            <section className="px-4 sm:px-6 lg:px-8 py-16">
                <Heading title="Find the perfect gadget for work," subTitle="Explore Products"></Heading>
                <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
                    {
                        filterProduct.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                    }
                </div>
            </section>
                
            <section className="px-4 sm:px-6 lg:px-8 py-12">

                <Heading title="Explore more collections" subTitle="Related Categories"></Heading>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        filterCategory?.map(category => <CategoryCard key={category.id} category={category}></CategoryCard>)
                    }
                </div>
            </section>
        </div>
    );
};

export default CategoryDetails;