import { RouteObject } from 'react-router-dom';
import { CategoryDetailPage } from '../pages';

export const featureRoutes: RouteObject[] = [
  {
    path: ':slug',
    children: [
      {
        index: true,
        element: <CategoryDetailPage />,
      },
    ],
  },
];
