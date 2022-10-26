import { createSlice } from "@reduxjs/toolkit" 

const basketSlice = createSlice({
  name: 'basket',
  initialState: { basket: [] },
  reducers: {
    setBasket: (state, action) => {
      state.basket = action.payload.basket
    }
  },
})

export const { setBasket } = basketSlice.actions

export default basketSlice.reducer
