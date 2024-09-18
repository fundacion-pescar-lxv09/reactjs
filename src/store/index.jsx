import { configureStore } from "@reduxjs/toolkit";
import { areaSlice } from "./areaSlice"
import { employeeSlice } from "./employeeSlice";

export const store = configureStore({
    reducer: {
        areas: areaSlice.reducer,
        employees: employeeSlice.reducer
    }
})