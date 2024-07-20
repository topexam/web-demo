import { Heading, Box } from '@chakra-ui/react';
import { AutoGrid, EBreakpoint } from 'react-grid-container-query';

import ChallengeItem from './challenge-item';

export const RecommendedChallengeSection = () => {
  return (
    <Box>
      <Heading as="h4" size="md">
        Challenge Recommended
      </Heading>
      <Box h={4} />
      <AutoGrid minChildWidth={{ base: 4 }} gap={EBreakpoint.sm}>
        <ChallengeItem />
        <ChallengeItem />
        <ChallengeItem />
      </AutoGrid>
    </Box>
  );
};
