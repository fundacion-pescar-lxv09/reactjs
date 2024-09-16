import { useRef } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../../store/todoSlice"

export default function TodoForm() {
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const todo = Object.fromEntries(formData)
        dispatch(addTodo(todo))
        e.target.reset()
    }
return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="title">Titulo</label>
        <input id="title" name='title' type="text" />
        <label htmlFor="description">Descripcion</label>
        <input id="description" name='description' type="text" />
        <button>Aceptar</button>
    </form>
)}
