import { useContext } from 'react'
import { SessionContext } from '../providers/sessionProvider'
import { ThemeContext } from '../providers/themeProvider'
import { useTheme } from '../styles/theme'

export default function Header() {
    const { theme } = useContext(ThemeContext)
    const { session } = useContext(SessionContext)
    return (
        <header style={useTheme(theme)}>
            <h1>Bienvenido {session.userName}</h1>
        </header>
    )
}
