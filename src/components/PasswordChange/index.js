import React, {Component} from 'react'
import {withFirebase} from '../Firebase'
import {Link} from 'react-router-dom'
import * as ROUTES from '../../constants/routes'

const INITIAL_STATE = {passwordOne:'', passwordTwo:'', error:null};

class PasswordChangeFormBase extends Component {
  state = {...INITIAL_STATE};

  onSubmit = e => {
    e.preventDefault();

  };

  onChange = e => {
    this.setState({[e.target.name]:e.target.value})
  };

  render(){
    const {passwordOne, passwordTwo, error} = this.state;
    const isInvalid = passwordOne !== passwordTwo || passwordOne === '';
    return <form>
      <input
        name="passwordOne"
        placeholder="New password"
        value={passwordOne}
        onChange={this.onChange}
        type="password"
      />
      <input
        name="passwordTwo"
        placeholder="Repeat password"
        value={passwordTwo}
        onChange={this.onChange}
        type="password"
      />

      <button type="submit" disabled={isInvalid}>Change password</button>
      {error && <p>{error.message}</p>}
    </form>
  }
}

const PasswordChangeForm = () => withFirebase(PasswordChangeFormBase);

const PasswordChangePage = () => {
  return <div>
    <h1>Change Password</h1>
    <PasswordChangeForm/>
  </div>
};

const PasswordChangeLink = () => {
  return <p>
    <Link to={ROUTES.PASSWORD_CHANGE}>Change password</Link>
  </p>
};

export default PasswordChangePage;
export {PasswordChangeForm, PasswordChangeLink}