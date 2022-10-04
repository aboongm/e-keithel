import url from '../../helpers/apiUrl';
import { PRODUCT_LIST } from '../../helpers/constants';

// Action Creators
const productListRequest = (data) => ({
  type: PRODUCT_LIST,
  payload: {
    data,
  },
});

export const fetchProductList = () => (dispatch) => {
  console.log('inside fetchProductList >>>');
  fetch(`${url}/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    if (res.ok) {
      console.log('res: ', res);
      return res
        .json()
        .then((userJson) => dispatch(productListRequest(userJson)));
    } else {
      return res.json().then((errors) => {
        return Promise.reject(errors);
      });
    }
  });
};

const initialState = {
  productList: {},
};

const productListReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case PRODUCT_LIST:
      return {
        productList: action.payload,
      };
    default:
      return state;
  }
};

export default productListReducer;
