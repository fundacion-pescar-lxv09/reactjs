import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        number: 0
    },
    reducers: {
        increment: (state, action) => {
            state.number += parseInt(action.payload) || 1
        },
        decrement: (state, action) => {
            state.number -= action.payload || 1
        },
        setNumber: (state, action) => {
            state.number = action.payload
        }
    }
})
export const { increment, decrement, setNumber } = counterSlice.actions