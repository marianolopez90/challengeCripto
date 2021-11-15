import { ERROR_EXCHANGE, GET_ALL_EXCHANGE, GET_RATE, SET_MODAL_CONFIRMACION, SET_SELECT_EXCHANGE, LOADING_EXCHANGE_RATE } from './types';
import ExchangeService from '../service/ExchangeService';
import ExchangeDto from './DTO/ExchangeDTO';
import ExchangeRateService from '../service/ExchangeRateService';
import _ from 'lodash';

export const getAllExchange = () => async dispatch => {

    try {

        const { data } = await ExchangeService.getAll();
        const dataImag = await ExchangeService.getAllImage(64);


        dispatch({
            type: GET_ALL_EXCHANGE,
            payload: ExchangeDto.getViewExchangeDTO(_.orderBy(data, ["volume_1mth_usd"], ['desc', 'asc']), dataImag.data)
        })
    } catch (error) {
        dispatch({
            type: ERROR_EXCHANGE,
        })
    }
}

export const getExchangeRateComision = (assetId) => async dispatch => {

    try {
        const { data } = await ExchangeRateService.getExchangeRate(assetId, 'USD');

        dispatch({
            type: GET_RATE,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ERROR_EXCHANGE,
        })
    }

}


export const setModalConfirmacion = (value) => dispatch => {
    dispatch({
        type: SET_MODAL_CONFIRMACION,
        payload: value
    })
}



export const setSelectExchangeCompra = (value) => dispatch => {
    dispatch({
        type: SET_SELECT_EXCHANGE,
        payload: value
    })
}

export const setLoading = () => dispatch => {
    dispatch({
        type: LOADING_EXCHANGE_RATE,
    })
}