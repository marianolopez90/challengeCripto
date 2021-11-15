import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';
import _ from 'lodash';
import CardUtils from '../utils/CardUtils';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AssignmentIcon from '@material-ui/icons/Assignment';
const Estadisticas = () => {
    const { criptoSelect } = useSelector((state) => state.HomeReducer);

    return (
        <Grid container spacing={3} style={{ 'marginTop': '20px','padding':'2%' }}>
            <Grid item xs={4}>
                <CardUtils valor={132.32} label={"Volumen 1 Hs"} title={"Horas"} icon={<ArrowUpwardIcon/>} styleClass={'cardUtilsRootHs'}/>
            </Grid>
            <Grid item xs={4}>
                <CardUtils valor={135.78} label={"Volumen 1 Dia"} title={"Dia"} icon={<AssessmentIcon/>} styleClass={'cardUtilsRootDia'}/>
            </Grid>
            <Grid item xs={4}>
                <CardUtils valor={149.74} label={"Volumen 1 mes"} title={"Mes"} icon={<AssignmentIcon/>} styleClass={'cardUtilsRootMes'}/>
            </Grid>
        </Grid>
    );
}

export default Estadisticas;
