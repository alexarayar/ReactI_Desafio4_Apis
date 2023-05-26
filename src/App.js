import React, { Component } from 'react';
import Buscador from './components/Buscador';
import Footer from './components/Footer';
import Resultado from './components/Resultado';


class App extends Component {
  state = {
    termino : '',
    imagenes: []
  }
  

  paginaAnterior = () => {

        //leer el state de pagina
        let pagina = this.state.pagina;
        //comprobar si es 1 ya no retrocede.
        if(pagina ===1) return null;
        
        //restar 1
        pagina -= 1;
        //agregar cambio al state
        this.setState({
          pagina
        }, ()=>{
          this.consultarApi();
        });
        // console.log(pagina);
  }

  paginaSiguiente = () => {
    //leer el state de pagina
    let pagina = this.state.pagina;
    //sumar 1
    pagina += 1;
    //agregar cambio al state
    this.setState({
      pagina
    }, ()=>{
      this.consultarApi();
    });
    // console.log(pagina);
  }

  consultarApi = () => {
    const termino = this.state.termino
    const pagina = this.state.pagina; 
    const url = `https://pixabay.com/api/?key=31206837-a3aa4b536ba92f8e45ab33b7c&q=${termino}&per_page=30&page=${pagina}`;

    // console.log(url);
    fetch(url)
    .then(respuesta => respuesta.json() )
    .then(resultado => this.setState({ imagenes : resultado.hits }))//rescato imagenes de la api y guardo en el state
  }
//para buscar y paginar automaticamente en 1 función
  datosBusqueda = (termino) => {
    this.setState({
      termino: termino,
      pagina: 1
    }, ()=>{
      this.consultarApi();
    })
  }

  render () {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">BUSCA BUSCA TU IMAGEN</p>
          <Buscador
            datosBusqueda = {this.datosBusqueda}
          />
        </div>
        <div className='row justify-content-center'>
          <Resultado 
            imagenes={this.state.imagenes}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
          />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
