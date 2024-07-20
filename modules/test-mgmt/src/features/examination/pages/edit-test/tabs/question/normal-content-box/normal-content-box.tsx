import { useEffect, useMemo } from 'react';
import { Center, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { IPageRouteParams } from '@/types';
import { useQuestionGroupList, useQuestionListWithAnswer } from '@/features/examination';
import { questionAnswerListAtom } from '@/features/examination/atoms';
import { CreateQuestionBox } from './create-question-box';
import { DefaultQuestionGroupItem } from './default-question-group-item';
import { QuestionGroupItem } from './question-group-item';

export const NormalContentBox = () => {
  const params = useParams<IPageRouteParams>();
  const examinationId = params.slug || null;

  const setQuestionAnswerList = useSetRecoilState(questionAnswerListAtom);
  const questionGroupListQuery = useQuestionGroupList({ examinationId });
  const questionListWithAnswerQuery = useQuestionListWithAnswer({ examinationId });

  const questionGroupCombineListData = useMemo(() => {
    if (!questionGroupListQuery.data?.length || !questionListWithAnswerQuery.data?.length)
      return [];
    return questionGroupListQuery.data.map((groupItem) => {
      return {
        ...groupItem,
        questions: questionListWithAnswerQuery.data?.filter(
          (item) => item.question_group_id === groupItem._id
        ),
      };
    });
  }, [questionGroupListQuery.data, questionListWithAnswerQuery.data]);

  useEffect(() => {
    if (questionListWithAnswerQuery.data) {
      setQuestionAnswerList(questionListWithAnswerQuery.data?.map((it) => it._id));
    }
  }, [questionListWithAnswerQuery.data, setQuestionAnswerList]);

  const _renderQuestionGroupList = () => {
    if (questionGroupListQuery.isLoading || questionListWithAnswerQuery.isLoading) {
      return (
        <Center>
          <Spinner size="lg" />
          <Text color="gray.500">Loading Question...</Text>
        </Center>
      );
    }

    return questionGroupCombineListData?.map((item) =>
      !item.is_default ? (
        <QuestionGroupItem key={item._id} item={item} />
      ) : (
        <DefaultQuestionGroupItem key={item._id} item={item} />
      )
    );
  };

  const lastQuestion =
    questionListWithAnswerQuery.data?.[questionListWithAnswerQuery.data.length - 1];
  return (
    <SimpleGrid spacing={3} flex={1} w="100%">
      {_renderQuestionGroupList()}
      <CreateQuestionBox prevQuestion={lastQuestion} />
    </SimpleGrid>
  );
};
