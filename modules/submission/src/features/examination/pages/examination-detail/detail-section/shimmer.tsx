import {
  Box,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Spacer,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

export const DetailSectionShimmer = () => {
  return (
    <Box borderWidth="1px" borderRadius="md" p={4}>
      <Wrap spacing="2">
        <WrapItem>
          <Skeleton height="14px" width="100px" />
        </WrapItem>
        <WrapItem>
          <Skeleton height="14px" width="100px" />
        </WrapItem>
        <WrapItem>
          <Skeleton height="14px" width="100px" />
        </WrapItem>
        <WrapItem>
          <Skeleton height="14px" width="100px" />
        </WrapItem>
      </Wrap>
      <Skeleton height="22px" my={2} maxW="600px" />
      <HStack>
        <Skeleton height="18px" width="60px" />
        <Skeleton height="18px" width="180px" />
      </HStack>
      <HStack my={2}>
        <SkeletonCircle size="7" />
        <Skeleton height="20px" width="120px" />
      </HStack>
      <HStack>
        <Skeleton height="16px" width="120px" />
        <Skeleton height="16px" width="120px" />
        <Skeleton height="16px" width="120px" />
      </HStack>
      <SkeletonText mt="4" noOfLines={4} spacing="2" maxW="700px" />
      <HStack mt={3} spacing="4">
        <Spacer />
        <Skeleton height="24px" width="150px" />
        <Skeleton height="24px" width="150px" />
      </HStack>
    </Box>
  );
};
