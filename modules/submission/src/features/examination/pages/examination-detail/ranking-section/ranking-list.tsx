import { Avatar, Box, HStack, SimpleGrid, Spacer, Tag, Text } from '@chakra-ui/react';

export const RankingList = () => {
  return (
    <Box mt={2}>
      <Text fontWeight="500" bg="gray.200" py={3} px={4} fontSize="lg">
        Leaderboard
      </Text>
      <SimpleGrid columns={1} spacing={3} mx={4} my={3}>
        <HStack align="center" p={3} borderRadius="md">
          <Text fontWeight="600" fontSize="lg" color="blue.500" mr={2}>
            1
          </Text>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <Box>
            <Text fontWeight="500" isTruncated>
              Felix Nguyen
            </Text>
            <Text color="gray.500" fontSize="sm" isTruncated>
              @im_felixng
            </Text>
          </Box>
          <Spacer />
          <Tag color="gray.600">23/25</Tag>
        </HStack>
        <HStack align="center" bg="blue.100" p={3} borderRadius="md">
          <Text fontWeight="600" fontSize="lg" color="blue.500" mr={2}>
            2
          </Text>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <Box>
            <Text fontWeight="500">Felix Nguyen</Text>
            <Text color="gray.500" fontSize="sm">
              @im_felixng
            </Text>
          </Box>
          <Spacer />
          <Tag color="gray.600">20/25</Tag>
        </HStack>
      </SimpleGrid>
    </Box>
  );
};
