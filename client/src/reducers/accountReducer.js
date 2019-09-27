import ACTION from '../actions/actiontsTypes';

const initialState = {
    account: null,
    isFetching: false,
    error: null,
};

export default function (state = initialState, action) {
    switch (action.type) {

        case ACTION.ACCOUNT_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null,
            }
        }

        case ACTION.ACCOUNT_RESPONSE: {
            return {
                ...state,
                account: action.account,
                isFetching: false,
                error: null,
            }
        }

        case ACTION.ACCOUNT_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: action.error,
            }
        }

        default: {
            return state;
        }
    }
}

