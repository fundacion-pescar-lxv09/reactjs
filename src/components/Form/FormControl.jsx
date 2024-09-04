const FormControl = ({id, type="text", ...props}) => 
<fieldset className="form-floating m-2">
    <input className="form-control" 
        id={id} 
        name={id} 
        type={type}
        placeholder={"Ingrese su "+ id} 
        {...props}/>
    <label htmlFor={id}>{id}</label>
</fieldset>

export default FormControl