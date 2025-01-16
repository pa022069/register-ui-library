import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import VConsole from 'vconsole';
import { Provider } from 'react-redux';

import routes from './routes';
import { store } from '@helpers/redux/store';

import '@components/Select';

import '@/index.css';
if (import.meta.env.VITE_ENV === 'sit') {
  new VConsole();
}
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<div />}>
        <RouterProvider router={routes} />
      </Suspense>
    </Provider>
  </React.StrictMode>,
);
