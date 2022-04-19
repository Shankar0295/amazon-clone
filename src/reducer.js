export const initialState = {
    cart: [],
    user: null
}

export const getCartTotal = (cart) =>
    cart.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.item]
            }
        case "EMPTY_CART":
            return {
                ...state,
                cart: []
            }
        case "REMOVE_FROM_CART":
            const index = state.cart.findIndex((cartItem) => cartItem.id === action.id);
            let newBasket = [...state.cart];
            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.log(`Cant remove product (id: ${action.id}) as its not in basket!`)
            }
            return {
                ...state,
                cart: newBasket
            }
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
};

export default reducer;