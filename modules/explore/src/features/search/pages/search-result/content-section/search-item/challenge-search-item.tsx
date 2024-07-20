import {
  Avatar,
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Icon,
  Image,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Spacer,
  Tag,
  Text,
  Tooltip,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { FaCoins } from 'react-icons/fa';
import {
  HiBadgeCheck,
  HiOutlineClock,
  HiOutlineHashtag,
  HiOutlinePlay,
  HiOutlineQuestionMarkCircle,
  HiOutlineTag,
  HiStar,
} from 'react-icons/hi';
import { Link } from 'react-router-dom';

export const ChallengeSearchItem = () => {
  const property = {
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzalBqdhxubVpHziS_EWMTmj---O-zibqFgw&usqp=CAU',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title:
      'Modern home in city center in the heart of historic Los Angeles Demo hello ahaha ahihi demo Modern home in city center in the heart of historic Los Angeles ',
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
      _hover={{ backgroundColor: 'gray.50' }}
      bg="white"
    >
      <Flex>
        <Center width="200px" minHeight="200px" bg="gray.100">
          <Image src={property.imageUrl} alt={property.imageAlt} fit="cover" bg="gray.50" />
        </Center>
        <Box p="3" flex={1}>
          <Text mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated noOfLines={2}>
            {property.title}
          </Text>
          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill('')
              .map((_, i) => (
                <Icon
                  as={HiStar}
                  key={i}
                  color={i < property.rating ? 'yellow.500' : 'gray.300'}
                  w={5}
                  h={5}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {property.reviewCount} đánh giá
            </Box>
          </Box>
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
            <WrapItem>
              <Center>
                <Icon as={HiOutlinePlay} mr="2" />{' '}
                <Text as="span" fontWeight="500">
                  30 lượt
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
                  <Icon as={HiOutlineHashtag} mr="1" />
                  Hàm Số
                </Tag>
              </Link>
            </WrapItem>
            <WrapItem>
              <Link to="/tag/--789">
                <Tag size="sm" key={0} variant="solid" color="blue.500" bgColor="blue.50">
                  <Icon as={HiOutlineHashtag} mr="1" />
                  Đạo Hàm
                </Tag>
              </Link>
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
      </Flex>
    </Box>
  );
};
