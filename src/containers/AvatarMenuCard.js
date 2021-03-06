import { connect } from 'react-redux'
import AvatarMenuCardComponent from '../components/AvatarMenuCard'
import * as actions from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    Push: (path) => dispatch(actions.Push(path)),
  }
}

function mapStateToProps(state) {
  const { Msal } = state
  return {
    msalInstance: Msal.msalInstance,
    name: Msal.name,
    initials: Msal.initials,
    username: Msal.username,
    department: Msal.department,
    jobTitle: Msal.jobTitle,
    companyName: Msal.companyName,
  }
}

export const AvatarMenuCard = connect(mapStateToProps, mapDispatchToProps)(AvatarMenuCardComponent)
