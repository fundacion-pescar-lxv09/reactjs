import { useContext, useRef, useState } from "react"
import axios from "axios"
import Form from "../Form"
import { tagsModel } from "../../models"
import { SearchContext } from "../../providers/searchContext"

function Search(){
    const [ 
        searchRef, [options, setOptions],
        {search:{host:h, resource:r, endpoint:e, api_key:k},set},
    ] = [ useRef(""), useState(tagsModel), useContext(SearchContext), ]
    const handleSearch = () => set("q", searchRef.current.value)
    const suggestions = () => {
        const url = `${h}/${r}/${e}/tags?api_key=${k}&q=${searchRef.current.value}&limit=10`
        axios.get(url)
        .then(({data:{data}})=>setOptions(data))
        .catch(err => setOptions(tagsModel))
    }
    return (
    <Form submitBtn="buscar" action={handleSearch}>
        <input list="searchlist" className="form-control" ref={searchRef} type="search" onInput={suggestions}/>
        <datalist id="searchlist">
            {options.map(({name},i) => <option key={i} value={name}/> )}
        </datalist>
    </Form>
)}
export default Search