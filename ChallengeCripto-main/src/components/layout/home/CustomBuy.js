import  React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import VisibilityIcon from '@material-ui/icons/Visibility';
const CustomBuy = ({accion}) => {
  
    return (
        <React.Fragment>
            <Tooltip title={"View ExchangeRate"}>
                <IconButton onClick={accion}>
                        <VisibilityIcon style={{ 'color':'grey'}} />
                </IconButton>
            </Tooltip>
        </React.Fragment>
    );

}

export default CustomBuy;