import { useRef, useEffect, useMemo, useCallback } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { IMountFn, useCurrentAuthUser } from '@topexam/web.lib.util';

import { NavigationManager } from '@/routing';

type Props = {
  mount: IMountFn;
  appBaseSuffix: string;
  appBaseName: string;
  requiredAuth?: boolean;
};

export const BaseModule = ({ mount, appBaseSuffix, appBaseName, requiredAuth = true }: Props) => {
  const currentUser = useCurrentAuthUser();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const wrapperRef = useRef<HTMLDivElement>(null);
  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});

  const appBasePath = useMemo(
    () => (!appBaseSuffix ? appBaseSuffix : `/${appBaseSuffix}`),
    [appBaseSuffix]
  );

  const handleExternalNavigate = useCallback((path: string) => navigate(path), [navigate]);

  useEffect(() => {
    if (!isFirstRunRef.current) {
      return;
    }

    if (wrapperRef.current) {
      unmountRef.current = mount(wrapperRef.current, {
        initialPathname: location.pathname.replace(appBasePath, ''),
        routingStrategy: 'memory',
        authUser: currentUser,
        queryClient: queryClient,
        onExternalNavigate: handleExternalNavigate,
      });

      if (requiredAuth) {
        isFirstRunRef.current = false;
      }
    }
  }, [appBasePath, currentUser, handleExternalNavigate, mount, queryClient, requiredAuth]);

  useEffect(() => unmountRef.current, []);

  return (
    <NavigationManager appBasePath={appBasePath} appBaseName={appBaseName}>
      <div ref={wrapperRef} id={appBaseName} />
    </NavigationManager>
  );
};
