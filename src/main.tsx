import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@store/store';
import router from '@utils/router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      {/* <BrowserRouter> */}
      {/* <App /> */}
      {/* </BrowserRouter> */}
    </Provider>
  </React.StrictMode>
);
