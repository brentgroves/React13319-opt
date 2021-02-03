import { connect } from 'react-redux';
import DepartmentSwitchComponent from '../components/DepartmentSwitch';

import * as actions from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    SetAccount: (account) => dispatch(actions.SetAccount(account)),
    SetGraph: (graph) => dispatch(actions.SetGraph(graph)),
    SetProfile: (profile) => dispatch(actions.SetProfile(profile)),
    SetDepartment: (department) => dispatch(actions.SetDepartment(department)),
    Push: (path) => dispatch(actions.Push(path)),
  };
};

function mapStateToProps(state) {
  const { Msal } = state;
  return {
    msalInstance: Msal.msalInstance,
  };
}

export const DepartmentSwitch = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DepartmentSwitchComponent);
