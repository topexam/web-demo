import { useAuth0 } from '@auth0/auth0-react';
import {
  Box,
  Button,
  Center,
  Image,
  Container,
  Flex,
  Icon,
  Spacer,
  Spinner,
  Text,
  useMediaQuery,
  HStack,
} from '@chakra-ui/react';
import { HiLockClosed } from 'react-icons/hi';
import { Link } from 'react-router-dom';

import { UserMenu } from './user-menu';
import styles from './index.module.scss';

export const MgmtHeader = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const [isSmallerThan992] = useMediaQuery('(max-width: 768px)');

  const _handleLogin = () => {
    loginWithRedirect();
  };

  const _renderNavBar = (isShow: boolean) => {
    if (!isShow) return null;
    return (
      <Flex py="2">
        <Link to="/mgmt/examination">
          <Box
            mx="1"
            px="3"
            py="1"
            bg="gray.600"
            color="gray.100"
            borderRadius="md"
            cursor="pointer"
          >
            Tests
          </Box>
        </Link>
        <Link to="/mgmt/practice">
          <Box
            mx="1"
            px="3"
            py="1"
            color="gray.100"
            borderRadius="md"
            _hover={{ bg: 'gray.600' }}
            cursor="pointer"
          >
            Practices
          </Box>
        </Link>
        <Link to="/mgmt/submission">
          <Box
            mx="1"
            px="3"
            py="1"
            color="gray.100"
            borderRadius="md"
            _hover={{ bg: 'gray.600' }}
            cursor="pointer"
          >
            Submissions
          </Box>
        </Link>
      </Flex>
    );
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

  return (
    <Box bg="gray.700" className={styles['custom-header']}>
      <Container maxWidth="1400px">
        <Flex py="2" align="center">
          <Link to="/mgmt/examination">
            <HStack align="center" mr="6" spacing={3} whiteSpace="nowrap">
              <Image src="https://cdn.topthithu.com/img-logo-exam-polygon.png" w={14} h={14} />
              <Box fontFamily="'Fira Sans', sans-serif;">
                <Text color="gray.200" fontWeight="600" fontSize="lg">
                  TopExam
                </Text>
                <Text color="gray.100" fontSize="xs">
                  Examination — Management
                </Text>
              </Box>
            </HStack>
          </Link>
          {_renderNavBar(!isSmallerThan992)}
          <Spacer />
          {_renderAuthButton()}
        </Flex>
        {_renderNavBar(isSmallerThan992)}
      </Container>
    </Box>
  );
};
