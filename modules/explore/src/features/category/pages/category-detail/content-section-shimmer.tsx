import { Box, HStack, Skeleton } from '@chakra-ui/react';
import { ExaminationListShimmer } from '@/components';

export const ContentSectionShimmer = () => {
  return (
    <Box>
      <HStack spacing={4}>
        <Skeleton height="20px" width="100px" />
        <Skeleton height="20px" width="100px" />
        <Skeleton height="20px" width="100px" />
        <Skeleton height="20px" width="100px" />
      </HStack>
      <ExaminationListShimmer />
    </Box>
  );
};
