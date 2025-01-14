import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

const IndexPage = lazy(() => import('@pages/IndexPage'));
const NotFoundPage = lazy(() => import('@pages/NotFoundPage'));

const routes = createBrowserRouter(
  [
    {
      path: '/',
      errorElement: <NotFoundPage />,
      element: <IndexPage />,
    },
  ],
  {
    basename: '/',
  },
);

export default routes;
