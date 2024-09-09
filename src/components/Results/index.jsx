import { useContext } from "react";
import { SearchContext } from "../../providers/searchContext";
import Post from "./Post";
import Pagination from "./Pagination";

function Results(){
    const {search: {q, response}} = useContext(SearchContext)
    const {data, pagination} = response
    return(
    <section>
        <h2>Resultados de {q}</h2>
        { data && data.map(item => <Post key={item.id} {...item}/>)}
        { pagination ?  <Pagination {...pagination}/> : "No se encontraron resultados" }
    </section>
)}
export default Results;