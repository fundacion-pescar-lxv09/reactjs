const Form = ({fn=console.log, data}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        fn && fn(e)
    }
    return(
    <form onSubmit={handleSubmit}>
        <h2>Completa el Formulario</h2>
        { Object.keys(data[0]).map((k,i) => <FormControl key={i} /> )}
        <button className="btn btn-success | d-block mx-auto">Enviar</button>
    </form>
)}
export const FormControl = ({key, type="text"}) => 
<fieldset className="form-floating m-2">
    <input className="form-control" name={key} id={key} placeholder={"Ingrese su "+ key } {...{type}}/>
    <label htmlFor={key}>{key}</label>
</fieldset>

export default Form