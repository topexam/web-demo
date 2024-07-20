import { Box, Text } from '@chakra-ui/react';

type Props = {
  status: 'opened' | 'current' | 'normal';
};

const genColorTuple = (status: 'opened' | 'current' | 'normal') => {
  if (status === 'opened') {
    return ['blue.50', 'blue.500', 'blue.300'];
  }

  if (status === 'current') {
    return ['green.50', 'green.500', 'green.300'];
  }

  return ['gray.50', 'gray.500', 'gray.300'];
};

const RealtimeQuestionItem: React.FC<Props> = ({ status }) => {
  const [bgColor, color, borderColor] = genColorTuple(status);
  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      p={3}
      bg={bgColor}
      color={color}
      borderColor={borderColor}
    >
      <Text>Question 1. A</Text>
    </Box>
  );
};

export default RealtimeQuestionItem;
