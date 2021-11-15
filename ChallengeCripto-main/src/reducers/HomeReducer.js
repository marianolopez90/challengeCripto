
import { GET_ALL_CRIPTO, ERROR_CRIPTO, SET_LOADING, SET_LOADING_RATE, GET_EXCHANGE_RATE,OPEN_VIEW_RATE } from "../actions/types";
import _ from 'lodash';
const initialState = {
    loading: true,
    criptos: [],
    imagesCriptos: [],
    error: false,
    errorMensaje: '',
    exchangeRate: {},
    loadingRate: false,
    criptoSelect:{},
    openViewRateModal:false,
   
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ERROR_CRIPTO:
            return {
                ...state,
                loading: false,
                error: true,
                mensajeError: "Error al cargar la data,por favor comuniquese con el administrador",
            };
        case GET_ALL_CRIPTO:
            return {
                ...state,
                loading: false,
                criptos: action.payload.data,
                criptosImage: action.payload.dataImagen,
                
            };
            
        case GET_EXCHANGE_RATE:
            return {
                ...state,
                loading: false,
                exchangeRate: action.payload,
                loadingRate: false,
                criptoSelect: _.filter(state.criptos,(data)=>{return data.asset_id === action.payload.asset_id_base})[0],
                openViewRateModal:true
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case SET_LOADING_RATE:
            return {
                ...state,
                loadingRate: true
            };
            case OPEN_VIEW_RATE:
                return {
                    ...state,
                    openViewRateModal: action.payload
                };


        default:
            return state;
    }
};