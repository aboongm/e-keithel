import { combineReducers } from 'redux';
import loginReducer from './login/authReducers';
import productListReducer from './product/productReducers';

export default combineReducers({
  loginReducer,
  productListReducer,
  // auth: loginReducer,
});
