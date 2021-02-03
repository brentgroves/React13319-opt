import { connect } from 'react-redux';
import EngineeringComponent from '../components/Engineering';

import * as actions from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    AuthenticateSaga: (email, password, route, setSubmittingOff) =>
      dispatch(
        actions.AuthenticateSaga(email, password, route, setSubmittingOff),
      ),
  };
};

function mapStateToProps(state) {
  const { Msal } = state;
  return {
    msalInstance: Msal.msalInstance,
  };
}

export const Engineering = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EngineeringComponent);
