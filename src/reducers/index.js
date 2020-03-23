import { combineReducers } from 'redux';
import login from './loginReducer';
import user from './userReducer';
import form from './formReducer';
import schema from './schemaReducer';
import dataRecord from './dataRecordReducer';

const rootReducer = combineReducers({
    login, user, form, schema, dataRecord
});

export default rootReducer;