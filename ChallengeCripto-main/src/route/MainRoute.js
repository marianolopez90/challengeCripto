import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory
} from "react-router-dom";
import { userIsLogIn } from '../actions/LoginActions';
import Login from '../components/layout/login/FormularioLogin';
import AppContainerPage from '../components/pages/AppContainerPage';
import TransaccionesContainerPage from '../components/pages/TransaccionesContainerPage';
import NotFound from '../components/pages/NotFound';
import ProtectedRoute from './ProtectedRoute';

const MainRoute = () => {

    const { autorizado } = useSelector(state => state.LoginReducer);
    const isAuth = autorizado;
    const dispatch = useDispatch();

    const history = useHistory();

    useEffect(() => {
        const loggedInUser = localStorage.getItem("USER_DASHBOARD");
        if (loggedInUser) {
          const UserData = JSON.parse(loggedInUser);
          dispatch(userIsLogIn(UserData));
          history.push('/App/Common/Home');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [autorizado]);

    return (
        <Switch>
            <Route exact={true}  path={["/", "/Login"]} component={Login} />
            <ProtectedRoute path='/App/Common/' component={AppContainerPage} isAuth={isAuth} />
            <ProtectedRoute path='/App/Transaccion/' component={TransaccionesContainerPage} isAuth={isAuth} />
            <ProtectedRoute path='/App/' component={NotFound} isAuth={isAuth} />
            <ProtectedRoute component={NotFound} isAuth={isAuth} />
        </Switch>
    );
}

export default MainRoute;
