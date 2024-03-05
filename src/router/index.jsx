import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {createBrowserRouter} from 'react-router-dom';

import Layout from '../pages/Layout/index';
import Home from '../pages/Home';
import About from '../pages/About';
import Shared from '../pages/Shared';

import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/home1',
        element: <About />,
      },
      {
        path: '/home2',
        element: <Shared />,
      },
    ],
  },
]);

export default router;
