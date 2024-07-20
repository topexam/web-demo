import { Box, FormControl, Text } from '@chakra-ui/react';
import { Controller, useFormContext } from 'react-hook-form';
import { WebEditor } from 'chakra-tiptap-editor';

export const QUESTION_ANSWER_FORM_ITEM_NAME = 'answers';

export const QuestionAnswerFormItem = () => {
  const { control, getValues } = useFormContext();

  return (
    <Controller
      name={QUESTION_ANSWER_FORM_ITEM_NAME}
      control={control}
      render={({ field }) => {
        const fieldValue = field.value;
        return (
          <FormControl id={QUESTION_ANSWER_FORM_ITEM_NAME}>
            <Box>
              <Text>
                Answer:{' '}
                <Text as="span" fontWeight="500" color="green.500">
                  {fieldValue?.options?.join(' ')}
                </Text>
              </Text>
              <Box mt={2}>
                <WebEditor
                  value={{ html: fieldValue?.explain }}
                  onChange={(val) => {
                    const fieldValueData = getValues(QUESTION_ANSWER_FORM_ITEM_NAME);
                    field.onChange({ ...fieldValueData, explain: val.html });
                  }}
                />
              </Box>
            </Box>
          </FormControl>
        );
      }}
    />
  );
};
