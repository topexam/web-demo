import { PropsWithChildren, useEffect } from 'react';
import { QueryClient } from '@tanstack/react-query';
import { useBoolean, Center, Spinner } from '@chakra-ui/react';
import { AppProvider } from '@topexam/web.lib.component';
import { IAuthUser } from '@topexam/web.lib.foundation';

import { MainNetworkAccess } from '@/lib';
import { App } from '@/app';

import '@/styles/index.scss';

type Props = PropsWithChildren<{
  authUser: IAuthUser | null;
  queryClient: QueryClient;
}>;

const Root = ({ children, queryClient, authUser }: Props) => {
  const [loading, setLoadingMethods] = useBoolean(false);

  useEffect(() => {
    if (authUser?.access_token) {
      MainNetworkAccess.setHeaders({
        Authorization: `Bearer ${authUser?.access_token}`,
      });
      setLoadingMethods.off();
      queryClient.invalidateQueries();
    }
  }, [authUser?.access_token, setLoadingMethods]);

  return (
    <AppProvider customQueryClient={queryClient}>
      {loading ? (
        <Center h="100%" p={8}>
          <Spinner size="lg" color="green.500" />
        </Center>
      ) : (
        <App authUser={authUser}>{children}</App>
      )}
    </AppProvider>
  );
};

export default Root;
