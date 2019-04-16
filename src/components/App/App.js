import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navigation from '../Navigation'
import * as ROUTES from './../../constants/routes'
import Home from './../Home'
import SignInPage from './../SignIn'
import SignUpPage from './../SignUp'
import Landing from './../Landing'
import {authenticationProvider} from '../Session'

const App = () => {
    return <Router>
        <Navigation />
        <hr/>
        <Route exact path={ROUTES.LANDING} component={Landing} />
        <Route path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      </Router>
};

export default authenticationProvider(App);
