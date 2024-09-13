import { SessionProvider } from './sessionProvider'
import { ThemeProvider } from './themeProvider'
import { SearchProvider } from './searchProvider'

export const ContextProvider = ({children}) =>
<>
    <SessionProvider>
    <ThemeProvider>
    <SearchProvider>
        {children}
    </SearchProvider>
    </ThemeProvider>
    </SessionProvider> 
</>
