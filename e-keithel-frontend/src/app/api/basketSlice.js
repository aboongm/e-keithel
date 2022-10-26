import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
  name: 'basket',
  initialState: { basket: [] },
  reducers: {
    addingToBasket: (state, action) => {
      state.basket = [...state.basket, action.payload];
    },
    removingFromBasket: (state, action) => {
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.payload
      );
      const newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload}) as its not in basket!`
        );
      }
      state.basket = newBasket;
    },
  },
});

export const { addingToBasket, removingFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
