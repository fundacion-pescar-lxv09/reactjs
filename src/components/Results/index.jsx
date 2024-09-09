import { useContext } from "react";
import { SearchContext } from "../../providers/searchContext";
import Post from "./Post";
import Pagination from "./Pagination";
import { Grid2 as Grid, Typography } from "@mui/material";

function Results(){
    const {search: {q, response}} = useContext(SearchContext)
    const {data, pagination} = response
    return(
    <Grid container spacing={2} justifyContent="center" sx={{margin: "auto"}}>
        <Grid size={12}>
            <Typography variant="h4">Resultados de {q}</Typography>
        </Grid>
        { data && data.map(item => 
        <Grid size={{xs:12, md:6, lg:4, xl:3}}>
            <Post key={item.id} {...item}/>
        </Grid> )}
        <Grid size={12}>
        { pagination ?  <Pagination {...pagination}/> : "No se encontraron resultados" }
        </Grid>
    </Grid>
)}
export default Results;