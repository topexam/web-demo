import { Avatar, Box, HStack, Icon, Spacer, Text } from '@chakra-ui/react';
import * as React from 'react';
import { HiOutlineChatAlt2 } from 'react-icons/hi';

const DiscussionItem = () => {
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
        <Text fontWeight="500" fontSize="lg">
          #Question 1
        </Text>
        <Spacer />
        <Icon as={HiOutlineChatAlt2} w={6} h={6} />
        <Text as="span">(1)</Text>
      </HStack>
      <HStack mt={2}>
        <Avatar size="sm" />
        <Box>
          <HStack align="baseline">
            <Text>An Nguyen Quang</Text>
            <Text color="gray.500" fontSize="sm">
              20m ago
            </Text>
          </HStack>
          <Text as="span" color="gray.400" fontSize="sm">
            @ngquangan
          </Text>
        </Box>
      </HStack>
      <Text color="gray.500" noOfLines={2} mt={1} isTruncated>
        This is comment
      </Text>
    </Box>
  );
};

export default DiscussionItem;
