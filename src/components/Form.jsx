function Form ({children, submitBtn = "Enviar", action=console.log}){
    const handleSubmit = (e) => {
        e.preventDefault()
        action && action(e)
    }
    return (
    <form onSubmit={handleSubmit}>
        {children}
        <button>{submitBtn}</button>
    </form>
)}
export default Form