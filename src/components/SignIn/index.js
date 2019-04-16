import React, {Component} from 'react'
import {SignUpLink} from './../SignUp'
import {PasswordForgetLink} from '../PasswordForget'
import {withFirebase} from './../Firebase'
import {withRouter} from 'react-router-dom';
import * as ROUTES from './../../constants/routes'


const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props){
    super(props);
    this.state = {...INITIAL_STATE};
  }

  onSubmit = e => {
    e.preventDefault();
    const {email, password} = this.state;

    this.props.firebase.signIn(email, password)
      .then(a => {
        console.log(a);
        this.props.history.push(ROUTES.HOME)
      })
      .catch(error => this.setState({error}))
  };

  onChange = e => this.setState({[e.target.name]:e.target.value});

  render(){
    const {email, password, error} = this.state;

    const isInvalid = email === '' || password === '';

    return <form onSubmit={this.onSubmit}>
      <input
        name="email"
        value={email}
        onChange={this.onChange}
        type="text"
        placeholder="Email"
      />
      <input
        name="password"
        value={password}
        onChange={this.onChange}
        type="text"
        placeholder="Password"
      />
      <button type="submit" disabled={isInvalid} >Sign in</button>
      {error && <p>{error.message}</p>}
    </form>
  }
}

const SignInForm = withRouter(withFirebase(SignInFormBase));

const SignInPage = () => {
  return <div>
    <h1>Sign In</h1>
    <SignInForm />
    <SignUpLink/>
    <PasswordForgetLink/>
  </div>
};

export default SignInPage;
