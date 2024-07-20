import { Box, Container, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import TestHistoryItem from './test-history-item';

export const TestSubmissionPage = () => {
  return (
    <Container maxWidth="1400px" py={4}>
      <Flex>
        <Box>
          <Text as="h1" fontWeight="semibold" fontSize="xl">
            Test History
          </Text>
          <Text color="gray.600" maxWidth="1000px">
            Includes all your test submissions
          </Text>
        </Box>
      </Flex>
      <SimpleGrid
        columns={{
          base: 1,
          xl: 2,
        }}
        mt={4}
        spacing={4}
      >
        <TestHistoryItem />
        <TestHistoryItem />
      </SimpleGrid>
    </Container>
  );
};
