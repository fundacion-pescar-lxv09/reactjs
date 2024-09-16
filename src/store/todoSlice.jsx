import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 0,
            title: "FrontEnd",
            description: "Desarrollo del lado del cliente, toda accion que puede realizar el navegador sin necesidad de consultar con el servidor, por ejemplo, eventos de navegador.",
        },
        {
            id: 1,
            title: "BackEnd",
            description: "Desarrollo del lado del servidor, toda accion que requiere de la intervencion de este para llevarse a cabo, por ejemplo, consultas a base de datos.",
        },
        {
            id: 2,
            title: "FullStack",
            description: "Desarrollo que consiste en la implementacion de las tecnologias que involucran tanto FrontEnd, como backEnd. Normalmente los desarrolladores en esta area se encargan de supervisar y depurar codigo.",
        }
    ]
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos = [...state.todos, action.payload]
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((_,i) => i !== action.payload)
        },
        modifyTodo: (state, action) => {
            const { index, ...todo } = action.payload
            state.todos[index] = todo
        },
        changeTodoTitle: (state, action) => {
            const { index, title } = action.payload
            state.todos[index].title = title
        },
        changeTodoDescription: (state, action) => {
            const { index, description } = action.payload
            state.todos[index].description = description;
        },
    }
})

export const { addTodo, removeTodo, modifyTodo, changeTodoTitle, changeTodoDescription } = todoSlice.actions