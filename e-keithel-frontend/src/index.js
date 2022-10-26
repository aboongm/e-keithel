import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { persistor, store } from './redux/store';
import { store } from './app/store';

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist'
import { ToastContainer } from 'react-toastify';

let persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
