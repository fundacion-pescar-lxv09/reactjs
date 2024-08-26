export const Footer = ({children}) => 
<footer className="p-3 text-center">
    { children }
    <p> &copy;{new Date().getFullYear()} Todos los derechos reservados</p>
</footer>