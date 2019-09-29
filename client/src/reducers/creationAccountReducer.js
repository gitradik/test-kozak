import ACTION from '../actions/actiontsTypes';

const initialState = {
    user: {
        login: "",
        email: "",
        password: "",
    },
    isValid: false,
    isOpenQuestModal: false,
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

        case ACTION.QUEST_OPEN_MODAL_FORM: {
            return {
                ...state,
                isOpenQuestModal: true,
            }
        }

        case ACTION.QUEST_CLOSE_MODAL_FORM: {
            return {
                ...state,
                isOpenQuestModal: false,
            }
        }

        default: {
            return state;
        }
    }
}

