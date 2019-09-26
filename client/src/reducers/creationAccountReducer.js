import ACTION from '../actions/actiontsTypes';

const initialState = {
    user: {
        login: null,
        email: null,
        password: null,
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.CREATION_ACCOUNT_RESPONSE: {
            return {
                ...state,
                user: action.user
            }
        }

        default: {
            return state;
        }
    }
}

