import { Box, Text, SimpleGrid } from '@chakra-ui/react';
import { ReviewItem } from './review-item';

export const ReviewSection = () => {
  return (
    <Box borderWidth="1px" borderRadius="md" p={4} bg="white">
      <Text fontWeight="500" fontSize="lg">
        Reviews
      </Text>
      <SimpleGrid columns={1} spacing={4} mt={5}>
        <ReviewItem />
        <ReviewItem />
      </SimpleGrid>
    </Box>
  );
};
