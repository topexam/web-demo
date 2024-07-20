import { FormControl, FormErrorMessage } from '@chakra-ui/react';
import { WebEditor } from 'chakra-tiptap-editor';
import { Controller, useFormContext } from 'react-hook-form';

const QUESTION_CONTENT_FORM_ITEM_NAME = 'title';

export const QuestionContentFormItem = () => {
  const { control } = useFormContext();
  return (
    <Controller
      name={QUESTION_CONTENT_FORM_ITEM_NAME}
      control={control}
      render={({ field, fieldState }) => {
        const fieldValue = field.value;
        const fieldError = fieldState.error;

        return (
          <FormControl id={QUESTION_CONTENT_FORM_ITEM_NAME} isInvalid={!!fieldError} mt={3}>
            <WebEditor value={{ html: fieldValue }} onChange={(val) => field.onChange(val.html)} />
            <FormErrorMessage>{fieldError?.message}</FormErrorMessage>
          </FormControl>
        );
      }}
    />
  );
};
