import { Box, HStack, Skeleton, SimpleGrid, SkeletonCircle, Spacer } from '@chakra-ui/react';

export const ExaminationListShimmer = () => {
  return (
    <SimpleGrid columns={{ xl: 2 }} spacing={4} mt={4}>
      <Box rounded="base" borderWidth="1px">
        <HStack>
          <Skeleton h="150px" w="150px" />
          <Box flex={1} p={2}>
            <Skeleton height="24px" />
            <Skeleton height="14px" mt={2} width="100%" maxW="150px" />
            <HStack mt={2}>
              <SkeletonCircle />
              <Skeleton height="16px" width="100%" maxW="150px" />
            </HStack>
            <HStack mt={2}>
              <Skeleton height="14px" width="100%" maxW="60px" />
              <Skeleton height="14px" width="100%" maxW="60px" />
              <Skeleton height="14px" width="100%" maxW="60px" />
            </HStack>
            <HStack mt={2}>
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
            <Skeleton height="24px" />
            <Skeleton height="14px" mt={2} width="100%" maxW="150px" />
            <HStack mt={2}>
              <SkeletonCircle />
              <Skeleton height="16px" width="100%" maxW="150px" />
            </HStack>
            <HStack mt={2}>
              <Skeleton height="14px" width="100%" maxW="60px" />
              <Skeleton height="14px" width="100%" maxW="60px" />
              <Skeleton height="14px" width="100%" maxW="60px" />
            </HStack>
            <HStack mt={2}>
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
            <Skeleton height="24px" />
            <Skeleton height="14px" mt={2} width="100%" maxW="150px" />
            <HStack mt={2}>
              <SkeletonCircle />
              <Skeleton height="16px" width="100%" maxW="150px" />
            </HStack>
            <HStack mt={2}>
              <Skeleton height="14px" width="100%" maxW="60px" />
              <Skeleton height="14px" width="100%" maxW="60px" />
              <Skeleton height="14px" width="100%" maxW="60px" />
            </HStack>
            <HStack mt={2}>
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
            <Skeleton height="24px" />
            <Skeleton height="14px" mt={2} width="100%" maxW="150px" />
            <HStack mt={2}>
              <SkeletonCircle />
              <Skeleton height="16px" width="100%" maxW="150px" />
            </HStack>
            <HStack mt={2}>
              <Skeleton height="14px" width="100%" maxW="60px" />
              <Skeleton height="14px" width="100%" maxW="60px" />
              <Skeleton height="14px" width="100%" maxW="60px" />
            </HStack>
            <HStack mt={2}>
              <Spacer />
              <Skeleton height="14px" width="100%" maxW="60px" />
            </HStack>
          </Box>
        </HStack>
      </Box>
    </SimpleGrid>
  );
};
