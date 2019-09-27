import { put } from 'redux-saga/effects'
import ACTION from "../actions/actiontsTypes";

export function * creationWorkerData({body}) {
    try {
        const { fullName, phone, sex, salary, position } = body;
        const dataValids = [fullName, phone, sex, salary, position];
        body.isValid = dataValids.every(el => el);
        yield put({ type: ACTION.CREATION_WORKER_RESPONSE, worker: body });
    } catch (err) {
    }
}

