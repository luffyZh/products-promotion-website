import { createHashRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import GuardX from '../pages/guardx';
import SpiritualEyes from '../pages/SpiritualEyes';

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
      {
        path: 'products/spiritual-eyes',
        element: <SpiritualEyes />,
      },
    ],
  },
]);
