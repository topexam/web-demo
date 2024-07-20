import { Box, SimpleGrid } from '@chakra-ui/react';

import { HeaderTabSection } from '@/components';
import TestItem from './test-item';

export const TestExpiredTab = () => {
  return (
    <Box>
      <HeaderTabSection title="Test Expired" description="All bought examinations expired">
        <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={4}>
          <TestItem />
          <TestItem />
          <TestItem />
          <TestItem />
        </SimpleGrid>
      </HeaderTabSection>
    </Box>
  );
};
