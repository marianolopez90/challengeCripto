// import * as React from 'react';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Grid } from '@material-ui/core';
// import Progress from '../layout/progress/Progress';
// import AlertUtils from '../layout/utils/AlertUtils';
// import FormularioProducto from '../layout/product/FormularioProducto';
// import Mensaje from '../layout/utils/Mensaje';
// import '../../themes/producto.css';
// import Header from '../layout/home/Compra/Header';
// import ViewCompra from '../layout/home/View';
// import HeaderCompra from '../layout/exchange/Estadisticas';


// const HomePage = () => {
//     const dispatch = useDispatch();
//     const { loadingRate, error, mensajeError } = useSelector((state) => state.HomeReducer);


//     if (loadingRate) return <Progress />
//     if (error) return <AlertUtils TYPE={"error"} CLASS={'errorAlert'} LABEL={mensajeError} />;

//     return (
//         <Grid container direction="row">

//             {/* <Grid>
//                 <Mensaje open={guardadoOk} mensaje={mensaje} cerrarMsj={() => dispatch(cerrarMensaje())} />
//             </Grid> */}
//             <Header/>
//             <Grid container item xs={12} sm={12} md={12} lg={12} >
//                 <HeaderCompra />
//             </Grid>
//             <Grid container item xs={4} sm={4} md={12} lg={4} justify="center">
//                 <ViewCompra />
//             </Grid>
//             {/* <Grid item xs={12}>
//                 <DialogoGeneral open={openModal} cerrar={() => dispatch(openFormulario(false))} contenido={<FormularioProducto />} />
//             </Grid> */}
//         </Grid>
//     )
// }
// export default HomePage;