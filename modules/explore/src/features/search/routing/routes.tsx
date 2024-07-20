import { RouteObject } from 'react-router-dom';
import { SearchResultPage } from '../pages';

export const featureRoutes: RouteObject[] = [
  {
    path: '*',
    children: [
      {
        index: true,
        element: <SearchResultPage />,
      },
    ],
  },
];
