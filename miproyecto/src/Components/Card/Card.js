import React, {Component} from "react";
import {Link} from "react-router-dom";
import {AiOutlineHeart} from "react-icons/ai";
import {AiFillHeart} from "react-icons/ai";
import card from "./card.css";

class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            descOculta: true,
            textoBotonDesc: "Ver Mas",
            textoBotonFav: <AiOutlineHeart style={{color: 'grey', fontSize: '30px'}}/>,
            gitfavoritos: []
        }
    }

    componentDidMount(){
        let arrayFavoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')
        
        if(recuperoStorage !== null){
            arrayFavoritos = JSON.parse(recuperoStorage);

        if(arrayFavoritos.includes(this.props.id)){
            this.setState({
                textoBotonFav: <AiFillHeart style={{color: 'red', fontSize: '30px'}}/>
             })
           }     
        }

    }

    agregarAFavoritos(id){
        // Agregar un id dentro de array y colocar ese array en localStorage
        let arrayFavoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos');

        if(recuperoStorage !== null){
            arrayFavoritos = JSON.parse(recuperoStorage);

        if(arrayFavoritos.includes(this.props.id)){
            //Si está el id en el array, sacarlo
            arrayFavoritos = arrayFavoritos.filter(unId => unId !== this.props.id);
            this.setState ({
                textoBotonFav: <AiOutlineHeart style={{color: 'grey', fontSize: '30px'}}/>
            })
        }else{
            arrayFavoritos.push(this.props.id);
            this.setState({
                textoBotonFav: <AiFillHeart style={{color: 'red', fontSize: '30px'}}/>/* "Remove from favorites" */
        })
        }
    }
    //Subirlo a local storage stringifeado
    let arrayFavoritosAString = JSON.stringify(arrayFavoritos)
    localStorage.setItem('favoritos', arrayFavoritosAString)
    console.log(localStorage)
    
}

    mostrarDesc(){
        console.log('click');
        if (this.state.descOculta == true) {
            this.setState({
                descOculta: false,
                textoBotonDesc: "Ver Menos"
            }) 
        } else {
            this.setState({
                descOculta: true,
                textoBotonDesc: "Ver Mas"
            })
        }
       
    }

    render(){
    return(
        <article className="cadaPeli">
        <img src={`https://image.tmdb.org/t/p/w500/${this.props.poster}`}  alt={this.props.title} className="portada"/>
        <p className="nombrecadaPeli">{this.props.title}</p>   
        <button className="link">
            {this.props.esPeli?<Link className="link" to= {`./detPelicula/${this.props.id}`}>Ir a detalle</Link>:<Link className="link" to= {`./detSerie/${this.props.id}`}>Ir a Detalle</Link>}

        </button>
        
        <button onClick={()=>this.mostrarDesc()} className='link' type="button">{ this.state.textoBotonDesc}</button>
        <button onClick={()=>this.agregarAFavoritos(this.props.id)} className='botones like' type="button"> { this.state.textoBotonFav }</button>

        <p className={this.state.descOculta ? 'ocultar':'ver' }>{this.props.description}</p>
        
        </article>
    )
    }
}

export default Card;