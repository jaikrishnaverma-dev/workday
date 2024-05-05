import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./mainSlice";
import filterSlice from "./filterSlice";

export const store=configureStore({
    reducer:{
        mainSlice,
        filterSlice
    }
})