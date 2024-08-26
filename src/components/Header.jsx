import { Component } from "react";

class Header extends Component{
    // Obligatorio (Subclase)
    constructor(props){
        super(props) // Mapea las propiedades
        this.state = 0;
    }
    // Antes de Montar el Componente
    componentWillMount(){
        // Acciones asincronas (solicitudes HTTP)
    }
    // Monta el componente en la vista
    render(){
        const { title, subtitle, size } = this.props // Permite acceder al contexto
        return(
            <header className="text-center">
                <h1 className={"display-"+size}>Bienvenido {title}</h1>
                <p className={"h"+(size < 6 ? size + 1 : size)}>{subtitle}</p>
            </header>
        )
    }
    // Despues de montar el componente
    componentDidMount(){
        // Acciones que requieren del componente
    }
    // Cuando recibe una actualizacion
    componentDidUpdate(prevState, currentState){
        // Cambios a realizar cuando se actualice una propiedad o el estado del componente.
        // Ideal para comparar los valores de actualizacion
    }
    // Antes de eliminar al componente
    componentWillUnmount(){
        // Metodo destructor (Liberar memoria)
    }
}

export default Header;