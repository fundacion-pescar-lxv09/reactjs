import { useDispatch, useSelector } from "react-redux"
import { removeTodo } from "../../store/todoSlice"

export default function TodoList() {
    const { todos } = useSelector(state => state.todos)
return (
    <ul>{ todos.map((item,id) => <ListItem key={id} {...{...item, id}}/>)}</ul>
)}

const ListItem = ({id, title,description}) =>{
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(removeTodo(id))
    }
return (
    <li style={{position: 'relative', padding: '.25rem 4rem .25rem .5rem', textAlign: 'left'}}>
        <strong>{title}: </strong> {description}
        <button style={{position: 'absolute', top: '.25rem', right: '.25rem'}} onClick={handleDelete}>X</button>
    </li>
)}