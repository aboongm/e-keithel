import { combineReducers } from 'redux';
import loginReducer from './login/authReducers';
import productListReducer from './product/productReducers';
import basketReducer from './basket/basketReducers';

export default combineReducers({
  loginReducer,
  productListReducer,
  basketReducer,
});
