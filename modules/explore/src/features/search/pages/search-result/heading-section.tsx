import { Box, Text, Code } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';

export const HeadingSection = () => {
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get('q') || '';

  return (
    <Box>
      <Text as="h4" fontWeight="semibold" fontSize="lg">
        Search Results for{' '}
        <Code children={searchText} rounded="md" fontSize="md" colorScheme="blue" px={1} />
      </Text>
    </Box>
  );
};
