import { put } from 'redux-saga/effects'
import ACTION from "../actions/actiontsTypes";

export function * creationWorkerData({ body }) {
    try {
        const { fullName, phone, sex, salary, position } = body;
        const dataValids = [fullName, phone, sex, salary, position];
        body.isValid = dataValids.every(el => el);
        yield put({ type: ACTION.CREATION_WORKER_RESPONSE, worker: body });
    } catch (err) {}
}

export function * openPutWorkerForm({ value }) {
    try {
        if(value) {
            yield put({ type: ACTION.PUT_WORKER_MODAL_FORM_OPEN });
        } else {
            yield put({ type: ACTION.PUT_WORKER_MODAL_FORM_CLOSE });
        }
    } catch (e) {}
}

