import { Outlet, RouteObject } from 'react-router-dom';

import { featureRoutes as submissionRoutes } from '@/features/submission';
import { featureRoutes as examinationRoutes } from '@/features/examination';
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
        children: examinationRoutes,
      },
      {
        children: submissionRoutes,
      },
    ],
  },
];
