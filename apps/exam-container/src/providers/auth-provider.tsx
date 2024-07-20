import { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppState, Auth0Provider } from '@auth0/auth0-react';

import { AUTH0_AUDIENCE, AUTH0_CLIENT_ID, AUTH0_DOMAIN } from '@/config';

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();

  const _handleRedirectCallback = (appState?: AppState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      onRedirectCallback={_handleRedirectCallback}
      authorizationParams={{
        audience: AUTH0_AUDIENCE,
        redirectUri: window.location.origin,
      }}
    >
      {children}
    </Auth0Provider>
  );
};
