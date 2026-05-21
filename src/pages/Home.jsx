import { useLoaderData } from "react-router";
import Hero from "../components/Hero";
import ScrollReveal from "../components/ScrollReveal";
import Categories from "../components/Categories";

const Home = () => {
    const categories = useLoaderData()
    console.log(categories)
    return (
        <div>
            <Hero></Hero>
            <ScrollReveal>
                <Categories categories={categories}></Categories>
            </ScrollReveal>
        </div>
    );
};

export default Home;