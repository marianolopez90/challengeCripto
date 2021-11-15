import React from 'react';
import {Divider, Grid, Typography } from '@material-ui/core';


const CardUtils = ({valor,label,title,icon,styleClass}) => {
    return (
        <Grid container className={styleClass} direction="row">
             <Grid item xs={12}>
                <Typography variant="h5"> {title}</Typography>
            </Grid>
            <Grid item xs={9}>
                <Typography variant="h4"> {`$${valor}`}</Typography>  
            </Grid>
            <Grid item xs={3}>
               {icon}
            </Grid>
            <Divider />
            <Grid item xs={12} >
                <Typography variant="h5" style={{'color':'#6c7293'}}>{label}</Typography>
            </Grid>
        </Grid>
    )
}
export default CardUtils;