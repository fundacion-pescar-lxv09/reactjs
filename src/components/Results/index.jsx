import { useContext } from "react";
import { SearchContext } from "../../providers/searchContext";
import Post from "./Post";
import Pagination from "./Pagination";
import { Grid2 as Grid } from "@mui/material";

function Results(){
    const {search: {q, response}} = useContext(SearchContext)
    const {data, pagination} = response
    return(
    <Grid container spacing={2} justifyContent="center" sx={{margin: "auto"}}>
        <Grid size={12}>
            <h2>Resultados de {q}</h2>
        </Grid>
        { data && data.map(item => 
        <Grid size={{md:6, lg:4, xl:3}}>
            <Post key={item.id} {...item}/>
        </Grid> )}
        <Grid size={12}>
        { pagination ?  <Pagination {...pagination}/> : "No se encontraron resultados" }
        </Grid>
    </Grid>
)}
export default Results;