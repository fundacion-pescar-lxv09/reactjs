import { useContext, useRef, useState } from "react"
import { SearchContext } from "../../providers/searchContext"
import { tagsModel } from "../../models"
import suggestions from "./suggestions"
import Form from "../Form"
import DataList from "./DataList"
import { TextField } from "@mui/material"
import { Search as SearchIcon } from "@mui/icons-material"

function Search(){
    const [searchRef, [options, setOptions],{search,set},] = [useRef(""), useState(tagsModel), useContext(SearchContext),]
    const getRef = () => searchRef.current.children[1].children["search"].value
    const handleSearch = () => set("q", getRef())
    const handleTags = () => suggestions(search, getRef(), setOptions)
    return (
    <Form submitBtn="buscar" action={handleSearch} startIcon={<SearchIcon/>}>
        <TextField id="search" ref={searchRef} type="search" size="small" list="searchlist" label="Realice una Busqueda" onInput={handleTags}/>
        <DataList options={options}/>
    </Form>
)}
export default Search