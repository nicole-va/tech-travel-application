import React, { createContext, useState } from 'react';

const DEFAULT_VALUE = {
    state: {
        cart: [],
    },
    setState: () => {},
};

const CartContext = createContext(DEFAULT_VALUE);

// eslint-disable-next-line react/prop-types
function CartContextProvider ( {children} ) {
    const [state, setState] = useState(DEFAULT_VALUE.state)

    return (
        <CartContext.Provider value={{ state, setState }}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContextProvider};
export default CartContext;