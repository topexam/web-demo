import { useQuestionListByExamination } from '@/features/submission/data';
import { Box, Center, HStack, Text, VStack } from '@chakra-ui/react';
import { produce } from 'immer';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { questionAnswerListAtom, selectedQuestionIndexAtom } from '../../../states';

type Props = {
  examinationId: string | null;
};

const NormalQuestionsBox = ({ examinationId }: Props) => {
  const selectedQuestionIndex = useRecoilValue(selectedQuestionIndexAtom);
  const [questionAnswerList, setQuestionAnswerList] = useRecoilState(questionAnswerListAtom);

  const questionListQuery = useQuestionListByExamination({ examinationId });

  useEffect(() => {
    setQuestionAnswerList(
      questionListQuery.data?.map((item) => ({ ...item, selections: [] })) ?? []
    );
  }, [questionListQuery.data, setQuestionAnswerList]);

  const selectedQuestion = questionAnswerList[selectedQuestionIndex - 1];

  const _handleSelectQuestionOption = (optionTitle: string) => {
    const questionAnswerListUpdated = produce(questionAnswerList, (draftData) => {
      draftData[selectedQuestionIndex - 1].selections = [optionTitle];
    });
    setQuestionAnswerList(questionAnswerListUpdated);
  };

  const _renderQuestionOptionList = () => {
    return selectedQuestion?.options.map((option: any) => {
      const isSelected = selectedQuestion.selections.includes(option.title);

      if (isSelected) {
        return (
          <HStack
            key={option._id}
            align="start"
            cursor="pointer"
            bg="blue.50"
            py={2}
            px={3}
            rounded="md"
            spacing={3}
          >
            <Center
              boxSize="30px"
              rounded="full"
              bg="blue.100"
              fontWeight="500"
              borderWidth="2px"
              borderColor="blue.300"
              color="blue.500"
            >
              {option.title}
            </Center>
            <Text flex={1} dangerouslySetInnerHTML={{ __html: option.content }} />
          </HStack>
        );
      }

      return (
        <HStack
          key={option._id}
          align="start"
          cursor="pointer"
          py={2}
          px={3}
          rounded="md"
          _hover={{ bg: 'gray.50' }}
          spacing={3}
          onClick={() => _handleSelectQuestionOption(option.title)}
        >
          <Center boxSize="30px" rounded="full" bg="gray.100" fontWeight="medium">
            {option.title}
          </Center>
          <Text flex={1} dangerouslySetInnerHTML={{ __html: option.content }} />
        </HStack>
      );
    });
  };

  return (
    <VStack spacing={3} mr={4}>
      {typeof selectedQuestion?.question_group === 'object' &&
        !selectedQuestion?.question_group?.is_default && (
          <Box borderWidth="1px" rounded="md" p={4} maxW="800px" w="100%" bg="white">
            <Text>{selectedQuestion?.question_group?.content}</Text>
          </Box>
        )}
      <Box borderWidth="1px" rounded="md" p={4} maxW="800px" w="100%" bg="white">
        <Text fontWeight="semibold">Question {`${selectedQuestionIndex}`.padStart(2, '0')}</Text>
        <Text dangerouslySetInnerHTML={{ __html: selectedQuestion?.title }} mt={2} />
        <Box mt={3}>{_renderQuestionOptionList()}</Box>
      </Box>
    </VStack>
  );
};

export default NormalQuestionsBox;
