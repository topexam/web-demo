import { HeaderTabSection } from '@/components';
import { Box, SimpleGrid } from '@chakra-ui/react';
import TestItem from './test-item';

export const TestSavedTab = () => {
  return (
    <Box>
      <HeaderTabSection title="Test Saved" description="All examinations which you saved">
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
