import React from "react";
import logo from "../../assets/logo.jpg";
import {CgSearch} from "react-icons/cg";
import header from "./header.css";
import {Link} from "react-router-dom"
import Buscador from "../Buscador/Buscador";


function Header (){
    return(
        <header>
    <section className = "headerIzquierda">
        
        <img className="logo" src={logo} alt="Logo Empresa"/>
        <a href="/" className="nombrepagina"><h2 className="nombrepagina">Filmex</h2></a>
    </section>


    <nav className="headerDerecha">
        <article className="seccionesHeader">     
        <Link to="/movies" className="click">Ver todas las Peliculas</Link>
        <Link to="/series" className="click">Ver todas las Series</Link>
        <Link to="/favoritos" className="click">Tus Favoritos</Link>

        </article>
        <Buscador/>

        {/* <form className="formbusqueda" action="./searchResults" method="get">
            <input className="inputbusqueda" type="text" name="buscar" id="" placeholder="Buscar..."/>
            <button className="submitbtn" type="submit"><CgSearch style={{color: 'black'}}/></button>
        </form> */}
    </nav>
</header>
    )
}

export default Header;