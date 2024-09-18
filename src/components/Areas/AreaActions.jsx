import { useState } from "react"
import { Button, ButtonGroup, Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { editArea, deleteArea } from "../../store/areaSlice"

export default function AreaActions ({id}) {
    const dispatch = useDispatch()
    const [visible, setVisible] = useState(false)
    const handleDelete = () => {
        if (confirm('desea eliminar el area')) 
        dispatch(deleteArea(id))
    }
    const handleChange = ({target:{value:name}}) => 
        dispatch(editArea({id,name}))
    return(
    <ButtonGroup className="float-end shadow">
        { visible && <Form.Control onChange={handleChange} type="text"/> }
        <Button variant="danger" onClick={handleDelete}>borrar</Button>
        <Button variant={visible ? "success" : "secondary"} onClick={()=>setVisible(!visible)}>{ visible ? "guardar" : "editar" }</Button>
    </ButtonGroup>
)}