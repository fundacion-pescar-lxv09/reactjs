function Nav({links}){
return (
    <nav>
        <a href="#">React</a>
        <button></button>
        <ul>
        { links.map((item,i) => <Link key={i} {...item}/> )}
        </ul>
    </nav>
)}

export const Link = ({url,text}) => 
    <li><a href={url}>{text}</a></li>

export default Nav;