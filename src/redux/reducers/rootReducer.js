import { combineReducers } from 'redux';
import dataUsers from './usersReducer'
import user from './userReducer'

const rootReducer = combineReducers({
    dataUsers,
    user
});

export default rootReducer;