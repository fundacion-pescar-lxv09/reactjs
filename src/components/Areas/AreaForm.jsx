import { Form, Button } from "react-bootstrap"
export default function AreaForm() {
  return (
    <Form className="d-flex p-2">
      <Form.Control name="name" placeholder="area"/>
      <Button>Confirmar</Button>
    </Form>
  )
}
