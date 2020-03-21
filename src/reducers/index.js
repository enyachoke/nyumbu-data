import { combineReducers } from 'redux';
import login from './loginReducer';
import user from './userReducer';
import form from './formReducer';

const rootReducer = combineReducers({
    login , user ,form
});

export default rootReducer;