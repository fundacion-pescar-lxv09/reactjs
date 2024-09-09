import { Button } from "@mui/material"
function Form ({children, submitBtn = "Enviar", action=console.log, ...props}){
    const handleSubmit = (e) => {
        e.preventDefault()
        action && action(e)
    }
    return (
    <form onSubmit={handleSubmit} style={{padding: ".5rem"}}>
        {children}
        <Button type="submit" variant="outlined" size="large" {...props}>{submitBtn}</Button>
    </form>
)}
export default Form