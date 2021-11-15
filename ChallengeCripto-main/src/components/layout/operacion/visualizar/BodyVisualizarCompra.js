import React from 'react';
import {useSelector} from 'react-redux'
import { Divider, Grid, Paper } from '@material-ui/core';
import SubHeaderImprimir from './SubHeaderImprimir';
import DetalleHeader from './DetalleHeader';
import DetalleExchange from './DetalleExchange';
import SubHeaderCompra from './SubHeaderCompra';

const BodyVisualizarCompra = () => {
     const { operacionSelect } = useSelector((state) => state.OperacionReducer);
     const { usuario } = useSelector((state) => state.LoginReducer);
    return (
        <Grid container alignItems="center" justify="space-between" className='margenTopcontainer'>
            <SubHeaderImprimir />
            <Grid item container>
                <Paper variant="outlined" className='paperContainer'>
                    <Grid container className='visualizarDetallepadding'>
                        <SubHeaderCompra nombreUsuario={usuario.nombre} date={operacionSelect.date}/>
                        <Divider className='dividerPago dividerAll' />
                        <Grid container>
                            <Grid item xs={5}>
                                <DetalleExchange nombre={operacionSelect.exchange.name} fechaComienzo={operacionSelect.exchange.data_start} fechaFin={operacionSelect.exchange.data_end} />
                            </Grid>
                            <Grid container item xs={2} justify='center'>
                                <Divider orientation="vertical" variant='fullWidth'  className='dividerNuevo' />
                            </Grid>
                            <Grid item xs={5}>
                                <DetalleHeader pagoTotal={operacionSelect.total}  />
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default BodyVisualizarCompra;
