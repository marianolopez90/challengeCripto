import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { useHistory } from "react-router-dom";

const Header = () => {
    let history = useHistory();
    
    return (
        <Grid container alignItems="center" className='header headerCompraMoneda'>
            <Grid item  container justify="center" alignItems="center" xs={1}>
                <IconButton aria-label="delete" size="small" className='btnClose' onClick={() => {history.push('/App/Common/Home');}}>
                    <CloseRoundedIcon fontSize="inherit" />
                </IconButton>
            </Grid>
            <Grid item xs={6} className='headerTitulo'>
                Nueva Compra de Exchanges
            </Grid>
            <Grid item xs={1} />
        </Grid>
    );
}

export default Header;
