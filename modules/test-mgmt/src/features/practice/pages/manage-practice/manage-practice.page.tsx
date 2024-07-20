import { Box, Container, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import UserPracticeItem from './user-practice-item';

export const ManagePracticePage = () => {
  return (
    <Container maxWidth="1400px" py={4}>
      <Flex>
        <Box>
          <Text as="h1" fontWeight="semibold" fontSize="xl">
            Practice Management
          </Text>
          <Text color="gray.600" maxWidth="1000px">
            Tracking all users are practicing
          </Text>
        </Box>
      </Flex>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          xl: 3,
        }}
        mt={4}
        spacing={4}
      >
        <UserPracticeItem />
        <UserPracticeItem />
      </SimpleGrid>
    </Container>
  );
};
