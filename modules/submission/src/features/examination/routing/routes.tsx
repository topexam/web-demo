import { RouteObject } from 'react-router-dom';
import { ExaminationDetailPage } from '../pages';

export const featureRoutes: RouteObject[] = [
  {
    path: ':slug',
    children: [
      {
        index: true,
        element: <ExaminationDetailPage />,
      },
    ],
  },
];
