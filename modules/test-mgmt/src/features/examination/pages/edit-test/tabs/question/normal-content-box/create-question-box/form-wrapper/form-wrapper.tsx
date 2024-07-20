import { Box } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

import QuestionForm from './question-form';

export const FormWrapper = () => {
  const { watch } = useFormContext();
  const questionTypeValue = watch('question_type');

  return <Box my={4}>{questionTypeValue === 'question' ? <QuestionForm /> : null}</Box>;
};
