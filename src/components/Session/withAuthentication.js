import React from 'react';
import AuthUserContext from './context';
import { withFirebase } from '../Firebase';

const authenticationProvider = Component => {
  class WithAuthenticationProvider extends React.Component {
    state = {authUser: null};

    componentDidMount = () => {
      this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
        console.log('auth status changed');

        authUser ?
          this.setState({authUser}) :
          this.setState({authUser: null});

        authUser && !authUser.emailVerified && this.props.firebase.confirmEmail()
      })
    };

    componentWillUnmount = () => {
      this.listener()
    };

    render() {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      )
    }
  }

  return withFirebase(WithAuthenticationProvider);
};

const authenticationConsumer = (Component) => {
  class WithAuthenticationConsumer extends React.Component {
    render(){
      return <AuthUserContext.Consumer>
        {authUser => <Component authUser={authUser} />}
      </AuthUserContext.Consumer>
    }
  }

  return withFirebase(WithAuthenticationConsumer)
};

export {authenticationProvider, authenticationConsumer};