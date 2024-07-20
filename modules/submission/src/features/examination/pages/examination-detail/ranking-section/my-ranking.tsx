import { Avatar, Box, HStack, Spacer, Tag, Text } from '@chakra-ui/react';

export const MyRanking = () => {
  return (
    <Box>
      <Text fontWeight="500" bg="gray.200" py={3} px={4} fontSize="lg">
        My Rank
      </Text>
      <Box mx={4}>
        <HStack align="center" p={3}>
          <Text fontWeight="600" fontSize="lg" color="blue.500" mr={2}>
            1
          </Text>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <Box>
            <Text fontWeight="500">An Nguyen Quang</Text>
            <Text color="gray.500" fontSize="sm">
              @ngquangan
            </Text>
          </Box>
          <Spacer />
          <Tag color="gray.600">23/25</Tag>
        </HStack>
      </Box>
    </Box>
  );
};
