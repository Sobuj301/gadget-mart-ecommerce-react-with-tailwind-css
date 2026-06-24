import { useRouteLoaderData } from "react-router";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Products from "../components/Products";

const Home = () => {
    const {products,categories}= useRouteLoaderData("root");
   

    return (
        <div>
            <Hero></Hero>
            <Categories categories={categories}></Categories>
            <Products products={products}></Products>
        </div>
    );
};

export default Home;