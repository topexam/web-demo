import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Box, useConst } from '@chakra-ui/react';
import { IMountFn } from '@topexam/web.lib.util';
import { AppProvider } from '@topexam/web.lib.component';

import { AuthPage } from '@/apps/auth';
import { BaseModule, RequiredAuth } from '@/components';
import { AuthProvider } from '@/providers';

type Props = {
  mount: IMountFn;
  appBaseSuffix: string;
  appBaseName: string;
  requiredAuth?: boolean;
};

export const ContainerWrapper = ({
  mount,
  appBaseSuffix,
  appBaseName,
  requiredAuth = true,
}: Props) => {
  const router = useConst(
    createBrowserRouter([
      {
        element: (
          <AuthProvider>
            <Outlet />
          </AuthProvider>
        ),
        children: [
          {
            path: 'auth',
            element: <AuthPage />,
          },
          {
            path: `${appBaseSuffix}/*`,
            element: (
              <RequiredAuth
                component={() => (
                  <BaseModule
                    mount={mount}
                    appBaseSuffix={appBaseSuffix}
                    appBaseName={appBaseName}
                  />
                )}
                hasRequired={requiredAuth}
              />
            ),
          },
        ],
      },
    ])
  );

  return (
    <AppProvider>
      <Box h="100vh">
        <RouterProvider router={router} />
      </Box>
    </AppProvider>
  );
};
