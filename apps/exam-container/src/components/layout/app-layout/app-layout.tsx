import { Flex } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';

import { AppHeader, MgmtHeader } from '../headers';

type Props = PropsWithChildren<{
  hasHeader?: boolean;
}>;

export const AppLayout = ({ hasHeader = true, children }: Props) => {
  const location = useLocation();

  const _renderHeader = () => {
    if (location.pathname?.startsWith('/mgmt')) return <MgmtHeader />;

    return <AppHeader />;
  };

  return (
    <Flex flexDir="column" minH="100vh" bg="gray.100">
      {hasHeader && _renderHeader()}
      <Flex flex={1} flexDir="column" w="full">
        {children}
      </Flex>
    </Flex>
  );
};
