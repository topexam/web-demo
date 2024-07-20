import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  HStack,
  Icon,
  Image,
  Spacer,
  Spinner,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import { HiLockClosed } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import { UserMenu } from './user-menu';
import { NavMenu } from './nav-menu';
import { SearchBox } from './search-box';
import styles from './index.module.scss';

export const AppHeader = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const [isSmallerThan992] = useMediaQuery('(max-width: 992px)');
  const [isSmallerThan576] = useMediaQuery('(max-width: 576px)');

  const _handleLogin = () => {
    loginWithRedirect();
  };

  const _renderAuthButton = () => {
    if (isLoading) {
      return (
        <Center>
          <Spinner color="gray.200" />
        </Center>
      );
    }

    if (isAuthenticated) {
      return <UserMenu />;
    }

    return (
      <Button
        variant="ghost"
        leftIcon={<Icon as={HiLockClosed} w={5} h={5} />}
        color="gray.400"
        _focus={{}}
        _hover={{ color: 'gray.500', bg: 'gray.100' }}
        onClick={_handleLogin}
      >
        Login
      </Button>
    );
  };

  const _renderSearchBox = (isShow: boolean) => {
    if (!isShow) return null;
    return <SearchBox />;
  };

  return (
    <Box bg="gray.700" className={styles['custom-header']}>
      <Container maxWidth="1400px">
        <Flex py="2" align="center">
          <Link to="/">
            <HStack align="center" mr="6" spacing={3} whiteSpace="nowrap">
              <Image src="https://cdn.topthithu.com/img-logo-exam-polygon.png" w={14} h={14} />
              <Box fontFamily="'Fira Sans', sans-serif;">
                <Text color="gray.200" fontWeight="600" fontSize="lg">
                  TopExam
                </Text>
                <Text color="gray.100" fontSize="xs">
                  Examination
                </Text>
              </Box>
            </HStack>
          </Link>
          <NavMenu showNav={!isSmallerThan992} />
          <Spacer />
          {_renderSearchBox(!isSmallerThan576)}
          {_renderAuthButton()}
        </Flex>
        {_renderSearchBox(isSmallerThan576)}
        <NavMenu showNav={isSmallerThan992} />
      </Container>
    </Box>
  );
};
