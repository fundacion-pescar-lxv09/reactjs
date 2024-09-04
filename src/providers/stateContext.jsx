import { useState, useEffect, createContext } from "react";
import { Request } from "../controllers/Request";
import { jph } from "../models/links";
export const StateContext = createContext();
export const StateProvider = ({children}) => {
    const [state, setState] = useState({
        host: jph, 
        section:'users', 
        data: []
    })
    const set = (key,value) => setState({...state, [key]: value})
    const setUrl = (url) => set("section", url)
    const setData = (data) => set("data",data)
    useEffect(() => { 
        const { host, section } = state;
        Request(host+"/"+section)
        .then(({data}) => setData(data))
        .catch((error) => setData(error))
    }, [state?.section])
    return (
    <StateContext.Provider value={{state,setUrl,setData, set}}>
        {children}
    </StateContext.Provider>
)}