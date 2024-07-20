import { useMemo } from 'react';
import { RouterProvider } from 'react-router-dom';
import { IRoutingStrategy } from '@topexam/web.lib.util';

import { createRouter } from './router-factory';

type Props = {
  initialPathname?: string;
  routingStrategy?: IRoutingStrategy;
};

export const AppRouter = ({ initialPathname, routingStrategy }: Props) => {
  const router = useMemo(
    () => createRouter({ strategy: routingStrategy, initialPathname }),
    [initialPathname, routingStrategy]
  );

  return <RouterProvider router={router} />;
};
