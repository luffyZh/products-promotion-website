import { createHashRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import GuardX from '../pages/guardx';

export const router = createHashRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'products/guardx',
        element: <GuardX />,
      },
    ],
  },
]);
