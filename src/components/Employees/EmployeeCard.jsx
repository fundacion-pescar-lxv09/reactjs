import { Card, ButtonGroup, Button, Badge } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { selectCandidate } from "../../store/employeeSlice";

export default function EmployeeCard({id, name,email, phone, cell, picture, location}) {
    const dispatch = useDispatch()
    const { title, first, last } = name;
    const { city, state, country, postcode, street} = location;
    const { name:st, number} = street;
    const handleDiscard = () => dispatch()
    const handleSelect = () => dispatch(selectCandidate(id))
return (
    <div className="col-sm-6 col-lg-4 col-xxl-3 my-1 px-1">
    <Card>
        <Card.Img src={picture.large} variant="top"/>
        <Card.Body>
            <Card.Title>{title} {first} {last}</Card.Title>
            <Card.Link href={`mailto:${email}`}>{email}</Card.Link>
            <Card.Text>
                <Badge>Telefono</Badge> <small>{phone}</small>
                <br/>
                <Badge>Celular</Badge> <small>{cell}</small>
                <br/>
                <Badge>Direccion</Badge> <small>{st} {number} ({city} CP: {postcode})</small>
                <br/>
                <Badge>Ciudad</Badge> <small>{state} - {country}</small>
            </Card.Text>
            <ButtonGroup className="w-100">
                <Button onClick={handleDiscard} variant="danger">Descartar</Button>
                <Button onClick={handleSelect} variant="primary" className="d-block ms-auto">Seleccionar</Button>
            </ButtonGroup>
        </Card.Body>
    </Card>
    </div>
)}
