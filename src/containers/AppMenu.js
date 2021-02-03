import { connect } from 'react-redux'
import AppMenuComponent from '../components/AppMenu'


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

export const AppMenu = connect(mapStateToProps, mapDispatchToProps)(AppMenuComponent)
/*
  const { Msal } = state;
  return {
    msalInstance: Msal.msalInstance
  };

*/