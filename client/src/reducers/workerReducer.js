import ACTION from '../actions/actiontsTypes';

const initialState = {
    worker: null,
    isFetching: false,
    error: null,
};

export default function (state = initialState, action) {
    switch (action.type) {

        case ACTION.WORKER_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null,
            }
        }

        case ACTION.WORKER_RESPONSE: {
            return {
                ...state,
                worker: action.worker,
                isFetching: false,
                error: null,
            }
        }

        case ACTION.WORKER_ERROR: {
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

