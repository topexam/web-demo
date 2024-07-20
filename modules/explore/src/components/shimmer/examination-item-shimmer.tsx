import { Box, HStack, Skeleton, SkeletonCircle, Spacer } from '@chakra-ui/react';

export const ExaminationItemShimmer = () => {
  return (
    <Box rounded="base" borderWidth={1}>
      <HStack>
        <Skeleton boxSize="150px" />
        <Box flex={1} p={2}>
          <Skeleton height="24px" />
          <Skeleton height="14px" mt={2} width="full" maxW="150px" />
          <HStack mt={2}>
            <SkeletonCircle />
            <Skeleton height="16px" width="full" maxW="150px" />
          </HStack>
          <HStack mt={2}>
            <Skeleton height="14px" width="full" maxW="60px" />
            <Skeleton height="14px" width="full" maxW="60px" />
            <Skeleton height="14px" width="full" maxW="60px" />
          </HStack>
          <HStack mt={2}>
            <Spacer />
            <Skeleton height="14px" width="full" maxW="60px" />
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
};
