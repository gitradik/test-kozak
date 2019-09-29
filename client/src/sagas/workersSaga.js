import { put } from 'redux-saga/effects'
import ACTION from "../actions/actiontsTypes";
import { config } from '../api/rest/config';
import { getWorkers, searchWorkers } from '../api/rest/restContoller';
import _ from 'lodash';

export function * getAllWorkers() {
    yield put({ type: ACTION.WORKERS_REQUEST });
    try {
        const { data } = yield getWorkers();
        yield put({ type: ACTION.WORKERS_RESPONSE, workers: data.workers, maxCount: data.maxCount });
    } catch (err) {
        yield put({ type: ACTION.WORKERS_ERROR, error: _.isUndefined(err.response) || err.response.data });
    }
}

export function * searchSomeWorkers({ body }) {
    yield put({ type: ACTION.WORKERS_REQUEST });
    try {
        let { data } = yield searchWorkers(body);
        if(data.workers.length === 0) {
            const newData = yield getWorkers();
            data = newData.data;
        }
        yield put({ type: ACTION.WORKERS_RESPONSE, workers: data.workers, maxCount: data.maxCount });
    } catch (err) {
        yield put({ type: ACTION.WORKERS_ERROR, error: _.isUndefined(err.response) || err.response.data });
    }
}