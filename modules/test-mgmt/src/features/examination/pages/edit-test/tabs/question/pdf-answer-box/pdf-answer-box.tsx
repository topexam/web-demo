import { Box, Center, Divider, HStack, SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

import { IPageRouteParams } from '@/types';
import { useFileQuestionListWithAnswer } from '@/features/examination';
import AnswerBoxItem from './answer-item';
import { ManageAnswerBox } from './manage-answer-box';

export const PDFAnswerBox = () => {
  const params = useParams<IPageRouteParams>();
  const examinationId = params.slug || null;
  const fileQuestionListQuery = useFileQuestionListWithAnswer({ examinationId });

  const _renderAnswerList = () => {
    if (fileQuestionListQuery.isLoading) {
      return (
        <>
          <Skeleton height="24px" />
          <Skeleton height="24px" />
          <Skeleton height="24px" />
        </>
      );
    }

    const fileQuestionList = fileQuestionListQuery.data;
    if (!fileQuestionList?.length) {
      return (
        <Center>
          <Text>Empty Data!</Text>
        </Center>
      );
    }

    return fileQuestionList.map((it, idx) => <AnswerBoxItem item={it} index={idx + 1} />);
  };

  return (
    <Box maxW={{ base: 'full', lg: '350px' }} w="full">
      <Box borderWidth="1px" rounded="md">
        <HStack px={4} py={3}>
          <Text fontWeight="semibold" flex={1}>
            Answer Sheet
          </Text>
          <ManageAnswerBox />
        </HStack>
        <Divider />
        <SimpleGrid columns={3} p={4} spacing={2}>
          {_renderAnswerList()}
        </SimpleGrid>
      </Box>
    </Box>
  );
};
