import { useRouteLoaderData } from "react-router";
import Categories from "../components/Categories";
import Products from "../components/Products";

const Shop = () => {
    const { products, categories } = useRouteLoaderData("root");
    return (
        <div>
            <Categories categories={categories}></Categories>
            <Products products={products}></Products>
        </div>
    );
};

export default Shop;