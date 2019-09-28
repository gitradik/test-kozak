import {put, select} from 'redux-saga/effects'
import ACTION from "../actions/actiontsTypes";
import { addWorker, putWorker, removeWorker } from '../api/rest/restContoller';
import _ from 'lodash';


export function * addOneWorker({body}) {
    yield put({ type: ACTION.WORKER_REQUEST });
    try {
        const {data} = yield addWorker(body);
        yield put({ type: ACTION.WORKER_RESPONSE, worker: data });
    } catch (err) {
        yield put({ type: ACTION.WORKER_ERROR, error: _.isUndefined(err.response) || err.response.data });
    }
}

export function * putOneWorker({ body }) {
    yield put({ type: ACTION.WORKER_REQUEST });
    try {
        const { data } = yield putWorker(body);
        const state = yield select();
        let { workers } = { ...state.workersReducer };
        const indexWorker = workers.findIndex(obj => obj._id === data.updatedWorker._id);
        workers[indexWorker] = data.updatedWorker;
        yield put({ type: ACTION.WORKERS_RESPONSE, workers, maxCount: data.maxCount });
        yield put({ type: ACTION.WORKER_RESPONSE, worker: data.updatedWorker });
    } catch (err) {
        yield put({ type: ACTION.WORKER_ERROR, error: _.isUndefined(err.response) || err.response.data });
    }
}

export function * removeOneWorker() {
    yield put({ type: ACTION.WORKERS_REQUEST });
    try {
        const { data } = yield removeWorker();
        const state = yield select();
        let { workers } = { ...state.workersReducer };
        const indexWorker = workers.findIndex(obj => obj._id === data.workerId);
        workers.splice(indexWorker, 1);
        yield put({ type: ACTION.WORKERS_RESPONSE, workers, maxCount: data.maxCount });
    } catch (err) {
        yield put({ type: ACTION.WORKERS_ERROR, error: _.isUndefined(err.response) || err.response.data });
    }
}