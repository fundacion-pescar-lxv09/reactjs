import { configureStore } from "@reduxjs/toolkit";
import { areaSlice } from "./areaSlice"

export const store = configureStore({
    reducer: {
        areas: areaSlice.reducer
    }
})