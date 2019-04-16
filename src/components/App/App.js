import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navigation from '../Navigation'
import * as ROUTES from '../../constants/routes'
import Home from '../Home'
import SignInPage from '../SignIn'
import SignUpPage from '../SignUp'
import PasswordForgetPage from '../PasswordForget'
import PasswordChangePage from '../PasswordChange'
import Landing from '../Landing'
import Account from '../Account'

import {authenticationProvider} from '../Session'

const App = () => {
    return <Router>
        <Navigation />
        <hr/>
        <Route exact path={ROUTES.LANDING} component={Landing} />
        <Route path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.PASSWORD_CHANGE} component={PasswordChangePage} />
        <Route path={ROUTES.ACCOUNT} component={Account} />
      </Router>
};

export default authenticationProvider(App);
