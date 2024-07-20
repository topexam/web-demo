import { Box, Center, HStack, Text, VStack } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { produce } from 'immer';

import { questionAnswerListAtom } from '../../../states';

const PDFAnswersSheet = () => {
  const [questionAnswerList, setQuestionAnswerList] = useRecoilState(questionAnswerListAtom);

  const _handleSelectQuestionOption = (questionPosition: number, optionTitle: string) => {
    const questionAnswerListUpdated = produce(questionAnswerList, (draftData) => {
      draftData[questionPosition - 1].selections = [optionTitle];
    });
    setQuestionAnswerList(questionAnswerListUpdated);
  };

  const _renderAnswerList = () => {
    return questionAnswerList.map((item, index) => {
      const position = index + 1;

      return (
        <HStack key={item._id} w="full">
          <Center boxSize="36px" fontWeight="semibold" fontSize="lg">
            {`${position}`.padStart(2, '0')}.
          </Center>
          <Box />
          {item.options.map((it) => {
            const isSelected = item.selections.includes(it.title);
            const [fontWeight, bgColor, textColor, borderColor, hoverColor] = !isSelected
              ? ['normal', 'gray.50', 'gray.600', 'gray.300', 'gray.100']
              : ['semibold', 'blue.100', 'blue.500', 'blue.300', 'blue.100'];

            return (
              <Center
                key={it.title}
                boxSize="36px"
                rounded="full"
                borderWidth={1}
                cursor="pointer"
                bg={bgColor}
                color={textColor}
                borderColor={borderColor}
                fontWeight={fontWeight}
                _hover={{ bg: hoverColor }}
                onClick={() => _handleSelectQuestionOption(position, it.title)}
              >
                {it.title}
              </Center>
            );
          })}
        </HStack>
      );
    });
  };

  return (
    <Box mt={5}>
      <Text fontWeight="500" fontSize="lg">
        Answers Sheet ({questionAnswerList.length})
      </Text>
      <VStack mt={3}>{_renderAnswerList()}</VStack>
    </Box>
  );
};

export default PDFAnswersSheet;
