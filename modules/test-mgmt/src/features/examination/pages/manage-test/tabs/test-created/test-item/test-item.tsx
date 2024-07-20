import {
  Box,
  Center,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Spacer,
  Tag,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

import {
  HiOutlineChartSquareBar,
  HiOutlineChatAlt2,
  HiOutlineClock,
  HiOutlineFlag,
  HiOutlineHashtag,
  HiOutlinePlay,
  HiOutlineQuestionMarkCircle,
  HiOutlineTag,
} from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { IExamination, useFileUrl } from '@topexam/web.lib.foundation';

import ExaminationStatus from './examination-status';
import { PriceChip, RatingBox } from '@topexam/web.lib.component';

type Props = {
  item: IExamination;
};

export const TestItem = ({ item }: Props) => {
  const fileUrl = useFileUrl({ resourceId: 'examination_id', fileId: item.thumbnail });

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      cursor="pointer"
      _hover={{ backgroundColor: 'gray.50' }}
    >
      <Flex>
        <Center width="200px" minHeight="200px" bg="gray.100">
          <Image src={fileUrl} fit="cover" bg="gray.50" />
        </Center>
        <Box p="3" flex={1} borderLeftWidth={1}>
          <HStack>
            <Spacer />
            <ExaminationStatus status={item.status} />
            <IconButton
              aria-label="Analytics"
              icon={<Icon as={HiOutlineChartSquareBar} w={5} h={5} />}
              bg="transparent"
              size="sm"
              color="gray.500"
              _focus={{}}
            />
            <IconButton
              aria-label="Discussion"
              icon={<Icon as={HiOutlineChatAlt2} w={5} h={5} />}
              bg="transparent"
              size="sm"
              color="gray.500"
              _focus={{}}
            />
            <IconButton
              aria-label="Report"
              icon={<Icon as={HiOutlineFlag} w={5} h={5} />}
              bg="transparent"
              size="sm"
              color="gray.500"
              _focus={{}}
            />
          </HStack>
          <Text my={1} fontWeight="semibold" as="h4" fontSize="lg" noOfLines={2}>
            {item.title || '___'}
          </Text>
          <HStack alignItems="flex-start">
            <RatingBox value={item.rating} />
          </HStack>
          <Wrap spacing="3" mt={1}>
            <WrapItem>
              <Center>
                <Icon as={HiOutlineClock} mr={1} w={5} h={5} />
                <Text as="span" fontWeight="500">
                  {item.time} phút
                </Text>
              </Center>
            </WrapItem>
            <WrapItem>
              <Center>
                <Icon as={HiOutlineQuestionMarkCircle} mr={1} w={5} h={5} />
                <Text as="span" fontWeight="500">
                  {item.question_num} câu
                </Text>
              </Center>
            </WrapItem>
            <WrapItem>
              <Center>
                <Icon as={HiOutlinePlay} mr={1} w={5} h={5} />
                <Text as="span" fontWeight="500">
                  {item.submitted_num} lượt
                </Text>
              </Center>
            </WrapItem>
          </Wrap>
          <Wrap spacing="2" mt={1}>
            <WrapItem key={item.sub_category?._id}>
              <Link to={`/sub-category/${item.sub_category?._id}`}>
                <Tag size="sm" key={0} variant="solid" color="green.500" bgColor="green.50">
                  <Icon as={HiOutlineTag} mr={1} />
                  {item.sub_category?.name}
                </Tag>
              </Link>
            </WrapItem>
            {item.tags?.map((it) => (
              <WrapItem key={it._id}>
                <Link to={`/tag/${it._id}`}>
                  <Tag size="sm" key={0} variant="solid" color="blue.500" bgColor="blue.50">
                    <Icon as={HiOutlineHashtag} mr={1} />
                    {it.name}
                  </Tag>
                </Link>
              </WrapItem>
            ))}
          </Wrap>
          <HStack mt="3" align="flex-start">
            <Text as="span" color="gray.500" fontWeight="500" fontSize="sm" flex={1}>
              Last modified on{' '}
              {item.updatedAt && format(new Date(item.updatedAt), 'MMM dd, yyyy HH:mm')}
            </Text>
            <PriceChip price={item.price} />
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};
