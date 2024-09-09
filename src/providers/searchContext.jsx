import { useState, useEffect, createContext, } from "react";
import axios from "axios";
import { searchModel } from "../models"

export const SearchContext = createContext()
export const SearchProvider = ({children}) => {
    const [search, setSearch] = useState(searchModel)
    const set = (k,v) => setSearch({...search, [k]:v})
    useEffect(()=>{
        const {
            host:h,
            resource:r,
            endpoint:e,
            api_key:k,
            q,
            limit:l,
            offset:o,
            rating:rtg,
            lang:lng,
            bundle:b,
        } = search 
        const url = `${h}/${r}/${e}?api_key=${k}&q=${q}&limit=${l}&offset=${o}&rating=${rtg}&lang=${lng}&bundle=${b}`
        if (/\w+/.test(q)){
            axios.get(url).then(({data}) => set("response", data))
        }
    }, [search?.q, search?.offset])
    return(
    <SearchContext.Provider value={{search, set}}>
        {children}
    </SearchContext.Provider>
)}