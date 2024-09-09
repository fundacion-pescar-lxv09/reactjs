function Pagination({count, offset, total_count}){
    return(
    <ul>
        <li>Gifs encontrados: {total_count}</li>
        <li>paginas: {Math.ceil(total_count / count)}</li>
        <li>pagina actual: {Math.ceil(offset / count)}</li>
    </ul>
)}

export default Pagination