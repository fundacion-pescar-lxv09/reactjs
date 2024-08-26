export const Footer = ({children}) => 
<footer>
    { children }
    <p> 
        &copy;{Date().toLocaleString()} 
        Todos los derechos reservados
    </p>
</footer>