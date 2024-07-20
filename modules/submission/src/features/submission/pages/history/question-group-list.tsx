import { Box, Center, Divider, SimpleGrid, Text } from '@chakra-ui/react';
import { Fragment } from 'react';
import { useRecoilValue } from 'recoil';
import { IQuestion } from '@topexam/web.lib.foundation';

import { currentSubmissionAtom, questionListByGroupSelector } from '@/features/submission/states';
import { QuestionAnswerDetail } from './question-answer-detail';

const QuestionGroupList = () => {
  const currentSubmission = useRecoilValue(currentSubmissionAtom);
  const questionListByGroup = useRecoilValue(questionListByGroupSelector);

  const _renderQuestionAnswerList = (data: IQuestion[]) => {
    return data.map((it, index) => (
      <QuestionAnswerDetail
        key={it._id}
        item={{
          ...it,
          user_answer: currentSubmission?.user_answers?.[index],
          answer: currentSubmission?.answers?.[index],
          position: index + 1,
        }}
      />
    ));
  };

  const _renderQuestionListByGroup = () => {
    return questionListByGroup.map((it) => (
      <Fragment key={it._id}>
        {it.content ? (
          <Center mr={4}>
            <Box borderWidth="1px" borderRadius="md" p={4} maxW="800px" w="100%" key={it._id}>
              <Text>{it?.content}</Text>
              <Text mt={2} color="gray.400" fontSize="xs" fontWeight="500" fontStyle="italic">
                (Used for question{' '}
                {it.questions
                  .map((_: any, index: number) => `${index + 1}`.padStart(2, '0'))
                  .join(', ')}
                )
              </Text>
            </Box>
          </Center>
        ) : (
          <Center mr={4}>
            <Divider maxW="800px" variant="dashed" />
          </Center>
        )}
        {_renderQuestionAnswerList(it.questions)}
      </Fragment>
    ));
  };

  return (
    <SimpleGrid columns={1} spacing={3}>
      {_renderQuestionListByGroup()}
    </SimpleGrid>
  );
};

export default QuestionGroupList;
