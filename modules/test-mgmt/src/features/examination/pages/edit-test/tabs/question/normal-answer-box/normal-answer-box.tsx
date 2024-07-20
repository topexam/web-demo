import { Box, Center, Divider, SimpleGrid, Text } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';

import { questionAnswerListAtom } from '@/features/examination';
import AnswerBoxItem from './answer-item';

export const NormalAnswerBox = () => {
  const questionAnswerList = useRecoilValue(questionAnswerListAtom);

  const _renderAnswerList = () => {
    if (!questionAnswerList?.length) {
      return (
        <Center>
          <Text>Empty Data!</Text>
        </Center>
      );
    }

    return questionAnswerList?.map((ans, index) => {
      return <AnswerBoxItem key={ans} questionId={ans} index={index + 1} />;
    });
  };

  return (
    <Box maxW={{ base: 'full', lg: '350px' }} w="full">
      <Box borderWidth="1px" rounded="md">
        <Text px={4} py={3} fontWeight="medium">
          Answer Sheet
        </Text>
        <Divider />
        <SimpleGrid columns={3} px={4} py={3} spacing={2}>
          {_renderAnswerList()}
        </SimpleGrid>
      </Box>
    </Box>
  );
};
