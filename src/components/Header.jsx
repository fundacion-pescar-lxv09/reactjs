import { Component } from "react";

class Header extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const { title, subtitle, size } = this.props
        return(
            <header className={"h"+size}>
                <h1>Bienvenido {title}</h1>
                <p>{subtitle}</p>
            </header>
        )
    }
}

export default Header;