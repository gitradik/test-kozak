import { combineReducers } from 'redux';
import accountReducer from './accountReducer';
import creationAccountReducer from './creationAccountReducer';

const appReducer = combineReducers({
    accountReducer, creationAccountReducer
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
