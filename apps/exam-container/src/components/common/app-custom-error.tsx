import { Button, Center, Flex, Icon, Text } from '@chakra-ui/react';
import { HiOutlineExclamationTriangle } from 'react-icons/hi2';
import { RiHome3Fill } from 'react-icons/ri';

export const AppCustomError = () => {
  return (
    <Center w="100%" h="100%" flex={1} p={4}>
      <Flex align="center" flexDir="column">
        <Icon as={HiOutlineExclamationTriangle} boxSize={16} color="red.500" />
        <Text as="h1" fontSize="xl" fontWeight="semibold" mt={6}>
          Oops! Something was wrong.
        </Text>
        <Button
          leftIcon={<Icon as={RiHome3Fill} />}
          mt={4}
          colorScheme="green"
          size="sm"
          onClick={() => (window.location.href = '/')}
        >
          Go home
        </Button>
      </Flex>
    </Center>
  );
};
