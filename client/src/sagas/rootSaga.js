import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import * as accountSaga from "./accountSaga";
import * as creationAccountSaga from "./creationAccountSaga";
import * as workersSaga from "./workersSaga";
import * as workerSaga from "./workerSaga";
import * as creationWorkersSaga from "./creationWorkerSaga";

function * rootSaga() {
  // ACCOUNT
  yield takeLatest(ACTION.SIGN_UP_ACCOUNT, accountSaga.signUpAccount);
  yield takeLatest(ACTION.SIGN_IN_ACCOUNT, accountSaga.signInAccount);
  yield takeLatest(ACTION.REMOVE_ACCOUNT, accountSaga.removeMyAccount);
  yield takeLatest(ACTION.CREATION_ACCOUNT, creationAccountSaga.creationUserAccount);
  yield takeLatest(ACTION.ACCOUNT_BY_TOKEN, accountSaga.accountByTokenSaga);
  yield takeLatest(ACTION.LOGIN_ACCOUNT, creationAccountSaga.loginUserAccount);

  // WORKERS
  yield takeLatest(ACTION.FETCH_WORKERS, workersSaga.getAllWorkers);
  yield takeLatest(ACTION.SEARCH_FETCH_WORKERS, workersSaga.searchSomeWorkers);
  yield takeLatest(ACTION.CREATION_WORKER, creationWorkersSaga.creationWorkerData);
  yield takeLatest(ACTION.PUT_WORKER_MODAL_FORM, creationWorkersSaga.openPutWorkerForm);

  // WORKER
  yield takeLatest(ACTION.FETCH_WORKER, workerSaga.addOneWorker);
  yield takeLatest(ACTION.PUT_FETCH_WORKER, workerSaga.putOneWorker);
  yield takeLatest(ACTION.DELETE_FETCH_WORKER, workerSaga.removeOneWorker);
}

export default rootSaga;
