import { useLoaderData, useParams } from "react-router";
import ProductFeature from "../components/ProductFeature";
import ProductHero from "../components/ProductHero";
import SpecAccordion from "../components/SpecAccordion";
import CustomerReviews from "../components/CustomerReviews"

const ProductDetails = () => {
    const { products } = useLoaderData()
    const { id } = useParams()
    const findProduct = products.find(product => product.id == id)

    return (
        <div>
            <ProductHero findProduct={findProduct} />
            <ProductFeature findProduct={findProduct} />
            <SpecAccordion findProduct={findProduct} />
            <CustomerReviews />
        </div>
    );
};

export default ProductDetails;