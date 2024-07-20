import { Avatar, Box, HStack, Text } from '@chakra-ui/react';

const CommentItem = () => {
  return (
    <Box>
      <HStack mt={2}>
        <Avatar size="sm" />
        <Box>
          <HStack>
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

export default CommentItem;
