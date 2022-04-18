import React, { createContext, useContext, useReducer } from 'react';

//creating the context

export const cartContext = createContext();

//Wrap our app and provide data

export const CartProvider = ({ reducer, initialState, children }) => {
    return (
        <cartContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </cartContext.Provider>
    )
}

//pull information form the context
export const useCartContext = () => {
    return (
        useContext(cartContext)
    )
}

