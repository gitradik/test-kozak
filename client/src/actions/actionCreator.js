import ACTION from './actiontsTypes';

export const signUp = (body) => ({
  type: ACTION.SIGN_UP_ACCOUNT,
  body
});

export const signIn = (body) => ({
  type: ACTION.SIGN_IN_ACCOUNT,
  body
});

export const creationAccount = (body) => ({
  type: ACTION.CREATION_ACCOUNT,
  body
});

