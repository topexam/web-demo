import { RouteObject } from 'react-router-dom';
import { ManagePracticePage } from '../pages';

export const featureRoutes: RouteObject[] = [
  {
    index: true,
    element: <ManagePracticePage />,
  },
];
