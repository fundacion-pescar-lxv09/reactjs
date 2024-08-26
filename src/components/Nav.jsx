function Nav({links}){
return (
    <nav className="navbar navbar-dark navbar-expand-md | p-2 | bg-dark bg-gradient">
        <a className="navbar-brand" href="#">React</a>
        <button className="navbar-toggler navbar-toggler-icon | border-0"></button>
        <ul className="navbar-nav navbar-collapse">
        { links.map((item,i) => <Link key={i} {...item}/> )}
        </ul>
    </nav>
)}

export const Link = ({url,text, target}) => 
    <li className="list-unstyled"><a className="nav-link" href={url} target={target}>{text}</a></li>

export default Nav;