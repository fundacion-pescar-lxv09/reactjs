const Form = ({fn=console.log, data}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        fn && fn(e.target)
    }
    return(
    <form onSubmit={handleSubmit}>
        <h2>Completa el Formulario</h2>
        {
            Object.keys(data[0]).map(k => 
            <fieldset className="form-floating m-2">
                <input className="form-control" type="text" name={k} id={k} placeholder={"Ingrese su "+ k }/>
                <label htmlFor={k}>{k}</label>
            </fieldset>)
        }
        <button className="btn btn-success | d-block mx-auto">Enviar</button>
    </form>
)}

export default Form