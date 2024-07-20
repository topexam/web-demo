import { Box, HStack, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import { genArrayFromNumber } from '@topexam/web.lib.util';
import { Fragment } from 'react/jsx-runtime';

const UserItemShimmer = () => (
  <Box rounded="base" borderWidth="1px" p={4}>
    <HStack alignItems="flex-start" spacing={4}>
      <SkeletonCircle size="12" />
      <Box flex={1}>
        <Skeleton height="16px" maxWidth="200px" />
        <Skeleton height="14px" maxWidth="150px" mt={1} />
        <HStack mt={3} spacing={3}>
          <Skeleton height="16px" width="100%" maxW="60px" />
          <Skeleton height="16px" width="100%" maxW="60px" />
          <Skeleton height="16px" width="100%" maxW="60px" />
        </HStack>
        <SkeletonText mt={3} noOfLines={2} spacing={2} />
      </Box>
    </HStack>
  </Box>
);

export const UserResultShimmer = () => {
  return (
    <Fragment>
      {genArrayFromNumber(3).map((e) => (
        <UserItemShimmer key={e} />
      ))}
    </Fragment>
  );
};
