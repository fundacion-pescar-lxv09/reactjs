import { useRef } from "react"
import { Form, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { insertArea } from "../../store/areaSlice"

export default function AreaForm() {
  const dispatch = useDispatch()
  const areaRef = useRef()
  const handleSubmit = (e) => {
    e.preventDefault()
    const name = areaRef.current.value
    dispatch(insertArea({name}))
    e.target.reset()
  }
  return (
    <Form className="d-flex p-2" onSubmit={handleSubmit}>
      <Form.Control ref={areaRef} name="name" placeholder="area"/>
      <Button type="submit">Confirmar</Button>
    </Form>
  )
}
