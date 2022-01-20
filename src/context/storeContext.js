<<<<<<< HEAD
import React from "react";

// describe the data & functions
// that will be accessible to any component (global)
const store = React.createContext({
    cart: [],
    user: {},

    addProductToCart: () => {},
    removeProductFromCart: () => {},
});

=======
import React from "react";

// describe the data & functions
// that will be accessible to any component (global)
const store = React.createContext({
    cart: [],
    user: {},

    addProductToCart: () => {},
    removeProductFromCart: () => {},
});

>>>>>>> 432fa2d14a226d65e57262af4e4d497d02ba0488
export default store;