import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {withFirebase} from '../Firebase'
import * as ROUTES from '../../constants/routes'

const INITIAL_STATE = {
  email:'',
  error: null
};

class PasswordForgetFormBase extends Component {
  state = {...INITIAL_STATE};

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.firebase.passwordReset(this.state.email)
      .then(_ => {
        this.setState({...INITIAL_STATE})
      })
      .catch(error => this.setState({error}))
  };

  render(){
    const {email, error} = this.state;
    const isInvalid = email === '';
    return <form onSubmit={this.onSubmit}>
      <input
        value={email}
        onChange={this.onChange}
        type="email"
        name="email"
        placeholder="Email address"
      />

      <button disabled={isInvalid} type="submit">Reset password</button>

      {error && <p>{error.message}</p>}
    </form>
  }
}

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

const PasswordForgetPage = () => {
  return <div>
    <h1>Password forget</h1>
    <PasswordForgetForm/>
  </div>
};

const PasswordForgetLink = () => {
  return <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forget password?</Link>
  </p>
};

export default PasswordForgetPage;

export {PasswordForgetForm, PasswordForgetLink}

