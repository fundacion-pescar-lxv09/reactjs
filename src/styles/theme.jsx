export const useTheme = (theme) => {
    if (theme === 'dark') return ({
        color: "#eee",
        backgroundColor: "#333"
    })
    else return ({
        color: "#333",
        backgroundColor: "#eee"
    })
}