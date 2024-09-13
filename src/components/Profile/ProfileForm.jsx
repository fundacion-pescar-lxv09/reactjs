import { useDispatch } from "react-redux"
import { setUsername, setEmail, setJob } from "../../store/sessionSlice";

export default function ProfileForm (){
    const dispatch = useDispatch();
return (
    <form onSubmit={e => e.preventDefault()}>
        <label htmlFor="username">Nombre de Usuario</label>
        <input id="username" type="text" onChange={({target: {value}}) => dispatch(setUsername(value))}/>
        <label htmlFor="email">Correo Electronico</label>
        <input id="email" type="email" onChange={({target: {value}}) => dispatch(setEmail(value))}/>
        <label htmlFor="job">Profesion u Ocupacion</label>
        <select name="job" id="job" onChange={({target: {value}}) => dispatch(setJob(value))}>
            <option>instructor</option>
            <option>arquitecto</option>
            <option>ingeniero</option>
            <option>desarrollador</option>
            <option>estudiante</option>
        </select>
    </form>
)}