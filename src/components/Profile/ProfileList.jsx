import React from 'react'
import { useSelector } from 'react-redux'

export default function ProfileList() {
    const {username, email, job} = useSelector(state => state.session)
    return (
        <ul className="card">
            <li><strong>Usuario: </strong>{username}</li>
            <li><strong>Correo: </strong>{email}</li>
            <li><strong>Ocupacion: </strong>{job}</li>
        </ul>
    )
}
