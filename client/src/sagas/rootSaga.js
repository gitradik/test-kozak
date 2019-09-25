import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import * as accountSaga from "./accountSaga";

function* rootSaga() {
  yield takeLatest(ACTION.FETCH_ACCOUNT, accountSaga.signUpAccount);
}

export default rootSaga;
