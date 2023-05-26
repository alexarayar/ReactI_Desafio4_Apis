import React from 'react';

const Paginacion = props =>{
    return (
        <div className='text-center position-center py-3'>
            <button onClick={props.paginaAnterior} type='button' className='btn btn-info mr-1'> &larr;</button>
            <button onClick={props.paginaSiguiente} type='button' className='btn btn-info'> &rarr;</button>
        </div>
    )

}

export default Paginacion;