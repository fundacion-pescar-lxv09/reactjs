import { NavLink } from "react-router-dom"

export const Nav = () =>
<nav style={{display:'flex', gap: '.5rem'}}>
    <NavLink to="contador">Contador</NavLink>
    <NavLink to="perfil">Perfil</NavLink>
    <NavLink to="tareas">Tareas</NavLink>
</nav>
