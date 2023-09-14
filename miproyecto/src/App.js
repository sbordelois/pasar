import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Error from "./Components/Error/Error";
import Favoritos from "./Components/Favoritos/Favoritos";
import DetallePeli from "./Components/DetallePeli/DetallePeli";
import SearchResults from "./Components/SearchResults/SearchResults";
import TodasPelis from "./Components/TodasPelis/TodasPelis";
import TodasSeries from "./Components/TodasSeries/TodasSeries"
import Buscador from "./Components/Buscador/Buscador";
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Header/>
          <Switch>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/detPelicula/:id" component={DetallePeli}/>
            <Route path="/favoritos" component={Favoritos}/>
            <Route path="/searchResults/:search" component={SearchResults}/>
            <Route path="/movies" component={TodasPelis}/>
            <Route path="/series" component={TodasSeries}/>
            <Route path="" component={Error}/>
            
          </Switch>

      <Footer/>
    </div>
  );
}

export default App;
