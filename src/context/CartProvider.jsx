import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const localCart = localStorage.getItem("cart")
        return localCart ? JSON.parse(localCart) : []
    })

    const updateCartQuantity = (id, type) => {
        setCart(prev =>
            prev.map(item => {
                if (item.id === id) {

                    let newQty = item.quantity;

                    if (type === "inc") {
                        newQty = item.quantity + 1;
                    }
                    else if (type === "dec") {
                        newQty = item.quantity - 1;
                    }

                    newQty = newQty > 0 ? newQty : 1;

                    return {
                        ...item,
                        quantity: newQty
                    };
                }

                return item;
            })
        );
    };

    const removeCartProduct = (id)=>{
        const remainingProduct = cart.filter(item =>item.id !== id)
        setCart(remainingProduct)
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
    

    
   const removeCart = () =>{
    localStorage.removeItem("cart")
   }

    const cartInfo = {cart, setCart, updateCartQuantity,removeCartProduct,removeCart}

    return (
        <CartContext.Provider value={cartInfo}>
            {children}
        </CartContext.Provider>
    );
};
export default CartProvider;