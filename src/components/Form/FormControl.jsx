const FormControl = ({key, type="text", ...props}) => 
<fieldset className="form-floating m-2">
    <input className="form-control" 
        id={key} 
        name={key} 
        type={type}
        placeholder={"Ingrese su "+ key } 
        {...props}/>
    <label htmlFor={key}>{key}</label>
</fieldset>

export default FormControl