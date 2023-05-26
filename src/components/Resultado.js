import React, { Component } from 'react';
import Imagen from './Imagen';
import Paginacion from './Paginacion';

class Resultado extends Component {
    mostrarImagenes = () => {
        const imagenes = this.props.imagenes //para no estar moviendo el props a todos lados
        if(imagenes.length ===0) return null;  // validador que el codigo ejecute algo sin busqueda
        
        // console.log(imagenes); muestra por consola
        return (
            <React.Fragment>
                <div className='col-12 p-5 row'>
                    {imagenes.map(imagen =>(
                        <Imagen
                            key= {imagen.id} //asignamos el id solicitado por react
                            imagen = {imagen}
                        />
                    ))}
                </div>
                <Paginacion
                    paginaAnterior={this.props.paginaAnterior}
                    paginaSiguiente={this.props.paginaSiguiente}
                />
            </React.Fragment>
        )

    }
    render() { 
        return ( 
            <React.Fragment>
                {this.mostrarImagenes()}
            </React.Fragment>
            
        );
    }
}
 
export default Resultado;