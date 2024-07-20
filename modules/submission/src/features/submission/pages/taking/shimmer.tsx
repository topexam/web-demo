import {
  Box,
  Center,
  Flex,
  HStack,
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Spacer,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const ExaminationDoingShimmer = () => {
  return (
    <Flex minH="100vh" flexDir="column">
      <HStack p={4} shadow="base">
        <Skeleton height="24px" w="100%" maxW="500px" mr={3} />
        <Spacer />
        <Skeleton height="24px" width="100px" />
      </HStack>
      <Box h={6} />
      <HStack flex={1} p={4} align="start">
        <Box p={4} border={1} shadow="base" rounded="base" w="200px">
          <Skeleton height="20px" w="100%" />
          <Skeleton height="16px" w="60%" mt={4} />
          <SimpleGrid columns={4} spacing={2} mt={2}>
            <Skeleton height="30px" />
            <Skeleton height="30px" />
            <Skeleton height="30px" />
            <Skeleton height="30px" />
            <Skeleton height="30px" />
            <Skeleton height="30px" />
            <Skeleton height="30px" />
            <Skeleton height="30px" />
          </SimpleGrid>
        </Box>
        <Center flex={1}>
          <Box p={4} border={1} shadow="base" rounded="base" w="100%" maxW="600px">
            <SkeletonText noOfLines={3} spacing={2} />
            <VStack mt={4}>
              <HStack w="100%">
                <SkeletonCircle size="8" />
                <Skeleton height="16px" w="80%" />
              </HStack>
              <HStack w="100%">
                <SkeletonCircle size="8" />
                <Skeleton height="16px" w="50%" />
              </HStack>
              <HStack w="100%">
                <SkeletonCircle size="8" />
                <Skeleton height="16px" w="70%" />
              </HStack>
              <HStack w="100%">
                <SkeletonCircle size="8" />
                <Skeleton height="16px" w="60%" />
              </HStack>
            </VStack>
          </Box>
        </Center>
      </HStack>
    </Flex>
  );
};

export default ExaminationDoingShimmer;
