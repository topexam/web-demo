import { Box } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';

import { questionAnswerItemAtomFamily } from '../../../../../atoms';

type Props = {
  questionId: string;
  index: number;
};

const AnswerBoxItem = ({ questionId, index }: Props) => {
  const questionAnswerItem = useRecoilValue(questionAnswerItemAtomFamily(questionId));
  if (!questionAnswerItem) return null;

  const [color, bgColor, borderColor] = questionAnswerItem?.options?.length
    ? ['green.500', 'green.50', 'green.300']
    : ['red.500', 'red.50', 'red.300'];
  return (
    <Box
      key={questionAnswerItem.question_id}
      borderWidth="1px"
      borderRadius="md"
      p={2}
      color={color}
      bg={bgColor}
      borderColor={borderColor}
      fontWeight="500"
    >
      {`${index}`.padStart(2, '0')}. {questionAnswerItem.options?.join(', ') || '___'}
    </Box>
  );
};

export default AnswerBoxItem;
