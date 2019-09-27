import { combineReducers } from 'redux';
import accountReducer from './accountReducer';
import creationAccountReducer from './creationAccountReducer';
import creationWorkerReducer from './creationWorkerReducer';
import workersReducer from './workersReducer';
import { reducer as formReducer } from 'redux-form'

const appReducer = combineReducers({
    accountReducer,
    creationAccountReducer,
    workersReducer,
    creationWorkerReducer,
    form: formReducer,
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
