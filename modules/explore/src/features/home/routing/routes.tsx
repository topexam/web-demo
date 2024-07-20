import { RouteObject } from 'react-router-dom';
import { HomePage } from '../pages';

export const featureRoutes: RouteObject[] = [
  {
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
];
