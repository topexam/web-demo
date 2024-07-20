import { PropsWithChildren, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type Props = PropsWithChildren<{
  appBasePath: string;
  appBaseName: string;
}>;

export const NavigationManager = ({ children, appBasePath, appBaseName }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Listen to navigation events dispatched inside sub-apps.
  useEffect(() => {
    const appNavigationEventHandler = (event: Event) => {
      const uri = (event as CustomEvent<string>).detail;
      const [pathname] = uri.split('?');

      const newPathname = `${appBasePath}${pathname}`;
      if (newPathname === location.pathname) {
        return;
      }

      console.log('CONTAINER ' + newPathname);

      navigate(uri, {});
    };

    window.addEventListener(`[${appBaseName}] navigated`, appNavigationEventHandler);

    return () => {
      window.removeEventListener(`[${appBaseName}] navigated`, appNavigationEventHandler);
    };
  }, [appBaseName, appBasePath, location, navigate]);

  // Listen for container location changes and dispatch a notification.

  useEffect(() => {
    if (location.pathname.startsWith(appBasePath)) {
      window.dispatchEvent(
        new CustomEvent('[container] navigated', {
          detail: location.pathname.replace(appBasePath, '') + `${location.search}`,
        })
      );
    }
  }, [appBasePath, location]);

  return <>{children}</>;
};
