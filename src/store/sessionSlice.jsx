import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: '',
    email: '',
    job: ''
}

export const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        setUsername: (state, action) => { state.username = action.payload },
        setEmail: (state, action) => { state.email = action.payload },
        setJob: (state, action) => { state.job = action.payload },
    }
})

export const { setUsername, setEmail, setJob} = sessionSlice.actions