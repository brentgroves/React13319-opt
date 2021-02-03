import { connect } from "react-redux";
import ToolbarAvatarComponent from "../components/ToolbarAvatar";

import * as actions from "../actions";

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    Push: (path) => dispatch(actions.Push(path)),
  };
};

function mapStateToProps(state) {
  const { Msal } = state;
  return {
    msalInstance: Msal.msalInstance,
    name: Msal.name,
    initials: Msal.initials,
    department: Msal.department,
    companyName: Msal.companyName,
  };
}

export const ToolbarAvatar = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolbarAvatarComponent);
