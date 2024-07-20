import { Avatar, Box, HStack, Icon, Text } from '@chakra-ui/react';
import { HiStar } from 'react-icons/hi';

export const ReviewItem = () => {
  return (
    <HStack align="flex-start">
      <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      <Box mx={3} flex={1}>
        <Text fontWeight="500">An Nguyen Quang</Text>
        <Text color="gray.400" fontSize="sm">
          @ngquangan
        </Text>
        <Text fontSize="sm" color="gray.500" noOfLines={3} isTruncated mt={1} whiteSpace="inherit">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book.
        </Text>
      </Box>
      <Box>
        <Box display="flex" mt="3" alignItems="center">
          {Array(5)
            .fill('')
            .map((_, i) => (
              <Icon as={HiStar} key={i} color={i + 1 < 5 ? 'yellow.500' : 'gray.300'} w={5} h={5} />
            ))}
        </Box>
        <Text color="gray.500" fontSize="sm">
          2 hours ago
        </Text>
      </Box>
    </HStack>
  );
};
