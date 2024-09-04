import { useContext } from "react"
import { StateContext } from "../../providers/stateContext"
import FormControl from "./FormControl"

const Form = ({fn, data}) => {
    const {section} = useContext(StateContext)
    const handleSubmit = (e) => (e.preventDefault(), fn && fn(e))
    return(
    <form onSubmit={handleSubmit}>
        <h2>Formulario {section}</h2>
        { Object.keys(data[0]).map((k,i) => <FormControl key={i} /> )}
        <button className="btn btn-success | d-block mx-auto">Enviar</button>
    </form>
)}
export default Form