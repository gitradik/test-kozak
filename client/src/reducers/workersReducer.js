import ACTION from '../actions/actiontsTypes';

const initialState = {
    workers: null,
    isFetching: false,
    error: null,
    maxCount: 0,
};

export default function (state = initialState, action) {
    switch (action.type) {

        case ACTION.WORKERS_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null,
            }
        }

        case ACTION.WORKERS_RESPONSE: {
            return {
                ...state,
                workers: action.workers,
                maxCount: action.maxCount,
                isFetching: false,
                error: null,
            }
        }

        case ACTION.WORKERS_ERROR: {
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

