<<<<<<< HEAD
import React, { useState } from "react"
import storeContext from "./storeContext";

const GlobalContext = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({});
    const myAddProductToCart = (product) => {
        console.log("adding to cart")

        let copy = [...cart];
        copy.push(product);
        setCart(copy);
    };

    const myRemoveProductFromCart = (id) => {
        console.log("removing from cart")
        
        let copy = cart.filter(el => el._id !== id);
        setCart(copy);
    };
    return (
        <storeContext.Provider value={{
            cart: cart,
            user: user,

            addProductToCart: myAddProductToCart,
            removeProductFromCart: myRemoveProductFromCart
        }}>
            {props.children}
        </storeContext.Provider>
    )
};

=======
import React, { useState } from "react"
import storeContext from "./storeContext";

const GlobalContext = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({});
    const myAddProductToCart = () => {
        console.log("adding to cart")
    };

    const myRemoveProductFromCart = () => {
        console.log("removing from cart")
    };
    return (
        <storeContext.Provider value={{
            cart: cart,
            user: user,

            addProductToCart: myAddProductToCart,
            removeProductFromCart: myRemoveProductFromCart
        }}>
            {props.children}
        </storeContext.Provider>
    )
};

>>>>>>> 432fa2d14a226d65e57262af4e4d497d02ba0488
export default GlobalContext;