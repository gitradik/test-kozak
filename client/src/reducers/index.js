import { combineReducers } from 'redux';
import accountReducer from './accountReducer';

const appReducer = combineReducers({
    accountReducer
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
