import { Grid, TextField, InputLabel } from '@material-ui/core';
import React from 'react';
import CurrencyInputUtils from '../utils/CurrencyInputUtils';
import { Button } from '@material-ui/core';
import _ from 'lodash';
import ImgNotFound from '../../../img/notFound.png'

const CardViewExchange = ({ data,accion,total }) => {
   
    return (
        <>
            <Grid item xs={12} md={12} >
                <InputLabel id="inputLabel1" className='boxLabelIngreso'>{data.name}</InputLabel>
            </Grid>
            <Grid container className='rootCajaCard' direction="row" spacing={1}>
                <Grid item xs={12} className='gridItemCaja' container justify="center">
                    <img src={(!_.isEmpty(data.url)) ? data.url[0].url : ImgNotFound} width="150" height="150" />
                </Grid>
                <Grid item xs={6} md={6} className='gridItemCaja'>
                    <label className='labelInicial'>Fecha Comienzo</label>
                </Grid>
                <Grid item xs={6} md={6} className='gridItemCaja'>
                    <label className='labelInicial'>{data.data_start}</label>
                </Grid>
                <Grid item xs={6} md={6} className='gridItemCaja'>
                    <label className='labelInicial'>Fecha Fin</label>
                </Grid>
                <Grid item xs={6} md={6} className='gridItemCaja'>
                    <label className='labelInicial'>{data.data_end}</label>
                </Grid>
                <Grid item xs={12} md={12} className='gridItemCaja'>
                    <TextField
                        placeholder='0,0'
                        value={total}
                        disabled
                        className='labelTotal'
                        InputProps={{
                            inputComponent: CurrencyInputUtils,
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={12} className='gridItemCaja'>
                    <label className='labelTotalCaja'>Total</label>
                </Grid>
            </Grid>
            <Grid item xs={12} md={12} className='gridItemCaja'>
               <Button className='btnCompra' onClick={accion}>Comprar</Button>
            </Grid>
        </>
    )
}

export default CardViewExchange;