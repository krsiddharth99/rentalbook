import { createContext, useContext, useState } from 'react';

const CartUpdateContext = createContext();

export const CartUpdateContextProvider = ({ children }) => {
    const [shouldCartUpdate, setShouldCartUpdate] = useState(false);

    return (
        <CartUpdateContext.Provider value = {{ shouldCartUpdate, setShouldCartUpdate }}>
            {children}
        </CartUpdateContext.Provider>
    )
};

export const useCartUpdate = () => {
    return useContext(CartUpdateContext);
}
