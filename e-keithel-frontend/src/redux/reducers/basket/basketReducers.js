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
  console.log('state from basketReducer: ', state.basket);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case 'REMOVE_FROM_BASKET': {
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      const newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    }

    default:
      return state;
  }
};

export default basketReducer;
