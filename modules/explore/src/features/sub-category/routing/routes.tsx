import { RouteObject } from 'react-router-dom';
import { SubCategoryDetailPage } from '../pages';

export const featureRoutes: RouteObject[] = [
  {
    path: ':slug',
    children: [
      {
        index: true,
        element: <SubCategoryDetailPage />,
      },
    ],
  },
];
