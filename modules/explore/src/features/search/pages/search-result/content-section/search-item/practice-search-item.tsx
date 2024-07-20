import {
  Avatar,
  Box,
  Button,
  Center,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Icon,
  Spacer,
  Tag,
  Text,
  Tooltip,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import React from 'react';
import {
  HiBadgeCheck,
  HiOutlineChartBar,
  HiOutlineClock,
  HiOutlineQuestionMarkCircle,
  HiOutlineTag,
  HiPlay,
} from 'react-icons/hi';
import { BiHistory } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export const PracticeSearchItem = () => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      cursor="pointer"
      _hover={{ backgroundColor: 'gray.50' }}
      bg="white"
      p={4}
    >
      <Text mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated noOfLines={2}>
        Modern home in city center in the heart of historic Los Angeles Demo hello ahaha ahihi demo
        Modern home
      </Text>
      <Flex align="center">
        <Box>
          <Box my="2">
            <Flex align="center">
              <Avatar size="xs" name="An Nguyen Q." src="https://bit.ly/kent-c-dodds" />

              <Text as="span" fontWeight="500" fontSize="sm" ml="1" isTruncated>
                An Nguyen Q.
              </Text>
              <Tooltip
                label="Verified"
                shouldWrapChildren
                colorScheme="green"
                placement="top-start"
              >
                <Icon as={HiBadgeCheck} ml="1" color="green.500" w="5" h="5" />
              </Tooltip>
            </Flex>
          </Box>
          <Wrap spacing="3">
            <WrapItem>
              <Center>
                <Icon as={HiOutlineClock} mr="2" />{' '}
                <Text as="span" fontWeight="500">
                  30 phút
                </Text>
              </Center>
            </WrapItem>
            <WrapItem>
              <Center>
                <Icon as={HiOutlineQuestionMarkCircle} mr="2" />{' '}
                <Text as="span" fontWeight="500">
                  50 câu
                </Text>
              </Center>
            </WrapItem>
          </Wrap>
          <Wrap spacing="2" mt="2">
            <WrapItem>
              <Link to="/sub-category/--456">
                <Tag size="sm" key={0} variant="solid" color="green.500" bgColor="green.50">
                  <Icon as={HiOutlineTag} mr="1" />
                  Toán 12
                </Tag>
              </Link>
            </WrapItem>
            <WrapItem>
              <Link to="/tag/--789">
                <Tag size="sm" key={0} variant="solid" color="blue.500" bgColor="blue.50">
                  <Icon as={HiOutlineChartBar} mr="1" />
                  Cơ bản
                </Tag>
              </Link>
            </WrapItem>
          </Wrap>
        </Box>
        <Spacer />
        <CircularProgress value={(15 * 100) / 20} color="green.400" size="80px">
          <CircularProgressLabel>15/20</CircularProgressLabel>
        </CircularProgress>
      </Flex>
      <Flex mt="2">
        <Spacer />
        <Button leftIcon={<Icon as={BiHistory} />} colorScheme="red" variant="ghost" _focus={{}}>
          History
        </Button>
        <Box w="2" />
        <Button leftIcon={<Icon as={HiPlay} />} colorScheme="blue" _focus={{}}>
          Do test
        </Button>
      </Flex>
    </Box>
  );
};
