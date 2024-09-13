import { useContext } from "react"
import { ThemeContext } from "../providers/themeProvider"
import { useTheme } from "../styles/theme"

export const Button = ({style, text, ...props}) => {
    const {theme} = useContext(ThemeContext)
    return (
        <button style={{...style, ...useTheme(theme)}} {...props}>
            {text}
        </button>
    )
}