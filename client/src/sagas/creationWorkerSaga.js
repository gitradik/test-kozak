import { put } from 'redux-saga/effects'
import ACTION from "../actions/actiontsTypes";

export function * creationWorkerData({body}) {
    try {
        const { fullName, phone, sex, salary, position } = body;
        /*const dataValids = [validateLogin(login), validateEmail(email), validatePassword(password)];
        body.isValid = dataValids.every(el => el);*/
        yield put({ type: ACTION.CREATION_ACCOUNT_RESPONSE, user: body });
    } catch (err) {
    }
}

