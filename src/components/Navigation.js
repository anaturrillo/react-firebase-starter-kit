import React from 'react'
import {Link} from 'react-router-dom'
import * as ROUTES from './../constants/routes'
import SignOut from './../components/SignOut'
import {authenticationConsumer} from './Session'

const AuthUserNav = () => {
  return <div>
    <ul>
      <li>
        <Link to={ROUTES.LANDING}>Inicio</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
    </ul>
    <SignOut />
  </div>
};

const NotAuthUserNav = () => {
  return <div>
    <ul>
      <li>
        <Link to={ROUTES.LANDING}>Inicio</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
      </li>
    </ul>
  </div>
};

const Navigation = auth => auth.authUser ? <AuthUserNav />: <NotAuthUserNav />;

export default authenticationConsumer(Navigation);