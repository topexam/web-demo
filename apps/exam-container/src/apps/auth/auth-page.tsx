import { useAuth0 } from '@auth0/auth0-react';
import { Avatar, Button, Center, HStack, Spinner, Text, VStack } from '@chakra-ui/react';
import { useMemo } from 'react';

import { AUTH0_AUDIENCE } from '@/config';

export const AuthPage = () => {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading, error } = useAuth0();
  const userInfo = useMemo(() => user?.[AUTH0_AUDIENCE], [user]);

  const _renderContent = () => {
    if (isLoading)
      return (
        <Center>
          <Spinner size="lg" color="green" />
        </Center>
      );

    if (isAuthenticated) {
      return (
        <VStack>
          <Avatar />
          <Text>
            {userInfo?.first_name} {userInfo?.middle_name} {userInfo?.last_name}
          </Text>
          <Text>{user?.sub}</Text>
          <Button onClick={() => logout()} colorScheme="red">
            Log out
          </Button>
        </VStack>
      );
    }

    return (
      <VStack>
        {error && <Text color="red">{error.message}</Text>}
        <Button onClick={() => loginWithRedirect()} colorScheme="green">
          Login
        </Button>
      </VStack>
    );
  };

  return (
    <HStack h="100vh" align="center" justify="center">
      {_renderContent()}
    </HStack>
  );
};
