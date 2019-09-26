import { combineReducers } from 'redux';
import accountReducer from './accountReducer';
import creationAccountReducer from './creationAccountReducer';
import { reducer as formReducer } from 'redux-form'

const appReducer = combineReducers({
    accountReducer,
    creationAccountReducer,
    form: formReducer,
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
