import React from "react";
import logo from "../../assets/logo.jpg";
import footer from "./footer.css";

function Footer(){
    return(
        <footer>
            <section className="footersection"> 
                <p className="nombres">Simone Bordelois| Lucia Cupito | Jazmin Lombardi </p>  
                    <div>
                        <p className="nombres">Filmex 2023</p>
                        <img className="logofooter" src={logo} alt="Logo"/>        
                    </div>
            </section>
  
 
    </footer>
    )
}

export default Footer;
