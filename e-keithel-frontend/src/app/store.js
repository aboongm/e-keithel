import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import { productListSlice } from '../app/api/productListSlice';
import authSlice from './api/authSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [productListSlice.reducerPath]: productListSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productListSlice.middleware)
})

setupListeners(store.dispatch)