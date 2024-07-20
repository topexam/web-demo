import { Box } from '@chakra-ui/react';
import { IQuestionWithAnswer } from '@topexam/web.lib.foundation';

type Props = {
  item: IQuestionWithAnswer;
  index: number;
};

const AnswerBoxItem = ({ index, item }: Props) => {
  return (
    <Box
      key={index}
      borderWidth="1px"
      borderRadius="md"
      p={2}
      color="green.500"
      bg="green.50"
      borderColor="green.300"
      fontWeight="500"
    >
      {`${index}`.padStart(2, '0')}. <strong>{item.answers.options?.join(', ') || '_ _'}</strong>
    </Box>
  );
};

export default AnswerBoxItem;
