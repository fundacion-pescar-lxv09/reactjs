import { CameraAlt, Home, Person, Search,  } from "@mui/icons-material"

export const navModel = [
    { label: "Inicio", to: "home", icon: <Home/>},
    { label: "Iniciar Sesion", to: "login", icon: <Person/>},
    { label: "Buscar", to: "search", icon: <Search/>},
    { label: "Publicar", to: "post", icon: <CameraAlt/>},
]