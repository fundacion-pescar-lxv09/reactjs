import { useState } from "react"

function Post({title,username, import_datetime, images:{ original,downsized_small }}){
    const [active, setActive] = useState(false)
    const resize = () => setActive(!active)
    const [{mp4:oVid,url:oUrl}, {mp4:dsVid,url:dsUrl}] = [original,downsized_small]
    return(
    <article className={"post " + active ? "active":""}>
        <header>
            <h3>{title ?? "Untitled"}</h3>
            <p>Publicado por {username ?? "unknown"}</p>
        </header>
        <video src={active?(oVid||oUrl):(dsVid||dsUrl)} alt={title} autoPlay={active}/>
        <p>Publicado el {import_datetime}</p>
        <footer>
            <button>Me Gusta</button>
            <button>Guardar</button>
            <button onClick={resize}>ver</button>
        </footer>
    </article>
)}
export default Post