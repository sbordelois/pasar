import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
//import {Link} from "react-router-dom";

class Buscador extends Component{
    constructor(props){
        super(props);
        this.state={
            busqueda: "",
            resultados: []
        }
    }
    prevent(p){
        p.preventDefault()
    }
    search(p){
        this.setState(
            {
                busqueda: p.target.value
            }
        )
    }
    render(){
        return(
            <div className="buscador">
            <form className="lupita" onSubmit={(p)=> this.prevent(p)}>
                <input className="lupita" type="text" name="busqueda" placeholder="¿Qué quiere ver?" onChange={(p)=>this.search(p)} value= {this.state.busqueda}/>
               <Link to={`/searchResults/${this.state.busqueda}`}> 
               <button type="submit" className="boton busq"><i class="fa-solid fa-magnifying-glass"></i>Buscar</button></Link>
            </form> 
            </div>
        )
    }
    
}
export default Buscador;


