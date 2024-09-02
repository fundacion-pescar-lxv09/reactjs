import List from "../List"

const Article = ({data}) =>
    data.map(({title, name, body, email, company, address, ...props}) => 
    <article>
        <h2>{title ?? name ?? "Titulo del Articulo"}</h2>
        <p>
            {body ?? email}
        </p>
        <List data={props} deepMapping={false}/>
    </article>
    )
    
export default Article