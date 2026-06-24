import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useRouteLoaderData } from "react-router";

const useCartProduct = () => {
    const { cart } = useContext(CartContext)
    const { products } = useRouteLoaderData('root')

    const cartProducts = cart.map(item => {
        const product = products.find(pro => pro.id == item.id)
        if (!product) {
            return null
        }
        return { ...product, quantity: item.quantity }
    })
        .filter(Boolean);


    const subTotal = cartProducts.reduce((accumulate,product)=>accumulate + (product.price * product.quantity),0)

    const totalItem = cartProducts.reduce((accumulate,product) => accumulate + product.quantity,0)
    return {cartProducts,subTotal,totalItem}
};

export default useCartProduct;