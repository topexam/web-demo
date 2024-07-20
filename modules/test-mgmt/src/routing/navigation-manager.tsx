import { PropsWithChildren, useEffect } from 'react';
import { matchRoutes, useLocation, useNavigate } from 'react-router-dom';

import { appRoutes } from './routes';

export const NavigationManager = ({ children }: PropsWithChildren) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const parentNavigationHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      if (location.pathname === pathname || !matchRoutes(appRoutes, { pathname })) {
        return;
      }
      navigate(pathname);
    };

    window.addEventListener('[container] navigated', parentNavigationHandler);

    return () => {
      window.removeEventListener('[container] navigated', parentNavigationHandler);
    };
  }, [location, navigate]);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent(`[management] navigated`, { detail: location.pathname }));
  }, [location]);

  return <>{children}</>;
};
