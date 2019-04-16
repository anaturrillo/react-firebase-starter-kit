import React from 'react'
import * as ROUTES from '../../constants/routes'
import {withRouter} from 'react-router-dom'
import {withFirebase} from '../Firebase'


const withAuthorization = condition => Component => {

  class WithAuthorizationComponent extends React.Component {

    componentDidMount = () => {
      this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
        if (!condition(authUser)) {
          this.props.history.push(ROUTES.SIGN_IN)
        }
      })
    };

    render(){
      return <Component {...this.props} />
    }
  }

  return withRouter(withFirebase(WithAuthorizationComponent))

};

export default withAuthorization;