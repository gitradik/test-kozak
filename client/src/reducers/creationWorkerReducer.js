import ACTION from '../actions/actiontsTypes';

const initialState = {
    worker: {
        fullName: "",
        phone: "",
        sex: "",
        salary: "",
        position: "",
    },
    isValid: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.CREATION_WORKER_RESPONSE: {
            return {
                ...state,
                worker: action.worker,
                isValid: action.worker.isValid,
            }
        }

        default: {
            return state;
        }
    }
}

