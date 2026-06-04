import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const localCart = localStorage.getItem("cart")
        return localCart ? JSON.parse(localCart) : []
    })
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);


    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};
export default CartProvider;