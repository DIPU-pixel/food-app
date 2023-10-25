import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";


const store=configureStore({
    reducer:{
        cart :CartSlice
    }
})
export default store;