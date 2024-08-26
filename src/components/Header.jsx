import { Component } from "react";

class Header extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const { title, subtitle, size } = this.props
        return(
            <header className="text-center">
                <h1 className={"display-"+size}>Bienvenido {title}</h1>
                <p className={"h"+(size < 6 ? size + 1 : size)}>{subtitle}</p>
            </header>
        )
    }
}

export default Header;