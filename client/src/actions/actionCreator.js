import ACTION from './actiontsTypes';

// ACCOUNT
export const signUp = (body) => ({ type: ACTION.SIGN_UP_ACCOUNT, body });
export const signIn = (body) => ({ type: ACTION.SIGN_IN_ACCOUNT, body });
export const getAccountByToken = () => ({ type: ACTION.ACCOUNT_BY_TOKEN, });

// REDUX FORM
export const creationAccount = (body) => ({ type: ACTION.CREATION_ACCOUNT, body });
export const loginUserAccount = (body) => ({ type: ACTION.LOGIN_ACCOUNT, body });

// WORKERS
export const getWorkers = () => ({ type: ACTION.FETCH_WORKERS, });

