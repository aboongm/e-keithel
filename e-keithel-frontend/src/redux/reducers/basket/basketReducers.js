import { ADD_TO_BASKET } from '../../helpers/constants';

// Action Creators
export const addToBasketRequest = (data) => ({
  type: ADD_TO_BASKET,
  payload: {
    data,
  },
});

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const initialState = {
  basket: [],
};

const basketReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    default:
      return state;
  }
};

export default basketReducer;
