import React, { Fragment } from 'react';
import PrintRoundedIcon from '@material-ui/icons/PrintRounded';
import { Grid, IconButton } from '@material-ui/core';

const SubHeaderImprimir = () => {
    return (
        <Fragment>
            <Grid item container justify="flex-end" xs={12} className='visualizarImprimir'>
                <IconButton aria-label="print" size="small" onClick={() => window.print()}>
                    <PrintRoundedIcon />
                </IconButton>
            </Grid>
        </Fragment>
    );
}

export default SubHeaderImprimir;
