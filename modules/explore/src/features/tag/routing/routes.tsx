import { RouteObject } from 'react-router-dom';
import { TagDetailPage } from '../pages';

export const featureRoutes: RouteObject[] = [
  {
    path: ':slug',
    children: [
      {
        index: true,
        element: <TagDetailPage />,
      },
    ],
  },
];
