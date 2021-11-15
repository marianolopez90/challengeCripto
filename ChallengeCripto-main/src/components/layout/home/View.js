import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid,InputLabel,TextField ,Button} from '@material-ui/core';
import _ from 'lodash';
import CurrencyInputUtils from '../utils/CurrencyInputUtils';



const ViewCompra = () => {
    const { exchangeRate } = useSelector((state) => state.HomeReducer);

    return (
        <Grid container spacing={3} style={{ 'marginTop': '10px','padding':'5%' }}>
            <Grid item xs={12} md={12} >
                <InputLabel id="inputLabel1" className='boxLabelIngreso'>{exchangeRate.asset_id_base}</InputLabel>
            </Grid>
            <Grid container className='rootCajaCard' direction="row" spacing={1}>
                <Grid item xs={12} md={12} className='gridItemCaja'>
                    <TextField
                        placeholder='0,0'
                        value={exchangeRate.rate}
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
        </Grid>
    );
}

export default ViewCompra;
