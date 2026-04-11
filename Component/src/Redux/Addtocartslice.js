import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push({
                id: action.payload.id,
                name: action.payload.name,
                price: action.payload.price,
                quantity: action.payload.quantity,
                image: action.payload.image,
            })
        },
        removeCart: (state, action) => {
            state.cart = state.cart.filter(
                (item) => item.id !== action.payload
            )
        },
        clearCart: (state) => {
            state.cart = [];
        }
    }
});

export const { addToCart, removeCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;