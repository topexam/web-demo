import { PropsWithChildren, useEffect } from 'react';
import { matchRoutes, useLocation, useNavigate } from 'react-router-dom';

import { appRoutes } from './routes';

export const NavigationManager = ({ children }: PropsWithChildren) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const parentNavigationHandler = (event: Event) => {
      const uri = (event as CustomEvent<string>).detail;
      const [pathname, search] = uri.split('?');
      if (
        pathname === location.pathname &&
        `?${search}` === location.search &&
        !matchRoutes(appRoutes, { pathname })
      ) {
        return;
      }

      navigate(uri);
    };

    window.addEventListener('[container] navigated', parentNavigationHandler);

    return () => {
      window.removeEventListener('[container] navigated', parentNavigationHandler);
    };
  }, [location, navigate]);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent(`[explore] navigated`, { detail: location.pathname + `${location.search}` })
    );
  }, [location]);

  return <>{children}</>;
};
