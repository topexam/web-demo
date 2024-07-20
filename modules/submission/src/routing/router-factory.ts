import { createBrowserRouter, createMemoryRouter } from 'react-router-dom';
import { IRoutingStrategy } from '@topexam/web.lib.util';

import { appRoutes } from './routes';

type Props = {
  strategy?: IRoutingStrategy;
  initialPathname?: string;
};

export function createRouter({ strategy, initialPathname }: Props) {
  if (strategy === 'browser') {
    return createBrowserRouter(appRoutes);
  }

  const initialEntries = [initialPathname || '/'];
  return createMemoryRouter(appRoutes, { initialEntries: initialEntries });
}
