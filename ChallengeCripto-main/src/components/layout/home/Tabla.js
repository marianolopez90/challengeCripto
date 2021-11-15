import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MUIDataTable from "mui-datatables";
import { Grid} from '@material-ui/core';
import CustomToolBar from './CustomToolbar';
import CustomViewExchange from './CustomViewExchange';
import CustomBuy from './CustomBuy';
import _ from 'lodash';
import {getExchangeRateComision,setLoading} from '../../../actions/ExchangeAction';
import { getExchangeRate, setLoadingRate } from '../../../actions/HomeAction';
import { useHistory } from "react-router-dom";
import ImgNotFound from '../../../img/notFound.png'

const TablaChequeVenta = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { criptos } = useSelector((state) => state.HomeReducer);

    const options = {
        selectableRows: 'none',
        download: false,
        search: true,
        print: true,
        filter: true,
        confirmFilters: false,
        viewColumns: false,
        pagination: false,
        enableNestedDataAccess: '.',

    };


    const columns = [
        
        {
            name: "url",
            label:' ',
            options: {
                filter: false,
                sort: false,
                display: true,
                viewColumns: true,
                customBodyRender: (value) => <img 
                src={(!_.isEmpty(value)) 
                    ? value[0].url : ImgNotFound} 
                width="40"
                height="40"/>,
            }
        },
       
        {
            name: "name",
            label: "Nombre",
            options: {
                filter: true,
                sort: true,

            }
        },
        {
            label: "Asset",
            name: 'asset_id',
            options: {
                filter: false,
                sort: true,
            }
        },
        {
            name: "price_usd",
            label: "Precio USD",
            options: {
                filter: true,
                sort: true,
            }
        },
       
       
       
        {
            name: "asset_id",
            label:'Exchange Rate',
            options: {
                filter: false,
                sort: false,
                display: true,
                viewColumns: true,
                customBodyRender: (value) => 
                <CustomBuy accion={()=>{dispatch(getExchangeRate(value))}}/>,
            }
        },
        {
            name: "asset_id",
            label:' ',
            options: {
                filter: false,
                sort: false,
                display: true,
                viewColumns: true,
                customBodyRender: (value) => <CustomViewExchange 
                accion={()=>{
                    dispatch(setLoading())
                    dispatch(getExchangeRateComision(value));
                    history.push('/App/Transaccion/Exchange/Home')}} />,
            }
        },


    ];



    return (
        <Grid container>
            <Grid item xs={12}>
                <MUIDataTable
                    data={criptos}
                    columns={columns}
                    options={options}
                    title={"Criptomonedas"}
                />
            </Grid>
        </Grid>
    );
}

export default TablaChequeVenta;
