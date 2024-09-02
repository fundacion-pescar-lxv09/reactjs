import { useState, useEffect, createContext } from "react";
import { Request } from "../controllers/Request";
export const StateContext = createContext();
export const StateProvider = ({children}) => {
    const [state, setState] = useState({ url:'', data: []})
    const set = (key,value) => setState({...state, [key]: value})
    const setUrl = (url) => set("url", url)
    const setData = (data) => set("data",data)
    useEffect(() => { 
        Request(state?.url)
        .then(({data}) => setData(data))
        .catch((error) => setData(error))
    }, [state?.url])
    return (
    <StateContext.Provider value={{state,setUrl,setData, set}}>
        {children}
    </StateContext.Provider>
)}