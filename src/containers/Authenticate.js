import { connect } from 'react-redux';
import AuthenticateComponent from '../components/Authenticate';

import * as actions from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    ClearAppError: () => dispatch(actions.ClearAppError()),
  };
};

function mapStateToProps(state) {
  const { Global, Msal } = state;
  return {
    msalInstance: Msal.msalInstance,
    appError: Global.appError,
  };
}

export const Authenticate = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthenticateComponent);
