import React from 'react';
import {
  Box,
  Image,
  Badge,
  Icon,
  Wrap,
  Tag,
  WrapItem,
  Avatar,
  Tooltip,
  Text,
  Flex,
  Spacer,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Grid,
  GridItem,
  Center,
} from '@chakra-ui/react';
import {
  HiBadgeCheck,
  HiOutlineClock,
  HiOutlineQuestionMarkCircle,
  HiOutlinePlay,
} from 'react-icons/hi';
import { FaCoins } from 'react-icons/fa';

const ChallengeItem = () => {
  const property = {
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzalBqdhxubVpHziS_EWMTmj---O-zibqFgw&usqp=CAU',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles Demo hello ahaha ahihi',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  };
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      cursor="pointer"
      _hover={{ bg: 'gray.50' }}
      bg="white"
    >
      <Center bg="gray.200" height="200px">
        <Image src={property.imageUrl} alt={property.imageAlt} />
      </Center>
      <Box p="3">
        <Wrap spacing="2">
          <WrapItem>
            <Badge borderRadius="full" px="2" colorScheme="green">
              Toán 12
            </Badge>
          </WrapItem>
          <WrapItem>
            <Tag size="sm" key={0} variant="solid" color="blue.500" bgColor="blue.50">
              # Hàm Số
            </Tag>
          </WrapItem>
          <WrapItem>
            <Tag size="sm" key={0} variant="solid" color="blue.500" bgColor="blue.50">
              # Đạo Hàm
            </Tag>
          </WrapItem>
        </Wrap>
        <Tooltip hasArrow label={property.title}>
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={2}>
            {property.title}
          </Box>
        </Tooltip>

        <Box my="2">
          <Popover trigger="hover" placement="top-start">
            <PopoverTrigger>
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
            </PopoverTrigger>
            <PopoverContent>
              <PopoverBody>
                <Grid templateColumns="50px 1fr" columnGap="1">
                  <GridItem colStart={1} colEnd={2} rowStart={1} rowEnd={2}>
                    <Avatar name="An Nguyen Q." src="https://bit.ly/kent-c-dodds" size="50px" />
                  </GridItem>
                  <GridItem colStart={2} colEnd={3} rowStart={1} rowEnd={2}>
                    <Text fontWeight="500" fontSize="sm" ml="1" isTruncated>
                      An Nguyen Q.
                      <Tooltip
                        label="Verified"
                        shouldWrapChildren
                        colorScheme="green"
                        placement="top-start"
                      >
                        <Icon as={HiBadgeCheck} ml="1" color="green.500" w="5" h="5" />
                      </Tooltip>
                    </Text>
                    <Text color="gray.400" fontSize="sm" ml="1" isTruncated>
                      @ngquangan
                    </Text>
                  </GridItem>
                </Grid>
                <Text mt="2">This is description</Text>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
        <Wrap spacing="3">
          <WrapItem>
            <Box>
              <Icon as={HiOutlineClock} />{' '}
              <Text as="span" fontWeight="500">
                30 phút
              </Text>
            </Box>
          </WrapItem>
          <WrapItem>
            <Box>
              <Icon as={HiOutlineQuestionMarkCircle} />{' '}
              <Text as="span" fontWeight="500">
                50 câu
              </Text>
            </Box>
          </WrapItem>
          <WrapItem>
            <Box>
              <Icon as={HiOutlinePlay} />{' '}
              <Text as="span" fontWeight="500">
                30 lượt
              </Text>
            </Box>
          </WrapItem>
        </Wrap>
        <Flex mt="3" align="flex-end">
          <Text as="span" color="green.400" fontWeight="500" fontSize="sm">
            Còn lại 24:00:00
          </Text>
          <Spacer />
          <Tag colorScheme="yellow">
            <Icon as={FaCoins} color="yellow.400" />
            &nbsp;
            <Text as="span" color="yellow.400" fontWeight="500" fontSize="sm">
              20 Coin
            </Text>
          </Tag>
        </Flex>
      </Box>
    </Box>
  );
};

export default ChallengeItem;
