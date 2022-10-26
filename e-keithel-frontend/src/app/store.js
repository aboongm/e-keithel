import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productListSlice } from '../app/api/productListSlice';
import authReducer from './api/authSlice';
import { authApi } from './api/authApi';
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['productListSlice'],
};
export const rootReducers = combineReducers({
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
  [productListSlice.reducerPath]: productListSlice.reducer,
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