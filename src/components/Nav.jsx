import { useContext } from 'react'
import { ThemeContext } from '../providers/themeProvider'
import { SessionContext } from '../providers/sessionProvider'
import { buttonStyle, navStyle } from '../styles/nav'
import { useTheme } from '../styles/theme'
import { Button } from './Button'

export default function Nav() {
    const {session} = useContext(SessionContext)
    const { theme, changeTheme } = useContext(ThemeContext)
    const handleClick = () => changeTheme(theme)
    return (
        <nav style={{...navStyle, ...useTheme(theme)}}>
        <a style={{color: "#999"}} href="#">{session.userName}</a>
        <Button style={buttonStyle} onClick={handleClick} text="Cambiar Tema"/>
    </nav>
    )
}
