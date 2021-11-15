import React, { Fragment,useEffect } from 'react';
import BodyVisualizarOperacion from '../layout/operacion/visualizar/BodyVisualizarCompra';
import HeaderVisualizarCompra from '../layout/exchange/Header';
import '../../themes/exchange.css';
const VisualizarCompra = () => {
    
    return (
        <Fragment>
            <HeaderVisualizarCompra />
            <div className='chequesBody'>
                <BodyVisualizarOperacion />
            </div>
        </Fragment>
    );
}

export default VisualizarCompra;
