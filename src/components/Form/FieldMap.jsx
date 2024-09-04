import FormControl from "./FormControl"

function FieldMap ({arr}) {
    const headers = Object.keys(arr)
return (
    headers.map((k,i) => 
    typeof arr[k] === 'object' ? 
    <FieldMap key={i} arr={arr[k]}/> : 
    <FormControl key={i} id={k}/>
))}

export default FieldMap