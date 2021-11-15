import * as React from 'react';
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography, IconButton, Divider } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import VisibilityIcon from '@material-ui/icons/Visibility';
import * as _ from 'lodash';


const MyAccordionItem = ({ data,accion }) => {


    return (
        <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    id={data.id}
                    aria-controls={data.id}

                >
                    <Grid container>
                        <Grid item xs={4} sm={4} lg={4}>
                            <Typography className="labelTitle" variant="subtitle2" gutterBottom >{data.exchange.name}</Typography>
                        </Grid>
                       
                        <Grid item xs={4} sm={4} lg={4}>
                            <Typography className="labelTitle" variant="subtitle2" gutterBottom >{data.date}</Typography>
                        </Grid> 
                        <Grid item xs={4} sm={4} lg={4}>
                            <IconButton onClick={accion}><VisibilityIcon/></IconButton>
                        </Grid>
                    </Grid>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container>
                        <Divider className='dividerGadgets' />
                        <Grid item xs={12} sm={4} lg={4}>
                            <label  className='labelCaja'>Site</label>
                            <Typography variant="body2" gutterBottom className='labelSecondary'>{data.exchange.website}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} lg={4}>
                            <label className='labelCaja'>Fecha Comienzo</label>
                            <Typography variant="body2" gutterBottom className='labelSecondary'>{data.exchange.data_start}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} lg={4}>
                            <label className='labelCaja'>Fecha fin</label>
                            <Typography variant="body2" gutterBottom className='labelSecondary'>{data.exchange.data_end}</Typography>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </>
    );
};

export default MyAccordionItem;