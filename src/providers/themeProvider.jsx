import { createContext, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [ theme, setTheme ] = useState('dark')
    const changeTheme = (d) => setTheme(d === 'light' ? 'dark' : 'light')
    return(
    <ThemeContext.Provider value={{theme, changeTheme}}>
        {children}
    </ThemeContext.Provider>
)}