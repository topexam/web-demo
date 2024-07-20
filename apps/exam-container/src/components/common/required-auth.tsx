import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { ComponentType, useCallback, useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { K_LS_ACCESS_TOKEN, authUserState } from '@topexam/web.lib.util';

import { AUTH0_AUDIENCE } from '@/config';
import { FileNetworkAccess, MainNetworkAccess } from '@/lib';

import { AppSpinner } from './app-spinner';

type Props = {
  component: ComponentType;
  hasRequired?: boolean;
};

export const RequiredAuth = ({ component, hasRequired = true }: Props) => {
  const { getAccessTokenSilently, user } = useAuth0();
  const setUserData = useSetRecoilState(authUserState);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const _fetchAccessToken = useCallback(async () => {
    localStorage.removeItem(K_LS_ACCESS_TOKEN);
    if (user?.sub) {
      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: AUTH0_AUDIENCE,
            scope: 'read:current_user',
          },
        });

        MainNetworkAccess.setHeaders({
          Authorization: `Bearer ${accessToken}`,
        });

        FileNetworkAccess.setHeaders({
          Authorization: `Bearer ${accessToken}`,
        });

        localStorage.setItem(K_LS_ACCESS_TOKEN, accessToken ?? '');
        setAccessToken(accessToken);
      } catch (error) {
        console.log(error);
      }
    }
  }, [getAccessTokenSilently, user?.sub]);

  useEffect(() => {
    _fetchAccessToken();
  }, [_fetchAccessToken]);

  useEffect(() => {
    if (accessToken) {
      setUserData((data) => ({
        ...(data as any),
        ...user,
        access_token: accessToken,
      }));
    }
  }, [accessToken, setUserData, user]);

  if (!hasRequired) {
    const Component = component;
    return <Component />;
  }

  const AuthComponent = withAuthenticationRequired(component, {
    onRedirecting: () => <AppSpinner />,
  });

  return <AuthComponent />;
};
