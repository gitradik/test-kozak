import { put } from 'redux-saga/effects'
import ACTION from "../actions/actiontsTypes";
import { validateLogin, validatePassword, validateEmail } from '../utils/validation/regexp';

export function * creationUserAccount({body}) {
    try {
        const { login, email, password } = body;
        const dataValids = [validateLogin(login), validateEmail(email), validatePassword(password)];
        body.isValid = dataValids.every(el => el);
        yield put({ type: ACTION.CREATION_ACCOUNT_RESPONSE, user: body });
    } catch (err) {
    }
}

export function * loginUserAccount({body}) {
    try {
        const { login, password } = body;
        const dataValids = [validateLogin(login), validatePassword(password)];
        body.isValid = dataValids.every(el => el);
        yield put({ type: ACTION.CREATION_ACCOUNT_RESPONSE, user: body });
    } catch (err) {
    }
}

