
import { act } from "react-dom/test-utils";
import { GET_ALL_EXCHANGE, ERROR_EXCHANGE, SET_LOADING, GET_RATE, SET_MODAL_CONFIRMACION, SET_SELECT_EXCHANGE,LOADING_EXCHANGE_RATE } from "../actions/types";
const initialState = {
    loading: true,
    exchange: [],
    error: false,
    errorMensaje: '',
    exchangeRate: {},
    abrirConfirmacion: false,
    tituloDialogo: '',
    textoMensaje: '',
    exchangeSelect: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ERROR_EXCHANGE:
            return {
                ...state,
                loading: false,
                error: true,
                mensajeError: "Error al cargar la data,por favor comuniquese con el administrador",
            };
            case LOADING_EXCHANGE_RATE:
                return {
                    ...state,
                    loading:true,
                };
        case GET_ALL_EXCHANGE:
            return {
                ...state,
                loading: false,
                exchange: action.payload,
                error:false,
                mensajeError:''

            };
        case GET_RATE:
            return {
                ...state,
                exchangeRate: action.payload

            };
        case SET_SELECT_EXCHANGE:
            return {
                ...state,
                exchangeSelect: action.payload,
                abrirConfirmacion: true,
                tituloDialogo: "Compra Moneda" ,
                textoMensaje:"Estas seguro de realizar la compra" ,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case SET_MODAL_CONFIRMACION:
            return {
                ...state,
                abrirConfirmacion: action.payload,
                tituloDialogo:'',
                textoMensaje: '',
                exchangeSelect:{}
            };


        default:
            return state;
    }
};