import { useState, createContext } from "react";

export const SessionContext = createContext()

export const SessionProvider = ({children}) => {
    const [ session, setSession ] = useState({
        userName: 'cristian',
        userEmail: 'cristiandracedo@hotmail.com',
        job: 'instructor'
    })
    return(
    <SessionContext.Provider value={{session, setSession}}>
        {children}
    </SessionContext.Provider>
)}