import ACTION from './actiontsTypes';

// ACCOUNT
export const signUp = (body) => ({ type: ACTION.SIGN_UP_ACCOUNT, body });
export const signIn = (body) => ({ type: ACTION.SIGN_IN_ACCOUNT, body });
export const getAccountByToken = () => ({ type: ACTION.ACCOUNT_BY_TOKEN, });
export const removeAccount = () => ({ type: ACTION.REMOVE_ACCOUNT });

// REDUX FORM
export const creationAccount = (body) => ({ type: ACTION.CREATION_ACCOUNT, body });
export const loginUserAccount = (body) => ({ type: ACTION.LOGIN_ACCOUNT, body });
export const creationWorker = (body) => ({ type: ACTION.CREATION_WORKER, body });
export const putWorkerModalForm = (value) => ({ type: ACTION.PUT_WORKER_MODAL_FORM, value });
export const questRemoveAccount = value => ({ type: ACTION.QUEST_REMOVE_ACCOUNT_MODAL_FORM, value });

// WORKERS
export const getWorkers = () => ({ type: ACTION.FETCH_WORKERS, });
export const searchWorkers = (body) => ({ type: ACTION.SEARCH_FETCH_WORKERS, body });

// WORKER
export const addWorker = (body) => ({ type: ACTION.FETCH_WORKER, body });
export const putWorker = (body) => ({ type: ACTION.PUT_FETCH_WORKER, body });
export const removeWorker = () => ({ type: ACTION.DELETE_FETCH_WORKER });

