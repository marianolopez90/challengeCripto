import  React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const CustomViewExchange = ({accion}) => {
    return (
        <React.Fragment>
            <Tooltip title={"Buy"}>
                <IconButton onClick={accion}>
                        <ShoppingCartIcon style={{ 'color':'grey'}} />
                </IconButton>
            </Tooltip>
        </React.Fragment>
    );

}

export default CustomViewExchange;