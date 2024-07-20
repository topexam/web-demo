import {
  Avatar,
  Box,
  Center,
  Flex,
  Icon,
  Tag,
  Tooltip,
  Wrap,
  WrapItem,
  Text,
  HStack,
  Spacer,
} from '@chakra-ui/react';
import {
  RiPlayCircleFill,
  RiQuestionFill,
  RiStarSmileFill,
  RiTimeFill,
  RiVerifiedBadgeFill,
} from 'react-icons/ri';
import {
  genSlugParam,
  getFullNameFromData,
  useExternalNavigate,
  useIdFromSlug,
} from '@topexam/web.lib.util';
import { RatingBox, SubCategoryChip, TagChip } from '@topexam/web.lib.component';

import { useExaminationItem } from '@/features/examination/data';

import { PlayTestDialog } from './play-test.dialog';
import { ViewHistoryModal } from './view-history.modal';
import { DetailSectionShimmer } from './shimmer';

export const DetailSection = () => {
  const examinationId = useIdFromSlug();
  const externalNavigate = useExternalNavigate();
  const examinationItemQuery = useExaminationItem({ examinationId });

  if (examinationItemQuery.isLoading) {
    return <DetailSectionShimmer />;
  }

  const examinationItem = examinationItemQuery.data;

  return (
    <Box borderWidth={1} rounded="md" p={4} bg="white">
      <Wrap spacing={2}>
        <WrapItem key={examinationItem?.sub_category?._id}>
          <SubCategoryChip
            label={examinationItem?.sub_category?.name ?? 'unknown'}
            onClick={() => {
              externalNavigate?.(
                `/sub-category/${genSlugParam(
                  examinationItem?.sub_category?.name ?? '',
                  examinationItem?.sub_category_id ?? ''
                )}`
              );
            }}
          />
        </WrapItem>
        {examinationItem?.tags?.map((item) => (
          <WrapItem key={item._id}>
            <TagChip
              label={item.name ?? 'unknown'}
              onClick={() => {
                externalNavigate?.(`/tag/${genSlugParam(item.name ?? '', item._id ?? '')}`);
              }}
            />
          </WrapItem>
        ))}
      </Wrap>
      <Text fontWeight="semibold" as="h4" fontSize="lg" lineHeight="tight" mt="2">
        {examinationItem?.title || '--'}
      </Text>
      <Box mt={1}>
        <RatingBox value={examinationItem?.rating} count={examinationItem?.review_num} />
      </Box>
      <Flex align="center" my="2">
        <Avatar
          size="xs"
          name={
            getFullNameFromData({
              first_name: examinationItem?.author?.first_name,
              last_name: examinationItem?.author?.last_name,
              middle_name: examinationItem?.author?.middle_name,
            }) || 'unknown'
          }
          src={examinationItem?.author?.avatar}
        />
        <Text fontSize="md" mx={2} noOfLines={1} fontWeight="medium">
          {getFullNameFromData({
            first_name: examinationItem?.author?.first_name,
            last_name: examinationItem?.author?.last_name,
            middle_name: examinationItem?.author?.middle_name,
          }) || 'unknown'}
        </Text>
        {examinationItem?.author?.extra_data?.verified && (
          <Tooltip label="Verified" colorScheme="green" shouldWrapChildren placement="top-start">
            <Icon as={RiVerifiedBadgeFill} color="green.500" boxSize={5} mr={2} />
          </Tooltip>
        )}
        <Text fontSize="sm" noOfLines={1} color="gray.500">
          @{examinationItem?.author?.username}
        </Text>
      </Flex>
      <Wrap spacing="3">
        <WrapItem>
          <Center>
            <Icon as={RiTimeFill} mr="2" />
            <Text as="span">{examinationItem?.time ?? '--'} minutes</Text>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center>
            <Icon as={RiQuestionFill} mr="2" />
            <Text as="span">{examinationItem?.question_num ?? '--'} questions</Text>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center>
            <Icon as={RiPlayCircleFill} mr="2" />
            <Text as="span">{examinationItem?.submitted_num ?? '--'} submissions</Text>
          </Center>
        </WrapItem>
      </Wrap>
      <Text color="gray.600" fontSize="md" mt={2}>
        {examinationItem?.description}
      </Text>
      <HStack mt={4}>
        {examinationItem?.price ? (
          <Tag colorScheme="yellow">
            <Icon as={RiStarSmileFill} color="yellow.500" mr={1} />
            <Text as="span" color="yellow.500" fontWeight="medium">
              {examinationItem.price}
            </Text>
          </Tag>
        ) : (
          <Tag colorScheme="green">
            <Text as="span" color="green.500" fontWeight="medium" fontSize="sm">
              Free
            </Text>
          </Tag>
        )}
        <Spacer />
        <ViewHistoryModal />
        <PlayTestDialog />
      </HStack>
    </Box>
  );
};
