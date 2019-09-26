import { put } from 'redux-saga/effects'
import ACTION from "../actions/actiontsTypes";
import { validateLogin, validatePassword, validateEmail } from '../utils/validation/regexp';

export function * creationUserAccount({body}) {
    try {
      /*  const state = yield select();
        let { user } = {...state.creationAccountReducer};*/
        const { login, email, password } = body;
        const dataValids = [validateLogin(login), validateEmail(email), validatePassword(password)];
        body.isValid = dataValids.every(el => el);
        yield put({ type: ACTION.CREATION_ACCOUNT_RESPONSE, user: body });
    } catch (err) {
    }
}

