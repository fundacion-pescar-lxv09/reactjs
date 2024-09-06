import { useContext, useRef, useState } from "react"
import { SearchContext } from "../../providers/searchContext"
import { tagsModel } from "../../models"
import suggestions from "./suggestions"
import Form from "../Form"
import DataList from "./DataList"

function Search(){
    const [searchRef, [options, setOptions],{search,set},] = [useRef(""), useState(tagsModel), useContext(SearchContext),]
    const ctl = searchRef.current
    const handleSearch = () => set("q", ctl.value)
    const handleTags = () => suggestions(search, ctl.value, setOptions)
    return (
    <Form submitBtn="buscar" action={handleSearch}>
        <input className="form-control" ref={searchRef} type="search" list="searchlist" onInput={handleTags}/>
        <DataList options={options}/>
    </Form>
)}
export default Search