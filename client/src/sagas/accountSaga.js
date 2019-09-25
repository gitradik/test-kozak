import { put } from 'redux-saga/effects'
import ACTION from "../actions/actiontsTypes";
import {signUp} from '../api/rest/restContoller';
import {setAccessToken} from '../api/rest/config';

export function * signUpAccount({body}) {
    yield put({ type: ACTION.ACCOUNT_REQUEST });
    try {
        const {data} = yield signUp(body);
        //setAccessToken(data.token);
        //yield localStorage.setItem("access", data.token);
        yield put({ type: ACTION.ACCOUNT_RESPONSE, account: data });
    } catch (err) {
        yield put({ type: ACTION.ACCOUNT_ERROR, error: err.response.data });
    }
}

