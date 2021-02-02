import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import Global from './Global'
import Msal from './Msal'
import User from './User'

const RootReducer = (history) => combineReducers({
  router: connectRouter(history),
  Global,
  Msal,
  User,
})

export default RootReducer


