import React from 'react'
import { useSelector } from 'react-redux'

export default function CandidateList() {
    const { candidates, error } = useSelector(state => state.employees)
return (
    <div>
        { error ? error.status : 
        <ul>
            {candidates.map((c,i) => 
            <li key={i}>{c.email}</li>
            )}
        </ul>}
    </div>
)}
