import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items:  [],
    totalQuantity: 0,
};

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
        },

        removeItems: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        }
    }
});

export const {addToCart, removeItems} = CartSlice.actions;
export default CartSlice.reducer;