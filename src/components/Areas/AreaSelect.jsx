import { Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export default function AreaSelect() {
    const { areas } = useSelector(state => state.areas)
return (
    <Form.Select>
        <option hidden selected>seleccione un area</option>
    { areas.map(({name},i) => <option key={i}>{name}</option>)}
    </Form.Select>
)}
