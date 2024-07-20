import { Outlet, RouteObject } from 'react-router-dom';

import { featureRoutes as categoryRoutes } from '@/features/category';
import { featureRoutes as subCategoryRoutes } from '@/features/sub-category';
import { featureRoutes as tagRoutes } from '@/features/tag';
import { featureRoutes as searchRoutes } from '@/features/search';
import { featureRoutes as homeRoutes } from '@/features/home';
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
        path: 'category/*',
        children: categoryRoutes,
      },
      {
        path: 'sub-category/*',
        children: subCategoryRoutes,
      },
      {
        path: 'tag/*',
        children: tagRoutes,
      },
      {
        path: 'search/*',
        children: searchRoutes,
      },
      {
        children: homeRoutes,
      },
    ],
  },
];
