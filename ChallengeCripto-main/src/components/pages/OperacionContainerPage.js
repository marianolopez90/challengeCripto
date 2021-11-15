import * as React from 'react';
import { Grid } from '@material-ui/core';
import BodyOperacion from '../layout/operacion/BodyOperacion';


import '../../themes/producto.css'

const OperacionPage = () => {
    return (
        <Grid container direction="row">
            <Grid item xs={12}>
                <h1>Mis operaciones</h1>
                </Grid>

                <Grid container item xs={12} sm={12} md={12} lg={12} className="containerTabla">
                <BodyOperacion />
                </Grid>
            </Grid>
            )
}
            export default OperacionPage;