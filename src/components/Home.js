import React from 'react'
import {withAuthorization} from './Session'
import {matchCredentials} from '../authorizationLogic'

const ifAuthorized = withAuthorization(matchCredentials);

const Home = () => {
  return <div>
    <h1>Home page</h1>
    <p>Home page is available only to signed in users</p>
  </div>
};

export default ifAuthorized(Home)