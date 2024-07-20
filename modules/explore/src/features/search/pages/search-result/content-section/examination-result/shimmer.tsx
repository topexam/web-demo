import { Box, HStack, Skeleton, SkeletonCircle, Spacer } from '@chakra-ui/react';
import { genArrayFromNumber } from '@topexam/web.lib.util';
import { Fragment } from 'react/jsx-runtime';

const ExaminationItemShimmer = () => (
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
);

export const ExaminationResultShimmer = () => (
  <Fragment>
    {genArrayFromNumber(3).map((e) => (
      <ExaminationItemShimmer key={e} />
    ))}
  </Fragment>
);
