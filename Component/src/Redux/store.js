import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import cartReducer from "./Addtocartslice";
import priceReducer from "./Addvalue";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer,
        price: priceReducer,
    }
})

export default store;