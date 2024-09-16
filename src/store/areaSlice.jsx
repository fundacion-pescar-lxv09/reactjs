import { createSlice } from "@reduxjs/toolkit";
import { areas } from "../models/areas"

export const areaSlice = createSlice({
    name: 'areas',
    initialState: { areas },
    reducers: {
        insertArea: (state, action) => {
            state.areas = [...state.areas, action.payload]
        },
        editArea: (state, action) => {
            const {index, ...area} = action.payload
            state.areas[index] = area
        },
        deleteArea: (state, action) => {
            state.areas = state.areas.filter((_,i) => i !== action.payload)
        },
    }
})
export const { 
    insertArea, 
    editArea, 
    deleteArea,
} = areaSlice.actions