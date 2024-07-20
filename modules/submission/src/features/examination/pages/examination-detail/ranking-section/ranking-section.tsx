import { Box } from '@chakra-ui/react';
import { MyRanking } from './my-ranking';
import { RankingList } from './ranking-list';

export const RankingSection = () => {
  return (
    <Box borderRadius="md" borderWidth="1px" width={{ lg: '350px', base: '100%' }} bg="white">
      <MyRanking />
      <RankingList />
    </Box>
  );
};
