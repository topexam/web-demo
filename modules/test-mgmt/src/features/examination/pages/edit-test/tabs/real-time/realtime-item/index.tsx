import { Avatar, Box, HStack, Spacer, Tag, Text } from '@chakra-ui/react';

const RealtimeItem = () => {
  return (
    <Box borderWidth="1px" borderRadius="md" p={3} cursor="pointer" _hover={{ bg: 'gray.50' }}>
      <HStack>
        <Avatar />
        <Box>
          <Text>An Nguyen Quang</Text>
          <Text color="gray.400" fontSize="sm">
            @ngquangan
          </Text>
        </Box>
        <Spacer />
        <Tag colorScheme="yellow">DOING</Tag>
      </HStack>
      <HStack mt={2} align="baseline">
        <Text color="green.500" fontSize="sm">
          00:10:15
        </Text>
        <Spacer />
        <Text fontSize="xl" fontWeight="500" color="yellow.500">
          15/20
        </Text>
      </HStack>
    </Box>
  );
};

export default RealtimeItem;
