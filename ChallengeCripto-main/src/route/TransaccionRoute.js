import React from 'react';
import ExchangeContainer from '../components/pages/ExchangeContainer';
import MonedaCompra from '../components/pages/MonedaCompraPage';
import VisualizarCompra from '../components/pages/VisualizarCompra';
import ProtectedRoute from './ProtectedRoute';
import { useSelector } from 'react-redux';



const TransaccionRoute = (props) => {
  const { autorizado } = useSelector((state) => state.LoginReducer);
  const isAuth = autorizado;

        return (
          <>
            <ProtectedRoute path='/App/Transaccion/Exchange/Home' component={ExchangeContainer} isAuth={isAuth}/>
            <ProtectedRoute path='/App/Transaccion/Moneda/Compra' component={MonedaCompra} isAuth={isAuth}/>  
            <ProtectedRoute path='/App/Transaccion/Moneda/VisualizarCompra' component={VisualizarCompra} isAuth={isAuth}/>        
          </>
        )
      }

export default TransaccionRoute;
