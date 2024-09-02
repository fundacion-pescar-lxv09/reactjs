import { NavLink } from 'react-router-dom';

function Nav({links, ...props}){
    const {fn, host} = props
return (
    <nav className="navbar navbar-dark navbar-expand-md | p-2 | bg-dark bg-gradient | overflow-auto">
        <NavLink className="navbar-brand" to="article/posts" onClick={()=>fn(host+"/posts")}>React</NavLink>
        <button className="navbar-toggler navbar-toggler-icon | border-0"></button>
        <ul className="navbar-nav navbar-collapse">
        { links.map((item,i) => <Link key={i} {...{...item,...props}}/> )}
        </ul>
    </nav>
)}

export const Link = ({url,text, fn, host, type}) => 
<li className="list-unstyled">
    <NavLink className="nav-link" to={type+url} onClick={()=>fn(host+url)}>{text}</NavLink>
</li>

export default Nav;