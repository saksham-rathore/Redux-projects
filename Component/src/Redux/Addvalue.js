import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price: 0, 
};

const valueSlice = createSlice({ 
  name: "price",
  initialState,
  reducers: {
    increasePrice: (state) => {
      state.price += 120;
    },
    decreasePrice: (state) => {
      state.price -= 120;
    },
  },
});

export const { increasePrice, decreasePrice } = valueSlice.actions;
export default valueSlice.reducer;