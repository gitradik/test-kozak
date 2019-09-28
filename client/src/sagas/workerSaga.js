import { put } from 'redux-saga/effects'
import ACTION from "../actions/actiontsTypes";
import { config } from "../api/rest/config";
import { addWorker, putWorker } from '../api/rest/restContoller';
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
        yield put({ type: ACTION.WORKER_RESPONSE, worker: data });
    } catch (err) {
        yield put({ type: ACTION.WORKER_ERROR, error: _.isUndefined(err.response) || err.response.data });
    }
}