import { Button } from "react-bootstrap"
import {  useSelector } from "react-redux"
import AreaSelect from "../Areas/AreaSelect"
import axios from "axios"
import Req from "../../controllers/Request"
export default function EmployeeList() {
    const { selected } = useSelector(state => state.employees)
    const handleSend = (index) => {
      const body = selected[index]
      const host = import.meta.env.VITE_SERVER ?? 'https://localhost:3000/candidates'
      axios.post(host, body)      
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    }
  return selected.length && 
    <ul>
    { selected.map((s,i) => 
      <li key={i}>
        {s.email} 
        <AreaSelect/>
        <Button onClick={ () => handleSend(i)}>Enviar</Button>
      </li>) }
    </ul>
}
