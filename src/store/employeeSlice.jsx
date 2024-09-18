import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { employees } from "../models/employees";
import Req from "../controllers/Request";

export const getCandidates = createAsyncThunk('employees/getCandidates', async (url) => await Req(url))

export const employeeSlice = createSlice({
    name: 'employees',
    initialState: employees,
    reducers: {
        selectCandidate: (state, action) => {
            state.selected = [...state.selected, state.candidates[action.payload.i]]
        },
        removeCandidate: (state, action) => {
            state.selected = state.selected.filter(employee => employee.uuid !== action.payload)
        },
        assignCandidateArea: (state, action) => {
            const { id, area } = action.payload
            state.selected[id].area = area
        },
        filterEmployees: (state, action) => {
            state.filtered = state.selected.filter(employee => employee.area === action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getCandidates.pending, (state) => {
            state.loading = true
        })
        .addCase(getCandidates.fulfilled, (state, action) => {
            state.loading = false;
            state.candidates = action.payload.results
        })
        .addCase(getCandidates.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })
    }
})
export const {
    selectCandidate,
    removeCandidate,
    assignCandidateArea,
    filterEmployees,
} = employeeSlice.actions