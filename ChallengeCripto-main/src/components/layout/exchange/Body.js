import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { comprarMoneda } from '../../../actions/OperacionAction';
import { setSelectExchangeCompra, setModalConfirmacion } from '../../../actions/ExchangeAction';
import { Grid } from '@material-ui/core';
import _ from 'lodash';
import CardViewExchange from './CardView';
import ConfirmarPopUp from '../utils/ConfirmarPopUp';
import moment from 'moment';
import { useHistory } from "react-router-dom";


const BodyExchange = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    //const [abrir, setAbrir] = useState(false)
    const { compras } = useSelector((state) => state.OperacionReducer);
    const { exchange, exchangeRate, abrirConfirmacion, tituloDialogo, textoMensaje, exchangeSelect } = useSelector((state) => state.ExchangeReducer);


    const comprarCriptoMoneda = () => {
        const dataCompra = {
            'id': compras.length,
            'date': moment().format('l'),
            'exchange': exchangeSelect,
            'total': exchangeRate.rate * (exchangeSelect.comissionDate * 100)
        }
        dispatch(setModalConfirmacion(false));
       
        dispatch(comprarMoneda(dataCompra));
        history.push('/App/Transaccion/Moneda/VisualizarCompra')
    }

   

    return (
        <Fragment>
            <Grid container spacing={3} style={{ 'marginTop': '20px', 'padding': '5%' }}>
                {_.map(exchange, (itemCO, index) => (
                    <Grid item xs={4} key={index}>
                        <CardViewExchange data={itemCO} total={exchangeRate.rate * (itemCO.comissionDate * 100)} accion={() => { dispatch(setSelectExchangeCompra(itemCO));}} />
                    </Grid>
                ))}
            </Grid>
            <Grid>
                <ConfirmarPopUp status={abrirConfirmacion} cerrar={()=>{dispatch(setModalConfirmacion(false))}} labelBoton={'Comprar'} titulo={tituloDialogo} mensaje={textoMensaje} accionBoton={() => comprarCriptoMoneda()} />
            </Grid>
        </Fragment>
    );
}

export default BodyExchange;
