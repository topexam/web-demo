import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { AppRouter } from './routing';
import { QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { defaultQueryClient } from '@topexam/web.lib.util';
import { baseChakraTheme } from '@topexam/web.lib.theme';
import { ChakraProvider } from '@chakra-ui/react';

export const App = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={defaultQueryClient}>
        <ChakraProvider theme={baseChakraTheme}>
          <AppRouter />
          <ReactQueryDevtools initialIsOpen={false} />
        </ChakraProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
};
