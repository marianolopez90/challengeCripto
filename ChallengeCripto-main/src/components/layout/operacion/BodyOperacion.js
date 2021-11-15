import * as React from 'react';
import { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectOperacion } from '../../../actions/OperacionAction';
import { Grid } from '@material-ui/core';
import AccordionItem from './AccordionItem';
import PaginationUtils from '../utils/Pagination';
import AlertUtils from '../utils/AlertUtils';
import { useHistory } from "react-router-dom";
import * as _ from 'lodash';



const SimpleAccordion = () => {

    const { compras } = useSelector((state) => state.OperacionReducer);


    const history = useHistory();
    const dispatch = useDispatch();
    const itemsPerPage = 20;
    const noOfPages = Math.ceil(compras.length / itemsPerPage);
    const [page, setPage] = useState(1);

    const handleChange = (value) => setPage(Number(value.currentTarget.outerText));

    if (compras.length === 0) return <AlertUtils TYPE={"Error"} CLASS={'error'} LABEL={"No contiene compras realizadas"} />;

    return (
        <Fragment>
            <Grid style={{ 'width': '100%' }}>
                <Grid item xs={12}>
                    <h1>Mis operaciones</h1>
                </Grid>

                {_.map(compras.slice((page - 1) * itemsPerPage, page * itemsPerPage), itemCO => (
                    <Grid key={itemCO.id}>
                        <AccordionItem data={itemCO} accion={() => { dispatch(getSelectOperacion(itemCO)); history.push('/App/Transaccion/Moneda/VisualizarCompra') }} />
                    </Grid>
                ))}
            </Grid>

            <PaginationUtils
                noOfPages={noOfPages}
                page={page}
                handleChange={(value) => handleChange(value)}
            />

        </Fragment>
    );
};

export default SimpleAccordion;