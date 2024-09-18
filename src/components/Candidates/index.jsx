import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux"
import { getCandidates } from "../../store/employeeSlice";
import CandidateList from './CandidateList'
export default function Candidates(){
    const dispatch = useDispatch()
    const { loading, candidates, error } = useSelector(state => state.employees)
    useEffect(()=>{
      dispatch(getCandidates('https://randomuser.me/api/?results=10'))
    },[])
    return loading ? <Spinner/> : <CandidateList/>
}