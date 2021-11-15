import { Grid } from '@material-ui/core';
import React from 'react';

const DetalleExchange = ({ nombre, fechaComienzo, fechaFin }) => {

    return (
        <Grid container>
            <Grid item xs={6} container direction="column" justifycontent="space-between" alignItems="flex-start" >
                <Grid item className='visualizarDetalleLabel'>Nombre</Grid>
                <Grid item className='visualizarDetalleLabel'>Fecha Comienzo</Grid>
                <Grid item className='visualizarDetalleLabel'>Fecha Fin</Grid>
            </Grid>
            <Grid item xs={6} container direction="column" justifycontent="space-between" alignItems="flex-end" >
                <Grid item className='visualizarDetalleLabel'>{nombre} </Grid>
                <Grid item className='visualizarDetalleLabel'>{fechaComienzo}</Grid>
                <Grid item className='visualizarDetalleLabel'>{fechaFin}</Grid>
            </Grid>
        </Grid>
    );
}

export default DetalleExchange;
