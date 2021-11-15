import React from 'react';
import {useSelector,useDispatch } from 'react-redux';
import { logout} from '../../actions/LoginActions';
import { useHistory } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Button, Grid, Typography } from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import TransaccionRoute from '../../route/TransaccionRoute';
import '../../themes/NavTransacciones.css';


export default function TransaccionesContainerPage() {


  let histories = useHistory();
  const {usuario}  = useSelector(state => state.LoginReducer); 
  const dispatch = useDispatch();
  const logOut = () => {
    sessionStorage.removeItem('USER_DASHBOARD');
    dispatch(logout());
    histories.push("/Login");
  }


  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className='NavBarTransaccion'>
        <Toolbar>
          <Grid justify="space-between" container>
            <Grid item>
              <Typography variant="h5">Sistema Dashboard</Typography>
            </Grid>
            <Grid item>
              <Button
                 onClick={logOut}
                startIcon={<AccountBoxIcon />}
              >
                {"Hola " + usuario.nombre}
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Grid>
          <TransaccionRoute />
      </Grid>
    </React.Fragment>
  );
}