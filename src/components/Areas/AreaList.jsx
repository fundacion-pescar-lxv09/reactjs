import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export default function AreaList() {
    const { areas } = useSelector(state => state.areas)
return (
    <ListGroup className='container p-3' variant='flush'>
    { areas.map((item,i) => 
        <ListGroupItem key={i}>
            {item.name}
        </ListGroupItem>)}
    </ListGroup>
)}
