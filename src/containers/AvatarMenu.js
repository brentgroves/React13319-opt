import { connect } from 'react-redux'
import AvatarMenuComponent from '../components/AvatarMenu'


const mapDispatchToProps = dispatch => {
  return {
  }
}

function mapStateToProps(state) {
  const { Msal } = state
  return {
    msalInstance: Msal.msalInstance,
    name: Msal.name,
    initials: Msal.initials,
    department: Msal.department,
    companyName: Msal.companyName,
  }
}

export const AvatarMenu = connect(mapStateToProps, mapDispatchToProps)(AvatarMenuComponent)
/*
  const { Msal } = state;
  return {
    msalInstance: Msal.msalInstance
  };

*/