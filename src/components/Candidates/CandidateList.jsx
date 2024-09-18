import React from 'react'
import { useSelector } from 'react-redux'
import EmployeeCard from '../Employees/EmployeeCard'

export default function CandidateList() {
    const { candidates, error } = useSelector(state => state.employees)
return (
    <section className='row container mx-auto p-1'>
        <h2>Candidatos</h2>
        { error ? error.status : candidates.map((c,i) => 
            <EmployeeCard key={i} {...{...c, id:{i}}}/>
        )}
    </section>
)}
