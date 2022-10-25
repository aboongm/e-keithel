import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import { productListSlice } from '../app/api/productListSlice';

export const store = configureStore({
  reducer: {
    [productListSlice.reducerPath]: productListSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productListSlice.middleware)
})

setupListeners(store.dispatch)