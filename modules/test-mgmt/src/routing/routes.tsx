import { Outlet, RouteObject } from 'react-router-dom';

import { featureRoutes as examinationRoutes } from '@/features/examination';
import { featureRoutes as submissionRoutes } from '@/features/submission';
import { featureRoutes as practiceRoutes } from '@/features/practice';

import { NavigationManager } from './navigation-manager';

export const appRoutes: RouteObject[] = [
  {
    element: (
      <NavigationManager>
        <Outlet />
      </NavigationManager>
    ),
    children: [
      {
        path: 'examination/*',
        children: examinationRoutes,
      },
      {
        path: 'submission/*',
        children: submissionRoutes,
      },
      {
        path: 'practice/*',
        children: practiceRoutes,
      },
    ],
  },
];
