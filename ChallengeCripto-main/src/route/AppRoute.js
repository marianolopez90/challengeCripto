import React from 'react';
import { useSelector } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, HashRouter, Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import HomePage from '../components/pages/HomePage'
import OperacionPage from '../components/pages/OperacionContainerPage';
const AppRoute = () => {

  const { autorizado } = useSelector(state => state.LoginReducer);
  const isAuth = autorizado;
  return (
    <>
      <Switch>
        <ProtectedRoute path='/App/Common/Home' component={HomePage} isAuth={isAuth} />
        <ProtectedRoute path='/App/Common/MisOperaciones' component={OperacionPage} isAuth={isAuth} />
      </Switch>
    </>
  )
}

export default AppRoute;