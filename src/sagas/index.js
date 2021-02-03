import { put, takeEvery, all } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';
import { push } from 'connected-react-router';
import * as common from '@bgroves/common';

// will not work?
/*  put(push(action.route)) Works when called from handleView200206 and others
    unsure if it works when called from UI menu item click via an action dispatch.
*/
function* handlePush(action) {
  common.log(`in handlePush() = ${action.path}`);
  yield put(push(action.path));
  //  yield put(push("/login"));
}

function* watchPush() {
  yield takeEvery(types.PUSH, handlePush);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    //    handleKep13318(),
    //    handleSignUp(),
    watchPush(),
  ]);
}

export function setSAGA(services, dispatch) {
  //  g_services = services;
  //  g_dispatch = dispatch;
}

