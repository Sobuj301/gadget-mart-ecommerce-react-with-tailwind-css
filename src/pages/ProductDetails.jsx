import { useParams, useRouteLoaderData } from "react-router";
import ProductFeature from "../components/ProductFeature";
import ProductHero from "../components/ProductHero";
import SpecAccordion from "../components/SpecAccordion";
import CustomerReviews from "../components/CustomerReviews"
import RelatedProducts from "../components/RelatedProducts";

const ProductDetails = () => {
    const { products } = useRouteLoaderData("root")
    const { id } = useParams()
    const findProduct = products.find(product => product.id == id)
    const moreProduct = products.filter(product => product.category === findProduct?.category && product.id !== findProduct.id)

    return (
        <div>
            <ProductHero findProduct={findProduct} />
            <ProductFeature findProduct={findProduct} />
            <SpecAccordion findProduct={findProduct} />
            <CustomerReviews />
            <RelatedProducts moreProduct={moreProduct} />

         
        </div>
    );
};

export default ProductDetails;