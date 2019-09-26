import ACTION from '../actions/actiontsTypes';

const initialState = {
    user: {
        login: "",
        email: "",
        password: "",
    },
    isValid: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.CREATION_ACCOUNT_RESPONSE: {
            return {
                ...state,
                user: action.user,
                isValid: action.user.isValid,
            }
        }

        default: {
            return state;
        }
    }
}

