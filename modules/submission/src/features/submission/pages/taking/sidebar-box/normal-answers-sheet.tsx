import { Box, Text, Wrap, WrapItem } from '@chakra-ui/react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { questionAnswerListAtom } from '../../../states/atoms/question-answer-list.atom';
import { selectedQuestionIndexAtom } from '../../../states/atoms/selected-question.atom';

const NormalAnswersSheet = () => {
  const [selectedQuestionIndex, setSelectedQuestionIndex] =
    useRecoilState(selectedQuestionIndexAtom);
  const questionAnswerList = useRecoilValue(questionAnswerListAtom);

  const _renderAnswerList = () => {
    return questionAnswerList.map((item, index) => {
      const indexPlus = index + 1;
      const isActiveQuestion = indexPlus === selectedQuestionIndex;

      const selectionsStr = item.selections.length ? item.selections.join(', ') : '_';
      return (
        <WrapItem key={item._id}>
          <Box
            key={item._id}
            p={2}
            minW="60px"
            borderWidth={1}
            borderRadius="md"
            borderColor={isActiveQuestion ? 'blue.300' : 'gray.200'}
            cursor="pointer"
            fontWeight="500"
            bgColor={isActiveQuestion ? 'blue.100' : 'transparent'}
            color={isActiveQuestion ? 'blue.500' : 'black.400'}
            onClick={() => setSelectedQuestionIndex(indexPlus)}
          >
            {`${indexPlus}`.padStart(2, '0')}. {selectionsStr}
          </Box>
        </WrapItem>
      );
    });
  };

  return (
    <Box mt={5}>
      <Text fontWeight="500" fontSize="lg">
        Answers Sheet ({questionAnswerList.length})
      </Text>
      <Wrap spacing={2} mt={3}>
        {_renderAnswerList()}
      </Wrap>
    </Box>
  );
};

export default NormalAnswersSheet;
