import { put } from 'redux-saga/effects'
import ACTION from "../actions/actiontsTypes";
import { addWorker } from '../api/rest/restContoller';
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