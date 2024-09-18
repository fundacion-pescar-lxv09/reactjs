import {  useSelector } from "react-redux"
import AreaSelect from "../Areas/AreaSelect"
export default function EmployeeList() {
    const { selected } = useSelector(state => state.employees)
    console.log(selected)
  return selected.length && 
    <ul>
    { selected.map(s => <li>{s.email} <AreaSelect/></li>) }
    </ul>
}
