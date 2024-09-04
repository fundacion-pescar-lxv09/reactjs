import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { StateContext } from '../providers/stateContext';

function Nav({links}){
    const { setUrl:fn } = useContext(StateContext)
return (
    <nav className="navbar navbar-dark navbar-expand-md | p-2 | bg-dark bg-gradient | overflow-auto">
        <NavLink className="navbar-brand" to="article/posts" onClick={()=>fn("posts")}>React</NavLink>
        <button className="navbar-toggler navbar-toggler-icon | border-0"></button>
        <ul className="navbar-nav navbar-collapse">
        { links.map((item,i) => <Link key={i} {...item}/> )}
        </ul>
    </nav>
)}
export const Link = ({url,text,type}) => {
    const { setUrl:fn } = useContext(StateContext)
return(
    <li className="list-unstyled">
        <NavLink className="nav-link" to={type+"/"+url} onClick={()=>fn(url)}>{text}</NavLink>
    </li>
)}

export default Nav;