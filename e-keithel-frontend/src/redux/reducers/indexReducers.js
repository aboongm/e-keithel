import { combineReducers } from 'redux';
import loginReducer from './login/authReducers';
import productListReducer from './product/productReducers';
import basketReducer from './basket/basketReducers';
import searchReducer from './search/searchReducers';

export default combineReducers({
  loginReducer,
  productListReducer,
  basketReducer,
  searchReducer,
});
