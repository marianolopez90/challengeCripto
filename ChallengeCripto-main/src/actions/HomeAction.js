import { GET_ALL_CRIPTO, ERROR_CRIPTO,SET_LOADING_RATE,GET_EXCHANGE_RATE,OPEN_VIEW_RATE } from './types';
import CriptoService from '../service/CriptoService';
import ExchangeRateService from '../service/ExchangeRateService';
import CriptoDTO from './DTO/CriptoDTO';
import _ from 'lodash';


export const getAllCripto = () => async dispatch => {

    try {

        const { data } = await CriptoService.getAll();
        const dataRes = await CriptoService.getAllImage(32);

        dispatch({
            type: GET_ALL_CRIPTO,
            payload: { 'data': CriptoDTO.getViewCriptoDTO(_.orderBy(data, ["volume_1mth_usd"], ['desc', 'asc']), dataRes.data), 'dataImagen': dataRes.data }
        })

    } catch (error) {
        dispatch({
            type: ERROR_CRIPTO,
        })
    }

}

export const getExchangeRate = (assetId) => async dispatch => {

    try {
        const { data } = await ExchangeRateService.getExchangeRate(assetId, 'USD');

        dispatch({
            type: GET_EXCHANGE_RATE,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ERROR_CRIPTO,
        })
    }

}

export const setLoadingRate =()=>dispatch=>{

    dispatch({
        type: SET_LOADING_RATE,
    })
}

export const openViewRate =(value)=>dispatch=>{

    dispatch({
        type: OPEN_VIEW_RATE,
        payload: value
    })
}