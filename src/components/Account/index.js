import React from 'react'
import {PasswordChangeForm} from '../PasswordChange'
import {PasswordForgetForm} from '../PasswordForget'
import {matchCredentials} from '../../authorizationLogic'
import {withAuthorization} from '../Session'

const ifAuthorized = withAuthorization(matchCredentials);

const AccountPage = () => {
  return <div>
    <h1>Account Page</h1>
    <div>
      <h2>Change password</h2>
      <PasswordChangeForm/>
    </div>
    <div>
      <h2>Reset password</h2>
      <PasswordForgetForm/>
    </div>
  </div>
};

export default ifAuthorized(AccountPage);