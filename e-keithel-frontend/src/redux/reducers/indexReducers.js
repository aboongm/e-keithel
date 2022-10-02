import { combineReducers } from 'redux';
import loginReducer from './authReducers';

export default combineReducers({
  auth: loginReducer,
});
