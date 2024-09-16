import { Navbar, Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { nav } from "../models/nav"

export const NavBar = () => 
<Navbar className="p-2" bg="dark" expand="md" sticky="top" data-bs-theme="dark">
    <Navbar.Brand>ME</Navbar.Brand>
    <Navbar.Toggle/>
    <Navbar.Collapse>
        <NavLinks/>
    </Navbar.Collapse>
</Navbar>

export const NavLinks = () => 
<Nav>{ nav.map(({text,to},i) => 
    <NavLink className="nav-link" 
        key={i} 
        to={to}>
        {text}
    </NavLink> )}
</Nav>