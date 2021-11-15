
import { act } from "react-dom/test-utils";
import { COMPRAR_MONEDA,CERRAR_MENSAJE_OPERACION,VIEW_OPERACION} from "../actions/types";
const initialState = {
   loading:true,
   compras:[],
   error:false,
   errorMensaje:'',
   mensajeOperacion:'',
   guardadoOk:false,
   mensaje:'',
   operacionSelect:{}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case COMPRAR_MONEDA:
            return {
                ...state,
                compras:[...state.compras,action.payload],
                operacionSelect:action.payload
            };
            case CERRAR_MENSAJE_OPERACION:
                return {
                    ...state,
                    guardadoOk: false,
                    mensaje:"",
                };
                case VIEW_OPERACION:
                    return {
                        ...state,
                        operacionSelect: action.payload,
                    };
        default:
            return state;
    }
};