import { Suspense } from 'react';
import { ErrorBoundary } from '@sentry/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useConst } from '@chakra-ui/react';

import { AppCustomError, AppSpinner } from '@/components';
import { appRoutes } from './routes';

export const AppRouter = () => {
  const router = useConst(createBrowserRouter(appRoutes));
  return (
    <ErrorBoundary
      fallback={<AppCustomError />}
      onReset={() => {
        window.location.reload();
      }}
    >
      <Suspense fallback={<AppSpinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
};
