import { configureStore } from "@reduxjs/toolkit"
import { counterSlice } from "./counterSlice"
import { sessionSlice } from "./sessionSlice"
import { todoSlice } from "./todoSlice"

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        session: sessionSlice.reducer,
        todos: todoSlice.reducer,
    }
})

export default store