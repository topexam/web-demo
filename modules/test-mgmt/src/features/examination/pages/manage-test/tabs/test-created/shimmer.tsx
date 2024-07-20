import { Box, HStack, SimpleGrid, Skeleton, Spacer } from '@chakra-ui/react';

const TestCreatedListShimmer = () => {
  return (
    <SimpleGrid
      columns={{
        base: 1,
        xl: 2,
      }}
      spacing={4}
    >
      <Box rounded="base" borderWidth="1px">
        <HStack>
          <Skeleton h="150px" w="150px" />
          <Box flex={1} p={2}>
            <HStack spacing={1}>
              <Spacer />
              <Skeleton height="20px" width="20px" />
              <Skeleton height="20px" width="20px" />
              <Skeleton height="20px" width="20px" />
              <Skeleton height="20px" width="20px" />
              <Skeleton height="20px" width="20px" />
            </HStack>
            <Skeleton mt={2} height="24px" />
            <HStack mt={2}>
              <HStack spacing={1}>
                <Skeleton height="18px" width="18px" />
                <Skeleton height="18px" width="18px" />
                <Skeleton height="18px" width="18px" />
                <Skeleton height="18px" width="18px" />
                <Skeleton height="18px" width="18px" />
              </HStack>
              <Skeleton height="16px" width="100%" maxW="60px" />
            </HStack>
            <HStack mt={2}>
              <Skeleton height="14px" width="100%" maxW="60px" />
              <Skeleton height="14px" width="100%" maxW="60px" />
              <Skeleton height="14px" width="100%" maxW="60px" />
            </HStack>
            <HStack mt={3}>
              <Skeleton height="14px" width="100%" maxW="100px" />
              <Spacer />
              <Skeleton height="14px" width="100%" maxW="60px" />
            </HStack>
          </Box>
        </HStack>
      </Box>
      <Box rounded="base" borderWidth="1px">
        <HStack>
          <Skeleton h="150px" w="150px" />
          <Box flex={1} p={2}>
            <HStack spacing={1}>
              <Spacer />
              <Skeleton height="20px" width="20px" />
              <Skeleton height="20px" width="20px" />
              <Skeleton height="20px" width="20px" />
              <Skeleton height="20px" width="20px" />
              <Skeleton height="20px" width="20px" />
            </HStack>
            <Skeleton mt={2} height="24px" />
            <HStack mt={2}>
              <HStack spacing={1}>
                <Skeleton height="18px" width="18px" />
                <Skeleton height="18px" width="18px" />
                <Skeleton height="18px" width="18px" />
                <Skeleton height="18px" width="18px" />
                <Skeleton height="18px" width="18px" />
              </HStack>
              <Skeleton height="16px" width="100%" maxW="60px" />
            </HStack>
            <HStack mt={2}>
              <Skeleton height="14px" width="100%" maxW="60px" />
              <Skeleton height="14px" width="100%" maxW="60px" />
              <Skeleton height="14px" width="100%" maxW="60px" />
            </HStack>
            <HStack mt={3}>
              <Skeleton height="14px" width="100%" maxW="100px" />
              <Spacer />
              <Skeleton height="14px" width="100%" maxW="60px" />
            </HStack>
          </Box>
        </HStack>
      </Box>

      <Box rounded="base" borderWidth="1px">
        <HStack>
          <Skeleton h="150px" w="150px" />
          <Box flex={1} p={2}>
            <HStack spacing={1}>
              <Spacer />
              <Skeleton height="20px" width="20px" />
              <Skeleton height="20px" width="20px" />
              <Skeleton height="20px" width="20px" />
              <Skeleton height="20px" width="20px" />
              <Skeleton height="20px" width="20px" />
            </HStack>
            <Skeleton mt={2} height="24px" />
            <HStack mt={2}>
              <HStack spacing={1}>
                <Skeleton height="18px" width="18px" />
                <Skeleton height="18px" width="18px" />
                <Skeleton height="18px" width="18px" />
                <Skeleton height="18px" width="18px" />
                <Skeleton height="18px" width="18px" />
              </HStack>
              <Skeleton height="16px" width="100%" maxW="60px" />
            </HStack>
            <HStack mt={2}>
              <Skeleton height="14px" width="100%" maxW="60px" />
              <Skeleton height="14px" width="100%" maxW="60px" />
              <Skeleton height="14px" width="100%" maxW="60px" />
            </HStack>
            <HStack mt={3}>
              <Skeleton height="14px" width="100%" maxW="100px" />
              <Spacer />
              <Skeleton height="14px" width="100%" maxW="60px" />
            </HStack>
          </Box>
        </HStack>
      </Box>
      <Box rounded="base" borderWidth="1px">
        <HStack>
          <Skeleton h="150px" w="150px" />
          <Box flex={1} p={2}>
            <HStack spacing={1}>
              <Spacer />
              <Skeleton height="20px" width="20px" />
              <Skeleton height="20px" width="20px" />
              <Skeleton height="20px" width="20px" />
              <Skeleton height="20px" width="20px" />
              <Skeleton height="20px" width="20px" />
            </HStack>
            <Skeleton mt={2} height="24px" />
            <HStack mt={2}>
              <HStack spacing={1}>
                <Skeleton height="18px" width="18px" />
                <Skeleton height="18px" width="18px" />
                <Skeleton height="18px" width="18px" />
                <Skeleton height="18px" width="18px" />
                <Skeleton height="18px" width="18px" />
              </HStack>
              <Skeleton height="16px" width="100%" maxW="60px" />
            </HStack>
            <HStack mt={2}>
              <Skeleton height="14px" width="100%" maxW="60px" />
              <Skeleton height="14px" width="100%" maxW="60px" />
              <Skeleton height="14px" width="100%" maxW="60px" />
            </HStack>
            <HStack mt={3}>
              <Skeleton height="14px" width="100%" maxW="100px" />
              <Spacer />
              <Skeleton height="14px" width="100%" maxW="60px" />
            </HStack>
          </Box>
        </HStack>
      </Box>
    </SimpleGrid>
  );
};

export default TestCreatedListShimmer;
