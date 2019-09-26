import { put, select } from 'redux-saga/effects'
import ACTION from "../actions/actiontsTypes";

export function * creationUserAccount({body}) {
    try {
        const state = yield select();
        let { user } = {...state.creationAccountReducer};
        console.log(user);
        yield put({ type: ACTION.CREATION_ACCOUNT_RESPONSE, user: body });
    } catch (err) {
    }
}

