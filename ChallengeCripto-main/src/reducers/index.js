import { combineReducers } from 'redux';
import ProductsReducer from './ProductsReducer';
import LoginReducer from './LoginReducer';
import HomeReducer from './HomeReducer';
import ExchangeReducer from './ExchangeReducer';
import OperacionReducer from './OperacionReducer';


export default combineReducers({
   LoginReducer,
   ProductsReducer,
   HomeReducer,
   ExchangeReducer,
   OperacionReducer
});