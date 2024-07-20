import { Box, Text, Textarea } from '@chakra-ui/react';
import { IQuestionGroupWithQuestion } from '@topexam/web.lib.foundation';

import { QuestionItem } from './question-item';

type Props = {
  item: IQuestionGroupWithQuestion;
};

export const QuestionGroupItem = ({ item }: Props) => {
  return (
    <Box borderRadius="md" borderWidth="1px">
      <Box p={3}>
        <Text fontSize="lg" fontWeight="500">
          #Group Question 1
        </Text>
        <Textarea placeholder="Enter content" mt={2} />
      </Box>
      {item.questions?.map((it, index) => (
        <QuestionItem hasBorder={false} item={it} index={index} />
      ))}
    </Box>
  );
};
