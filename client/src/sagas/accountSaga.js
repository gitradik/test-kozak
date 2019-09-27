import { put } from 'redux-saga/effects'
import ACTION from "../actions/actiontsTypes";
import { signUp, signIn, accountByToken } from '../api/rest/restContoller';
import { setAccessToken } from '../api/rest/config';
import _ from 'lodash';

export function * signUpAccount({body}) {
    yield put({ type: ACTION.ACCOUNT_REQUEST });
    try {
        const {data} = yield signUp(body);
        setAccessToken(data.token);
        yield localStorage.setItem("access", data.token);
        yield put({ type: ACTION.ACCOUNT_RESPONSE, account: data });
    } catch (err) {
        yield put({ type: ACTION.ACCOUNT_ERROR, error: _.isUndefined(err.response) || err.response.data });
    }
}

export function * signInAccount({body}) {
    yield put({ type: ACTION.ACCOUNT_REQUEST });
    try {
        const { data } = yield signIn(body);
        setAccessToken(data.token);
        yield localStorage.setItem("access", data.token);
        yield put({ type: ACTION.ACCOUNT_RESPONSE, account: data });
    } catch (err) {
        yield put({ type: ACTION.ACCOUNT_ERROR, error: _.isUndefined(err.response) || err.response.data });
    }
}

export function * accountByTokenSaga() {
    yield put({ type: ACTION.ACCOUNT_REQUEST });
    try {
        setAccessToken(localStorage.getItem("access"));
        const { data } = yield accountByToken();
        yield put({ type: ACTION.ACCOUNT_RESPONSE, account: data });
    } catch (err) {
        yield put({ type: ACTION.ACCOUNT_ERROR, error: _.isUndefined(err.response) || err.response.data });
    }
}

