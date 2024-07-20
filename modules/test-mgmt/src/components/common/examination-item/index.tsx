import {
  Avatar,
  Box,
  Center,
  Flex,
  HStack,
  Icon,
  Image,
  Tag,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { RatingBox } from '@topexam/web.lib.component';
import {
  HiBadgeCheck,
  HiOutlineClock,
  HiOutlineHashtag,
  HiOutlinePlay,
  HiOutlineQuestionMarkCircle,
  HiOutlineTag,
} from 'react-icons/hi';
import { Link } from 'react-router-dom';

type Props = {
  extraContent: React.ReactElement;
};

export const ExaminationItem = ({ extraContent }: Props) => {
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
    <Box borderWidth={1} rounded="base" _hover={{ backgroundColor: 'gray.50' }} bg="white">
      <Flex>
        <Center width="200px" minHeight="200px" bg="gray.200">
          <Image src={property.imageUrl} alt={property.imageAlt} fit="cover" bg="gray.50" />
        </Center>
        <Box p={4} flex={1}>
          <Text fontWeight="semibold" as="h4" noOfLines={2} title={property.title}>
            {property.title}
          </Text>
          <HStack mt={1} align="flex-start">
            <RatingBox value={4.5} />
            <Box as="span" color="gray.600" fontSize="sm">
              {property.reviewCount} đánh giá
            </Box>
          </HStack>
          <Box my={2}>
            <HStack align="center">
              <Avatar size="xs" name="An Nguyen Q." src="https://bit.ly/kent-c-dodds" />
              <Text as="span" fontWeight="500" fontSize="sm" noOfLines={1}>
                An Nguyen Q.
              </Text>
              <Icon as={HiBadgeCheck} color="green.500" boxSize={5} />
            </HStack>
          </Box>
          <Wrap spacing={3}>
            <WrapItem>
              <Center>
                <Icon as={HiOutlineClock} mr={2} />
                <Text as="span" fontWeight="500">
                  30 phút
                </Text>
              </Center>
            </WrapItem>
            <WrapItem>
              <Center>
                <Icon as={HiOutlineQuestionMarkCircle} mr={2} />
                <Text as="span" fontWeight="500">
                  50 câu
                </Text>
              </Center>
            </WrapItem>
            <WrapItem>
              <Center>
                <Icon as={HiOutlinePlay} mr={2} />
                <Text as="span" fontWeight="500">
                  30 lượt
                </Text>
              </Center>
            </WrapItem>
          </Wrap>
          <Wrap spacing={2} mt={2}>
            <WrapItem>
              <Center>
                <Link to="/sub-category/456">
                  <Tag size="sm" key={0} variant="solid" color="green.500" bgColor="green.50">
                    <Icon as={HiOutlineTag} mr="1" />
                    Toán 12
                  </Tag>
                </Link>
              </Center>
            </WrapItem>
            <WrapItem>
              <Center>
                <Link to="/tag/789">
                  <Tag size="sm" key={0} variant="solid" color="blue.500" bgColor="blue.50">
                    <Icon as={HiOutlineHashtag} mr="1" />
                    Hàm Số
                  </Tag>
                </Link>
              </Center>
            </WrapItem>
            <WrapItem>
              <Center>
                <Link to="/tag/789">
                  <Tag size="sm" key={0} variant="solid" color="blue.500" bgColor="blue.50">
                    <Icon as={HiOutlineHashtag} mr="1" />
                    Đạo Hàm
                  </Tag>
                </Link>
              </Center>
            </WrapItem>
          </Wrap>
          {extraContent && <Box mt={3}>{extraContent}</Box>}
        </Box>
      </Flex>
    </Box>
  );
};
