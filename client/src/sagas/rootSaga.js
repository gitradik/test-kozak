import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import * as accountSaga from "./accountSaga";
import * as creationAccountSaga from "./creationAccountSaga";
import * as workersSaga from "./workersSaga";

function * rootSaga() {
  // ACCOUNT
  yield takeLatest(ACTION.SIGN_UP_ACCOUNT, accountSaga.signUpAccount);
  yield takeLatest(ACTION.SIGN_IN_ACCOUNT, accountSaga.signInAccount);
  yield takeLatest(ACTION.CREATION_ACCOUNT, creationAccountSaga.creationUserAccount);
  yield takeLatest(ACTION.ACCOUNT_BY_TOKEN, accountSaga.accountByTokenSaga);
  yield takeLatest(ACTION.LOGIN_ACCOUNT, creationAccountSaga.loginUserAccount);

  // WORKERS
  yield takeLatest(ACTION.FETCH_WORKERS, workersSaga.getAllWorkers);
}

export default rootSaga;
