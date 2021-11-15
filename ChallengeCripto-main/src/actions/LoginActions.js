import {
    SET_ERROR,
    SET_LOADING,
    GET_USER_LOGIN,
    LOGOUT,
} from './types';
import JWT from '../service/JWT'

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

export const getLoginUser = (values) => async dispatch => {
    try {
        dispatch(setLoading());
        localStorage.setItem("USER_DASHBOARD", JSON.stringify(values));
            //JWT.Init("CEA0B191-09B0-463E-B3CB-20B0749E4C43");
            JWT.Init("367CA0ED-BA83-4068-BE52-7763CFABCA8B");
        dispatch({
            type: GET_USER_LOGIN,
            payload: values
        });
    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}

export const logout = () => dispatch => {
    localStorage.removeItem("USER_DASHBOARD");
    dispatch({
        type: LOGOUT,
    });

}


export const userIsLogIn = (data) => dispatch => {
    localStorage.setItem("USER_DASHBOARD", JSON.stringify(data));
    JWT.Init("367CA0ED-BA83-4068-BE52-7763CFABCA8B");
    dispatch({
        type: GET_USER_LOGIN,
        payload: data
    });
}
