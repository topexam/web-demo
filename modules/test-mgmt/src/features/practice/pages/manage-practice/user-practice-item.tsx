import {
  Avatar,
  Box,
  CircularProgress,
  CircularProgressLabel,
  HStack,
  Spacer,
  Text,
} from '@chakra-ui/react';
import * as React from 'react';

const UserPracticeItem = () => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      p={3}
      cursor="pointer"
      _hover={{
        bg: 'gray.50',
      }}
    >
      <HStack>
        <Avatar />
        <Box>
          <Text>An Nguyen Quang</Text>
          <Text color="gray.400" fontSize="sm">
            @ngquangan
          </Text>
        </Box>
      </HStack>
      <HStack mt={2}>
        <Box>
          <Text fontSize="2xl" color="green.500" fontWeight="500">
            Advanced
          </Text>
          <Text color="gray.400" fontSize="md">
            Evaluate on 20/01/22 15:33
          </Text>
        </Box>
        <Spacer />
        <CircularProgress value={(15 * 100) / 20} color="green.400" size="70px">
          <CircularProgressLabel>15/20</CircularProgressLabel>
        </CircularProgress>
      </HStack>
    </Box>
  );
};

export default UserPracticeItem;
