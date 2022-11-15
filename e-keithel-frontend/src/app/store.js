import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productListSlice } from '../app/api/productListSlice';
import authReducer from './api/authSlice';
import { authApi } from './api/authApi';
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import basketReducer from './api/basketSlice';
import searchReducer from './api/searchSlice';
import { orderSlice } from './api/orderSlice';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import basketSlice from './api/basketSlice';
import { categorySlice } from './api/categorySlice';
const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['productListSlice'],
  whitelist: ['auth', 'basket', 'search'],
};
export const rootReducers = combineReducers({
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
  [productListSlice.reducerPath]: productListSlice.reducer,
  [categorySlice.reducerPath]: categorySlice.reducer,
  [orderSlice.reducerPath]: orderSlice.reducer,
  basket: basketReducer,
  search: searchReducer,
  // [basketSlice.reducerPath]: basketSlice.reducer
});
const persistedReducer = persistReducer(persistConfig, rootReducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productListSlice.middleware),
});
setupListeners(store.dispatch);
