import { RouteObject } from 'react-router-dom';
import { ManageTestPage, EditTestPage } from '../pages';

export const featureRoutes: RouteObject[] = [
  {
    path: ':slug',
    element: <EditTestPage />,
  },
  {
    index: true,
    element: <ManageTestPage />,
  },
];
