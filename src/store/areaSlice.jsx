import { createSlice } from "@reduxjs/toolkit";
import { areas } from "../models/areas"

export const areaSlice = createSlice({
    name: 'areas',
    initialState: { areas },
    reducers: {
        insertArea: (state, action) => {
            const name = action.payload.name.trim()
            const exists = state.areas.find(({name:n}) => n === name)
            if (!exists && name !== '') 
            state.areas = [...state.areas, action.payload]
        },
        editArea: (state, action) => {
            const {id, ...area} = action.payload
            state.areas[id] = area
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