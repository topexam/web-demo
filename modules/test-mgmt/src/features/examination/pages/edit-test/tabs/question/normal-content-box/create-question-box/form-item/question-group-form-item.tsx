import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { Select } from 'chakra-react-select';
import { useParams } from 'react-router-dom';

import { useQuestionGroupList } from '@/features/examination/api';
import { IPageRouteParams } from '@/types';
import { Controller, useFormContext } from 'react-hook-form';

const QUESTION_GROUP_FORM_ITEM_NAME = 'question_group';

export const QuestionGroupFormItem = () => {
  const { control } = useFormContext();
  const params = useParams<IPageRouteParams>();
  const examinationId = params.slug || null;

  const questionGroupListQuery = useQuestionGroupList({ examinationId });

  const selectOptions = questionGroupListQuery.data?.map((it, idx) => ({
    value: it._id,
    label: it.is_default ? 'Default Group' : `Question Group ${idx.toString().padStart(2, '0')}`,
  }));

  return (
    <Controller
      name={QUESTION_GROUP_FORM_ITEM_NAME}
      control={control}
      render={({ field, fieldState }) => {
        const fieldValue = selectOptions?.find((it) => it.value === field.value);
        const fieldError = fieldState.error;

        return (
          <FormControl id="question_group" isRequired isInvalid={!!fieldError}>
            <FormLabel>Question Group</FormLabel>
            <Select
              placeholder="Select..."
              options={selectOptions}
              value={fieldValue}
              onChange={(it) => field.onChange(it?.value)}
            />
            <FormErrorMessage>{fieldError?.message}</FormErrorMessage>
          </FormControl>
        );
      }}
    />
  );
};
