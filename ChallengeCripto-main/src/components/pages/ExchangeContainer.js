import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllExchange } from '../../actions/ExchangeAction';
import { cerrarMensaje } from '../../actions/OperacionAction';
import { Grid } from '@material-ui/core';
import Progress from '../layout/progress/Progress';
import AlertUtils from '../layout/utils/AlertUtils';
import Body from '../layout/exchange/Body';
import Header from '../layout/exchange/Header'
import Mensaje from '../layout/utils/Mensaje';
import '../../themes/exchange.css'
import Estadisticas from '../layout/exchange/Estadisticas';

const HomePage = () => {
    const dispatch = useDispatch();
    const { loading, error, mensajeError } = useSelector((state) => state.ExchangeReducer);
    const { guardadoOk, mensaje } = useSelector((state) => state.OperacionReducer);

    useEffect(() => {
        dispatch(getAllExchange());
    }, []);

    if (loading) return <Progress />
    if (error) return <AlertUtils TYPE={"error"} CLASS={'error'} LABEL={mensajeError} />;

    return (

        <Grid container direction="row">
            <Grid>
                <Mensaje open={guardadoOk} mensaje={mensaje} cerrarMsj={() => dispatch(cerrarMensaje())} />
            </Grid>
            <Header />
            <Grid container item xs={12} sm={12} md={12} lg={12} >
                <Estadisticas />
            </Grid>
            <Grid container item xs={12} sm={12} md={12} lg={12}>
                <Body />
            </Grid>
        </Grid>
    )
}
export default HomePage;