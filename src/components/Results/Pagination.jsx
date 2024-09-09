import { useContext } from "react"
import { Pagination as Pages} from "@mui/material"
import { SearchContext } from "../../providers/searchContext"

function Pagination({total_count:t}){
    const {search:{limit:l,offset:o},set}=useContext(SearchContext)
    const [currentPage, totalPages] = [Math.ceil(o/l) + 1, Math.ceil(t/l)]
    const handleChange = (_,v) => set("offset",l*(v - 1))
    return(
    <Pages onChange={handleChange} 
        count={totalPages} 
        page={currentPage} />
)}
export default Pagination