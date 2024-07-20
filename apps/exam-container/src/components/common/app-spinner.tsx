import { Center, Spinner } from '@chakra-ui/react';

export const AppSpinner = () => {
  return (
    <Center w="100%" h="100vh" flex={1}>
      <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="green.500" size="xl" />
    </Center>
  );
};
