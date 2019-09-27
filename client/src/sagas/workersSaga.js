import { put } from 'redux-saga/effects'
import ACTION from "../actions/actiontsTypes";
import { getWorkers } from '../api/rest/restContoller';
import _ from 'lodash';

export function * getAllWorkers() {
    yield put({ type: ACTION.WORKERS_REQUEST });
    try {
        const {data} = yield getWorkers();
        yield put({ type: ACTION.WORKERS_RESPONSE, account: data });
    } catch (err) {
        yield put({ type: ACTION.WORKERS_ERROR, error: _.isUndefined(err.response) || err.response.data });
    }
}