import React, { Component } from 'react';

class Buscador extends Component {
    // state = {}
    busquedaRef = React.createRef();

    obtenerDatos = (e) => {
        e.preventDefault();

        //se rescata el valor del input
        const termino = this.busquedaRef.current.value
        
        //enviamos valor al componente principal
        this.props.datosBusqueda(termino);
    }

    render( ) {
        return (
            <form onSubmit={this.obtenerDatos}>
                <div className='row'>
                    <div className='form-group col-md-8'>
                        <input ref={this.busquedaRef} type="text" className='form-control form-control-lg' placeholder='Busquemos tu imagen ejemplo: Auto'/>
                    </div>
                    <div className='form-group col-md-4'>
                        <input type="submit" className='btn btn-lg btn-success btn-block' value="Vamos!"/>
                    </div>
                </div>
            </form>
         );
    }
}


export default Buscador ;