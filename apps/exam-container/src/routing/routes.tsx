import { lazy } from 'react';
import { Outlet, RouteObject } from 'react-router-dom';

import { AppLayout, RequiredAuth } from '@/components';
import { AuthProvider } from '@/providers';

import { AppRouteBasePaths } from './route-base-info';

const ExploreAppLazy = lazy(() => import('@/apps/explore'));
const SubmissionAppLazy = lazy(() => import('@/apps/submission'));
const TestMgmtAppLazy = lazy(() => import('@/apps/test-mgmt'));

export const appRoutes: RouteObject[] = [
  {
    element: (
      <AuthProvider>
        <AppLayout>
          <Outlet />
        </AppLayout>
      </AuthProvider>
    ),
    children: [
      {
        path: `${AppRouteBasePaths.mgmt}/*`,
        element: <RequiredAuth component={TestMgmtAppLazy} />,
      },
      {
        path: `${AppRouteBasePaths.submission}/*`,
        element: <RequiredAuth component={SubmissionAppLazy} />,
      },
      {
        path: '/*',
        element: <RequiredAuth component={ExploreAppLazy} hasRequired={false} />,
      },
    ],
  },
];
