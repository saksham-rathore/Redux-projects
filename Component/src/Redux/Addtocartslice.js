import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    value: 0,
    reducers: {
        addToCart: (state, action) => {
            addToCart.state.push({
                id: action.payload.id,
                name: action.payload.name,
                price: action.payload.price,
                quantity: action.payload.quantity,
                image: action.payload.image,
            })
        },
        removeCart: (state, action) => {
            removeCart.state.filter(
                (item) => item.id !== action.payload
            )
        },
        clearCart: (state, action) => {
            clearCart.state.filter(
                (items) => items.id !== action.payload
            )
        }
    }
});

export const { addToCart, removeCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;