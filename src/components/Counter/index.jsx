import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, setNumber } from '../../store/counterSlice'

export default function Counter() {
    const dispatch = useDispatch()
    const { number } = useSelector(state => state.counter)
    return (  
    <div className="card">
        <h2>estado actual: {number}</h2>
        <button onClick={()=>{dispatch(decrement(10))}}>-</button>
        <input type="number" onChange={(e)=>dispatch(setNumber(e.target.value))}/>
        <button onClick={()=>{dispatch(increment(10))}}>+</button>
    </div>
)}