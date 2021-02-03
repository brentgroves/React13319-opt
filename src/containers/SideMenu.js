import { connect } from "react-redux";
import SideMenuComponent from "../components/SideMenu";
import * as actions from '../actions'

function mapStateToProps(state) {
  const { Global } = state
  return {
    firstDayOfWeek: Global.firstDayOfWeek,
    lastDayOfWeek: Global.lastDayOfWeek,
    firstDayOfMonth: Global.firstDayOfMonth,
    lastDayOfMonth: Global.lastDayOfMonth

  }
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    Push: (path) => dispatch(actions.Push(path)),
  }
}


export const SideMenu = connect(mapStateToProps, mapDispatchToProps)(SideMenuComponent)
