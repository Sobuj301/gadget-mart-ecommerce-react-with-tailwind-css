import { useState } from "react";
import { CartContext } from "./CartContext";
import { getLocalStoreData } from "../utilities/localStore";

const CartProvider = ({ children }) => {
    const [cart,setCart] = useState(()=>getLocalStoreData())
    return (
        <CartContext.Provider value={{cart,setCart}}>
            {children}
        </CartContext.Provider>
    );
};
export default CartProvider;