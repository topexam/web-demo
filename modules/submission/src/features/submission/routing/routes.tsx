import { RouteObject } from 'react-router-dom';
import { SubmissionHistoryPage, ExaminationResultPage, ExaminationTakingPage } from '../pages';

export const featureRoutes: RouteObject[] = [
  {
    path: ':slug',
    children: [
      {
        path: 'taking',
        element: <ExaminationTakingPage />,
      },
      {
        path: 'history',
        element: <SubmissionHistoryPage />,
      },
      {
        path: 'result',
        element: <ExaminationResultPage />,
      },
    ],
  },
];
