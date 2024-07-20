import { Avatar, Box, HStack, Icon, Spacer, Text } from '@chakra-ui/react';
import * as React from 'react';
import { HiStar } from 'react-icons/hi';

const RatingItem = () => {
  return (
    <Box w="full">
      <HStack spacing={3}>
        <Avatar size="sm" />
        <Box>
          <Text>An Nguyen Quang</Text>
          <Text color="gray.400" fontSize="sm">
            @ngquangan
          </Text>
        </Box>
        <Spacer />
        <Box>
          <Box>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <Icon as={HiStar} key={i} color={i < 3 ? 'yellow.400' : 'gray.300'} w={6} h={6} />
              ))}
          </Box>
          <Text color="gray.400" fontSize="sm">
            30m ago
          </Text>
        </Box>
      </HStack>
      <Text color="gray.500">This is content</Text>
    </Box>
  );
};

export default RatingItem;
