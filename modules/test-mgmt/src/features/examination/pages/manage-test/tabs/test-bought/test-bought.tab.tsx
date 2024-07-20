import { HeaderTabSection } from '@/components';
import { Box, SimpleGrid } from '@chakra-ui/react';
import TestItem from './test-item';

export const TestBoughtTab = () => {
  return (
    <Box>
      <HeaderTabSection title="Test Bought" description="All examinations which you bought">
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
