import {COMPRAR_MONEDA,VIEW_OPERACION,CERRAR_MENSAJE_OPERACION} from './types';

export const comprarMoneda =(value)=>dispatch=>{
    dispatch({
        type:COMPRAR_MONEDA,
        payload:value
    })
}

export const cerrarMensaje =()=>dispatch=>{

    dispatch({
        type:CERRAR_MENSAJE_OPERACION,
       
    })
}

export const getSelectOperacion = (value)=>dispatch=>{
    dispatch({
        type:VIEW_OPERACION,
        payload: value
    })
}