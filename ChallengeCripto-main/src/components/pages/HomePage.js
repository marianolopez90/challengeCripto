import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCripto,openViewRate} from '../../actions/HomeAction';
import { Grid } from '@material-ui/core';
import Progress from '../layout/progress/Progress';
import AlertUtils from '../layout/utils/AlertUtils';
import TablaCripto from '../layout/home/Tabla';
import DialogoGeneral from '../layout/utils/DialogGeneral';
import FormularioProducto from '../layout/product/FormularioProducto';
import View from '../layout/home/View';
import Mensaje from '../layout/utils/Mensaje';
import '../../themes/producto.css'

const HomePage = () => {
    const dispatch = useDispatch();
    const { loading, error,mensajeError,openViewRateModal} = useSelector((state) => state.HomeReducer);


    useEffect(() => {
        dispatch(getAllCripto());
    }, []);

    if (loading) return <Progress />
    if (error) return <AlertUtils TYPE={"error"} CLASS={'errorAlert'} LABEL={mensajeError} />;

    return (
        <Grid container direction="row">
        
            {/* <Grid>
                <Mensaje open={guardadoOk} mensaje={mensaje} cerrarMsj={() => dispatch(cerrarMensaje())} />
            </Grid> */}
            <Grid container item xs={12} sm={12} md={12} lg={12} className="containerTabla">
                    <TablaCripto />
            </Grid>
            <Grid item xs={12}>
                <DialogoGeneral open={openViewRateModal} cerrar={() => dispatch(openViewRate(false))} contenido={<View />} />
            </Grid>
        </Grid>
    )
}
export default HomePage;