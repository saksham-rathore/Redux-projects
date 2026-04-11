import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

const Counterslice = createSlice({
    name: "counter",
    initialState,
    value: 1,
    reducers: {
        increase: (state) => {
            state.value += 1
        },
        decrease: (state) => {
            if(state.value > 0) {
                state.value -= 1;
            }
        }
    }
})

export const { increase, decrease } = Counterslice.actions;
export default Counterslice.reducer;