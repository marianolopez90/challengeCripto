import { Grid } from '@material-ui/core';
import React from 'react';

const DetalleHeader = ({ pagoTotal} ) => {

    return (
        <Grid container>
            <Grid item xs={6} container direction="column" justifycontent="space-between" alignItems="flex-start" >
                <Grid item className='visualizarTitulo'>Pago Total</Grid>
                <Grid item className='visualizarSubtitulo'>restante a pagar {'0.00'} USD</Grid>
            </Grid>
            <Grid item xs={6} container direction="column" justifycontent="space-between" alignItems="flex-end">
                <Grid item className='visualizarTituloNum'> {pagoTotal} USD</Grid>
            </Grid>
        </Grid>
    );
}

export default DetalleHeader;
