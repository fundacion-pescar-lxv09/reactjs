import { useContext } from "react"
import { StateContext } from "../../providers/stateContext"
import FieldMap from "./FieldMap"

const Form = ({fn, data, children}) => {
    const {section} = useContext(StateContext)
    const handleSubmit = (e) => (e.preventDefault(), fn && fn(e))
    return(
    <form onSubmit={handleSubmit}>
        <h2>Formulario {section}</h2>
        { data.length ? <FieldMap arr={data[0]}/> : children }
        <button className="btn btn-success | d-block mx-auto">Enviar</button>
    </form>
)}
export default Form