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
    isOpenPut: false,
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

        case ACTION.PUT_WORKER_MODAL_FORM_OPEN: {
            return {
                ...state,
                isOpenPut: true,
            }
        }

        case ACTION.PUT_WORKER_MODAL_FORM_CLOSE: {
            return {
                ...state,
                isOpenPut: false,
            }
        }

        default: {
            return state;
        }
    }
}

